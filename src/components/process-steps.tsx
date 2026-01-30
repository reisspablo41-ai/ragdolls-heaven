import { FileText, CreditCard, Home } from 'lucide-react'

export function ProcessSteps() {
    const steps = [
        {
            icon: FileText,
            title: "1. Apply",
            description: "Fill out our adoption questionnaire to help us match you with the perfect kitten."
        },
        {
            icon: CreditCard,
            title: "2. Reserve",
            description: "Place a non-refundable deposit (40% of the total fee) to secure your chosen companion until they are ready to go home."
        },
        {
            icon: Home,
            title: "3. Go Home",
            description: "Welcome your new family member at 12–14 weeks, fully vetted and socialized."
        }
    ]

    return (
        <div className="w-full py-12">
            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-4">
                        <div className="w-24 h-24 rounded-full bg-background border-4 border-secondary flex items-center justify-center shadow-sm">
                            <step.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="font-serif text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
