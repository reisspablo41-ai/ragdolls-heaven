'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { sendNewsletterSignupEmail } from '@/actions/email-actions'

export function NewsletterSection() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async () => {
        if (!email) return
        setStatus('loading')

        const result = await sendNewsletterSignupEmail(email)

        if (result.success) {
            setStatus('success')
            setEmail('')
        } else {
            setStatus('error')
        }
    }

    return (
        <section className="py-24 container px-4 mx-auto">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
                <div className="space-y-4 mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">Don't Miss Future Litters</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our kittens find homes quickly. Join our waiting list to get notified 24 hours before we announce new availability to the public.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="p-6 bg-green-50 text-green-700 rounded-lg max-w-md mx-auto">
                        <p className="font-semibold">Thanks for subscribing!</p>
                        <p className="text-sm">We've sent a welcome email to your inbox.</p>
                        <Button variant="link" onClick={() => setStatus('idle')} className="mt-2 text-green-700">
                            Add another email
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 bg-background border-primary/20"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                        />
                        <Button
                            size="lg"
                            className="h-12 px-8"
                            onClick={handleSubmit}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Joining...' : 'Join List'}
                        </Button>
                    </div>
                )}

                {status === 'error' && (
                    <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
                )}

                <p className="mt-4 text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    )
}
