import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
    return (
        <section className="py-24 container px-4 mx-auto">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
                <div className="space-y-4 mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">Don't Miss Future Litters</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our kittens find homes quickly. Join our waiting list to get notified 24 hours before we announce new availability to the public.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 bg-background border-primary/20"
                    />
                    <Button size="lg" className="h-12 px-8">
                        Join List
                    </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    )
}
