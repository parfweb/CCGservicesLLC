const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const csvWriter = require('csv-writer').createObjectCsvWriter;
const csvParser = require('csv-parser');
const fs = require('fs');
const path = require('path');

puppeteer.use(StealthPlugin());

// --- EMAIL VALIDATION ---
// Filters out garbage emails scraped from websites
function isValidEmail(email) {
    if (!email || typeof email !== 'string') return false;

    email = email.toLowerCase().trim();

    // Basic format check
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) return false;

    // Blacklisted patterns (package names, placeholders, etc.)
    const blacklistPatterns = [
        /^ol-/,              // ol-mapbox-style@...
        /^@/,                // @something
        /@\d+\.\d+/,         // version numbers like @13.0.1
        /example\.com$/,
        /test\.com$/,
        /localhost/,
        /\.png$/,
        /\.jpg$/,
        /\.gif$/,
        /\.svg$/,
        /\.webp$/,
        /\.css$/,
        /\.js$/,
        /placeholder/,
        /noreply/,
        /no-reply/,
        /donotreply/,
        /mailer-daemon/,
        /postmaster/,
        /^admin@/,
        /^info@.*font/i,     // Font foundry emails
        /^support@wix/,
        /^support@godaddy/,
        /^support@squarespace/,
        /myftpupload\.com/,  // GoDaddy temp domains
        /wpengine\.com/,
        /sentry\.io/,
    ];

    for (const pattern of blacklistPatterns) {
        if (pattern.test(email)) return false;
    }

    // Suspicious domain patterns
    const suspiciousDomains = [
        'wix.com',
        'godaddy.com',
        'squarespace.com',
        'wordpress.com',
        'google.com',
        'gmail.com',  // Generic, not business
        'yahoo.com',
        'hotmail.com',
        'outlook.com',
        'indiantypefoundry.com', // Font foundry
        'fontawesome.com',
        'googleapis.com',
    ];

    const domain = email.split('@')[1];
    if (suspiciousDomains.includes(domain)) return false;

    // Length checks
    if (email.length < 6 || email.length > 50) return false;

    // Must have reasonable local part
    const localPart = email.split('@')[0];
    if (localPart.length < 2) return false;

    // Check for version-like patterns (e.g., "package@1.2.3")
    if (/^\d+\.\d+/.test(domain)) return false;

    return true;
}

// --- CONFIG ---
const DB_FILE = 'leads_db.csv';
const INPUT_ARG = process.argv[2] || 'Plumbers'; // e.g. "Plumbers"
const SEARCH_MODE = process.argv[3] || 'NY';
const MIN_RATING = parseFloat(process.argv[4]) || 3.0; // Default 3.0 if not specified

// Auto-expand queries
let TARGET_QUERIES = [];
if (SEARCH_MODE === 'NY') {
    TARGET_QUERIES = [
        `${INPUT_ARG} Brooklyn`,
        `${INPUT_ARG} Queens`,
        `${INPUT_ARG} Staten Island`,
        `${INPUT_ARG} Manhattan`,
        `${INPUT_ARG} Bronx`
    ];
} else {
    TARGET_QUERIES = [INPUT_ARG];
}

const MAX_LEADS_PER_QUERY = 45;

const SELECTORS = {
    feed: 'div[role="feed"]',
    article: 'div[role="article"]',
};

// --- DATABASE FUNCTIONS ---
async function loadDatabase() {
    return new Promise((resolve) => {
        let leads = [];
        if (!fs.existsSync(path.join(__dirname, DB_FILE))) {
            resolve([]);
            return;
        }

        fs.createReadStream(path.join(__dirname, DB_FILE))
            .pipe(csvParser())
            .on('data', (row) => {
                // BACKFILL INDUSTRY IF MISSING
                if (!row.industry) {
                    const n = (row['Business Name'] || row.name || '').toLowerCase();
                    if (n.includes('plumb') || n.includes('drain') || n.includes('sewer') || n.includes('water')) {
                        row.industry = 'Plumbers';
                    } else if (n.includes('electr') || n.includes('wire') || n.includes('volt') || n.includes('light')) {
                        row.industry = 'Electricians';
                    } else {
                        row.industry = 'Service Pro';
                    }
                }
                leads.push(row);
            })
            .on('end', () => resolve(leads));
    });
}

