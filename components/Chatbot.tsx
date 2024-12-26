"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Phone, Mail } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChatbot = () => setIsOpen(!isOpen)

  const whatsappLink = "https://wa.me/919952500516"
  const emailLink = "mailto:owaisemohammed1@gmail.com"

  return (
    <div>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Contact Us</h3>
            <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="w-full flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                WhatsApp
              </Button>
            </a>
            <a href={emailLink}>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                Email
              </Button>
            </a>
          </div>
        </div>
      )}
      <Button
        onClick={toggleChatbot}
        className="rounded-full w-12 h-12 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  )
}

