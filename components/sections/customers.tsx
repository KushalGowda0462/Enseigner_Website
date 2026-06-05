import { customers } from "@/data/data"
import Image from "next/image"

const clientGroups = [
  {
    title: "Banking, Finance & Insurance",
    names: "Canara Bank, HDB Financial Services, Manappuram Finance, Muthoot Finance, South Indian Bank, IIFL, HDFC ERGO, Cholamandalam Finance, Reserve Bank of India",
  },
  {
    title: "Government, Public Sector & Defence",
    names: "BSNL, NLC India, EPFO, MEPZ, Officers Training Academy Chennai, Indian Coast Guard, Office of the Development Commissioner",
  },
  {
    title: "Ports, Logistics & Infrastructure",
    names: "Chennai Port Trust, Container Corporation of India, Dakshin Bharat Gateway Terminal, SANS CFS, Distribution Logistics Infrastructure",
  },
  {
    title: "Healthcare, Education, Retail & Industrial",
    names: "Apollo Hospitals, Annamalai University, Decathlon, Flipkart, Lenskart, Royal Enfield, TCS, Tata Communications, Vinfast, Godrej and Boyce",
  },
]

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
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {clientGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-border/40 bg-card/40 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">{group.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{group.names}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
