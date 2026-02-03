require('dotenv').config();
const imaps = require('imap-simple');
const simpleParser = require('mailparser').simpleParser;
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// --- GLOBAL CONFIG ---
const ACCOUNTS_FILE = path.join(__dirname, 'accounts.json');
const TARGET_EMAILS = ["gianniasaro@ccgsitespark.com"]; // TARGET GIANNI ONLY
const SELLER_EMAIL = "kestutis@ccgsitespark.com"; // Login
const SELLER_ALIAS = "gianniasaro@ccgsitespark.com"; // Reply From
const SELLER_PASS = "tvof anco ltze hijq"; // Kestutis App Password

// --- TEXT SPINNERS (SENDER) ---
const spin = (text) => text.replace(/\{([^{}]+)\}/g, (m, c) => c.split('|')[Math.floor(Math.random() * c.split('|').length)]);
const getSubject = () => {
    const subjects = [
        "{Question|Inquiry|Need help} about {website|web design|site} {prices|quote|cost}",
        "{New|Upcoming|Future} project: {Redesign|New Site|Landing Page|E-commerce}",
        "{Quote|Proposal} needed for {small business|local business|startup}",
        "Do you {work on|handle|fix} {Shopify|WordPress|custom} sites?",
        "{Looking for|Need} a {web designer|developer|partner} to help",
        "Website {update|refresh|makeover} {inquiry|question}",
        "{Contact|Message} from {site|contact form}",
        "Quick question regarding {web services|your rates}",
        "Available for a {project|job}?",
        "Seeking {WordPress|elementor|web} expert"
    ];
    return spin(subjects[Math.floor(Math.random() * subjects.length)]);
};

const getBody = () => {
    const templates = [
        "{Hi|Hello|Hey there},\n\nI {found|saw|noticed} your {portfolio|work|site} and {wanted to|would like to} ask about {pricing|rates|your costs}. I have a {small|medium|new} project for a {local|construction|consulting} business. {Let me know|Please tell me} if you have availability.\n\n{Thanks|Best|Cheers},",
        "{Hi|Hey},\n\n{Are you|Do you} currently taking on {new projects|new clients}? I need a {landing page|5-page site|simple website} for my {consulting|cleaning|construction} business. {What is|Can you give me} a rough estimate?\n\n{Cheers|Thanks},",
        "{Hello|Hi there},\n\nWe {urgently|need to} update our {old|outdated|slow} website. It's built on {WordPress|Wix|Squarespace} right now. {Can you help|Are you available} with this?\n\n{Best regards|Sincerely},",
        "{Good morning|Hi},\n\nI'm {looking for|seeking|searching for} a {professional|reliable} web designer. {How much|What is the cost} for a {basic|standard} {corporate|business} website? {Looking forward to|Hope to} hear from you.\n\n{Best|Regards},",
        "{Hey|Hi},\n\nJust a quick question. Do you handle {e-commerce|online stores|Shopify}? We are looking to {build|create} a new store. {Let me know|Please reply} with your rates.\n\n{Thanks|Talk soon},",
        "{Hello|Hi team},\n\nI saw your contact info on Google. We need a {redesign|refresh} of our homepage. Is this something you do? \n\n{Thanks|Best},"
    ];
    return spin(templates[Math.floor(Math.random() * templates.length)]);
};
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// --- DYNAMIC SELLER REPLIES (Gianni -> Bots) ---
const getSellerReply = (subject) => {
    const templates = [
        "Hi,\n\nThanks for reaching out! We can definitely help with that. Our standard websites start at $500.\n\nBest,\nGianni Asaro\nCCG Site Spark",
        "Hello,\n\nYes, we specialize in those types of sites. Do you have a specific deadline in mind?\n\nRegards,\nGianni",
        "Hi there,\n\nI'd love to discuss this. We usually charge around $500-$800 depending on complexity.\n\nBest,\nGianni Asaro",
        "Thanks for the email.\n\nWe have availability starting next week. Can you send over any examples of sites you like?\n\nThanks,\nGianni",
        "Hi,\n\nWe can certainly handle a redesign. It usually takes about 5-7 days.\n\nBest,\nGianni Asaro\nCCG Site Spark"
    ];
    return templates[Math.floor(Math.random() * templates.length)] + "\n\n> " + subject;
};

// --- DYNAMIC BOT CHATTER (Bots -> Gianni Reply) ---
const getBotChatRaw = () => {
    const chats = [
        "Thanks for the info. I will get back to you.",
        "That price sounds fair. Do you have a portfolio I can see?",
        "Okay, let me discuss with my partner.",
        "Can we schedule a call to talk about the details?",
        "Sounds good. I'll send over the requirements shortly.",
        "Great, thanks for the quick reply.",
        "Perfect. Do you offer hosting as well?"
    ];
    return chats[Math.floor(Math.random() * chats.length)];
}


// ==========================================
// PART 1: THE SENDER (Bots -> Gianni)
// ==========================================
async function runSenderCycle() {
    console.log("📤 [SENDER] Cycle starting...");
    if (!fs.existsSync(ACCOUNTS_FILE)) {
        console.log("❌ Accounts file missing!");
        return;
    }
    const accounts = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));

    // Pick a random account
    const account = accounts[Math.floor(Math.random() * accounts.length)];
    if (!account.pass || account.pass.includes("Techno")) {
        console.log(`❌ Picked account ${account.user} but it has no password. Skipping.`);
        return;
    }

    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: account.user, pass: account.pass } });
    const target = TARGET_EMAILS[0];

    try {
        await transporter.sendMail({
            from: account.user,
            to: target,
            subject: getSubject(),
            text: getBody()
        });
        console.log(`[🚀 SEND] ${account.user} -> ${target}`);
    } catch (e) {
        console.error(`[❌ SEND FAIL] ${account.user}: ${e.message}`);
    }
}

