/**
 * Email Sender using EmailJS (Browser-compatible, no CORS issues)
 * 
 * Setup Guide:
 * 1. Go to https://www.emailjs.com/ and sign up (free: 200 emails/month)
 * 2. Add an Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template with variables: {{to_email}}, {{subject}}, {{message}}
 * 4. Copy your Service ID, Template ID, and Public Key to .env
 */

import emailjs from '@emailjs/browser';

interface EmailPayload {
    to: string;
    subject: string;
    body: string;
    fromName?: string;
}

// Initialize EmailJS with your public key
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
emailjs.init(PUBLIC_KEY);

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const sendEmail = async ({ to, subject, body, fromName = 'Gianni Asaro' }: EmailPayload): Promise<{ success: boolean; error?: string }> => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_email: to,
            from_name: fromName,
            subject: subject,
            message: body,
        });

        return { success: true };
    } catch (error) {
        console.error('Email send failed:', error);
        return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
};

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

        // Delay between emails (1.5 seconds to respect rate limits)
        if (i < emails.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
    }

    return { sent, failed, errors };
};
