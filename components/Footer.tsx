import Link from 'next/link'
import Map from './Map'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">OWAISE AND ASSOCIATES</h3>
            <p className="text-blue-200">Expert financial services for your business success.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-blue-200 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/book-now" className="text-blue-200 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-blue-200">190-192, 3rd Floor, Offisbay,</p>
            <p className="text-blue-200">Hamid Building, Anna Salai,</p>
            <p className="text-blue-200">Chennai - 600 006, Tamil Nadu, India</p>
            <a href="https://wa.me/919952500516" className="text-blue-200 hover:text-white transition-colors flex items-center mt-2">
              <Phone className="mr-2" size={16} />
              +91 9952500516
            </a>
            <a href="mailto:owaisemohammed1@gmail.com" className="text-blue-200 hover:text-white transition-colors flex items-center mt-2">
              <Mail className="mr-2" size={16} />
              owaisemohammed1@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8">
          <Map />
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">&copy; {new Date().getFullYear()} OWAISE AND ASSOCIATES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

