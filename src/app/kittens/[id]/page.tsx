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

    const imageUrl = kitten.kitten_images?.[0]?.image_url

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
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-muted">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={kitten.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                        )}
                        <div className="absolute top-6 right-6">
                            <Badge className={`text-lg px-4 py-1 ${kitten.status === 'Available' ? 'bg-green-500/90' :
                                kitten.status === 'Reserved' ? 'bg-amber-500/90' : 'bg-red-500/90'
                                }`}>
                                {kitten.status}
                            </Badge>
                        </div>
                    </div>
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
                                <form className="space-y-4">
                                    <input type="hidden" name="kitten_id" value={kitten.id} />
                                    <input type="hidden" name="kitten_name" value={kitten.name} />

                                    <div className="space-y-2">
                                        <Label htmlFor="kitten_display">Kitten</Label>
                                        <Input id="kitten_display" value={kitten.name} readOnly className="bg-muted" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" name="name" placeholder="Your name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" name="message" placeholder={`I'm interested in ${kitten.name}...`} required />
                                    </div>
                                    <Button size="lg" className="w-full">Send Inquiry</Button>
                                </form>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}
