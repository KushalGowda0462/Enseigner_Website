import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import BlogCardsBeautiful from "@/components/BlogCardsBeautiful"
import { FullSuccessStories, recentPosts as relatedPosts} from "@/data/data"

export default async function BlogPost({params}:{
  params: Promise<{ id: string }>
})  {
  const {id}=await params
  const currBlog = FullSuccessStories[Number(id)] || FullSuccessStories[0]
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={currBlog.images[0].src || "/placeholder.svg"}
          alt="Blog hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">{currBlog.badge}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-4">
            {currBlog.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            {currBlog.description}
          </p>
          <div className="flex items-center gap-2">
            <span>By {currBlog.Author.name}</span>
            <span>•</span>
            <span>{currBlog.Author.date}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="site-container py-12">
        <div className="grid-12">
        <div className="span-centered-10 space-y-8">
          {currBlog.content.slice(0, 3).map((content, idx) => (<p key={idx} className="text-lg leading-relaxed">
            {content.para}
          </p>))}

          <div className="relative h-[400px] w-full my-12">
            <Image
              src={currBlog.images[1].src || "/placeholder.svg"}
              alt="Featured image"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
            <p className="text-lg leading-relaxed text-foreground">
              {currBlog.content[currBlog.content.length - 2].para}
            </p>
          </div>

          <p className="text-lg leading-relaxed text-foreground">
            {currBlog.content[currBlog.content.length - 1].para}
          </p>
        </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <section className="site-container py-12">
        <h2 className="text-2xl font-bold mb-8 text-foreground">Other Interesting Success Stories</h2>
        <div className="grid-12">
          {relatedPosts.map((post, idx) => (
            // <Link key={post.title} href="#" className="group">
            //   <Card className="border-0 shadow-none h-full">
            //     <CardContent className="p-0 space-y-4">
            //       <div className="relative h-[200px]">
            //         <Image
            //           src={post.image || "/placeholder.svg"}
            //           alt={post.title}
            //           fill
            //           className="object-cover rounded-lg"
            //         />
            //       </div>
            //       <div className="flex items-center gap-2 text-sm">
            //         <span>{post.author}</span>
            //         <span>•</span>
            //         <span className="text-muted-foreground">{post.date}</span>
            //       </div>
            //       <div className="flex items-start justify-between gap-4">
            //         <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
            //         <ArrowUpRight className="h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            //       </div>
            //       <p className="text-muted-foreground">{post.description}</p>
            //       <div className="flex gap-2">
            //         {post.tags.map((tag) => (
            //           <Badge key={tag} variant="secondary">
            //             {tag}
            //           </Badge>
            //         ))}
            //       </div>
            //     </CardContent>
            //   </Card>
            // </Link>
            <div key={post.title} className="span-third">
              <BlogCardsBeautiful card={post} href={idx.toString()} />
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
