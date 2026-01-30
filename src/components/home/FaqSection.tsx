import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
    const faqs = [
        {
            question: "What is included with my kitten?",
            answer: "Every Ragdoll Heaven kitten comes with TICA registration papers, age-appropriate vaccinations, a microchip, a 2-year genetic health guarantee (HCM/PKD), a starter food kit, and a blanket that smells like mom to help with the transition."
        },
        {
            question: "Do you ship your kittens?",
            answer: "Yes, we ship kittens! While we love it when new owners pick up their kittens in person, we understand that's not always possible. We offer safe and reliable shipping options using a personalized flight nanny who will accompany your kitten in the cabin for an additional fee. We do not ship kittens as cargo to ensure their safety and comfort."
        },
        {
            question: "At what age can I bring my kitten home?",
            answer: "Kittens stay with us until they are 12-14 weeks old. This extra time is crucial for their immune system development and social skills. They learn bite inhibition and litter box habits from their mother and siblings during these weeks."
        },
        {
            question: "Are the parents health tested?",
            answer: "Absolutely. We are a closed cattery, meaning our breeding cats are strictly indoor-only and do not interact with outside cats. All parents are DNA tested negative for HCM (Hypertrophic Cardiomyopathy) and PKD (Polycystic Kidney Disease) before breeding."
        },
        {
            question: "Can I visit the cattery?",
            answer: "For the safety and health of our young kittens (who haven't received all vaccinations yet), we do not allow casual visits. However, we are happy to schedule video calls so you can see the kittens and their environment live."
        }
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">
                        Common questions about bringing a Ragdoll into your life.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
