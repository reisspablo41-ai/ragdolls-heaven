
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

    const styles = [
        {
            card: "bg-white border-primary/20",
            icon: "bg-primary/10 text-primary",
            stars: "text-amber-400 fill-amber-400",
            quote: "text-muted-foreground",
            featured: false
        },
        {
            card: "bg-primary/5 border-primary/30 shadow-sm",
            icon: "bg-primary text-white",
            stars: "text-primary fill-primary",
            quote: "text-primary/80 font-medium",
            featured: true
        },
        {
            card: "bg-secondary/20 border-secondary/40",
            icon: "bg-secondary text-secondary-foreground",
            stars: "text-amber-500 fill-amber-500",
            quote: "text-muted-foreground italic",
            featured: false
        },
        {
            card: "bg-[#FDF6F0] border-[#EAD7C3]",
            icon: "bg-[#EAD7C3] text-[#8D6E63]",
            stars: "text-[#8D6E63] fill-[#8D6E63]",
            quote: "text-[#5D4037]",
            featured: false
        }
    ];

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <h1 className="font-serif text-6xl font-bold tracking-tight text-primary">Ragdoll Heaven Families</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Discover the heartwarming stories from our happy kitten parents who found their perfect furry companions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials?.map((t, index) => {
                        const style = styles[index % styles.length];
                        return (
                            <Card
                                key={t.id}
                                className={`group hover:scale-[1.02] transition-all duration-300 border-2 shadow-none overflow-hidden ${style.card}`}
                            >
                                <CardHeader className="flex flex-row items-start gap-4 pb-4">
                                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 rotate-3 group-hover:rotate-0 transition-transform duration-300 ${style.icon}`}>
                                        <Quote className="h-6 w-6" />
                                    </div>
                                    <div className="pt-1">
                                        <CardTitle className="text-xl font-serif text-primary font-bold">{t.client_name}</CardTitle>
                                        <div className="text-sm text-muted-foreground/80 flex items-center gap-1 font-medium">
                                            {t.location || 'Happy Home'}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => {
                                                const rating = Number(t.rating) || 5;
                                                const fillAmount = Math.max(0, Math.min(1, rating - i));
                                                return (
                                                    <div key={i} className="relative h-5 w-5">
                                                        <Star className="absolute h-5 w-5 text-black/5" />
                                                        <div
                                                            className="absolute overflow-hidden"
                                                            style={{ width: `${fillAmount * 100}%` }}
                                                        >
                                                            <Star className={`h-5 w-5 ${style.stars}`} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <span className={`text-sm font-bold ${style.quote.includes('primary') ? 'text-primary' : 'text-muted-foreground'}`}>
                                            {Number(t.rating).toFixed(1)}
                                        </span>
                                    </div>
                                    <p className={`leading-relaxed text-lg ${style.quote}`}>
                                        "{t.content}"
                                    </p>
                                    <div className="pt-4 flex items-center justify-between border-t border-black/5">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Verified Parent</span>
                                            {Number(t.rating) >= 4.9 && (
                                                <span className="text-[9px] font-bold text-amber-600 uppercase tracking-tighter">Elite Preference</span>
                                            )}
                                        </div>
                                        <span className="text-[10px] font-bold text-muted-foreground">
                                            {new Date(t.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                                        </span>
                                    </div>
                                </CardContent>
                                {style.featured && (
                                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase tracking-tighter px-3 py-1 font-bold rounded-bl-lg">
                                        Featured Story
                                    </div>
                                )}
                            </Card>
                        );
                    })}
                </div>

                {(!testimonials || testimonials.length === 0) && (
                    <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-muted/20">
                        <p className="text-muted-foreground text-lg">No testimonials yet. Be the first to leave one!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
