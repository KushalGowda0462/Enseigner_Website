import { Card, CardContent } from "@/components/ui/card"
import { getContent } from "@/lib/content"
import { CheckCircle2 } from "lucide-react"

export default function AdvantageSection() {
  const content = getContent();
  const advantage = content.advantage;

  return (
    <section id={advantage.id} className="relative overflow-hidden py-20 flex justify-center bg-muted/30">
      <div className="site-container relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            {advantage.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {advantage.subtitle}
          </p>
        </div>

        <div className="grid-12">
          {advantage.wins.map((win, index) => (
            <Card
              key={index}
              className="span-half border border-border/40 bg-card/50 backdrop-blur-sm card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 text-primary bg-primary/10 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-foreground leading-relaxed font-medium">{win}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
