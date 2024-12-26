import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "Accounting Services",
      description: "Comprehensive accounting solutions including bookkeeping, financial statements, and reporting. We ensure accurate record-keeping and timely financial insights for your business.",
      duration: "1 hr 30 min",
    },
    {
      title: "Tax Consultation",
      description: "Expert tax planning and consultation services to help you navigate complex tax regulations and optimize your tax position while ensuring compliance.",
      duration: "1 hr",
    },
    {
      title: "Audit Service",
      description: "Thorough audit services to verify financial accuracy, assess internal controls, and provide assurance to stakeholders about your financial statements.",
      duration: "2 hr",
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Professional financial services tailored to your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500 mb-6">Duration: {service.duration}</p>
                <Link href="/book-now">
                  <Button className="w-full">Book Consultation</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

