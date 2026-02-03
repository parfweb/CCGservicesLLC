require('dotenv').config();
const imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const ACCOUNTS_FILE = path.join(__dirname, 'accounts.json');
const TARGET_DOMAINS = ["ccgsitespark.com"]; // Reply to emails from this domain

// --- BOT CONVERSATION TEMPLATES ---
const chattyReplies = [
    "Thanks for the quick response. I'll take a look.",
    "Got it. I will discuss with my partner and get back to you.",
    "That pricing sounds reasonable. Do you have a portfolio?",
    "Okay, sending the details shortly.",
    "Sounds good. Let's touch base next week.",
    "Received, thanks!",
    "Can you send me a calendar link to book a call?",
    "Perfect, exactly what we needed.",
    "I appreciate the info. Will let you know.",
    "Thanks, Kestutis."
];

async function checkAndReplyElement(account) {
    if (!account.pass || account.pass.includes("Techno")) return;

    const config = {
        imap: {
            user: account.user,
            password: account.pass,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            tlsOptions: { rejectUnauthorized: false },
            authTimeout: 10000
        }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');

        // Search for UNSEEN emails from our Targets
        const searchCriteria = ['UNSEEN', ['FROM', 'ccgsitespark.com']];
        const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: false };

        const messages = await connection.search(searchCriteria, fetchOptions);

        if (messages.length > 0) {
            console.log(`[💬 ${account.user}] Found ${messages.length} replies from Kestutis.`);
        }

        for (const item of messages) {
            const all = item.parts.find(p => p.which === 'TEXT');
            const id = item.attributes.uid;
            const idHeader = "Imap-Id: " + id + "\r\n";
            const parsed = await simpleParser(idHeader + all.body);

            const fromEmail = parsed.from.value[0].address;
            const subject = parsed.subject;

            // Double check it's from our domain
            if (fromEmail.includes('ccgsitespark.com')) {
                await sendBotReply(account, fromEmail, subject);
                await connection.addFlags(id, '\\Seen');
            }
        }

        connection.end();

    } catch (e) {
        // console.log(`[Skip] ${account.user} IMAP check failed (probably Auth): ${e.message}`);
    }
}

async function sendBotReply(account, toEmail, originalSubject) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: account.user, pass: account.pass }
    });

    const replyText = chattyReplies[Math.floor(Math.random() * chattyReplies.length)];

    try {
        await transporter.sendMail({
            from: account.user,
            to: toEmail,
            subject: originalSubject.startsWith("Re:") ? originalSubject : "Re: " + originalSubject,
            text: replyText
        });
        console.log(`[↩️ CHAT] ${account.user} replied to Kestutis: "${replyText}"`);
    } catch (e) {
        console.error(`Error replying: ${e.message}`);
    }
}

async function runBotReplier() {
    console.log("🗣️ Bot Conversation Handler Started (Checking for replies from Kestutis)...");

    if (!fs.existsSync(ACCOUNTS_FILE)) return;
    const accounts = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));

    // Serial processing to avoid 18 concurrent connections getting banned
    async function cycle() {
        console.log("--- Checking all bot inboxes for new replies ---");
        for (const account of accounts) {
            await checkAndReplyElement(account);
            await new Promise(r => setTimeout(r, 2000)); // 2s between accounts
        }
        console.log("--- Cycle done. Sleeping 3 minutes... ---");
        setTimeout(cycle, 180000);
    }

    cycle();
}

runBotReplier();
