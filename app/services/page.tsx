import { Card } from "@/components/ui/card";
import {
  Settings,
} from "lucide-react";
import { TrainingCategoryCard } from "@/components/training-catogoryCard";
import ServicesGrid from "./servicesGrid";
import { CTASection } from "@/components/cta";
import { trainingCategories } from "@/data/data";
import { getContent } from "@/lib/content";


export default function Services() {
  const content = getContent();

  return (
    <main className="min-h-screen bg-background">
      <section className="relative bg-primary text-primary-foreground py-24 text-center">
        <div className="absolute bottom-0 left-0 right-0 ">
          <svg
            className="w-full "
            style={{ transform: 'translateY(0.5px)' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              className="fill-background"
              d="M1440,0Q1080,99,720,99T0,0V100H1440Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl opacity-90">
        {content.brand.tagline}
            </p>
        </div>
      </section>



      <section className="bg-background">
      <ServicesGrid/>
      </section>

      {/* Data and AI Section */}
      <section className="py-20 bg-muted/30">
        <div className="site-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Solution Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.offerings.subtitle}
            </p>
          </div>
          <div className="grid-12">
            {content.offerings.cards.map((offering, index) => (
              <Card key={index} className="span-quarter p-6 text-center bg-card border-border/40 card-hover">
                <div className="w-12 h-12 mx-auto text-primary mb-4 flex items-center justify-center">
                  <Settings className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{offering.title}</h3>
                <p className="text-muted-foreground">
                  {offering.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section className="py-20 bg-background" id="traing-programs">
        <div className="site-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Expert-Led Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.about?.training?.description || "Comprehensive training solutions to empower your team with the latest technology skills"}
            </p>
          </div>
          
          {content.about?.training?.categories && (
            <div className="grid-12 mb-12">
              {content.about.training.categories.map((category, index) => (
                <Card key={index} className="span-third p-6 bg-card border-border/40 card-hover">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </Card>
              ))}
            </div>
          )}

          {content.about?.training?.benefits && (
            <div className="grid-12">
              {content.about.training.benefits.map((benefit, index) => (
                <Card key={index} className="span-third p-6 bg-muted/20 border-border/40">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 text-primary bg-primary/10 flex-shrink-0">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="grid-12 mt-12">
            {trainingCategories.map((category, index) => (
              <div className="span-quarter" key={index}>
                <TrainingCategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <CTASection/>
    </main>
  );
}
