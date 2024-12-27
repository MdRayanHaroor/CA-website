import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Accounting Services",
      description: "Comprehensive accounting solutions for businesses in Chennai. We handle bookkeeping, financial statements, and reporting with precision.",
      link: "/services#accounting"
    },
    {
      title: "Auditing",
      description: "Expert auditors in Chennai providing thorough financial audits to ensure compliance and accuracy for your business.",
      link: "/services#auditing"
    },
    {
      title: "Tax Consultation",
      description: "Navigate complex tax regulations with our experienced tax consultants in Chennai. We optimize your tax position while ensuring compliance.",
      link: "/services#tax"
    },
    {
      title: "Financial Advisory",
      description: "Strategic financial advice to help your Chennai-based business grow and thrive in today's competitive market.",
      link: "/services#advisory"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Services in Chennai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                  <CheckCircle className="mr-2" size={16} />
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

