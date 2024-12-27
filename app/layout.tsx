import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { Toaster } from "@/components/ui/toaster"
import SEO from '@/components/SEO'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OWAISE AND ASSOCIATES | Top Accounting Services in Chennai',
  description: 'OWAISE AND ASSOCIATES offers expert financial services, auditing, and accounting solutions in Chennai. Trusted by businesses across Tamil Nadu.',
  keywords: 'accounting services Chennai, auditors Chennai, Owaise Associates, financial services Tamil Nadu, tax consultation Chennai, business accounting Chennai',
  openGraph: {
    title: 'OWAISE AND ASSOCIATES | Expert Accounting Services in Chennai',
    description: 'Leading accounting firm in Chennai offering comprehensive financial services, auditing, and tax consultation for businesses in Tamil Nadu.',
    url: 'https://www.owaiseassociates.com',
    siteName: 'OWAISE AND ASSOCIATES',
    images: [
      {
        url: 'https://www.owaiseassociates.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OWAISE AND ASSOCIATES office in Chennai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.owaiseassociates.com" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <SEO />
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

