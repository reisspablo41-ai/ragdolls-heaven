'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { sendInquiryEmail } from '@/actions/email-actions'

interface InquiryFormProps {
    kitten: {
        id: string
        name: string
    }
}

export function InquiryForm({ kitten }: InquiryFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)

        const data = {
            kitten_id: kitten.id,
            kitten_name: kitten.name,
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        }

        const result = await sendInquiryEmail(data)
        setIsSubmitting(false)

        if (result.success) {
            setIsSuccess(true)
        } else {
            alert('Failed to send inquiry. Please try again.')
        }
    }

    if (isSuccess) {
        return (
            <div className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="font-serif text-xl font-bold">Inquiry Sent!</h3>
                <p className="text-muted-foreground">
                    We've received your message about {kitten.name}. We'll get back to you shortly!
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                    Send Another
                </Button>
            </div>
        )
    }

    return (
        <form action={handleSubmit} className="space-y-4">
            <input type="hidden" name="kitten_id" value={kitten.id} />
            <input type="hidden" name="kitten_name" value={kitten.name} />

            <div className="space-y-2">
                <Label htmlFor="kitten_display">Kitten</Label>
                <Input id="kitten_display" value={kitten.name} readOnly className="bg-muted" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder={`I'm interested in ${kitten.name}...`} required />
            </div>
            <Button size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>
        </form>
    )
}
