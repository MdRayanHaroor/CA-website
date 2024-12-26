import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to OWAISE AND ASSOCIATES</h1>
        <p className="text-xl mb-8">Your Trusted Partner for Professional Accounting Services</p>
        <div className="flex gap-4 justify-center">
          <Link href="/services">
            <Button size="lg" variant="secondary">
              Our Services
            </Button>
          </Link>
          <Link href="/book-now">
            <Button size="lg">
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

