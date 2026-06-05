"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { getContent } from "@/lib/content";

const content = getContent();
const contact = content.contact;

export default function Contact() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <section id={contact.id} className="relative bg-primary text-primary-foreground py-24 text-center">
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full"
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
          <h1 className="text-5xl font-bold mb-6">{contact.title}</h1>
          <p className="text-xl opacity-90">
            {contact.subtitle}
          </p>
        </div>
      </section>

      <section className="pt-20 bg-background">
        <div className="site-container">
          <div className="grid-12">
            <Card className="col-span-12 p-8 bg-card border-border/40 h-fit lg:col-span-5">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Company Contact</h2>
              <div className="space-y-5 text-muted-foreground">
                <div>
                  <p className="text-sm font-medium text-foreground">Founder & MD</p>
                  <p>{contact.founder}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Website</p>
                  <a href={`https://${contact.website}`} className="text-primary hover:underline">
                    {contact.website}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Focus</p>
                  <p>AI · Computer Vision · Enterprise Data Centre · Integrated Security Systems · Network Solutions · Audio Video Solutions</p>
                </div>
              </div>
            </Card>
            <Card className="col-span-12 p-8 bg-card border-border/40 lg:col-span-7">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{contact.fields[0]} *</label>
                  <Input placeholder={contact.fields[0]} required className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{contact.fields[1]} *</label>
                  <Input type="email" placeholder={contact.fields[1]} required className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{contact.fields[2]}</label>
                  <Input placeholder={contact.fields[2]} className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">{contact.fields[3]}</label>
                  <Textarea
                    placeholder={contact.fields[3]}
                    className="min-h-[150px] bg-background border-border"
                  />
                </div>
                <Button className="w-full btn-primary-glow">
                  Submit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
