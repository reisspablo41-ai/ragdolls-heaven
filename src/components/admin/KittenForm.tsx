'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Upload, X, Loader2 } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { addKitten, updateKitten } from '@/app/admin/actions'
import Image from 'next/image'

// Define a type for the kitten data we expect
type KittenData = {
    id: string
    name: string
    price: number
    gender: 'Male' | 'Female' | 'Mixed'
    status: 'Available' | 'Reserved' | 'Sold'
    age_weeks: number
    description: string | null
    kitten_images: { id: string; image_url: string }[]
}

export function KittenForm({ initialData }: { initialData?: KittenData }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [images, setImages] = useState<File[]>([])
    const [previews, setPreviews] = useState<string[]>([])
    const [uploading, setUploading] = useState(false)

    // State for existing images (only relevant in edit mode)
    const [existingImages, setExistingImages] = useState(initialData?.kitten_images || [])

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files)
            setImages(prev => [...prev, ...newFiles])

            const newPreviews = newFiles.map(file => URL.createObjectURL(file))
            setPreviews(prev => [...prev, ...newPreviews])
        }
    }

    const removeNewImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index))
        setPreviews(prev => {
            URL.revokeObjectURL(prev[index])
            return prev.filter((_, i) => i !== index)
        })
    }

    const removeExistingImage = async (imageId: string) => {
        if (!confirm('Are you sure you want to delete this image?')) return

        const supabase = createClient()
        const { error } = await supabase.from('kitten_images').delete().eq('id', imageId)

        if (error) {
            alert('Failed to delete image')
            console.error(error)
        } else {
            setExistingImages(prev => prev.filter(img => img.id !== imageId))
        }
    }

    const handleSubmit = async (formData: FormData) => {
        setUploading(true)
        try {
            const supabase = createClient()
            const imageUrls: string[] = []

            // 1. Upload New Images
            for (const file of images) {
                const fileExt = file.name.split('.').pop()
                const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
                const filePath = `${fileName}`

                const { error: uploadError } = await supabase.storage
                    .from('kitten-photos')
                    .upload(filePath, file)

                if (uploadError) throw new Error(`Image upload failed: ${uploadError.message}`)

                const { data: { publicUrl } } = supabase.storage
                    .from('kitten-photos')
                    .getPublicUrl(filePath)

                imageUrls.push(publicUrl)
            }

            // 2. Submit Data (Create or Update)
            startTransition(async () => {
                let result
                if (initialData) {
                    result = await updateKitten(initialData.id, formData, imageUrls)
                } else {
                    result = await addKitten(formData, imageUrls)
                }

                if (result?.error) {
                    alert(result.error)
                } else {
                    router.push('/admin/kittens')
                    router.refresh()
                }
            })
        } catch (error) {
            console.error('Error:', error)
            const message = error instanceof Error ? error.message : 'Failed to save kitten.'
            alert(message)
        } finally {
            setUploading(false)
        }
    }

    // Default values
    const defaultGender = initialData?.gender || undefined
    const defaultStatus = initialData?.status || 'Available'
    const defaultPrice = initialData?.price?.toString() || ''
    const defaultAge = initialData?.age_weeks?.toString() || ''

    return (
        <form action={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Basic Info */}
                <div className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required placeholder="e.g. Luna" defaultValue={initialData?.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="price">Price ($)</Label>
                        <Input id="price" name="price" type="number" required placeholder="2500" defaultValue={defaultPrice} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select name="gender" required defaultValue={defaultGender}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                    <SelectItem value="Mixed">Mixed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="status">Status</Label>
                            <Select name="status" defaultValue={defaultStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Available">Available</SelectItem>
                                    <SelectItem value="Reserved">Reserved</SelectItem>
                                    <SelectItem value="Sold">Sold</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="age_weeks">Age (Weeks)</Label>
                        <Input id="age_weeks" name="age_weeks" type="number" required placeholder="12" defaultValue={defaultAge} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Textarea
                            id="description"
                            name="description"
                            className="h-32"
                            placeholder="Describe personality, quirks, etc."
                            defaultValue={initialData?.description || ''}
                        />
                    </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-4">
                    <Label>Photos</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Existing Images */}
                        {existingImages.map((img) => (
                            <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden border">
                                <Image src={img.image_url} alt="Existing" fill className="object-cover" />
                                <button
                                    type="button"
                                    onClick={() => removeExistingImage(img.id)}
                                    className="absolute top-1 right-1 bg-red-500/80 text-white rounded-full p-1 hover:bg-red-600"
                                    title="Delete Image"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        ))}

                        {/* New Previews */}
                        {previews.map((src, i) => (
                            <div key={i} className="relative aspect-square rounded-lg overflow-hidden border">
                                <Image src={src} alt="Preview" fill className="object-cover" />
                                <button
                                    type="button"
                                    onClick={() => removeNewImage(i)}
                                    className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        ))}

                        <label className="flex flex-col items-center justify-center aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 cursor-pointer bg-muted/5 transition-colors">
                            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                            <span className="text-xs text-muted-foreground">Add Photos</span>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleImageSelect}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                </Button>
                <Button type="submit" disabled={uploading || isPending} className="min-w-[150px]">
                    {(uploading || isPending) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {uploading ? 'Uploading...' : isPending ? 'Saving...' : (initialData ? 'Update Kitten' : 'Save Kitten')}
                </Button>
            </div>
        </form>
    )
}
