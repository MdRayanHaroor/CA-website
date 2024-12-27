import Slider from '@/components/Slider'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OWAISE AND ASSOCIATES | Leading Accounting Firm in Chennai',
  description: 'Top-rated accounting services in Chennai. Expert auditors, tax consultants, and financial advisors for businesses across Tamil Nadu.',
  keywords: 'accounting services Chennai, auditors Chennai, tax consultation Tamil Nadu, financial advisors Chennai, Owaise Associates',
}

export default function Home() {
  return (
    <>
      <Slider />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}

