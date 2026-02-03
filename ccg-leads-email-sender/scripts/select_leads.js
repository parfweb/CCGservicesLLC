
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvPath = path.resolve(__dirname, '../../ccg-leads-scalping/leads_db.csv');

// Simple CSV parser that handles quotes
function parseCSV(text) {
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i];
        if (!currentLine) continue;

        // Regex to match CSV fields, handling quoted strings with commas
        const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;
        // Basic split fallback if regex is too complex for this env, but let's try a simpler split for speed if data is clean-ish
        // Actually, leads_db might have commas in fields.

        // Let's use a simpler row object construction for now, assuming standard CSV
        // For robustness without a library, we'll just split by comma if not in quotes. 
        // Or simpler: just grab the file and manually inspect? 
        // No, let's use a basic regex split.

        let row = {};
        let rowValues = [];
        let inQuote = false;
        let val = '';

        for (let char of currentLine) {
            if (char === '"') {
                inQuote = !inQuote;
            } else if (char === ',' && !inQuote) {
                rowValues.push(val);
                val = '';
            } else {
                val += char;
            }
        }
        rowValues.push(val);

        headers.forEach((header, index) => {
            row[header] = rowValues[index] ? rowValues[index].replace(/^"|"$/g, '').trim() : '';
        });
        result.push(row);
    }
    return result;
}

try {
    const data = fs.readFileSync(csvPath, 'utf8');
    const leads = parseCSV(data);

    console.log(`Total Leads Scanned: ${leads.length}`);

    const bronzeCandidates = leads.filter(lead => {
        // Must have valid-looking email
        const email = lead.Email || '';
        if (email.length < 5 || !email.includes('@') || email.includes('intl-segmenter') || email.includes('sentry.io') || email.includes('wix.com')) return false;

        const tech = (lead['Tech Stack'] || '').toLowerCase();
        const status = (lead['Web Status'] || '').toUpperCase();
        const priority = (lead['PRIORITY'] || '').toUpperCase();

        // Bronze Criteria
        const isBronze =
            priority === 'BRONZE' ||
            tech.includes('wix') ||
            tech.includes('godaddy') ||
            status.includes('NOT MOBILE') ||
            status.includes('BROKEN');

        return isBronze;
    });

    // Prioritize "Not Mobile" and "Broken" as they are the easiest sells
    bronzeCandidates.sort((a, b) => {
        const statusA = (a['Web Status'] || '');
        const statusB = (b['Web Status'] || '');

        if (statusA.includes('BROKEN') && !statusB.includes('BROKEN')) return -1;
        if (!statusA.includes('BROKEN') && statusB.includes('BROKEN')) return 1;

        if (statusA.includes('NOT MOBILE') && !statusB.includes('NOT MOBILE')) return -1;
        if (!statusA.includes('NOT MOBILE') && statusB.includes('NOT MOBILE')) return 1;

        return 0;
    });

    const top15 = bronzeCandidates.slice(0, 15);

    // Transform keys to match Lead interface
    const appLeads = top15.map(l => ({
        businessName: l['Business Name'],
        phone: l['Phone'],
        website: l['Website'],
        techStack: l['Tech Stack'] || 'Unknown',
        priority: 'BRONZE',
        status: l['Web Status'] || 'Active',
        auditNotes: l['Web Status'] || 'Unknown Issue',
        screenshotUrl: "https://images.unsplash.com/photo-1558905540-21297dc5b4b1?q=80&w=1080&auto=format&fit=crop", // placeholder
        specificObservation: "", // Empty for now, user can fill or random
        email: l['Email'] // Keep email for the "send" part
    }));

    const outputPath = path.resolve(__dirname, '../src/data/selected_leads.json');
    // Ensure dir exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(outputPath, JSON.stringify(appLeads, null, 2));
    console.log(`Saved ${appLeads.length} leads to ${outputPath}`);

} catch (err) {
    console.error("Error reading CSV:", err);
}
