import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About Us | Ragdoll Heaven',
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
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center space-y-6">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Purpose</span>
                        <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-5xl">Breeding with Heart & Integrity</h2>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            At Ragdoll Heaven, we believe that breeding isn't just about kittens; it's about bettering the breed.
                            Our mission is to raise Ragdolls with exceptional temperaments, robust health, and the striking
                            features that make this breed so beloved. We are committed to ethical breeding practices, which means prioritizing the physical and emotional well-being of our cats above all else.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Every decision we make, from the pairing of parents to the high-quality nutrition we provide, is centered around one goal: raising the perfect companion for your family.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story & Expanded Content */}
            <section className="bg-secondary/20 py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
                        {/* Text Content */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl mb-6">Our Story</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Founded with a deep love for felines, Ragdoll Heaven started as a small passion project over a decade ago.
                                    What began as a single pair of cherished Ragdolls has grown into a small, home-based cattery
                                    dedicated to excellence. We noticed a gap in the world of breeding—too many kittens were being raised in cages or outdoor runs, lacking the crucial socialization needed to become true family pets.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    We decided to do things differently. We are not a kennel; we are a family home where cats are king. Our cattery is built on the foundation of love, transparency, and lifelong support for our families. We maintain a small program to ensure that every single cat and kitten receives the individual attention they deserve.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">The "Raised Underfoot" Philosophy</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    "Raised underfoot" isn't just a buzzword for us—it's a way of life and our promise to you. Our kittens are born in our bedroom, right next to us, ensuring we are there for every moment of their first weeks. As they grow, they graduate to our living room, the heart of our home.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    They are accustomed to the inevitable chaos of a busy household: the roar of the vacuum cleaner, the clatter of the dishwasher, the sound of the TV, and the laughter of friends and family. This constant exposure is vital. It creates a confident, curious cat rather than a timid one.
                                </p>
                                <p className="text-muted-foreground leading-relaxed mt-2">
                                    Because of this approach, when our kittens come to you, they are:
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {[
                                        "Confident explorers, ready to investigate their new home",
                                        "Used to being scooped up, cuddled, and held",
                                        "Fully litter box trained and weaned onto high-quality food",
                                        "Socialized with other cats and introduced to respectful dogs"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-foreground">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Uncompromising Health Standards</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    A beautiful cat is nothing without good health. our breeding program is strictly "closed," meaning our cats do not mingle with outside cats, preventing the spread of infectious diseases. We work closely with our reproductive veterinarians to ensure optimal health.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    We perform comprehensive DNA testing on all breeding parents to ensure they are negative for HCM (Hypertrophic Cardiomyopathy) and PKD (Polycystic Kidney Disease), the two most common genetic issues in the breed. Your peace of mind is paramount to us.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-primary/10">
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Meet the Breeder</h3>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="font-semibold text-xl mb-1">Sarah Jenkins</p>
                                        <p className="text-sm text-primary font-medium mb-4">Founder & Head Cuddler</p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            "I've been in love with Ragdolls since I met my first one in 2015. My goal is to
                                            preserve the magic of this breed—not just their stunning blue eyes, but their gentle, dog-like souls—for future generations. Every kitten raised here is treated like my own child until
                                            they become yours. I am here to answer your questions, calm your nerves, and celebrate your new family member for years to come."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats & Image Grid */}
                        <div className="flex flex-col gap-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow border border-border/50">
                                    <span className="mb-2 text-4xl font-bold text-primary">10+</span>
                                    <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
                                </div>
                                <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow border border-border/50">
                                    <span className="mb-2 text-4xl font-bold text-primary">100+</span>
                                    <span className="text-sm font-medium text-muted-foreground">Happy Families</span>
                                </div>
                                <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow border border-border/50">
                                    <span className="mb-2 text-4xl font-bold text-primary">TICA</span>
                                    <span className="text-sm font-medium text-muted-foreground">Registered Cattery</span>
                                </div>
                                <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 shadow-sm text-center hover:shadow-md transition-shadow border border-border/50">
                                    <span className="mb-2 text-4xl font-bold text-primary">100%</span>
                                    <span className="text-sm font-medium text-muted-foreground">Health Guarantee</span>
                                </div>
                            </div>

                            {/* Large Decorative Image */}
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1000&auto=format&fit=crop"
                                    alt="Ragdoll kitten playing"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="mb-16 text-center font-serif text-3xl font-bold text-primary md:text-5xl">
                        Why Choose Ragdoll Heaven?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'Health Tested',
                                description: 'We rigorously test all our breeding cats for genetic conditions to ensure your kitten is healthy and thrives for years to come. We transparently share all results.',
                            },
                            {
                                title: 'Socialized with Love',
                                description: 'Our kittens are handled daily from birth. They grow up surrounded by affection, ensuring they are sweet, confident, and have that famous "floppy" nature.',
                            },
                            {
                                title: 'Lifetime Support',
                                description: 'We don’t just sell you a kitten; we welcome you to the family. We offer lifetime guidance, advice, and support for all our kitten owners, day or night.',
                            },
                        ].map((feature, index) => (
                            <div key={index} className="rounded-2xl border border-secondary bg-background p-10 hover:shadow-lg transition-all duration-300">
                                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
