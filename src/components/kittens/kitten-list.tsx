'use client'

import { useState } from 'react'
import { KittenCard } from '@/components/kittens/kitten-card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

// Define the shape of the data we expect from the server
interface Kitten {
    id: string
    name: string
    gender: string
    price: number
    status: string
    birth_date: string
    description: string | null
    kitten_images: { image_url: string }[]
}

export function KittenList({ kittens }: { kittens: Kitten[] }) {
    const [selectedGenders, setSelectedGenders] = useState<string[]>([])
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

    const filteredKittens = kittens.filter(kitten => {
        const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(kitten.gender)
        const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(kitten.status)
        return genderMatch && statusMatch
    })

    const toggleGender = (gender: string) => {
        setSelectedGenders(prev =>
            prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
        )
    }

    const toggleStatus = (status: string) => {
        setSelectedStatuses(prev =>
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="space-y-8 bg-card p-6 rounded-xl border h-fit sticky top-24">
                <div>
                    <h3 className="font-serif text-lg font-semibold mb-4">Gender</h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="male" checked={selectedGenders.includes('Male')} onCheckedChange={() => toggleGender('Male')} />
                            <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="female" checked={selectedGenders.includes('Female')} onCheckedChange={() => toggleGender('Female')} />
                            <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="mixed" checked={selectedGenders.includes('Mixed')} onCheckedChange={() => toggleGender('Mixed')} />
                            <Label htmlFor="mixed">Mixed</Label>
                        </div>
                    </div>
                </div>

                <Separator />

                <div>
                    <h3 className="font-serif text-lg font-semibold mb-4">Status</h3>
                    <div className="space-y-3">
                        {['Available', 'Reserved', 'Sold'].map(status => (
                            <div key={status} className="flex items-center space-x-2">
                                <Checkbox
                                    id={status}
                                    checked={selectedStatuses.includes(status)}
                                    onCheckedChange={() => toggleStatus(status)}
                                />
                                <Label htmlFor={status}>{status}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Kitten Grid */}
            <div className="md:col-span-3">
                {filteredKittens.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredKittens.map(kitten => (
                            <KittenCard
                                key={kitten.id}
                                kitten={{
                                    ...kitten,
                                    // Map the first image URL if available
                                    image_url: kitten.kitten_images?.[0]?.image_url,
                                    // DB doesn't have color/pattern columns yet, so we omit/null them
                                    color: undefined,
                                    pattern: undefined,
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No kittens match your selected filters.</p>
                        <button
                            onClick={() => { setSelectedGenders([]); setSelectedStatuses([]) }}
                            className="text-primary hover:underline mt-2"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
