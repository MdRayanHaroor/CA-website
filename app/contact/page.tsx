"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from 'lucide-react'
import Map from '@/components/Map'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { metadata } from './metadata'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setNotification(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setNotification({ type: 'success', message: "Message sent successfully. We'll get back to you soon!" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setNotification({ type: 'error', message: "Failed to send message. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const toggleMap = () => setShowMap(!showMap)

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Get in touch with our expert team
        </p>
        <p className="text-xl text-gray-600 text-center mb-12">
          Whether you need accounting services, auditing, tax consultation, or financial advice in Chennai, our team of experienced professionals is here to assist you. As one of the top accounting firms in Tamil Nadu, we're committed to providing tailored solutions that meet the unique needs of your business.
        </p>
        {notification && (
          <Alert variant={notification.type === 'success' ? "default" : "destructive"} className="mb-6">
            <AlertTitle>{notification.type === 'success' ? "Success" : "Error"}</AlertTitle>
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" />
                  <span>190-192, 3rd Floor, Offisbay, Hamid Building, Anna Salai, Chennai - 600 006, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <span>+91 9952500516</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <span>owaisemohammed1@gmail.com</span>
                </div>
              </CardContent>
            </Card>
            <Button onClick={toggleMap} className="w-full mb-4">
              {showMap ? "Hide Location" : "Show Location"}
            </Button>
            {showMap && <Map />}
          </div>
        </div>
      </div>
    </div>
  )
}