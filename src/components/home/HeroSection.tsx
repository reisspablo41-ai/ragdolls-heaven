import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2500&auto=format&fit=crop"
                    alt="Ragdoll Cat Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
            </div>

            <div className="relative z-10 container px-4 text-center max-w-5xl mx-auto space-y-8">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                    More Than Just <br />
                    <span className="text-white/90">A Cat.</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-md font-medium leading-relaxed">
                    Velvet Paws Ragdolls are bred for that famous "flop," piercing blue eyes, and a dog-like devotion to their humans. Experience the difference of a kitten raised with heart.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link href="/kittens">
                        <Button size="lg" className="rounded-full px-10 text-xl h-16 bg-white text-black hover:bg-white/90 border-0 transition-transform hover:scale-105 duration-200">
                            Find Your Kitten
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button size="lg" variant="outline" className="rounded-full px-10 text-xl h-16 bg-transparent text-white border-2 border-white hover:bg-white/20 backdrop-blur-sm transition-transform hover:scale-105 duration-200">
                            Learn Our Process
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
