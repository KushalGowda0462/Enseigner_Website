import { customers } from "@/data/data"
import Image from "next/image"

export default function CustomerLogos() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex justify-center mb-4">
            <span className="label-pill">TRUSTED BY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Industry Leaders</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {customers.map((customer) => (
            <div key={customer.name} className="flex justify-center">
              <div className="w-32 h-20 relative hover:grayscale-0 transition-all duration-300">
                <Image
                  src={customer.logo || "/placeholder.svg"}
                  alt={`${customer.name} logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  style={{ objectFit: "contain" }}
                  className="filter grayscale dark:invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

