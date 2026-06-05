import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
// import BlogCardsBeautiful from "@/components/BlogCardsBeautiful"
import { caseStudies, recentPosts, SuccessStories } from "@/data/data"
import CardsSection from "@/components/CardsSection"

export default function BlogPage() {

  return (
    <div className=" w-full bg-background mt-16 min-h-screen">
    <div className="site-container py-12">
      {/* Recent Blog Posts */}
      <section className="mb-16" id="blogs">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Recent blog posts</h2>
        <div className="grid-12">
          <Link href="/resources/0" className="span-half group">
            <Card className="border border-border/40 bg-card card-hover">
              <CardContent className="p-0">
                <div className="relative h-[300px] mb-6">
                  <Image
                    src={recentPosts[0].image || "/placeholder.svg"}
                    alt={recentPosts[0].title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span>{recentPosts[0].author}</span>
                    <span>•</span>
                    <span className="text-muted-foreground">{recentPosts[0].date}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-foreground">
                    {recentPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground">{recentPosts[0].description}</p>
                  <div className="flex gap-2">
                    {recentPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          <div className="span-half space-y-8 flex flex-col ">
            {recentPosts.slice(1).map((post,idx) => (
              <Link key={post.title} href={`/resources/${idx+1}`} className="group">
                <Card className="border border-border/40 bg-card card-hover">
                  <CardContent className="grid-12 p-0">
                    <div className="col-span-12 relative h-[200px] md:col-span-5">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="col-span-12 space-y-4 md:col-span-7">
                      <div className="flex items-center gap-2 text-sm">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span className="text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-foreground">{post.title}</h3>
                      <p className="text-muted-foreground">{post.description}</p>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
            <section id="case-studies">

      <CardsSection cardsData={caseStudies} title="Case Studies" linkprev="case-study"/>
            </section>
            <section id="success-stories">

      <CardsSection cardsData={SuccessStories} title="Success Stories" linkprev="succes-story"/>
            </section>

    </div>
    </div>
  )
}
