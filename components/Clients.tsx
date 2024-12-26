import Image from 'next/image'

export default function Clients() {
  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=80&width=80" },
    { name: "GreenEnergy", logo: "/placeholder.svg?height=80&width=80" },
    { name: "MediHealth", logo: "/placeholder.svg?height=80&width=80" },
    { name: "BuildRight", logo: "/placeholder.svg?height=80&width=80" },
    { name: "EduSmart", logo: "/placeholder.svg?height=80&width=80" },
    { name: "FoodDelights", logo: "/placeholder.svg?height=80&width=80" },
  ]

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={client.logo} alt={client.name} width={80} height={80} className="grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

