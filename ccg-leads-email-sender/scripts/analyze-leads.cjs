const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DATA_FILE = path.join(__dirname, '../src/data/selected_leads.json');
const AUDIT_DIR = path.join(__dirname, '../public/audits');

if (!fs.existsSync(AUDIT_DIR)) {
    fs.mkdirSync(AUDIT_DIR, { recursive: true });
}

async function analyze() {
    console.log("🚀 Starting Lead Analysis...");

    if (!fs.existsSync(DATA_FILE)) {
        console.error("❌ No selected_leads.json found. Run 'npm run sync-leads' first.");
        process.exit(1);
    }

    const leads = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    const browser = await puppeteer.launch({ headless: "new" });

    let updatedCount = 0;

    for (let i = 0; i < leads.length; i++) {
        const lead = leads[i];

        // Skip if already analyzed or no website
        if (lead.analysis || !lead.website) continue;

        console.log(`[${i + 1}/${leads.length}] Analyzing: ${lead.businessName} (${lead.website})`);

        const page = await browser.newPage();
        await page.setViewport({ width: 1366, height: 768 });

        // Strip tracking
        const cleanUrl = lead.website.split('?')[0];

        const start = Date.now();
        let status = "ONLINE";
        let headers = {};
        let pageTitle = "";
        let linkCount = 0;
        let pdfPath = "";
        let screenshotPath = "";

        try {
            const response = await page.goto(cleanUrl, { waitUntil: 'networkidle2', timeout: 30000 });
            headers = response.headers();
            pageTitle = await page.title();
            linkCount = await page.evaluate(() => document.querySelectorAll('a').length);

            // Screenshot (PNG)
            const filename = `audit-${Date.now()}-${i}.png`;
            screenshotPath = `/audits/${filename}`; // Public URL path
            await page.screenshot({ path: path.join(AUDIT_DIR, filename) });

            // PDF
            const pdfFilename = `audit-${Date.now()}-${i}.pdf`;
            pdfPath = path.join(AUDIT_DIR, pdfFilename); // Absolute path for user
            await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });

        } catch (e) {
            console.log(`   ⚠️ Failed to load: ${e.message}`);
            status = "BROKEN";
        }

        const loadTime = ((Date.now() - start) / 1000).toFixed(2);

        // Detect "Ugly"
        let isUgly = false;
        let isThin = false;
        if (status === 'ONLINE') {
            const text = await page.evaluate(() => document.body.innerText || "");
            const wordCount = text.split(/\s+/).length;
            if (wordCount < 50) isUgly = true;
            if (wordCount < 150) isThin = true;
            if (text.toLowerCase().includes('lorem ipsum')) isUgly = true;

            // Heuristic NotChecks
            if (pageTitle.toLowerCase().trim() === 'home' || pageTitle.toLowerCase().trim() === 'untitled') isUgly = true;
        }

        // Detect Free/Cheap Hosting Providers
        const isFreeProvider = cleanUrl.includes('godaddysites.com') ||
            cleanUrl.includes('wixsite.com') ||
            cleanUrl.includes('squarespace.com') ||
            cleanUrl.includes('wordpress.com') ||
            cleanUrl.includes('weebly.com');

        if (isFreeProvider) isUgly = true; // Flag as ugly/unprofessional naturally

        // Update Lead Object
        lead.analysis = {
            analyzedAt: new Date().toISOString(),
            status,
            loadTime,
            server: headers['server'] || 'Unknown',
            pageTitle,
            linkCount,
            screenshotUrl: screenshotPath, // Usage: <img src={lead.analysis.screenshotUrl} />
            pdfPath,
            isUgly,
            isThin,
            isFreeProvider
        };

        updatedCount++;
        await page.close();
    }

    await browser.close();

    // Save back to JSON
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
    console.log(`\n✅ Analysis Complete. Updated ${updatedCount} leads.`);
}

analyze().catch(console.error);
