import { FileText, CalendarCheck, Home } from 'lucide-react'

export function AdoptionProcess() {
    const steps = [
        {
            icon: <FileText className="h-8 w-8 text-primary" />,
            title: "1. Apply",
            description: "Fill out our adoption questionnaire to help us match you with the perfect kitten."
        },
        {
            icon: <CalendarCheck className="h-8 w-8 text-primary" />,
            title: "2. Reserve",
            description: "Place a non-refundable deposit (40% of the total fee) to secure your chosen kitten once your application is approved."
        },
        {
            icon: <Home className="h-8 w-8 text-primary" />,
            title: "3. Go Home",
            description: "Welcome your new best friend home at 12–14 weeks of age fully vetted."
        }
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto text-center">
                <div className="mb-16 space-y-4">
                    <h2 className="font-serif text-4xl font-bold">Adoption Process</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Bringing a new family member home should be exciting, not stressful. We've made it simple.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-6 bg-background p-4 relative">
                            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center shadow-lg border-4 border-background z-10 transition-transform hover:scale-110 duration-300">
                                {step.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
