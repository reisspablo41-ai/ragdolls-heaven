'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

export function Testimonials() {
    const testimonials = [
        {
            name: "Sarah & John",
            location: "New York, NY",
            content: "We couldn't be happier with our kitten from Velvet Paws. He is so well-socialized and affectionate. The whole process was professional and transparent.",
            rating: 5,
            initials: "SJ"
        },
        {
            name: "Emily R.",
            location: "San Francisco, CA",
            content: "Best breeder experience I've ever had. My ragdoll Luna is exactly as described - gentle, floppy, and incredibly beautiful. Highly recommend!",
            rating: 5,
            initials: "ER"
        },
        {
            name: "Michael Chen",
            location: "Austin, TX",
            content: "The genetic health guarantee gave us peace of mind, but the kitten's personality stole our hearts. He follows us everywhere!",
            rating: 5,
            initials: "MC"
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
