require('dotenv').config();
const imaps = require('imap-simple');

const SELLER_EMAIL = "kestutis@ccgsitespark.com";
const SELLER_PASS = "tvof anco ltze hijq";

async function listBoxes() {
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
        const boxes = await connection.getBoxes();

        console.log("--- Available Mailboxes ---");
        // Recursive function to print boxes
        function printBoxes(boxList, prefix = '') {
            for (const key in boxList) {
                console.log(prefix + key);
                if (boxList[key].children) {
                    printBoxes(boxList[key].children, prefix + key + '/');
                }
            }
        }
        printBoxes(boxes);

        connection.end();
    } catch (e) {
        console.error("Error: " + e.message);
    }
}

listBoxes();