async function run() {
    console.log(`\n🤖 Starting Lead Sniper V6 (Category: ${INPUT_ARG})`);

    // 1. Load Memory
    let existingLeads = await loadDatabase();
    console.log(`🧠 Loaded ${existingLeads.length} existing leads.`);

    const knownPhones = new Set(existingLeads.map(l => (l.Phone || l.phone) ? (l.Phone || l.phone).trim() : ''));
    const knownNames = new Set(existingLeads.map(l => (l['Business Name'] || l.name)));

    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
        defaultViewport: null
    });

    const page = await browser.newPage();
    let newLeads = [];

    // --- SEARCH LOOP ---
    for (const query of TARGET_QUERIES) {
        console.log(`\n🔍 SCANNING: "${query}" (Rating 3.0+)...`);

        await page.goto('https://www.google.com/maps?hl=en', { waitUntil: 'networkidle2' });

        try {
            await page.waitForSelector('input#searchboxinput', { timeout: 8000 });
            await page.evaluate(() => document.querySelector('input#searchboxinput').value = '');
            await page.type('input#searchboxinput', query);
            await page.keyboard.press('Enter');
        } catch (e) {
            const input = await page.$('input[name="q"]');
            if (input) { await input.evaluate(i => i.value = ''); await input.type(query); await page.keyboard.press('Enter'); }
        }

        try { await page.waitForSelector(SELECTORS.feed, { timeout: 10000 }); }
        catch (e) { console.log(`   X Feed not found.`); continue; }

        let previousCount = 0;
        for (let i = 0; i < 35; i++) {
            await page.evaluate((selector) => {
                const el = document.querySelector(selector);
                if (el) el.scrollTop = el.scrollHeight;
            }, SELECTORS.feed);
            await new Promise(r => setTimeout(r, 1000));
            const items = await page.$$(SELECTORS.article);
            if (items.length >= MAX_LEADS_PER_QUERY) break;
            if (items.length === previousCount && i > 8) break;
            previousCount = items.length;
        }

        const listItems = await page.$$(SELECTORS.article);
        console.log(`   Found ${listItems.length} items. Applying Filters...`);

        for (let i = 0; i < listItems.length; i++) {
            const currentItems = await page.$$(SELECTORS.article);
            const item = currentItems[i];
            if (!item) continue;

            const nameText = await item.evaluate(el => el.querySelector('.fontHeadlineSmall')?.innerText || el.innerText.split('\n')[0]);

            if (knownNames.has(nameText)) continue;

            try {
                await item.click();
                await new Promise(r => setTimeout(r, 1000));
            } catch (e) { continue; }

            const data = await page.evaluate(() => {
                const clean = (s) => s ? s.replace(/Phone: |Website: |Address: /g, '').trim() : '';
                const name = document.querySelector('h1.DUwDvf')?.innerText || '';
                const rating = parseFloat(document.querySelector('span.MW4etd')?.innerText || '0');
                const reviewCountStr = document.querySelector('span.UY7F9')?.innerText || '';
                const reviews = parseInt(reviewCountStr.replace(/\D/g, '')) || 0;

                const buttons = Array.from(document.querySelectorAll('button[data-item-id], a[data-item-id]'));
                const websiteBtn = buttons.find(b => b.getAttribute('data-item-id') === 'authority');
                const website = websiteBtn ? websiteBtn.href : '';

                const phoneBtn = buttons.find(b => b.getAttribute('data-item-id')?.includes('phone'));
                let phone = phoneBtn ? (clean(phoneBtn.getAttribute('aria-label')) || phoneBtn.innerText) : '';

                const addressBtn = buttons.find(b => b.getAttribute('data-item-id') === 'address');
                const address = addressBtn ? (clean(addressBtn.getAttribute('aria-label')) || addressBtn.innerText) : '';

                const claimBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Claim this business'));
                const isClaimed = !claimBtn;

                return { name, rating, reviews, website, phone, address, isClaimed };
            });

            // --- FILTER CHANGE: Configurable ---
            if (data.rating > 0 && data.rating < MIN_RATING) continue;
            if (data.reviews > 0 && data.reviews < 3) continue;

            if (data.phone && knownPhones.has(data.phone.trim())) continue;

            console.log(`   + [New 3.0+] ${data.name}`);

            let lead = {
                industry: INPUT_ARG, // "Plumbers" or "Electricians"
                priority: 'Low',
                name: data.name,
                phone: data.phone,
                auditNotes: '',
                status: 'Has Website',
                isClaimed: data.isClaimed,
                techStack: '',
                email: '',
                socials: '',
                address: data.address,
                website: data.website,
                rating: data.rating,
                reviews: data.reviews
            };

            // AUDIT
            if (!lead.isClaimed) {
                lead.priority = 'GOLD';
                lead.auditNotes += "⚠️ UNCLAIMED. ";
            }
            if (!lead.website) {
                lead.status = "NO WEBSITE";
                lead.priority = 'GOLD';
                lead.auditNotes += "No specific digital presence. ";
            } else {
                try {
                    const auditPage = await browser.newPage();
                    await auditPage.setDefaultNavigationTimeout(8000);
                    let resp;
                    try { resp = await auditPage.goto(lead.website, { waitUntil: 'domcontentloaded' }); } catch (e) { }

                    if (!resp || !resp.ok()) {
                        lead.status = "BROKEN SITE";
                        if (lead.priority !== 'GOLD') lead.priority = 'SILVER';
                    } else {
                        const content = await auditPage.content();
                        const lower = content.toLowerCase();

                        let tech = [];
                        if (lower.includes('wp-content')) tech.push('WordPress');
                        if (lower.includes('wix.com')) tech.push('Wix');
                        if (lower.includes('squarespace')) tech.push('Squarespace');
                        if (lower.includes('godaddy')) tech.push('GoDaddy');
                        lead.techStack = tech.join(', ');

                        if (tech.some(t => ['Wix', 'GoDaddy'].includes(t))) {
                            lead.auditNotes += `Using ${tech[0]}. `;
                            if (lead.priority === 'Low') lead.priority = 'BRONZE';
                        }

                        const emails = content.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
                        if (emails) {
                            // Use validator to filter garbage emails
                            const validEmails = [...new Set(emails)].filter(e => isValidEmail(e));
                            lead.email = validEmails[0] || '';
                            if (emails.length > 0 && validEmails.length === 0) {
                                console.log(`      ⚠️ Rejected bad email: ${emails[0]}`);
                            }
                        }

                        let socials = [];
                        if (lower.includes('facebook.com')) socials.push('FB');
                        if (lower.includes('instagram.com')) socials.push('IG');
                        if (lower.includes('linkedin.com')) socials.push('IN');
                        lead.socials = socials.join(', ');

                        if (!content.includes('name="viewport"')) {
                            lead.status = "NOT MOBILE";
                            if (lead.priority === 'Low') lead.priority = 'BRONZE';
                        } else {
                            if (lead.priority === 'Low') lead.status = "Active";
                        }
                    }
                    await auditPage.close();
                } catch (e) { }
            }

            newLeads.push(lead);
            knownNames.add(lead.name);
            if (lead.phone) knownPhones.add(lead.phone.trim());
        }
    }

    await browser.close();

    const finalLeads = [...existingLeads, ...newLeads];

    // Sort
    const valueMap = { 'GOLD': 3, 'SILVER': 2, 'BRONZE': 1, 'Low': 0 };
    finalLeads.sort((a, b) => {
        const pA = a.priority || a.PRIORITY || 'Low';
        const pB = b.priority || b.PRIORITY || 'Low';
        return valueMap[pB] - valueMap[pA];
    });

    const writer = csvWriter({
        path: path.join(__dirname, DB_FILE),
        header: [
            { id: 'industry', title: 'Industry' },
            { id: 'priority', title: 'PRIORITY' },
            { id: 'name', title: 'Business Name' },
            { id: 'phone', title: 'Phone' },
            { id: 'auditNotes', title: 'Notes' },
            { id: 'status', title: 'Web Status' },
            { id: 'isClaimed', title: 'Claimed?' },
            { id: 'techStack', title: 'Tech Stack' },
            { id: 'email', title: 'Email' },
            { id: 'socials', title: 'Socials' },
            { id: 'address', title: 'Address' },
            { id: 'rating', title: 'Rating' },
            { id: 'website', title: 'Website' }
        ]
    });

    // Normalize logic handling old keys
    const normalized = finalLeads.map(l => ({
        industry: l.industry || l.Industry || 'Service Pro',
        priority: l.priority || l.PRIORITY,
        name: l.name || l['Business Name'],
        phone: l.phone || l.Phone,
        auditNotes: l.auditNotes || l['Sales Intel / Notes'] || l.Notes,
        status: l.status || l['Web Status'] || l['Tech Status'],
        isClaimed: l.isClaimed || l['Claimed?'],
        techStack: l.techStack || l['Tech Stack'],
        email: l.email || l.Email,
        socials: l.socials || l.Socials,
        address: l.address || l.Address,
        rating: l.rating || l.Rating,
        website: l.website || l.Website
    }));

    await writer.writeRecords(normalized);

    console.log(`\n💾 DATABASE UPDATED: ${DB_FILE}`);
    console.log(`   Old Leads: ${existingLeads.length}`);
    console.log(`   New Leads (3.0+): ${newLeads.length}`);
    console.log(`   Total Leads: ${normalized.length}`);
}

run();
