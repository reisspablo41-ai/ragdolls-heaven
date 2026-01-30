'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: '/kittens', label: 'Available Kittens' },
        { href: '/care', label: 'Education & Care' },
        { href: '/about', label: 'About Us' },
        { href: '/testimonials', label: 'Happy Families' },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tight text-primary">
                    <Image
                        src="/ragdoll.png"
                        alt="Ragdoll Heaven Logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                    Ragdoll Heaven
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/apply">
                        <Button variant="default" className="rounded-full px-6">
                            Apply Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="font-serif text-left">Ragdoll Heaven</SheetTitle>
                            </SheetHeader>
                            <div className="mt-8 flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Link href="/apply" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full rounded-full">
                                        Apply Now
                                    </Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
