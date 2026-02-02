import { Card, CardContent } from "@/components/ui/card"
import { getContent } from "@/lib/content"
import { Cloud, Shield, Settings, Database, Brain, Server, ArrowRight } from "lucide-react"
import Link from "next/link"

const iconMap = {
  "Data Analytics": Database,
  "AI Solutions": Brain,
  "Data Center": Server,
  "Cloud Migration": Cloud,
  "Sovereign GPU Infrastructure": Cloud,
  "Compliance & Audit Readiness": Shield,
  "Operational Ownership": Settings,
};

export default function ServicesSection() {
  const content = getContent();
  const offerings = content.offerings;

  return (
    <section id={offerings.id} className="relative overflow-hidden py-24 flex justify-center bg-background">
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex justify-center mb-4">
            <span className="label-pill">COMPREHENSIVE SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {offerings.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {offerings.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.cards.map((card, index) => {
            const Icon = iconMap[card.title as keyof typeof iconMap] || Cloud;
            return (
              <Card
                key={index}
                className="card-glow group"
              >
                <CardContent className="relative space-y-4 p-6 h-full flex flex-col">
                  {/* Icon Badge */}
                  <div className="flex items-start">
                    <div className="icon-badge">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-foreground">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {card.desc}
                  </p>

                  {/* Explore Link */}
                  <Link
                    href={`/services#${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 mt-auto"
                  >
                    Explore Solution
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {offerings.note && (
          <p className="text-center text-muted-foreground mt-12 text-sm max-w-2xl mx-auto">
            {offerings.note}
          </p>
        )}
      </div>
    </section>
  )
}
