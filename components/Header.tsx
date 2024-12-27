"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          OWAISE AND ASSOCIATES
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link 
                href={item.href} 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Desktop Book Now Button */}
        <div className="hidden md:block">
          <Link href="/book-now">
            <Button>Book Now</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/book-now" 
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

