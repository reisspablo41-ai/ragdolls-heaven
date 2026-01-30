import { KittenForm } from '@/components/admin/KittenForm'

export default function NewKittenPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-serif">Add New Kitten</h1>
                <p className="text-muted-foreground">Enter details and upload photos for the new litter.</p>
            </div>

            <KittenForm />
        </div>
    )
}
