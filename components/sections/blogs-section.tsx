import Link from "next/link"
import { getContent } from "@/lib/content"
import BlogCardsBeautiful from "@/components/BlogCardsBeautiful"
import { recentPosts } from "@/data/data"
import { Button } from "@/components/ui/button"

export default function BlogsSection() {
  const content = getContent();
  const blogs = content.blogs;
  const postsToShow = recentPosts.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="site-container">
        <div className="text-center space-y-4 mb-16">
          <div className="space-y-4 text-center">
            <div className="flex justify-center mb-4">
              <span className="label-pill">{blogs.title}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Check out our blogs
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {blogs.subtitle}
          </p>
        </div>

        <div className="grid-12 mb-12">
          {postsToShow.map((post, idx) => (
            <div className="span-third" key={post.title}>
              <BlogCardsBeautiful card={post} href={`/resources/${idx}`} />
            </div>
          ))}
        </div>

        {blogs.viewAllHref && (
          <div className="text-center">
            <Link href={blogs.viewAllHref}>
              <Button variant="outline" className="btn-primary-glow border-2">
                {blogs.viewAllLabel}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
