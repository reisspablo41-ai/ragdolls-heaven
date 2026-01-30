import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Sparkles, ShieldCheck } from 'lucide-react'

export function FeatureSection() {
    const features = [
        {
            icon: <Heart className="h-12 w-12 text-primary mb-4" />,
            title: "Docile Temperament",
            description: "The Ragdoll is named for its tendency to go limp with pleasure when held. We breed specifically for this affectionate, puppy-like personality. They are not independent wanderers; they are devoted companions who want to be where you are."
        },
        {
            icon: <Sparkles className="h-12 w-12 text-primary mb-4" />,
            title: "Stunning Beauty",
            description: "With their plush, semi-longhair coats and sapphire blue eyes, Ragdolls are breathtaking. But their beauty is more than skin deep—their soft fur is surprisingly easy to care for and less prone to matting than other longhair breeds."
        },
        {
            icon: <ShieldCheck className="h-12 w-12 text-primary mb-4" />,
            title: "Health Tested",
            description: "We are committed to the longevity of the breed. All our breeding cats are DNA tested negative for HCM (Hypertrophic Cardiomyopathy) and PKD (Polycystic Kidney Disease) to ensure your kitten has the healthiest genetic start possible."
        }
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-serif text-4xl font-bold">Why a Ragdoll?</h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                        Often called "puppy-cats," Ragdolls are unique in the feline world. They greet you at the door, follow you room to room, and are famous for going completely limp in your arms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-sm bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                            <CardHeader className="flex flex-col items-center text-center pb-4">
                                {feature.icon}
                                <CardTitle className="font-serif text-2xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground leading-loose">
                                {feature.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
