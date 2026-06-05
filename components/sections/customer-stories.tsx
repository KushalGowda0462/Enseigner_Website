import CardsSection from '../CardsSection'
import { SuccessStories } from '@/data/data'

export default function CustomerStories() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="text-center space-y-4 mb-16">
        <div className="space-y-4 text-center">
          <div className="flex justify-center mb-4">
            <span className="label-pill">SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Our Customer Stories
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See how we&apos;ve helped organizations achieve their goals</p>
      </div>
      <div className="site-container">
        <CardsSection cardsData={SuccessStories} linkprev='/succes-story' />
      </div>
    </section>
  )
}
