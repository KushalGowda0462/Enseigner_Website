import { Card, CardContent } from "@/components/ui/card"
import { getContent } from "@/lib/content"
import { AlertCircle, TrendingDown, Cloud } from "lucide-react"

export default function SolutionSection() {
  const content = getContent();
  const problem = content.problem;
  const gap = content.gap;
  const whyNow = content.whyNow;

  return (
    <section id="solution" className="relative overflow-hidden py-20 flex justify-center bg-background">
      <div className="container relative mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            {problem.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the execution gap facing Indian enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {problem.points.map((point, index) => (
            <Card
              key={index}
              className="border border-border/40 bg-card/50 backdrop-blur-sm card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg p-2 text-primary bg-primary/10 flex-shrink-0">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <p className="text-foreground leading-relaxed">{point}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {gap && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{gap.title}</h3>
            <div className="max-w-3xl mx-auto">
              {gap.points.map((point, index) => (
                <Card
                  key={index}
                  className="border border-border/40 bg-card/50 backdrop-blur-sm card-hover mb-4"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg p-2 text-primary bg-primary/10 flex-shrink-0">
                        <TrendingDown className="h-5 w-5" />
                      </div>
                      <p className="text-foreground leading-relaxed">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {whyNow && (
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{whyNow.title}</h3>
            {whyNow.points.map((point, index) => (
              <Card
                key={index}
                className="border border-primary/30 bg-primary/5 backdrop-blur-sm card-hover"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg p-2 text-primary bg-primary/20 flex-shrink-0">
                      <Cloud className="h-5 w-5" />
                    </div>
                    <p className="text-foreground leading-relaxed">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
