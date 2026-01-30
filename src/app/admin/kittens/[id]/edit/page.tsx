import { createClient } from '@/utils/supabase/server'
import { KittenForm } from '@/components/admin/KittenForm'
import { notFound } from 'next/navigation'

export default async function EditKittenPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()

    const { data: kitten } = await supabase
        .from('kittens')
        .select(`
            *,
            kitten_images (
                id,
                image_url
            )
        `)
        .eq('id', id)
        .single()

    if (!kitten) {
        notFound()
    }

    // Cast the status and gender to match the specialized types expected by KittenForm
    // In a real app we'd validate this with Zod, but here we trust the DB enum mostly.
    const kittenData = {
        ...kitten,
        gender: kitten.gender as 'Male' | 'Female' | 'Mixed',
        status: kitten.status as 'Available' | 'Reserved' | 'Sold',
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold font-serif mb-8">Edit Kitten</h1>
            <KittenForm initialData={kittenData} />
        </div>
    )
}
