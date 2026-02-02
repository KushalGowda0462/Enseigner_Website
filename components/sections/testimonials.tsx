"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/data"


export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
        }
    }

    return (
        <div className="py-24 relative overflow-hidden bg-muted/30">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
            <div className="px-4 md:px-6 relative z-10 mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-4">
                        <div className="flex justify-center mb-4">
                            <span className="label-pill">TESTIMONIALS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Don&apos;t take our word for it
                        </h2>
                    </div>
                </div>
                <div className="relative mt-16 w-max">
                    <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Scroll left</span>
                        </Button>
                    </div>
                    <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Scroll right</span>
                        </Button>
                    </div>
                    <div
                        ref={scrollRef}
                        className="flex space-x-8 overflow-x-auto snap-x snap-mandatory pb-8 px-8 max-w-[100vw]"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="card-glow flex-shrink-0 snap-center rounded-xl w-full max-w-lg"
                            >
                                <CardContent className="p-6">
                                    <blockquote className="space-y-6">
                                        <h3 className="text-xl font-bold tracking-tight">&ldquo;{testimonial.quote}&rdquo;</h3>
                                        <p className="text-muted-foreground">{testimonial.content}</p>
                                        <footer className="flex items-center space-x-4">
                                            <Image
                                                src={testimonial.author.avatar || "/placeholder.svg"}
                                                alt={testimonial.author.name}
                                                className="rounded-full object-cover aspect-square"
                                                width={40}
                                                height={40}
                                            />
                                            <div>
                                                <div className="font-semibold">{testimonial.author.name}</div>
                                                <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

