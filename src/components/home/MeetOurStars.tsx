import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function MeetOurStars() {
    const stars = [
        {
            name: "King Jasper",
            title: "The Gentle Giant",
            image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1000&auto=format&fit=crop",
            description: "Blue Bicolor | 18 lbs of pure love"
        },
        {
            name: "Queen Luna",
            title: "The Elegant Matriarch",
            image: "https://images.unsplash.com/photo-1511044568932-338cba0fb803?q=80&w=1000&auto=format&fit=crop",
            description: "Seal Mitted | Sweet & Attentive Mother"
        },
        {
            name: "Queen Bella",
            title: "The Playful Soul",
            image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1000&auto=format&fit=crop",
            description: "Blue Lynx Point | Purring Machine"
        }
    ]

    return (
        <section className="py-24 bg-primary/5">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl font-bold">Meet Our Stars</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Our breeding program is built on a foundation of health and temperament. Meet the Kings and Queens who pass on their stunning looks and sweet personalities to your future kitten.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stars.map((star, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl bg-background shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={star.image}
                                    alt={star.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium">{star.description}</p>
                                </div>
                            </div>
                            <div className="p-6 text-center space-y-2">
                                <h3 className="font-serif text-2xl font-bold">{star.name}</h3>
                                <p className="text-muted-foreground text-sm uppercase tracking-wide">{star.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/about">
                        <Button variant="outline" className="rounded-full px-8">
                            Learn About Our Program
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
