import { Card, CardContent } from "@/components/ui/card"
import { getContent } from "@/lib/content"
import { DollarSign } from "lucide-react"

export default function FundingSection() {
  const content = getContent();
  const funding = content.funding;

  return (
    <section id={funding.id} className="relative overflow-hidden py-20 flex justify-center bg-muted/30">
      <div className="site-container relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            {funding.title}
          </h2>
          <h3 className="text-2xl font-semibold text-primary">
            {funding.headline}
          </h3>
        </div>

        <div className="grid-12">
          {funding.details.map((detail, index) => (
            <Card
              key={index}
              className="span-third border border-border/40 bg-card/50 backdrop-blur-sm card-hover text-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full p-3 text-primary bg-primary/10">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <p className="text-foreground leading-relaxed font-medium">{detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
