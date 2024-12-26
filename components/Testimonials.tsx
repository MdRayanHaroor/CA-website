import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      company: "Ideassion Technology Solutions LLP",
      logo: "/placeholder.svg?height=50&width=50",
      quote: "I was impressed by the personalized attention and expertise provided by Owaise and Associates. Their team guided me through complex financial matters with ease, making them my top choice for accounting services."
    },
    {
      company: "Offisbay Realty Private Limited",
      logo: "/placeholder.svg?height=50&width=50",
      quote: "Owaise and Associates exceeded my expectations with their professionalism and attention to detail. Their tailored financial solutions have significantly improved the financial health of my business."
    },
    {
      company: "Eva Care Life Sciences Private Limited",
      logo: "/placeholder.svg?height=50&width=50",
      quote: "Choosing Owaise and Associates for my accounting needs was a decision I'll never regret. Their dedication to transparency and accuracy in tax solutions sets them apart in the industry."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-green-800">CLIENT STORIES</h2>
        <p className="text-xl mb-12 text-center text-green-600">Delivering Exceptional Service</p>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-12 text-center">
            At Owaise and Associates, client satisfaction is at the core of our mission. We are dedicated to the financial well-being of each individual and business we serve, demonstrating our commitment through attentive service and reliable support. Read on to learn firsthand about our client-centric approach.
          </p>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 20 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.5, delay: index * 0.2 }}
              // >
              //   <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              //     <CardContent className="p-6">
              //       <div className="flex items-start gap-6">
              //         <div className="relative w-12 h-12 flex-shrink-0">
              //           <Image
              //             src={testimonial.logo}
              //             alt={testimonial.company}
              //             fill
              //             className="object-contain"
              //           />
              //         </div>
              //         <div>
              //           <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              //           <p className="font-semibold text-green-700">{testimonial.company}</p>
              //         </div>
              //       </div>
              //     </CardContent>
              //   </Card>
              // </motion.div>
              <div>test</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

