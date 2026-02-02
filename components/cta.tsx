import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getContent } from "@/lib/content"

export function CTASection() {
  const content = getContent();
  const finalCta = content.finalCta || content.contact;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-card p-12 md:p-16 text-center shadow-2xl shadow-primary/20">
          {/* Subtle overlay pattern */}
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {finalCta.headline}
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              {finalCta.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href={finalCta.buttonHref || "/contact"}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-14 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {finalCta.buttonLabel || content.hero.primaryCta.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
