import { createClient } from '@/utils/supabase/server'
import { KittenList } from '@/components/kittens/kitten-list'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Heart, ScrollText } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function KittensPage() {
    const supabase = await createClient()

    const { data: kittens } = await supabase
        .from('kittens')
        .select(`
            *,
            kitten_images (
                image_url
            )
        `)
        .order('created_at', { ascending: false })

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Available Kittens</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Browse our current litter of Ragdoll kittens. Each one is raised with love and ready for a forever home.
                </p>
            </div>

            <KittenList kittens={kittens || []} />

            {/* Adoption Infomation Sections */}
            <div className="mt-24 space-y-20">

                {/* What's Included */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-3xl font-bold mb-4">What's Included?</h2>
                        <p className="text-muted-foreground text-lg">Every Ragdoll Heaven kitten goes home with a deluxe starter package.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "TICA Registration Slip",
                            "2-Year Genetic Health Guarantee",
                            "Age-Appropriate Vaccinations",
                            "Microchip Implantation",
                            "Spay/Neuter Procedure",
                            "De-worming Treatments",
                            "Veterinary Health Certificate",
                            "30 Days Pet Insurance",
                            "A Blanket with Mom's Scent"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-secondary/20 p-4 rounded-lg">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span className="font-medium text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section className="bg-primary/5 -mx-4 px-4 py-16 md:rounded-3xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold mb-8">Investment</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-background border-none shadow-md">
                                <CardHeader>
                                    <CardTitle className="font-serif text-2xl">Pet Companion</CardTitle>
                                    <div className="text-3xl font-bold text-primary mt-2">$2,500 - $3,000</div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        Perfect for loving families looking for a beautiful, affectionate friend. All strict pet quality standards. Spay/Neuter included.
                                    </p>
                                    <ul className="space-y-2 text-left">
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <Heart className="h-4 w-4 text-primary" />
                                            <span>Mitted, Bicolor, & Colorpoint Patterns</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <Heart className="h-4 w-4 text-primary" />
                                            <span>Blue & Seal Colors</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-background border-2 border-primary/20 shadow-md transform md:-translate-y-4">
                                <CardHeader>
                                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto mb-2">MOST POPULAR</div>
                                    <CardTitle className="font-serif text-2xl">Show / Breeder Quality</CardTitle>
                                    <div className="text-3xl font-bold text-primary mt-2">$3,500+</div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        Exceptional markings and conformation. For those interested in showing or starting their own ethical program (breeding rights extra).
                                    </p>
                                    <ul className="space-y-2 text-left">
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <ScrollText className="h-4 w-4 text-primary" />
                                            <span>Perfect Markings</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-foreground">
                                            <ScrollText className="h-4 w-4 text-primary" />
                                            <span>Show Quality Structure</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Reservation Steps */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold mb-4">Adoption Journey</h2>
                        <p className="text-muted-foreground text-lg">From our home to yours in 4 simple steps.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Apply", desc: "Submit our adoption application to tell us about your home." },
                            { step: "02", title: "Reserve", desc: "Place a non-refundable deposit (40% of the total fee) to join the waitlist or claim a specific kitten." },
                            { step: "03", title: "Grow", desc: "Receive weekly photo/video updates as your baby grows up." },
                            { step: "04", title: "Homecoming", desc: "Pick up your kitten at 12-14 weeks old!" }
                        ].map((s, i) => (
                            <div key={i} className="relative text-center">
                                <div className="text-6xl font-bold text-secondary/40 mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                <p className="text-muted-foreground text-sm">{s.desc}</p>
                                {i < 3 && <div className="hidden md:block absolute top-12 -right-4 w-8 border-t-2 border-dashed border-secondary" />}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
