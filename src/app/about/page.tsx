import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About Us | Velvet Paws Ragdolls',
    description: 'Learn about our ethical breeding program, our story, and why our Ragdoll kittens are the perfect addition to your family.',
}

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-secondary/30 py-20 text-center">
                <div className="container relative z-10 mx-auto px-4">
                    <h1 className="mb-6 font-serif text-4xl font-bold text-primary md:text-6xl">
                        Our Passion for <br />
                        <span className="italic text-foreground">Perfection</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        Dedicated to breeding healthy, socially well-adjusted, and stunningly beautiful Ragdoll kittens for loving homes.
                    </p>
                </div>
                {/* Abstract Background Decoration */}
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/50 blur-3xl" />
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 font-serif text-3xl font-bold text-primary md:text-4xl">Our Mission</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            At Velvet Paws, we believe that breeding isn't just about kittens; it's about bettering the breed.
                            Our mission is to raise Ragdolls with exceptional temperaments, robust health, and the striking
                            features that make this breed so beloved. We are committed to ethical breeding practices, giving
                            every kitten the best start in life before they join their forever families.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story & Philosophy Section */}
            <section className="bg-secondary/20 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid gap-16 md:grid-cols-2">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl mb-4">Our Story</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Founded with a deep love for felines, Velvet Paws started as a small passion project.
                                    What began as a single pair of cherished Ragdolls has grown into a small, home-based cattery
                                    dedicated to excellence. We are not a kennel; we are a family home where cats are king.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Raised Underfoot</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    "Raised underfoot" isn't just a buzzword for us—it's a way of life. Our kittens are born in our bedroom
                                    and raised in our living room. They are accustomed to the sounds of a busy household: the vacuum cleaner,
                                    the dishwasher, the TV, and laughter.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-2">
                                    This constant exposure ensures that when they come to you, they are:
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Confident and curious, not hiding under the couch",
                                        "Used to being handled and cuddled",
                                        "Fully litter box trained",
                                        "Socialized with other cats and people"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-foreground">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-primary/10">
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Meet the Breeder</h3>
                                <div className="flex items-start gap-4">
                                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                                            alt="Breeder profile"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Sarah Jenkins</p>
                                        <p className="text-sm text-muted-foreground mb-2">Founder & Head Cuddler</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            "I've been in love with Ragdolls since I met my first one in 2015. My goal is to
                                            preserve the magic of this breed for future generations. Every kitten is like my own child until
                                            they become yours."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 h-fit">
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow">
                                <span className="mb-2 text-4xl font-bold text-primary">5+</span>
                                <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow">
                                <span className="mb-2 text-4xl font-bold text-primary">100+</span>
                                <span className="text-sm font-medium text-muted-foreground">Happy Families</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow">
                                <span className="mb-2 text-4xl font-bold text-primary">TICA</span>
                                <span className="text-sm font-medium text-muted-foreground">Registered Cattery</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow">
                                <span className="mb-2 text-4xl font-bold text-primary">100%</span>
                                <span className="text-sm font-medium text-muted-foreground">Health Guarantee</span>
                            </div>

                            {/* Decorative Image */}
                            <div className="col-span-2 relative mt-4 h-64 rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1000&auto=format&fit=crop"
                                    alt="Kittens playing"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="mb-12 text-center font-serif text-3xl font-bold text-primary md:text-4xl">
                        Why Choose Velvet Paws?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'Health Tested',
                                description: 'We rigorously test all our breeding cats for genetic conditions to ensure your kitten is healthy and thrives for years to come.',
                            },
                            {
                                title: 'Socialized with Love',
                                description: 'Our kittens are handled daily from birth. They grow up surrounded by affection, ensuring they are sweet, confident, and floppy.',
                            },
                            {
                                title: 'Lifetime Support',
                                description: 'We don’t just sell you a kitten; we welcome you to the family. We offer lifetime guidance and support for all our kitten owners.',
                            },
                        ].map((feature, index) => (
                            <div key={index} className="rounded-2xl border border-secondary bg-background p-8 hover:shadow-md transition-shadow">
                                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
