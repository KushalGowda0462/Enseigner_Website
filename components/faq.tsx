"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/data"

export default function Faqs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex justify-center mb-4">
            <span className="label-pill">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-glow rounded-2xl px-6 py-4">
                <AccordionTrigger className="text-left hover:no-underline text-foreground">
                  <span className="text-md font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

