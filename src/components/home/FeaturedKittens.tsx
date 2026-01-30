import { createClient } from '@/utils/supabase/server'
import { KittenCard } from '@/components/kitten-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export async function FeaturedKittens() {
    const supabase = await createClient()

    // Fetch 3 most recent kittens with their images
    const { data: kittens } = await supabase
        .from('kittens')
        .select('*, kitten_images(image_url)')
        .order('created_at', { ascending: false })
        .limit(4)

    // Map the data to match KittenCard props
    const featuredKittens = kittens?.map((kitten: any) => ({
        ...kitten,
        image_url: kitten.kitten_images?.[0]?.image_url || null
    })) || []

    return (
        <section className="py-24 container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="font-serif text-4xl font-bold">Available Kittens</h2>
                <p className="text-muted-foreground text-lg">
                    Meet the little ones looking for their forever homes.
                </p>
            </div>

            {featuredKittens.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredKittens.map((kitten) => (
                        <div key={kitten.id} className="h-full">
                            <KittenCard kitten={kitten} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-secondary/20 rounded-xl">
                    <p className="text-muted-foreground text-lg mb-4">No kittens currently listed. Check back soon!</p>
                    <p className="text-sm text-muted-foreground/80">Join our waiting list to be notified of new litters.</p>
                </div>
            )}

            <div className="text-center mt-12">
                <Link href="/kittens">
                    <Button variant="outline" size="lg" className="rounded-full px-8">
                        View All Kittens
                    </Button>
                </Link>
            </div>
        </section>
    )
}
