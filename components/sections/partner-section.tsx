import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { homepartners } from '@/data/data'

export default function PartnersSection() {

  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 flex justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative space-y-16 mx-auto px-4">
        {/* Partners Section */}
        <div className="space-y-8">
          <div className="space-y-6 text-center">
            <div className="flex justify-center mb-4">
              <span className="label-pill">PARTNERS</span>
            </div>
            <h2 className="mx-auto max-w-4xl text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Technology Partners & OEM Ecosystem
            </h2>
            <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
              200+ OEM relationships across security, networking, compute, storage, fire, safety, and enterprise infrastructure.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {homepartners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-8"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain md:h-16 filter grayscale dark:invert"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/partners">
              <Button
                variant="outline"
                className="btn-primary-glow border-2 rounded-full px-8 py-3 text-base font-semibold"
              >
                Go to Partners →
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
