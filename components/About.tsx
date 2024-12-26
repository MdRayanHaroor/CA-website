import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function About() {
  const highlights = [
    "Expert Financial Solutions",
    "Personalized Service",
    "Years of Industry Experience",
    "Dedicated Support Team",
    "Comprehensive Financial Planning",
    "Modern Technology Integration"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">About OWAISE AND ASSOCIATES</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              OWAISE AND ASSOCIATES is a leading accounting firm based in Chennai, providing comprehensive financial services to businesses and individuals. With our extensive experience and expertise, we have established ourselves as a trusted partner for all accounting, tax, and financial consulting needs.
            </p>
            <p className="text-lg text-gray-700">
              Located at 190-192, 3rd Floor, Offisbay, Hamid Building, Anna Salai, Chennai, we serve clients across Tamil Nadu with dedication and professionalism. Our team of experienced professionals is committed to delivering exceptional service and innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md">
                  <CheckCircle className="text-green-600 h-5 w-5" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Experience & Expertise</h4>
                  <p>With years of experience in the industry, we bring deep expertise and knowledge to every client engagement.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Client-Centric Approach</h4>
                  <p>We prioritize understanding your unique needs and delivering tailored solutions that drive success.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Modern Solutions</h4>
                  <p>We leverage the latest technology and best practices to provide efficient and effective services.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Dedicated Support</h4>
                  <p>Our team is always available to assist you with any questions or concerns you may have.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

