
import { createClient } from '@/utils/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function TestimonialsPage() {
    const supabase = await createClient()

    const { data: testimonials } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                <h1 className="font-serif text-5xl font-bold">Ragdoll Heaven Families</h1>
                <p className="text-xl text-muted-foreground">
                    See what our happy kitten parents have to say about their new furry family members.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {testimonials?.map((t) => (
                    <Card key={t.id} className="bg-card hover:shadow-lg transition-shadow border-secondary/20">
                        <CardHeader className="flex flex-row items-start gap-4 pb-2">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Quote className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-serif">{t.client_name}</CardTitle>
                                <div className="text-xs text-muted-foreground flex items-center gap-1">
                                    {t.location || 'Happy Home'}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-0.5">
                                {[...Array(t.rating || 5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                "{t.content}"
                            </p>
                            <div className="pt-2 text-xs text-muted-foreground text-right">
                                {new Date(t.created_at).toLocaleDateString()}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {(!testimonials || testimonials.length === 0) && (
                <div className="text-center py-24 text-muted-foreground">
                    No testimonials yet. Be the first to leave one!
                </div>
            )}
        </div>
    )
}
