require('dotenv').config();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const ACCOUNTS_FILE = path.join(__dirname, 'accounts.json');
const TARGET_EMAILS = [
    "kestutis@ccgsitespark.com",
    "hello@ccgsitespark.com",
    "gianniasaro@ccgsitespark.com"
];

const MIN_DELAY_SEC = 45;
const MAX_DELAY_SEC = 90;

// --- CONTENT SPINNER (Lead Simulation) ---
const spin = (text) => {
    return text.replace(/\{([^{}]+)\}/g, (match, choices) => {
        const options = choices.split('|');
        return options[Math.floor(Math.random() * options.length)];
    });
};

const getSubject = () => {
    const templates = [
        "{Question|Inquiry} about {website|web design} {prices|quote}",
        "{New|Upcoming} project: {Redesign|New Site|Landing Page}",
        "{Quote|Proposal} needed for {small business|local business} {site|website}",
        "Do you {work on|handle} {Shopify|WordPress|custom} sites?",
        "{Looking for|Need} a {web designer|developer} to help",
        "Website {update|refresh} {inquiry|question}",
        "{Contact|Message} from {site|contact form}",
    ];
    return spin(templates[Math.floor(Math.random() * templates.length)]);
};

const getBody = () => {
    const templates = [
        "{Hi|Hello},\n\nI {found|saw} your {portfolio|work} and {wanted to|would like to} ask about {pricing|rates}. I have a {small|medium} project for a {local|new} business. {Let me know|Please tell me} if you have availability.\n\n{Thanks|Best},",
        "{Hi|Hey} Kestutis,\n\n{Are you|Do you} currently taking on {new projects|new clients}? I need a {landing page|5-page site} for my {consulting|cleaning|construction} business. {What is|Can you give me} a rough estimate?\n\n{Cheers|Thanks},",
        "{Hello|Hi there},\n\nWe {urgently|need to} update our {old|outdated} website. It's built on {WordPress|Wix} right now. {Can you help|Are you available} with this?\n\n{Best regards|Sincerely},",
        "{Good morning|Hi},\n\nI'm {looking for|seeking} a {professional|reliable} web designer. {How much|What is the cost} for a {basic|standard} {corporate|business} website? {Looking forward to|Hope to} hear from you.\n\n{Best|Regards},",
    ];
    return spin(templates[Math.floor(Math.random() * templates.length)]);
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function sendWarmEmail(account) {
    if (!account.pass || account.pass.includes("REPLACE") || account.pass.includes("Techno321")) {
        console.log(`[SKIP] ${account.user} - Invalid/Legacy Password`);
        return;
    }

    // Configure Transporter
    const transportConfig = {
        service: 'gmail',
        auth: {
            user: account.user,
            pass: account.pass
        }
    };

    if (account.proxy) {
        transportConfig.proxy = account.proxy;
        console.log(`[🌐 PROXY] Using proxy for ${account.user}`);
    }

    const transporter = nodemailer.createTransport(transportConfig);

    const mailOptions = {
        from: account.user,
        to: TARGET_EMAILS[Math.floor(Math.random() * TARGET_EMAILS.length)],
        subject: getSubject(),
        text: getBody()
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`[✅ SENT] From: ${account.user} -> ${info.response}`);
    } catch (error) {
        console.error(`[❌ FAILED] From: ${account.user} -> ${error.message}`);
    }
}

async function startWarming() {
    console.log("🔥 CCG Email Warming Bot Started (SMTP Mode)...");

    if (!fs.existsSync(ACCOUNTS_FILE)) {
        console.error("Error: accounts.json not found!");
        return;
    }

    const accounts = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));
    console.log(`Loaded ${accounts.length} accounts to warm.`);

    while (true) { // Infinite loop to keep warming
        for (const account of accounts) {
            await sendWarmEmail(account);

            // Random delay between accounts
            const delay = Math.floor(Math.random() * (MAX_DELAY_SEC - MIN_DELAY_SEC + 1) + MIN_DELAY_SEC);
            console.log(`⏳ Waiting ${delay} seconds...`);
            await sleep(delay * 1000);
        }
        console.log("--- Cycle Complete. Restarting list... ---");
    }
}

startWarming();
