'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

export function Testimonials() {
    const testimonials = [
        {
            name: "The Anderson Family",
            location: "Scarsdale, NY",
            content: "Picking up our kitten was such a joy. Ragdoll Heaven clearly puts so much love into their cats. Our little guy is the most affectionate companion we've ever had!",
            rating: 4.8,
            initials: "AF"
        },
        {
            name: "Rebecca L.",
            location: "Boston, MA",
            content: "Best breeder experience ever! Luna is gentle, beautiful, and so well-socialized. She's been a perfect addition to our family.",
            rating: 5,
            initials: "RL"
        },
        {
            name: "Chen & Wei",
            location: "San Francisco, CA",
            content: "We were impressed by the genetic health guarantee and the professionalism. Our kitten's personality is exactly what we hoped for.",
            rating: 4.7,
            initials: "CW"
        }
    ]

    return (
        <section className="py-24 bg-secondary/30">
            <div className="container px-4 mx-auto text-center">
                <h2 className="font-serif text-3xl font-bold mb-12">Happy Families</h2>

                <div className="max-w-3xl mx-auto">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonials.map((t, index) => (
                                <CarouselItem key={index}>
                                    <Card className="border-none shadow-none bg-transparent">
                                        <CardContent className="flex flex-col items-center p-6 space-y-6">
                                            <div className="flex justify-center gap-1">
                                                {[...Array(t.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                                ))}
                                            </div>

                                            <p className="text-xl md:text-2xl font-serif italic text-muted-foreground leading-relaxed">
                                                "{t.content}"
                                            </p>

                                            <div className="flex items-center justify-center gap-4 mt-4">
                                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-lg">
                                                    {t.initials}
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-bold">{t.name}</div>
                                                    <div className="text-xs text-muted-foreground">{t.location}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
