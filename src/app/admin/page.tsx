
import { createClient } from '@/utils/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cat, MessageSquare, Star, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
    const supabase = await createClient()

    // 1. Fetch Stats
    // Ideally use count(), but minimal selection is fine for small datasets
    const { count: kittenCount } = await supabase.from('kittens').select('*', { count: 'exact', head: true })
    const { count: availableCount } = await supabase.from('kittens').select('*', { count: 'exact', head: true }).eq('status', 'Available')
    const { count: inquiryCount } = await supabase.from('inquiries').select('*', { count: 'exact', head: true }).eq('status', 'New')
    const { count: reviewsCount } = await supabase.from('testimonials').select('*', { count: 'exact', head: true })

    // 2. Fetch Recent Inquiries
    const { data: recentInquiries } = await supabase
        .from('inquiries')
        .select('*, kittens(name)')
        .order('created_at', { ascending: false })
        .limit(5)

    return (
        <div className="space-y-8">
            <h1 className="font-serif text-3xl font-bold">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Kittens</CardTitle>
                        <Cat className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{kittenCount || 0}</div>
                        <p className="text-xs text-muted-foreground">{availableCount} Available</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Inquiries</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{inquiryCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Requires attention</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{reviewsCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Total reviews</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Link href="/admin/kittens/new" className="block">
                            <Button size="sm" className="w-full" variant="outline">Add Kitten</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Inquiries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentInquiries?.map((inquiry) => (
                                <div key={inquiry.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{inquiry.name}</p>
                                        <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                                        {inquiry.kittens && (
                                            <p className="text-xs text-primary mt-1">Interested in: {inquiry.kittens.name}</p>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-muted-foreground">{new Date(inquiry.created_at).toLocaleDateString()}</div>
                                        <div className={`text-xs font-medium mt-1 ${inquiry.status === 'New' ? 'text-blue-500' : 'text-gray-500'
                                            }`}>{inquiry.status}</div>
                                    </div>
                                </div>
                            ))}
                            {(!recentInquiries || recentInquiries.length === 0) && (
                                <div className="text-sm text-muted-foreground text-center py-8">No inquiries found.</div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Could add Recent Sales or something else here */}
            </div>
        </div>
    )
}
