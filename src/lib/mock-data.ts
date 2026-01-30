export type Kitten = {
    id: string
    name: string
    gender: 'Male' | 'Female'
    color: string
    pattern: string
    price: number
    status: 'Available' | 'Reserved' | 'Sold'
    birth_date: string
    description: string
    image: string
}

export const MOCK_KITTENS: Kitten[] = [
    {
        id: '1',
        name: 'Luna',
        gender: 'Female',
        color: 'Blue',
        pattern: 'Bicolor',
        price: 2500,
        status: 'Available',
        birth_date: '2025-11-15',
        description: 'A sweet and playful girl who loves to cuddle. She has perfect markings and deep blue eyes.',
        image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1000&auto=format&fit=crop', // Stock image substitute
    },
    {
        id: '2',
        name: 'Oliver',
        gender: 'Male',
        color: 'Seal',
        pattern: 'Mitted',
        price: 2400,
        status: 'Available',
        birth_date: '2025-11-15',
        description: 'Oliver is a gentle giant in the making. He loves food and chasing feather toys.',
        image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: '3',
        name: 'Milo',
        gender: 'Male',
        color: 'Blue',
        pattern: 'Colorpoint',
        price: 2200,
        status: 'Reserved',
        birth_date: '2025-11-10',
        description: 'Very active and vocal. Milo needs a home with lots of attention.',
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'Bella',
        gender: 'Female',
        color: 'Lilac',
        pattern: 'Bicolor',
        price: 2800,
        status: 'Available',
        birth_date: '2025-11-20',
        description: 'Rare lilac coloring. Bella is shy at first but warms up quickly.',
        image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1000&auto=format&fit=crop',
    }
]
