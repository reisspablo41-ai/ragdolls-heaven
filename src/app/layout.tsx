import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ragdoll Heaven | Premium Cattery',
  description: 'Breeding minimal purebred Ragdoll kittens with love and care.',
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
          Ragdoll Heaven
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/kittens" className="text-sm font-medium hover:text-primary transition-colors">
            Available Kittens
          </Link>
          <Link href="/care" className="text-sm font-medium hover:text-primary transition-colors">
            Education & Care
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/apply">
            <Button variant="default" className="rounded-full px-6">
              Apply Now
            </Button>
          </Link>
        </div>
        {/* Mobile Menu (Simplified for now) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Open menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-primary">Ragdoll Heaven</h3>
            <p className="text-sm text-muted-foreground">
              Ethical breeding of TICA registered Ragdoll kittens. Health tested, socialized, and loved.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/kittens" className="hover:text-primary transition-colors">Available Kittens</Link></li>
              <li><Link href="/care" className="hover:text-primary transition-colors">Care Guide</Link></li>
              <li><Link href="/health-guarantee" className="hover:text-primary transition-colors">Health Guarantee</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">Happy Families</Link></li>
              <li><Link href="/apply" className="hover:text-primary transition-colors">Application</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@ragdollheaven.com</li>
              <li>Location: San Francisco, CA</li>
              <li>Hours: Mon-Fri 9am - 6pm</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">IG</div>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">FB</div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ragdoll Heaven. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
