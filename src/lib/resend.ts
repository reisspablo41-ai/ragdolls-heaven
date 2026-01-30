import { Resend } from 'resend';

// Use the environment variable 'resend_api' as specified by the user
const resendApiKey = process.env.resend_api;

if (!resendApiKey) {
    console.warn('Missing resend_api environment variable');
}

export const resend = new Resend(resendApiKey);