// ==========================================
// PART 2: THE SELLER (Gianni -> Bots)
// ==========================================
async function runSellerReplyCycle() {
    console.log("🔍 [GIANNI] Checking INBOX, SPAM, and 'warming' for leads...");

    const config = {
        imap: { user: SELLER_EMAIL, password: SELLER_PASS, host: 'imap.gmail.com', port: 993, tls: true, tlsOptions: { rejectUnauthorized: false }, authTimeout: 10000 }
    };

    try {
        const connection = await imaps.connect(config);
        const boxes = ['INBOX', '[Gmail]/Spam', 'warming'];
        const bots = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8')).map(a => a.user.toLowerCase());

        for (const box of boxes) {
            try {
                await connection.openBox(box);
                const searchCriteria = ['UNSEEN'];
                const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: false };
                const messages = await connection.search(searchCriteria, fetchOptions);

                if (messages.length > 0) console.log(`   📂 ${box}: Found ${messages.length} unread.`);

                for (const item of messages) {
                    const id = item.attributes.uid;
                    const fromPart = item.parts.find(p => p.which === 'HEADER').body.from[0];
                    const fromEmail = fromPart.replace(/.*<(.+)>.*/, '$1').toLowerCase();
                    const subject = item.parts.find(p => p.which === 'HEADER').body.subject[0];

                    console.log(`     - Checking email from: ${fromEmail} (Box: ${box})`);

                    if (bots.some(b => fromEmail.includes(b))) {
                        console.log(`       ✅ MATCH in ${box}! Replying as Gianni...`);

                        const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: SELLER_EMAIL, pass: SELLER_PASS } });
                        // USE DYNAMIC REPLY 
                        const replyBody = getSellerReply(subject);

                        await transporter.sendMail({
                            from: SELLER_ALIAS, // Reply AS GIANNI
                            to: fromEmail,
                            subject: "Re: " + subject,
                            text: replyBody,
                            inReplyTo: item.parts.find(p => p.which === 'HEADER').body['message-id'],
                            references: item.parts.find(p => p.which === 'HEADER').body['message-id']
                        });
                        console.log(`       [✅ GIANNI REPLY] Sent to ${fromEmail}`);
                        await connection.addFlags(id, '\\Seen');
                    }
                }
            } catch (err) { /* ignore box errors */ }
        }
        connection.end();
    } catch (e) {
        console.error("⚠️ [GIANNI ERROR]: " + e.message);
    }
}

// ==========================================
// PART 3: THE CHATTER (Bots -> Gianni Reply)
// ==========================================
async function runBotChatCycle() {
    console.log("💬 [CHATTER] Checking random bot inbox for reply from Gianni...");
    if (!fs.existsSync(ACCOUNTS_FILE)) return;
    const accounts = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));

    // Pick JUST ONE random bot to check (avoids rate limits)
    const account = accounts[Math.floor(Math.random() * accounts.length)];
    if (!account.pass || account.pass.includes("Techno")) return;

    const config = {
        imap: { user: account.user, password: account.pass, host: 'imap.gmail.com', port: 993, tls: true, tlsOptions: { rejectUnauthorized: false }, authTimeout: 10000 }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');
        const searchCriteria = ['UNSEEN', ['FROM', 'gianniasaro@ccgsitespark.com']];
        const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: false };
        const messages = await connection.search(searchCriteria, fetchOptions);

        if (messages.length > 0) {
            console.log(`   💌 Found reply from Gianni in ${account.user}'s inbox! Replying back...`);

            for (const item of messages) {
                const id = item.attributes.uid;
                const subject = item.parts.find(p => p.which === 'HEADER').body.subject[0];

                const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: account.user, pass: account.pass } });

                await transporter.sendMail({
                    from: account.user,
                    to: SELLER_ALIAS,
                    subject: subject.startsWith("Re:") ? subject : "Re: " + subject,
                    text: getBotChatRaw(),
                    inReplyTo: item.parts.find(p => p.which === 'HEADER').body['message-id'],
                    references: item.parts.find(p => p.which === 'HEADER').body['message-id']
                });
                console.log(`       [↩️ BOT CHAT] ${account.user} replied to Gianni.`);
                await connection.addFlags(id, '\\Seen');
            }
        } else {
            console.log(`   (No new replies for ${account.user})`);
        }
        connection.end();
    } catch (e) {
        // console.log("Chat error (auth?): " + e.message); 
    }
}

//Stringing it all together
console.log("🔥 MASTER WARMING BOT STARTED (Target: GIANNI | Modes: SEND + REPLY + CHAT) 🔥");
console.log("Press Ctrl + C to stop.");

// Loop 1: Send a new lead every 60s
setInterval(runSenderCycle, 60 * 1000);

// Loop 2: Gianni Replies every 90s
setInterval(runSellerReplyCycle, 90 * 1000);

// Loop 3: Bots Chat Back every 120s
setInterval(runBotChatCycle, 120 * 1000);

// Run immediately on start
runSenderCycle();
runSellerReplyCycle();
