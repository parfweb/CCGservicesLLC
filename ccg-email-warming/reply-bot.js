require('dotenv').config();
const imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// --- SELLER CONFIG ---
const SELLER_EMAIL = "kestutis@ccgsitespark.com";
const SELLER_PASS = "tvof anco ltze hijq"; // Kestutis App Password
const IMAP_HOST = "imap.gmail.com";
const SMTP_HOST = "smtp.gmail.com";

const ACCOUNTS_FILE = path.join(__dirname, 'accounts.json');

// --- SELLER TEMPLATES ---
const replyTemplates = {
    default: [
        "Hi,\n\nThanks for reaching out! We can definitely help with that project. A standard website starts at $500.\n\nLet me know if you want to book a call.\n\nBest,\nKestutis",
        "Hello,\n\nYes, we have availability next week. Could you send over a brief document of what you need?\n\nRegards,\nKestutis\nCCG Site Spark",
        "Hi there,\n\nWe specialize in that. I'd love to discuss the details. Are you free for a quick chat tomorrow?\n\nBest,\nKestutis",
    ],
    price: [
        "Hi,\n\nOur pricing depends on complexity, but usually ranges between $500 - $1500 for a business site.\n\nDoes that fit your budget?\n\nBest,\nKestutis",
        "Hello,\n\nI can send you a formal quote if you provide more details. Typically it's around $800 for a 5-page builds.\n\nThanks,\nKestutis",
    ],
    redesign: [
        "Hi,\n\nWe do redesigns all the time. Can you send me the link to your current site so I can take a look?\n\nBest,\nKestutis",
        "Hello,\n\nYes, migrating from Wix/WordPress is our specialty. We can certainly improve the speed and design.\n\nRegards,\nKestutis",
    ]
};

const getReplyBody = (subject) => {
    let category = 'default';
    if (!subject) return replyTemplates.default[0];
    const sub = subject.toLowerCase();
    if (sub.includes('price') || sub.includes('quote') || sub.includes('cost')) category = 'price';
    if (sub.includes('redesign') || sub.includes('update') || sub.includes('old')) category = 'redesign';

    const options = replyTemplates[category];
    return options[Math.floor(Math.random() * options.length)];
};

async function runReplyBot() {
    console.log("🔥 Seller Reply Bot Started (Listening for leads)...");

    if (!fs.existsSync(ACCOUNTS_FILE)) {
        console.error("accounts.json not found!");
        return;
    }
    const bots = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8')).map(a => a.user.toLowerCase());

    const config = {
        imap: {
            user: SELLER_EMAIL,
            password: SELLER_PASS,
            host: IMAP_HOST,
            port: 993,
            tls: true,
            tlsOptions: { rejectUnauthorized: false }, // Fix for connection logic
            authTimeout: 10000
        }
    };

    try {
        console.log(`🔌 Connecting to ${SELLER_EMAIL}...`);
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');

        const searchCriteria = ['UNSEEN'];
        const fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };

        const messages = await connection.search(searchCriteria, fetchOptions);
        console.log(`🔎 Scan complete: Found ${messages.length} unread emails.`);

        for (const item of messages) {
            const all = item.parts.find(p => p.which === 'TEXT');
            const id = item.attributes.uid;
            const idHeader = "Imap-Id: " + id + "\r\n";
            const parsed = await simpleParser(idHeader + all.body);

            const fromHeader = item.parts.find(p => p.which === 'HEADER').body.from[0];
            const fromEmail = fromHeader.replace(/.*<(.+)>.*/, '$1').toLowerCase(); // Extract email
            const subject = item.parts.find(p => p.which === 'HEADER').body.subject[0];

            // Check if sender is one of our bots
            if (bots.some(botEmail => fromEmail.includes(botEmail))) {
                console.log(`[📩 LEAD] Found inquiry from ${fromEmail}: "${subject}"`);

                // Reply
                await sendReply(fromEmail, subject);

                // Mark as Seen (Processed)
                await connection.addFlags(id, '\\Seen');
            } else {
                console.log(`[Ignoring] Email from ${fromEmail} (Not a bot)`);
            }
        }

        connection.end();

    } catch (err) {
        console.error("❌ IMAP Error:", err.message);
    }
}

async function sendReply(toEmail, originalSubject) {
    if (SELLER_PASS.includes("REPLACE")) {
        console.log("⚠️ Cannot reply: Seller password not set.");
        return;
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SELLER_EMAIL,
            pass: SELLER_PASS
        }
    });

    const replyBody = getReplyBody(originalSubject);

    // Add realistic delay
    console.log("...Typing reply...");
    await new Promise(r => setTimeout(r, 2000)); // 2s delay

    try {
        await transporter.sendMail({
            from: `"Kestutis" <${SELLER_EMAIL}>`,
            to: toEmail,
            subject: `Re: ${originalSubject}`,
            text: replyBody
        });
        console.log(`[✅ REPLIED] To: ${toEmail}`);
    } catch (e) {
        console.error("Reply Failed:", e.message);
    }
}

// Run every 2 minutes
setInterval(runReplyBot, 120000);
runReplyBot();
