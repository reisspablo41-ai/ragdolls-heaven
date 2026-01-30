import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { createClient } from '@/utils/supabase/server'
import { InquiryForm } from '@/components/kittens/inquiry-form'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default async function KittenProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()

    const { data: kitten } = await supabase
        .from('kittens')
        .select(`
            *,
            kitten_images (
                image_url
            )
        `)
        .eq('id', id)
        .single()

    if (!kitten) {
        notFound()
    }

    // Collect all images: from the related table and the main image validation
    const images = kitten.kitten_images?.map((k: any) => k.image_url) || []
    // If no related images, fall back to the main image column if it exists and isn't already included (though typical setup might duplicate)
    // For simplicity, if gallery is empty, use main image.
    if (images.length === 0 && kitten.image_url) {
        images.push(kitten.image_url)
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <Link href="/kittens" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    ← Back to Available Kittens
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Images */}
                <div className="space-y-4">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {images.length > 0 ? (
                                images.map((url: string, index: number) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-muted">
                                            <Image
                                                src={url}
                                                alt={`${kitten.name} - Image ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                            <div className="absolute top-6 right-6 z-10">
                                                <Badge className={`text-lg px-4 py-1 ${kitten.status === 'Available' ? 'bg-green-500/90' :
                                                    kitten.status === 'Reserved' ? 'bg-amber-500/90' : 'bg-red-500/90'
                                                    }`}>
                                                    {kitten.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))
                            ) : (
                                <CarouselItem>
                                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-muted flex items-center justify-center">
                                        <div className="text-muted-foreground">No Image</div>
                                        <div className="absolute top-6 right-6">
                                            <Badge className={`text-lg px-4 py-1 ${kitten.status === 'Available' ? 'bg-green-500/90' :
                                                kitten.status === 'Reserved' ? 'bg-amber-500/90' : 'bg-red-500/90'
                                                }`}>
                                                {kitten.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        {images.length > 1 && (
                            <>
                                <CarouselPrevious className="left-4" />
                                <CarouselNext className="right-4" />
                            </>
                        )}
                    </Carousel>
                </div>

                {/* Right Column: Details & Form */}
                <div className="space-y-8">
                    <div>
                        <h1 className="font-serif text-5xl font-bold mb-2">{kitten.name}</h1>
                        <p className="text-2xl text-primary font-medium mb-6">${Number(kitten.price).toLocaleString()}</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {kitten.description}
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-serif">Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">Breed</TableCell>
                                        <TableCell>Ragdoll</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Gender</TableCell>
                                        <TableCell>{kitten.gender}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">Age</TableCell>
                                        <TableCell>{kitten.age_weeks} Weeks</TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {kitten.status === 'Available' && (
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="font-serif">Inquire about {kitten.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <InquiryForm kitten={{ id: kitten.id, name: kitten.name }} />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}
