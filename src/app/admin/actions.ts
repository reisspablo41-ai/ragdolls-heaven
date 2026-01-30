'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const kittenSchema = z.object({
    name: z.string().min(1),
    price: z.coerce.number().min(0),
    gender: z.enum(['Male', 'Female', 'Mixed']),
    status: z.enum(['Available', 'Reserved', 'Sold']),
    age_weeks: z.coerce.number().int().min(0),
    description: z.string().optional(),
})

export async function addKitten(formData: FormData, imageUrls: string[]) {
    const supabase = await createClient()

    // 1. Validate Form Data
    const rawData = {
        name: formData.get('name'),
        price: formData.get('price'),
        gender: formData.get('gender'),
        status: formData.get('status'),
        age_weeks: formData.get('age_weeks'),
        description: formData.get('description'),
    }

    const result = kittenSchema.safeParse(rawData)

    if (!result.success) {
        return { error: 'Invalid form data' }
    }

    const { data } = result

    // 2. Insert Kitten
    const { data: kitten, error: kittenError } = await supabase
        .from('kittens')
        .insert({
            ...data,
            is_featured: false, // Default
        })
        .select()
        .single()

    if (kittenError) {
        console.error('DB Error:', kittenError)
        return { error: 'Failed to create kitten record' }
    }

    // 3. Insert Images
    if (imageUrls.length > 0) {
        const { error: imageError } = await supabase
            .from('kitten_images')
            .insert(
                imageUrls.map((url, index) => ({
                    kitten_id: kitten.id,
                    image_url: url,
                    display_order: index,
                }))
            )

        if (imageError) {
            console.error('Image DB Error:', imageError)
            // Note: We might want to delete the kitten here if images fail, but keeping it for now
            return { error: 'Kitten created but failed to save images' }
        }
    }

    revalidatePath('/kittens')
    revalidatePath('/admin/kittens')
    return { success: true }
}

export async function updateKitten(id: string, formData: FormData, imageUrls: string[]) {
    const supabase = await createClient()

    // 1. Validate Form Data
    const rawData = {
        name: formData.get('name'),
        price: formData.get('price'),
        gender: formData.get('gender'),
        status: formData.get('status'),
        age_weeks: formData.get('age_weeks'),
        description: formData.get('description'),
    }

    const result = kittenSchema.safeParse(rawData)

    if (!result.success) {
        return { error: 'Invalid form data' }
    }

    const { data } = result

    // 2. Update Kitten
    const { error: kittenError } = await supabase
        .from('kittens')
        .update(data)
        .eq('id', id)

    if (kittenError) {
        console.error('DB Error:', kittenError)
        return { error: 'Failed to update kitten record' }
    }

    // 3. Insert New Images
    // Note: Existing images are managed separately via delete/order updates if needed.
    // This simplified version mostly APPEARS to handle adding new images. 
    // Ideally we might want a more complex sync, but appending new ones is a good start.
    if (imageUrls.length > 0) {
        const { error: imageError } = await supabase
            .from('kitten_images')
            .insert(
                imageUrls.map((url, index) => ({
                    kitten_id: id,
                    image_url: url,
                    display_order: 99 + index, // Append to end
                }))
            )

        if (imageError) {
            console.error('Image DB Error:', imageError)
            return { error: 'Kitten updated but failed to save new images' }
        }
    }

    revalidatePath('/kittens')
    revalidatePath(`/kittens/${id}`)
    revalidatePath('/admin/kittens')
    return { success: true }
}
