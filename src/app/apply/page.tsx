'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'

export default function ApplyPage() {
    const [step, setStep] = useState(1)
    const totalSteps = 3

    // Mock submission handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("Application Submitted! (This is a demo)")
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl font-bold mb-4">Adoption Application</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    We care deeply about where our kittens go. Please fill out this form to help us find the perfect match for you.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Sidebar Info */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="bg-secondary/30 border-none">
                        <CardHeader>
                            <CardTitle className="font-serif">The Process</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 relative">
                            {[
                                { title: "Application Review", desc: "We review all applications within 48 hours." },
                                { title: "Phone Interview", desc: "A brief chat to get to know you better." },
                                { title: "Deposit", desc: "A non-refundable deposit (40% of the total fee) secures your spot." },
                                { title: "Waitlist / Selection", desc: "Choose your kitten in order of deposit." },
                                { title: "Go Home Day", desc: "Kittens go home at 12-14 weeks old." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 relative z-10">
                                    <div className="flex flex-col items-center">
                                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                                            {i + 1}
                                        </div>
                                        {i < 4 && <div className="w-px h-full bg-primary/20 my-1" />}
                                    </div>
                                    <div className="pb-6">
                                        <h4 className="font-semibold text-sm">{step.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/10">
                        <CardHeader>
                            <CardTitle className="font-serif text-lg">Requirements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    Indoor-only home
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    No declawing contract
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    Veterinary references
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">•</span>
                                    Landlord approval (if renting)
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Form */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                {step === 1 && "Contact Information"}
                                {step === 2 && "Home & Lifestyle"}
                                {step === 3 && "Preferences"}
                            </CardTitle>
                            <CardDescription>Step {step} of {totalSteps}</CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-6">

                                {/* Step 1: Contact Info */}
                                {step === 1 && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="Jane" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Doe" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="jane@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="address">Full Address</Label>
                                            <Textarea id="address" placeholder="1234 Cat St, Meow City, CA 90210" required />
                                        </div>
                                    </>
                                )}

                                {/* Step 2: Lifestyle */}
                                {step === 2 && (
                                    <>
                                        <div className="space-y-3">
                                            <Label>Do any members of your household have cat allergies?</Label>
                                            <RadioGroup defaultValue="no">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="yes" id="allergies-yes" />
                                                    <Label htmlFor="allergies-yes">Yes</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="no" id="allergies-no" />
                                                    <Label htmlFor="allergies-no">No</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Do you have other pets?</Label>
                                            <Textarea placeholder="Please list type, age, and temperament of current pets..." />
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Housing Type</Label>
                                            <RadioGroup defaultValue="house">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="house" id="house" />
                                                    <Label htmlFor="house">House</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="apartment" id="apartment" />
                                                    <Label htmlFor="apartment">Apartment/Condo</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </>
                                )}

                                {/* Step 3: Preferences */}
                                {step === 3 && (
                                    <>
                                        <div className="space-y-3">
                                            <Label>Gender Preference</Label>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="pref-male" />
                                                    <Label htmlFor="pref-male">Male</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="pref-female" />
                                                    <Label htmlFor="pref-female">Female</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="pref-no" />
                                                    <Label htmlFor="pref-no">No Preference</Label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Color/Pattern Preference</Label>
                                            <Textarea placeholder="e.g. Blue Bicolor, Seal Mitted... (Optional)" />
                                        </div>

                                        <div className="space-y-3">
                                            <Label>Why a Ragdoll?</Label>
                                            <Textarea placeholder="Tell us why you chose this breed..." required />
                                        </div>
                                    </>
                                )}

                            </CardContent>
                            <CardFooter className="flex justify-between">
                                {step > 1 ? (
                                    <Button type="button" variant="outline" onClick={() => setStep(s => s - 1)}>
                                        Previous
                                    </Button>
                                ) : (
                                    <div></div> // Spacer
                                )}

                                {step < totalSteps ? (
                                    <Button type="button" onClick={() => setStep(s => s + 1)}>
                                        Next Step
                                    </Button>
                                ) : (
                                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Submit Application
                                    </Button>
                                )}
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}
