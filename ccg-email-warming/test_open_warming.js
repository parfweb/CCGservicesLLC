require('dotenv').config();
const imaps = require('imap-simple');

const SELLER_EMAIL = "kestutis@ccgsitespark.com";
const SELLER_PASS = "tvof anco ltze hijq";

async function testOpen() {
    const config = {
        imap: {
            user: SELLER_EMAIL,
            password: SELLER_PASS,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            tlsOptions: { rejectUnauthorized: false },
            authTimeout: 10000
        }
    };

    try {
        const connection = await imaps.connect(config);
        console.log("Connected. Opening 'warming'...");

        await connection.openBox('warming');
        console.log("SUCCESS: Opened 'warming'!");

        const messages = await connection.search(['UNSEEN'], { bodies: ['HEADER'], markSeen: false });
        console.log(`Found ${messages.length} unread emails in 'warming'.`);

        connection.end();
    } catch (e) {
        console.error("FAILED to open 'warming': " + e.message);
    }
}

testOpen();
