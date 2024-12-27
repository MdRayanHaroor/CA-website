import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Our Services | OWAISE AND ASSOCIATES - Chennai\'s Premier Accounting Firm',
  description: 'Comprehensive accounting services, auditing, tax consultation, and financial advisory in Chennai. Expert solutions tailored for businesses in Tamil Nadu.',
  keywords: 'accounting services Chennai, auditors Chennai, tax consultation Tamil Nadu, financial advisory Chennai, Owaise Associates services',
}

export default function ServicesPage() {
  const services = [
    {
      title: "Accounting Services",
      description: "Comprehensive accounting solutions including bookkeeping, financial statements, and reporting. Our expert team in Chennai ensures accurate record-keeping and timely financial insights for your business in Tamil Nadu.",
      duration: "Ongoing",
    },
    {
      title: "Auditing",
      description: "Thorough audit services by certified auditors in Chennai. We verify financial accuracy, assess internal controls, and provide assurance to stakeholders about your financial statements, ensuring compliance with Indian accounting standards.",
      duration: "2-4 weeks",
    },
    {
      title: "Tax Consultation",
      description: "Expert tax planning and consultation services to help Chennai businesses navigate complex tax regulations. Our tax consultants optimize your tax position while ensuring full compliance with local and national tax laws.",
      duration: "1-2 hours initial consultation",
    },
    {
      title: "Financial Advisory",
      description: "Strategic financial advice for businesses in Chennai and across Tamil Nadu. Our financial advisors help you make informed decisions, improve financial performance, and achieve your business goals in the competitive Indian market.",
      duration: "Customized to client needs",
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

