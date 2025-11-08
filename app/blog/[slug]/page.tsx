import Image from "next/image"
import { Calendar, Clock, User, Quote } from "lucide-react"
import blogs from "@/data/blogs.json"
import { AnimatedWrapper } from "./AnimatedWrapper"
import { notFound } from "next/navigation"

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) return notFound()

  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert leading-relaxed">
      <AnimatedWrapper>
        {/* Category & Title */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 bg-primary-500 text-white text-sm font-semibold rounded-full">
            {blog.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-balance">
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center justify-center flex-wrap gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-[28rem] mb-14 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      </AnimatedWrapper>

      {/* Content */}
      <AnimatedWrapper>
        <div className="text-muted-foreground prose-headings:text-foreground prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h3:text-xl prose-strong:text-foreground">
          <section
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Highlight Quote */}
        <div className="bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 rounded-2xl p-6 my-12 flex items-start gap-3">
          <Quote className="w-8 h-8 text-primary-500 shrink-0 mt-1" />
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            “Digital visibility is no longer a luxury — it’s the foundation of credibility for every Mauritian business in 2025.”
          </p>
        </div>

        {/* Related Section */}
        <div className="mt-16 border-t pt-10">
          <h3 className="text-2xl font-semibold mb-6">Explore More</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {blogs
              .filter((b) => b.slug !== blog.slug)
              .slice(0, 2)
              .map((related) => (
                <a
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group block rounded-xl border hover:border-primary-300 dark:hover:border-primary-700 transition-colors overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs uppercase tracking-wide text-primary-500 font-medium">
                      {related.category}
                    </span>
                    <h4 className="text-lg font-semibold mt-2 mb-1 group-hover:text-primary-500 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </AnimatedWrapper>
    </article>
  )
}
