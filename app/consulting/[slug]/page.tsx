
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { consultingDetails, ConsultingSlug } from "../content";
import { CTASection } from "@/components/cta";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const detail = consultingDetails[slug as ConsultingSlug];
    if (!detail) return { title: "Consulting Not Found" };

    return {
        title: `${detail.title} | Enseigner`,
        description: detail.subtitle,
    };
}

export function generateStaticParams() {
    return Object.keys(consultingDetails).map((slug) => ({
        slug,
    }));
}

export default async function ConsultingDetailPage({ params }: PageProps) {
    const { slug: paramSlug } = await params;
    const slug = paramSlug as ConsultingSlug;
    const content = consultingDetails[slug];

    if (!content) {
        notFound();
    }

    // Helper to split title for highlighting
    const renderTitle = () => {
        if (!content.highlightWord) return content.title;
        const parts = content.title.split(content.highlightWord);
        return (
            <>
                {parts[0]}
                <span className="text-primary">{content.highlightWord}</span>
                {parts[1]}
            </>
        );
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            {/* 1. Hero Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="flex justify-center lg:justify-start">
                            <span className="label-pill">{content.heroPill}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            {renderTitle()}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {content.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href={content.primaryCta.href}>
                                <Button size="lg" className="rounded-full font-semibold btn-primary-glow px-8 w-full sm:w-auto">
                                    {content.primaryCta.label}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href={content.secondaryCta.href}>
                                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 w-full sm:w-auto">
                                    {content.secondaryCta.label}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-lg aspect-auto md:aspect-square rounded-2xl overflow-hidden card-glow border border-border/50 bg-muted/20">
                            <Image
                                src={content.heroImage.src}
                                alt={content.heroImage.alt}
                                width={600}
                                height={600}
                                className="object-cover w-full h-full opacity-90"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. What We Deliver (Sections) */}
            <section className="container mx-auto px-4 mb-24">
                <div className="space-y-16">
                    {content.sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl font-bold text-foreground">{section.heading}</h2>
                                <p className="text-lg text-muted-foreground">{section.body}</p>
                                {section.bullets && (
                                    <ul className="grid gap-3 pt-4">
                                        {section.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="text-foreground">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="flex-1 w-full">
                                <div className="h-64 md:h-80 w-full rounded-xl bg-muted/40 border border-border/50 flex items-center justify-center p-8">
                                    {/* Placeholder for section specific graphics/icons if image not provided */}
                                    <div className="text-center space-y-4 opacity-50">
                                        <ShieldCheck className="w-16 h-16 mx-auto mb-2 text-primary" />
                                        <span className="text-sm">Detailed visualization for {section.heading}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Steps / How it Works */}
            <section className="bg-muted/30 py-24 mb-24" id="process">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-muted-foreground">Our proven methodology for scalable success</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.steps.map((step, idx) => (
                            <Card key={idx} className="relative overflow-hidden border-border/40 hover:border-primary/50 transition-colors">
                                <CardContent className="pt-8 p-6 space-y-4">
                                    <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground relative z-10">{step.title}</h3>
                                    <p className="text-muted-foreground relative z-10">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Case Example */}
            <section className="container mx-auto px-4 mb-24" id="case-example">
                <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <div className="grid md:grid-cols-12 gap-0">
                        <div className="md:col-span-5 bg-muted/50 p-8 md:p-12 flex flex-col justify-center">
                            <span className="label-pill w-fit mb-6">CASE EXAMPLE</span>
                            <h3 className="text-2xl font-bold mb-4">Real World Impact</h3>
                            <p className="text-muted-foreground">See how we solve complex enterprise execution challenges.</p>
                        </div>
                        <div className="md:col-span-7 p-8 md:p-12 space-y-8">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-primary flex items-center gap-2">
                                    <FileText className="h-4 w-4" /> Problem
                                </h4>
                                <p className="text-foreground">{content.caseExample.problem}</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-primary flex items-center gap-2">
                                    <Settings className="h-4 w-4" /> Solution
                                </h4> {/* Using generic icon since Settings wasn't imported yet, will import */}
                                <p className="text-foreground">{content.caseExample.solution}</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-primary flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" /> Outcome
                                </h4>
                                <p className="text-foreground font-medium">{content.caseExample.outcome}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            {/* 5. FAQ */}
            <section className="container mx-auto px-4 max-w-3xl mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {content.faq.map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left text-lg font-medium">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* 6. Final CTA */}
            <CTASection />
        </main>
    );
}

// Icon component needed for the layout logic
function Settings({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}
