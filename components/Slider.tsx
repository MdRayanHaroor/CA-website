"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "OWAISE AND ASSOCIATES",
    description: "Your Trusted Partner for Professional Accounting Services",
    bgColor: "from-blue-900 to-purple-900",
    textColor: "text-white",
    buttonText: "Explore Our Services",
    buttonLink: "/services"
  },
  {
    id: 2,
    title: "Our Services",
    description: "Comprehensive accounting, tax, and audit solutions tailored to your needs",
    bgColor: "from-green-900 to-teal-900",
    textColor: "text-white",
    buttonText: "View Services",
    buttonLink: "/services"
  },
  {
    id: 3,
    title: "About Us",
    description: "Years of experience and expertise in financial management",
    bgColor: "from-purple-900 to-indigo-900",
    textColor: "text-white",
    buttonText: "Learn More",
    buttonLink: "/#about"
  },
  {
    id: 4,
    title: "Contact Us",
    description: "Get in touch with our expert team for personalized assistance",
    bgColor: "from-red-900 to-pink-900",
    textColor: "text-white",
    buttonText: "Contact Now",
    buttonLink: "/contact"
  },
  {
    id: 5,
    title: "Book a Consultation",
    description: "Schedule your free consultation with our financial experts",
    bgColor: "from-yellow-800 to-orange-900",
    textColor: "text-white",
    buttonText: "Book Now",
    buttonLink: "/book-now"
  }
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[500px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${slides[currentSlide].bgColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center px-4">
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${slides[currentSlide].textColor}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              className={`text-xl mb-8 ${slides[currentSlide].textColor}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href={slides[currentSlide].buttonLink}>
                <Button size="lg" variant="secondary">
                  {slides[currentSlide].buttonText}
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

