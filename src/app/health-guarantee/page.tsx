import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Shield, Stethoscope, Heart } from 'lucide-react'

export default function HealthGuaranteePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-primary/5">
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                        Our Promise to You
                    </Badge>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                        Genetic Health Guarantee
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        We stand behind the health and genetic quality of every kitten we raise. Our commitment extends far beyond adoption day.
                    </p>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="paw-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M20 10c-1.5 0-2.8.8-3.5 2-.7-1.2-2-2-3.5-2-2.5 0-4.5 2-4.5 4.5 0 2.5 4.5 5.5 8 9 3.5-3.5 8-6.5 8-9 0-2.5-2-4.5-4.5-4.5z" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#paw-pattern)" />
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Key Points */}
                    <div className="col-span-1 md:col-span-2 space-y-12">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
                                <Shield className="w-8 h-8 text-primary" />
                                2-Year Genetic Warranty
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Every Ragdoll Heaven kitten comes with a comprehensive 2-year genetic health guarantee. This covers all known genetic defects that can affect the Ragdoll breed, including Hypertrophic Cardiomyopathy (HCM) and Polycystic Kidney Disease (PKD).
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We test all our breeding parents to ensure they are negative for these markers, significantly reducing the risk of passing these conditions to their offspring.
                            </p>

                            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <Stethoscope className="w-8 h-8 text-primary" />
                                Veterinary Health Check
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Before leaving our cattery, your kitten will receive a thorough examination by a licensed veterinarian. This health check includes:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4 mt-6 not-prose">
                                {[
                                    "Comprehensive physical exam",
                                    "Age-appropriate vaccinations (FVRCP)",
                                    "De-worming treatment",
                                    "Microchip implantation",
                                    "Feline Leukemia (FeLV) / FIV negative test",
                                    "Health Certificate"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 flex items-center gap-3">
                                <Heart className="w-8 h-8 text-primary" />
                                72-Hour Viral Guarantee
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We guarantee that your kitten is free from viral infections at the time of pickup. You have 72 hours to have your own veterinarian examine the kitten to confirm their health status.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                This waiting period ensures that the stress of transition hasn't activated any latent issues and gives you peace of mind during those first few crucial days.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="col-span-1">
                        <Card className="sticky top-24 bg-card shadow-lg border-primary/10">
                            <CardHeader className="space-y-1 bg-primary/5 pb-8 pt-6">
                                <CardTitle className="font-serif text-2xl text-center">Ready to Adopt?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <p className="text-center text-muted-foreground text-sm">
                                    Review our available kittens and start your journey today.
                                </p>
                                <Link href="/kittens" className="block">
                                    <Button className="w-full rounded-full h-12 text-lg">
                                        View Available Kittens
                                    </Button>
                                </Link>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">Or</span>
                                    </div>
                                </div>
                                <Link href="/contact" className="block">
                                    <Button variant="outline" className="w-full rounded-full">
                                        Contact Us
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
            {children}
        </div>
    )
}
