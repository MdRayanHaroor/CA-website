"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BookNowPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    service: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const services = [
    { id: "accounting", name: "Accounting Services", duration: "1 hr 30 min" },
    { id: "tax", name: "Tax Consultation", duration: "1 hr" },
    { id: "audit", name: "Audit Service", duration: "2 hr" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setNotification(null)

    const bookingData = {
      ...formData,
      date: date?.toISOString().split('T')[0],
    }

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      if (response.ok) {
        setNotification({ type: 'success', message: "Request received, we will get back to you shortly." })
        setFormData({ name: "", email: "", phone: "", description: "", service: "" })
        setDate(new Date())
      } else {
        throw new Error('Failed to send booking request')
      }
    } catch (error) {
      setNotification({ type: 'error', message: "Failed to send booking request. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Book a Consultation</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Schedule your consultation with our expert team
        </p>
        {notification && (
          <Alert variant={notification.type === 'success' ? "default" : "destructive"} className="mb-6">
            <AlertTitle>{notification.type === 'success' ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        )}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description <span className="text-sm text-gray-500">(optional)</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Provide any additional details about your consultation needs"
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Select Service</Label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} ({service.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Confirm Booking"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

