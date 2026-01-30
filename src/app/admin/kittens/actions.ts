'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteKitten(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('kittens')
        .delete()
        .eq('id', id)

    if (error) {
        return { error: 'Failed to delete kitten' }
    }

    revalidatePath('/admin/kittens')
    revalidatePath('/kittens')
    return { success: true }
}
