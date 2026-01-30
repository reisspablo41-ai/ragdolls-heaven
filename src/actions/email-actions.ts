'use server'

import { resend } from '@/lib/resend'

const FROM_EMAIL = 'Ragdoll Heaven <support@ragdollheaven.net>'
const ADMIN_EMAIL = 'support@ragdollheaven.net' // Send notifications to admin here

export async function sendApplicationEmail(data: any) {
    try {
        const { firstName, lastName, email, phone, address,
            allergies, otherPets, housingType,
            genderPref, colorPref, whyRagdoll } = data

        // 1. Send confirmation to user
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: 'We received your adoption application! - Ragdoll Heaven',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #4a4a4a;">Application Received</h1>
                    <p>Hi ${firstName},</p>
                    <p>Thank you for applying to adopt a kitten from Ragdoll Heaven. We have received your application and will review it shortly.</p>
                    <p>We typically respond within 48 hours to schedule a brief phone interview.</p>
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #888; font-size: 14px;">Ragdoll Heaven</p>
                </div>
            `
        })

        // 2. Send notification to admin
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Application: ${firstName} ${lastName}`,
            html: `
                <h1>New Adoption Application</h1>
                <h2>Contact Info</h2>
                <ul>
                    <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Address:</strong> ${address}</li>
                </ul>
                
                <h2>Lifestyle</h2>
                <ul>
                    <li><strong>Allergies:</strong> ${allergies}</li>
                    <li><strong>Other Pets:</strong> ${otherPets || 'None'}</li>
                    <li><strong>Housing:</strong> ${housingType}</li>
                </ul>

                <h2>Preferences</h2>
                <ul>
                    <li><strong>Gender:</strong> ${genderPref ? JSON.stringify(genderPref) : 'No Preference'}</li>
                    <li><strong>Color/Pattern:</strong> ${colorPref || 'None'}</li>
                    <li><strong>Why Ragdoll:</strong> ${whyRagdoll}</li>
                </ul>
            `
        })

        return { success: true }
    } catch (error) {
        console.error('Submission error:', error)
        return { success: false, error: 'Failed to send email' }
    }
}

export async function sendInquiryEmail(data: any) {
    try {
        const { name, email, message, kitten_name, kitten_id } = data

        // 1. Send confirmation to user
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: `Inquiry Received: ${kitten_name} - Ragdoll Heaven`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #4a4a4a;">Thanks for your interest!</h1>
                    <p>Hi ${name},</p>
                    <p>We received your inquiry regarding <strong>${kitten_name}</strong>. We'll get back to you as soon as possible to answer your questions.</p>
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #888; font-size: 14px;">Ragdoll Heaven</p>
                </div>
            `
        })

        // 2. Send notification to admin
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Inquiry for ${kitten_name} from ${name}`,
            html: `
                <h1>New Inquiry</h1>
                <p><strong>Kitten:</strong> ${kitten_name} (ID: ${kitten_id})</p>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    ${message}
                </blockquote>
            `
        })

        return { success: true }
    } catch (error) {
        console.error('Inquiry error:', error)
        return { success: false, error: 'Failed to send email' }
    }
}

export async function sendNewsletterSignupEmail(email: string) {
    try {
        // 1. Send confirmation to user
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: 'Welcome to the Ragdoll Heaven Waiting List!',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #4a4a4a;">You're on the list!</h1>
                    <p>Thanks for joining our newsletter. You'll be the first to know when we have new litters and updates.</p>
                    <p>We typically announce new kittens here 24 hours before posting publicly.</p>
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #888; font-size: 14px;">Ragdoll Heaven</p>
                </div>
            `
        })

        // 2. Send notification to admin (Optional, maybe just log it or add to DB list if you had one)
        // For now, we'll just email admin so they know
        await resend.emails.send({
            from: FROM_EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Newsletter Subscriber: ${email}`,
            html: `
                <p>New subscriber to the waiting list:</p>
                <p><strong>${email}</strong></p>
            `
        })

        return { success: true }
    } catch (error) {
        console.error('Newsletter error:', error)
        return { success: false, error: 'Failed to send email' }
    }
}
