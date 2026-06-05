import { Button } from "@/components/ui/button"
import { services } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
export default function ServicesGrid() {
  return (
    <main className="site-container py-12">
      <div className="grid-12">
        {services.map((service, index) => (
          <div
            key={index}
            id={service.id}
            className="span-half scroll-m-40 group relative min-h-[400px] overflow-hidden rounded-lg bg-card border border-border/40 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 card-hover"
          >
            {service.hasImage ? (
              <div className="relative h-full" >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col justify-evenly p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <Link href={service.link || "/"}>
                  <Button className="mt-4 w-fit btn-primary-glow rounded-full font-bold">Learn More</Button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </main>
  )
}
