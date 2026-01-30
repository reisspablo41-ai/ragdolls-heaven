import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

export function GallerySection() {
    const images = [
        "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=800&auto=format&fit=crop",
    ]

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto text-center">
                <div className="mb-12 space-y-4">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">Life at Velvet Paws</h2>
                    <p className="text-muted-foreground text-lg">
                        Follow our daily adventures on Instagram.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {images.map((src, index) => (
                        <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                <Link href="https://instagram.com" target="_blank">
                    <Button variant="outline" size="lg" className="rounded-full gap-2">
                        <Instagram className="w-5 h-5" />
                        Follow @VelvetPaws
                    </Button>
                </Link>
            </div>
        </section>
    )
}
