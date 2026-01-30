import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { Plus, Trash2, Pencil } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { deleteKitten } from './actions'
import { redirect } from 'next/navigation'

export default async function AdminKittensPage() {
    const supabase = await createClient()

    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
        redirect('/login')
    }

    const { data: kittens, error } = await supabase
        .from('kittens')
        .select('*, kitten_images(image_url)')
        .order('created_at', { ascending: false })

    if (error) {
        return <div>Error loading kittens</div>
    }

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-serif">Manage Kittens</h1>
                    <p className="text-muted-foreground">View and manage your litter.</p>
                </div>
                <Link href="/admin/kittens/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Kitten
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border">
                <div className="grid grid-cols-1 divide-y">
                    {kittens?.map((kitten) => (
                        <div key={kitten.id} className="flex items-center p-4 gap-4 hover:bg-muted/50 transition-colors">
                            {/* Image Thumbnail */}
                            <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                {kitten.kitten_images?.[0]?.image_url ? (
                                    <Image
                                        src={kitten.kitten_images[0].image_url}
                                        alt={kitten.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full w-full text-muted-foreground text-xs">No Img</div>
                                )}
                            </div>

                            {/* Details */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-lg truncate">{kitten.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${kitten.status === 'Available' ? 'bg-green-100 text-green-700' :
                                        kitten.status === 'Reserved' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        {kitten.status}
                                    </span>
                                    <span>•</span>
                                    <span>{kitten.gender}</span>
                                    <span>•</span>
                                    <span>${kitten.price}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <Link href={`/admin/kittens/${kitten.id}/edit`}>
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <form action={async () => {
                                    'use server'
                                    await deleteKitten(kitten.id)
                                }}>
                                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/90 hover:bg-destructive/10">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    ))}
                    {kittens?.length === 0 && (
                        <div className="p-12 text-center text-muted-foreground">
                            No kittens found. Add one to get started!
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
