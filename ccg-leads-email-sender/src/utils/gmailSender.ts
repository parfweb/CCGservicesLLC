/**
 * Gmail API Sender using Google Identity Services
 * Sends emails via Gmail API with OAuth2 authentication
 */

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL || 'gianniasaro@ccgsitespark.com';
const SENDER_NAME = import.meta.env.VITE_SENDER_NAME || 'Gianni Asaro';
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';

interface EmailPayload {
    to: string;
    subject: string;
    body: string;
}

// Store the access token after auth
let accessToken: string | null = null;

// Load Google Identity Services script
export const loadGoogleScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (document.getElementById('google-gsi')) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.id = 'google-gsi';
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google Identity Services'));
        document.body.appendChild(script);
    });
};

// Initialize and trigger OAuth login
export const signInWithGoogle = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        // @ts-ignore - google is loaded from script
        const tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: (response: any) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }
                accessToken = response.access_token;
                resolve(response.access_token);
            },
        });

        tokenClient.requestAccessToken({ prompt: 'consent' });
    });
};

// Check if we have an access token
export const isAuthenticated = (): boolean => {
    return accessToken !== null;
};

// Create RFC 2822 formatted email
const createEmail = (to: string, subject: string, body: string): string => {
    const email = [
        `From: "${SENDER_NAME}" <${SENDER_EMAIL}>`,
        `To: ${to}`,
        `Subject: ${subject}`,
        '',
        body
    ].join('\r\n');

    // Base64 encode for Gmail API
    return btoa(unescape(encodeURIComponent(email)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
};

// Send email via Gmail API with retry
export const sendEmail = async ({ to, subject, body }: EmailPayload, retries = 2): Promise<{ success: boolean; error?: string }> => {
    if (!accessToken) {
        return { success: false, error: 'Not authenticated. Please sign in with Google first.' };
    }

    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const raw = createEmail(to, subject, body);

            const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ raw }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMsg = errorData.error?.message || `HTTP ${response.status}`;

                // If token expired (401), don't retry - user needs to re-auth
                if (response.status === 401) {
                    accessToken = null;
                    return { success: false, error: 'Token expired. Please sign in again.' };
                }

                throw new Error(errorMsg);
            }

            // Track sent email in localStorage
            saveSentEmail(to);
            return { success: true };

        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Unknown error';
            console.error(`Gmail API attempt ${attempt + 1} failed:`, errorMsg);

            // If we have retries left, wait and try again
            if (attempt < retries) {
                const waitTime = (attempt + 1) * 3000; // 3s, 6s
                console.log(`⏳ Retrying in ${waitTime / 1000}s...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            } else {
                return { success: false, error: errorMsg };
            }
        }
    }

    return { success: false, error: 'Max retries exceeded' };
};

// Save sent email to localStorage (persists across sessions)
const SENT_STORAGE_KEY = 'ccg_sent_emails';

const saveSentEmail = (email: string): void => {
    try {
        const existing = localStorage.getItem(SENT_STORAGE_KEY);
        const emails: string[] = existing ? JSON.parse(existing) : [];
        const lowerEmail = email.toLowerCase();

        if (!emails.includes(lowerEmail)) {
            emails.push(lowerEmail);
            localStorage.setItem(SENT_STORAGE_KEY, JSON.stringify(emails));
            console.log(`📝 Logged sent email: ${email}`);
        }
    } catch (e) {
        console.warn('Failed to save sent email to localStorage:', e);
    }
};

// Get all sent emails (for export to sent_log.json)
export const getSentEmails = (): string[] => {
    try {
        const existing = localStorage.getItem(SENT_STORAGE_KEY);
        return existing ? JSON.parse(existing) : [];
    } catch (e) {
        return [];
    }
};

// Export sent emails to JSON format (for sync-leads.js)
export const exportSentEmailsJSON = (): string => {
    const emails = getSentEmails();
    return JSON.stringify({ emails, lastUpdated: new Date().toISOString() }, null, 2);
};

// Batch send emails
export const sendBatchEmails = async (
    emails: EmailPayload[],
    onProgress?: (sent: number, total: number) => void
): Promise<{ sent: number; failed: number; errors: string[] }> => {
    let sent = 0;
    let failed = 0;
    const errors: string[] = [];

    for (let i = 0; i < emails.length; i++) {
        const result = await sendEmail(emails[i]);

        if (result.success) {
            sent++;
        } else {
            failed++;
            errors.push(`${emails[i].to}: ${result.error}`);
        }

        onProgress?.(i + 1, emails.length);

        // Random delay 30-40 seconds between emails to avoid spam flags
        if (i < emails.length - 1) {
            const delay = 30000 + Math.random() * 10000; // 30-40 seconds
            console.log(`⏳ Waiting ${Math.round(delay / 1000)}s before next email...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    return { sent, failed, errors };
};
