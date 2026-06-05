import React from 'react'
import Link from 'next/link'
import { getContent } from '@/lib/content'
import { Brain, Check, Cloud, Server, Shield, Zap } from 'lucide-react'

export default function Hero() {
  const content = getContent();
  const hero = content.hero;

  return (
    <section className="relative overflow-hidden flex justify-center bg-background">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-stars dark:opacity-100 opacity-0" />
      
      <div className="relative min-h-[85vh] py-24 md:py-32 w-full">
        <div className="site-container relative z-10 min-h-[80vh] flex flex-col items-center justify-center">
          <div className="grid-12 text-center">
            <div className="span-centered-10">
            {/* Top Label Pill */}
            {hero.topLabel && (
              <div className="mb-6 flex justify-center">
                <span className="label-pill">
                  {hero.topLabel}
                </span>
              </div>
            )}
            
            {/* Headline with gradient highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {hero.headline.split(' ').map((word, idx) => {
                const highlightWords = ['AI', 'Intelligent', 'Enterprise', 'Systems', 'Infrastructure'];
                const shouldHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
                
                return shouldHighlight ? (
                  <span key={idx} className="text-gradient">{word} </span>
                ) : (
                  <span key={idx}>{word} </span>
                );
              })}
            </h1>
            
            {/* Subheadline */}
            <p className="text-muted-foreground text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link 
                href={hero.primaryCta.href} 
                className="btn-primary-glow h-12 px-8 py-3 rounded-full text-base font-semibold flex items-center"
              >
                {hero.primaryCta.label}
              </Link>
              <Link 
                href={hero.secondaryCta.href} 
                className="btn-secondary-outline h-12 px-8 py-3 rounded-full text-base font-semibold flex items-center"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
            
            {/* Micro Highlights - Icon Cards */}
            <div className="grid-12 mb-16">
              {hero.microHighlights && hero.microHighlights.map((micro, idx) => {
                const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                  "Server": Server,
                  "Cloud": Cloud,
                  "Zap": Zap,
                  "Brain": Brain,
                  "Shield": Shield,
                };
                const Icon = iconMap[micro.icon] || Server;
                return (
                  <div key={idx} className="span-third text-center group">
                    <div className="flex justify-center mb-4">
                      <div className="icon-badge">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{micro.title}</h3>
                    <p className="text-sm text-muted-foreground">{micro.subtitle}</p>
                  </div>
                );
              })}
            </div>
            
            {/* Highlights List */}
            <div className="grid-12">
              {hero.highlights.map((highlight, idx) => (
                <div key={idx} className="span-third flex items-start gap-3 text-left bg-card/30 backdrop-blur-sm border border-border/40 rounded-lg p-4 hover:border-primary/30 transition-all duration-300">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
