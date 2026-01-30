import Image from 'next/image'
import { Check } from 'lucide-react'

export function AboutSection() {
    const benefits = [
        "Health Tested Parents (HCM & PKD negative)",
        "2-Year Genetic Health Guarantee",
        "Age-Appropriate Vaccinations",
        "TICA Registration Papers"
    ]

    return (
        <section className="py-24 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500">
                        <Image
                            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop"
                            alt="Ragdoll cat resting"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                                Our Philosophy
                            </div>
                            <h2 className="font-serif text-4xl font-bold">The Ragdoll Standard</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We specialize in raising the classic Ragdoll: big blue eyes, bunny-soft fur, and the trademark "flop."
                                Our kittens are raised underfoot, never in cages, ensuring they leave our home socialized, confident, and ready to be loved.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that a well-socialized kitten makes the best companion. From the moment they are born, our kittens are handled daily, exposed to household noises, and introduced to other pets. This early neurological stimulation results in cats that are fearless, affectionate, and deeply bonded to their humans.
                            </p>
                        </div>

                        <div className="bg-background p-6 rounded-xl border border-border/50 shadow-sm">
                            <h3 className="font-serif text-xl font-bold mb-3">The "Velvet Paws" Difference</h3>
                            <p className="text-muted-foreground mb-4">
                                Many catteries prioritize color or size, but we prioritize <b>temperament</b> and <b>health</b>. We are a TICA-registered cattery committed to preserving the gentle nature that makes this breed so special.
                            </p>
                            <ul className="space-y-3">
                                {benefits.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="text-foreground font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
