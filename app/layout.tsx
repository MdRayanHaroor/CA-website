import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OWAISE AND ASSOCIATES | Professional Accounting Services',
  description: 'OWAISE AND ASSOCIATES offers expert financial services for businesses and individuals. Contact us for reliable accounting solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="fixed bottom-4 right-4 z-50">
          <Chatbot />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

