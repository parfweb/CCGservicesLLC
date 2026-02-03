require('dotenv').config();
const imaps = require('imap-simple');

const SELLER_EMAIL = "kestutis@ccgsitespark.com";
const SELLER_PASS = "tvof anco ltze hijq";

async function checkSpam() {
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

        // Check Spam Folder
        try {
            await connection.openBox('[Gmail]/Spam');
            const searchCriteria = ['UNSEEN'];
            const fetchOptions = { bodies: ['HEADER'], markSeen: false };
            const messages = await connection.search(searchCriteria, fetchOptions);

            console.log(`[SPAM CHECK] Found ${messages.length} UNSEEN emails in Spam.`);

            if (messages.length > 0) {
                console.log("--- First 5 Spam Subjects ---");
                for (let i = 0; i < Math.min(messages.length, 5); i++) {
                    const subject = messages[i].parts[0].body.subject[0];
                    const from = messages[i].parts[0].body.from[0];
                    console.log(`From: ${from} | Subject: ${subject}`);
                }
            }
        } catch (err) {
            console.log("Could not open [Gmail]/Spam. Trying 'Junk'...");
            // Fallback for non-Gmail or different naming
            try {
                await connection.openBox('Junk');
                const messages = await connection.search(['UNSEEN'], { bodies: ['HEADER'], markSeen: false });
                console.log(`[JUNK CHECK] Found ${messages.length} UNSEEN emails in Junk.`);
            } catch (e) {
                console.log("Could not open Junk either.");
            }
        }

        connection.end();
    } catch (e) {
        console.error("Error: " + e.message);
    }
}

checkSpam();
