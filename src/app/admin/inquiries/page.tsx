import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function AdminInquiriesPage() {
    const mockInquiries = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", kitten: "Luna", date: "2026-01-25", status: "New" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", kitten: "General Inquiry", date: "2026-01-24", status: "Replied" },
        { id: 3, name: "Carol White", email: "carol@example.com", kitten: "Oliver", date: "2026-01-23", status: "New" },
    ]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Inquiries</h1>
                    <p className="text-muted-foreground">View and manage applications and messages.</p>
                </div>
            </div>

            <div className="border rounded-md bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Interest</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockInquiries.map((inquiry) => (
                            <TableRow key={inquiry.id}>
                                <TableCell>{inquiry.date}</TableCell>
                                <TableCell>
                                    <div className="font-medium">{inquiry.name}</div>
                                    <div className="text-xs text-muted-foreground">{inquiry.email}</div>
                                </TableCell>
                                <TableCell>{inquiry.kitten}</TableCell>
                                <TableCell>
                                    <Badge variant={inquiry.status === 'New' ? 'default' : 'secondary'}>{inquiry.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">View Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
