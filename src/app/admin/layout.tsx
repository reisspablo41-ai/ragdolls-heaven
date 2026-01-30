import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, MessageSquare, Cat, Star, Settings, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const ADMIN_ID = 'e340d91b-ecd0-48c4-9acc-69026d5d77ed'

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
    { name: 'Kittens', href: '/admin/kittens', icon: Cat },
    { name: 'Testimonials', href: '/admin/testimonials', icon: Star },
    // Settings removed
]

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || user.id !== ADMIN_ID) {
        redirect('/')
    }

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-background">
            <div className="p-6 border-b">
                <Link href="/" className="font-serif text-xl font-bold text-primary">
                    Ragdoll Heaven Admin
                </Link>
            </div>
            <nav className="p-4 space-y-2 flex-1">
                {navigation.map((item) => {
                    const Icon = item.icon
                    return (
                        <Link key={item.name} href={item.href}>
                            <Button variant="ghost" className="w-full justify-start">
                                <Icon className="mr-2 h-4 w-4" />
                                {item.name}
                            </Button>
                        </Link>
                    )
                })}
            </nav>
            <div className="p-4 border-t">
                <Link href="/">
                    <Button variant="outline" className="w-full justify-start text-muted-foreground">
                        ← Back to Site
                    </Button>
                </Link>
            </div>
        </div>
    )

    return (
        <div className="flex min-h-screen bg-muted/40">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 border-r bg-background">
                <SidebarContent />
            </aside>

            {/* Mobile Header & Content */}
            <div className="flex-1 flex flex-col">
                <header className="md:hidden border-b bg-background p-4 flex items-center justify-between sticky top-0 z-10">
                    <Link href="/admin" className="font-serif text-lg font-bold text-primary">
                        Admin
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64">
                            {/* Accessible Title */}
                            <div className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </div>
                            <SidebarContent />
                        </SheetContent>
                    </Sheet>
                </header>

                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
