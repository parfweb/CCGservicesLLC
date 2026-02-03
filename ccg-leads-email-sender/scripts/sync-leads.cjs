/**
 * Lead Sync Script
 * Loads BRONZE leads from leads_db.csv, excluding already-sent emails
 * 
 * Usage: npm run sync-leads
 */

const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

// Paths
const LEADS_DB = path.join(__dirname, '../../ccg-leads-scalping/leads_db.csv');
const SENT_LOG = path.join(__dirname, '../src/data/sent_log.json');
const OUTPUT = path.join(__dirname, '../src/data/selected_leads.json');

// Which priority to load (BRONZE, Low, SILVER, GOLD, or ALL for BRONZE+Low)
const TARGET_PRIORITY = process.argv[2] || 'ALL';

// If "ALL", load both BRONZE and Low
const PRIORITY_LIST = TARGET_PRIORITY === 'ALL' ? ['BRONZE', 'Low'] : [TARGET_PRIORITY];

// --- EMAIL VALIDATION ---
// Same validation as in the scraper - filters garbage emails
function isValidEmail(email) {
    if (!email || typeof email !== 'string') return false;

    email = email.toLowerCase().trim();

    // Basic format check
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) return false;

    // Blacklisted patterns (package names, placeholders, etc.)
    const blacklistPatterns = [
        /^ol-/,              // ol-mapbox-style@...
        /^intl-/,            // intl-segmenter@...
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
        /^info@.*font/i,
        /^support@wix/,
        /^support@godaddy/,
        /^support@squarespace/,
        /myftpupload\.com/,
        /wpengine\.com/,
        /sentry\.io/,
        // Placeholders and generics
        /@domain\.com/,
        /@email\.com/,
        /@company\.com/,
        /@example\.com/,
        /^user@/,
        /^name@/,
        /^username@/,
        /^firstname@/,
        /^lastname@/,
        /^email@/
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
        'gmail.com',
        'yahoo.com',
        'hotmail.com',
        'outlook.com',
        'indiantypefoundry.com',
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

async function loadSentEmails() {
    try {
        if (fs.existsSync(SENT_LOG)) {
            const data = JSON.parse(fs.readFileSync(SENT_LOG, 'utf8'));
            return new Set(data.emails || []);
        }
    } catch (e) {
        console.log('No sent log found, starting fresh.');
    }
    return new Set();
}

async function loadLeadsFromCSV() {
    return new Promise((resolve, reject) => {
        const leads = [];

        if (!fs.existsSync(LEADS_DB)) {
            reject(new Error(`leads_db.csv not found at: ${LEADS_DB}`));
            return;
        }

        fs.createReadStream(LEADS_DB)
            .pipe(csvParser())
            .on('data', (row) => {
                // Normalize field names (CSV uses different casing)
                const lead = {
                    businessName: row['Business Name'] || row.name || '',
                    phone: row.Phone || row.phone || '',
                    email: row.Email || row.email || '',
                    website: row.Website || row.website || '',
                    status: row['Web Status'] || row.status || '',
                    priority: row.PRIORITY || row.priority || 'Low',
                    techStack: row['Tech Stack'] || row.techStack || '',
                    auditNotes: row.Notes || row.auditNotes || '',
                    industry: row.Industry || row.industry || 'Service Pro',
                    address: row.Address || row.address || '',
                    rating: row.Rating || row.rating || '',
                    socials: row.Socials || row.socials || ''
                };
                leads.push(lead);
            })
            .on('end', () => resolve(leads))
            .on('error', reject);
    });
}

async function main() {
    console.log(`\n🔄 Lead Sync - Loading ${TARGET_PRIORITY} leads...\n`);

    // Load sent emails
    const sentEmails = await loadSentEmails();
    console.log(`📋 Already sent: ${sentEmails.size} emails`);

    // Load all leads
    const allLeads = await loadLeadsFromCSV();
    console.log(`📂 Total leads in DB: ${allLeads.length}`);

    let rejectedEmails = 0;

    // Filter by priority, email validation, and exclude sent
    const filtered = allLeads.filter(lead => {
        // Must match one of the target priorities
        if (!PRIORITY_LIST.includes(lead.priority)) return false;

        // Must have email
        if (!lead.email || lead.email.trim() === '') return false;

        // Must pass email validation
        if (!isValidEmail(lead.email)) {
            rejectedEmails++;
            return false;
        }

        // Must not be already sent
        if (sentEmails.has(lead.email.toLowerCase())) return false;

        return true;
    });

    console.log(`⚠️  Rejected ${rejectedEmails} garbage emails`);
    console.log(`✅ ${TARGET_PRIORITY} leads with valid, unsent emails: ${filtered.length}`);

    // Save to output
    fs.writeFileSync(OUTPUT, JSON.stringify(filtered, null, 2));
    console.log(`\n💾 Saved to: ${OUTPUT}`);
    console.log(`\n🚀 Run 'npm run dev' to start sending!\n`);
}

main().catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
});
