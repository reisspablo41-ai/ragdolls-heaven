import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { CheckCircle2, AlertTriangle, ShoppingBag } from 'lucide-react'

export default function CarePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16 space-y-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold">Ragdoll Care & Education</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Everything you need to know about welcoming a Ragdoll kitten into your home.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                        <CardTitle className="font-serif">The Temperament</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Ragdolls are known for their docile and placid nature. They love to be held and often go limp with pleasure, hence the name. They are strictly indoor cats due to their trusting nature.
                    </CardContent>
                </Card>
                <Card className="bg-secondary/30 border-secondary">
                    <CardHeader>
                        <CardTitle className="font-serif">The Coat</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Their semi-long coat is plush and silky. Surprisingly, it is relatively low maintenance compared to other long-haired breeds, but regular grooming is still needed to prevent mats.
                    </CardContent>
                </Card>
                <Card className="bg-muted border-muted-foreground/20">
                    <CardHeader>
                        <CardTitle className="font-serif">Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Ragdolls are a slow-maturing breed. They don't reach full size and coat development until they are 3-4 years old. Males can weigh up to 20 lbs!
                    </CardContent>
                </Card>
            </div>

            <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">Dietary Requirements</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            We feed a mix of high-quality wet food and grain-free dry kibble. Ragdolls can have sensitive stomachs, so any diet changes should be done gradually. We recommend continuing with the food we provide in your starter kit for at least the first month.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">Grooming Frequency</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            We recommend brushing your Ragdoll 2-3 times a week with a steel comb to remove loose fur and prevent tangles. Pay special attention to the "britches" (back legs) and behind the ears. Nail trimming should be done every 2 weeks.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">Litter Box Habits</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            Ragdolls are large cats, so they need large litter boxes. We use open, high-sided boxes with pellet litter. Kittiens are fully litter trained before they leave our home.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium">Health Issues to Watch For</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                            While generally healthy, Ragdolls can be prone to Hypertrophic Cardiomyopathy (HCM) and Polycystic Kidney Disease (PKD). All our breeding cats are DNA tested negative for these conditions.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Essential Resources Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                {/* Shopping List */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <ShoppingBag className="h-5 w-5" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold">New Kitten Essentials</h2>
                    </div>
                    <Card>
                        <CardContent className="pt-6">
                            <ul className="space-y-4">
                                {[
                                    { item: "High-sided Litter Box", note: "Ragdolls grow large!" },
                                    { item: "Pellet Litter", note: "Low dust & tracking" },
                                    { item: "Stainless Steel Comb", note: "For weekly grooming" },
                                    { item: "Scratching Post", note: "Tall enough for full stretch" },
                                    { item: "Cat Tree", note: "Sturdy base is a must" },
                                    { item: "Ceramic/Steel Bowls", note: "Prevents chin acne" },
                                    { item: "Feather Wand Toy", note: "For interactive bonding" }
                                ].map((supply, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="font-medium">{supply.item}</span>
                                            <p className="text-sm text-muted-foreground">{supply.note}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Kitten Proofing */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                            <AlertTriangle className="h-5 w-5" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold">Kitten Proofing 101</h2>
                    </div>
                    <Card className="border-orange-100 bg-orange-50/30">
                        <CardContent className="pt-6 space-y-6">
                            <p className="text-muted-foreground">
                                Kittens are curious! Before bringing your baby home, get down on your hands and knees to check for hazards.
                            </p>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-foreground">Toxic Plants</h4>
                                    <p className="text-sm text-muted-foreground">Lilies (deadly!), Poinsettias, Tulips, and Aloe Vera should be removed from the home.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-foreground">Hidden Dangers</h4>
                                    <p className="text-sm text-muted-foreground">Secure blind cords, cover electrical wires, and keep toilet lids closed.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-foreground">Small Objects</h4>
                                    <p className="text-sm text-muted-foreground">Hair ties, rubber bands, and needles are major choking hazards.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=2000&auto=format&fit=crop"
                    alt="Ragdoll cats playing"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="font-serif text-white text-3xl md:text-4xl font-bold text-center px-4">
                        Ready to welcome a Ragdoll into your life?
                    </h3>
                </div>
            </div>
        </div>
    )
}
