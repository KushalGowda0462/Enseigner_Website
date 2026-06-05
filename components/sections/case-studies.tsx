import CardsSection from "../CardsSection";
import { recentPosts } from "@/data/data";

export default function CaseStudies() {
  return (
    <section className="py-20 flex justify-center bg-background">
        <div className="site-container">

          <div className="text-center space-y-4 mb-12">
            <div className="space-y-4 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Our Blogs
              </h3>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Check out our blogs.
              </h2>
            </div>
            <p className="text-muted-foreground">Read our blogs to learn how we&apos;ve supported organizations in achieving their goals.</p>
          </div>
          <CardsSection cardsData={recentPosts} linkprev="/resources"/>
        </div>
      </section>
  )
}
