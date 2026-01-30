import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface KittenProps {
    id: string
    name: string
    price: number | string
    status: string
    // These might be undefined/null from the DB join until we fully implement them
    color?: string | null | undefined
    pattern?: string | null | undefined
    gender?: string | null | undefined
    description?: string | null
    // Changed: accept image_url instead of 'image' which was numeric/mock
    image_url?: string | null | undefined
}

export function KittenCard({ kitten }: { kitten: KittenProps }) {
    // Determine badge color based on status
    const badgeColor =
        kitten.status === 'Available' ? 'bg-green-500/90 hover:bg-green-600' :
            kitten.status === 'Reserved' ? 'bg-amber-500/90 hover:bg-amber-600' :
                'bg-red-500/90 hover:bg-red-600'

    return (
        <Link href={`/kittens/${kitten.id}`} className="group h-full">
            <Card className="h-full overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm flex flex-col">
                <CardHeader className="p-0">
                    <div className="relative h-64 w-full overflow-hidden bg-muted">
                        {/* Only render Image if image_url is truthy */}
                        {kitten.image_url ? (
                            <Image
                                src={kitten.image_url}
                                alt={kitten.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground bg-secondary/10">
                                No Image
                            </div>
                        )}
                        <div className="absolute top-4 right-4">
                            <Badge className={`${badgeColor} text-white border-0`}>
                                {kitten.status}
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 space-y-2 flex-grow">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">{kitten.name}</CardTitle>
                            <CardDescription className="text-primary font-medium mt-1">
                                {[
                                    kitten.color,
                                    kitten.pattern,
                                    kitten.gender,
                                    kitten.age_weeks ? `${kitten.age_weeks} weeks` : null
                                ].filter(Boolean).join(' • ')}
                            </CardDescription>
                        </div>
                        <span className="font-semibold text-lg whitespace-nowrap ml-2">
                            ${Number(kitten.price).toLocaleString()}
                        </span>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 pt-2">
                        {kitten.description}
                    </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        View Profile
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}
