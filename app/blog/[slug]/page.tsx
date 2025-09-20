import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity-utils'
import { decodeHtmlEntities } from '@/lib/utils'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

// Helper function to extract first image from body content
function extractFirstImage(body: any[]): string | null {
  if (!body || !Array.isArray(body)) return null
  
  for (const block of body) {
    if (block._type === 'block' && block.children) {
      for (const child of block.children) {
        if (child.text && child.text.includes('<img')) {
          const imgMatch = child.text.match(/<img[^>]+src="([^"]+)"[^>]*>/)
          if (imgMatch) {
            return decodeHtmlEntities(imgMatch[1])
          }
        }
      }
    }
  }
  return null
}

// ✅ Fetch single post
async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, body, mainImage, publishedAt, excerpt, author, content, "bodyText": body[0].children[0].text
    }`,
    { slug }
  )
}

// ✅ Fetch related posts
async function getRelatedPosts(currentSlug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current != $currentSlug] | order(publishedAt desc) [0...3]{
      title, slug, publishedAt, excerpt, body, mainImage, coverImage, featuredImage, image, heroImage
    }`,
    { currentSlug }
  )
}

// Helper function to render rich text content
function renderRichText(blocks: any[]) {
  if (!blocks) return null

  return blocks.map((block: any, index: number) => {
    if (block._type === 'block') {
      const style = block.style || 'normal'
      const children = block.children?.map((child: any, childIndex: number) => {
        if (child.marks?.includes('strong')) {
          return <strong key={childIndex}>{child.text}</strong>
        }
        if (child.marks?.includes('em')) {
          return <em key={childIndex}>{child.text}</em>
        }
        return child.text
      }).join('') || ''

      switch (style) {
        case 'h1':
          return <h1 key={index} className="text-4xl font-bold text-slate-900 dark:text-white mb-6 mt-8">{children}</h1>
        case 'h2':
          return <h2 key={index} className="text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-4 mt-6">{children}</h2>
        case 'h3':
          return <h3 key={index} className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-3 mt-5">{children}</h3>
        case 'h4':
          return <h4 key={index} className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2 mt-4">{children}</h4>
        case 'blockquote':
          return <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-slate-300 my-4">{children}</blockquote>
        default:
          return <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{children}</p>
      }
    }
    return null
  })
}

// Helper function to render WordPress content
function renderWordPressContent(content: string) {
  if (!content) return null

  // Clean up WordPress shortcodes and HTML comments
  let cleanContent = content
    .replace(/<!-- wp:.*?-->/g, '') // Remove WordPress block comments
    .replace(/<!-- \/wp:.*?-->/g, '') // Remove closing WordPress block comments
    .replace(/\[.*?\]/g, '') // Remove shortcodes
    .trim()

  // Split content by HTML tags to process each element
  const elements = cleanContent.split(/(<[^>]+>)/).filter(el => el.trim())

  return elements.map((element, index) => {
    const trimmedElement = element.trim()
    
    // Skip empty elements
    if (!trimmedElement) return null
    
    // Check if it's a heading
    if (trimmedElement.match(/^<h[1-6]/)) {
      const headingMatch = trimmedElement.match(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/)
      if (headingMatch) {
        const level = parseInt(headingMatch[1])
        const text = headingMatch[2].replace(/<[^>]*>/g, '').trim() // Remove any remaining HTML tags
        if (!text) return null
        
        const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
        
        const className = level === 1 
          ? "text-4xl font-bold text-slate-900 dark:text-white mb-6 mt-8"
          : level === 2
          ? "text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-4 mt-6"
          : level === 3
          ? "text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-3 mt-5"
          : "text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2 mt-4"
        
        return <HeadingTag key={index} className={className}>{text}</HeadingTag>
      }
    }
    
    // Check if it's an image
    if (trimmedElement.includes('<img')) {
      const imgMatch = trimmedElement.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/)
      if (imgMatch) {
        // Decode HTML entities in the URL
        const decodedSrc = decodeHtmlEntities(imgMatch[1])
        
        return (
          <div key={index} className="my-8">
            <img
              src={decodedSrc}
              alt={imgMatch[2] || 'Blog image'}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )
      }
    }
    
    // Check if it's a paragraph
    if (trimmedElement.match(/^<p/)) {
      const pMatch = trimmedElement.match(/<p[^>]*>(.*?)<\/p>/)
      if (pMatch) {
        const text = pMatch[1].replace(/<[^>]*>/g, '').trim() // Remove any remaining HTML tags
        if (!text) return null
        
        return (
          <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            {text}
          </p>
        )
      }
    }
    
    // Check if it's a section
    if (trimmedElement.match(/^<section/)) {
      const sectionMatch = trimmedElement.match(/<section[^>]*>(.*?)<\/section>/)
      if (sectionMatch) {
        const sectionContent = sectionMatch[1]
        // Process the section content recursively
        return (
          <div key={index} className="mb-6">
            {renderWordPressContent(sectionContent)}
          </div>
        )
      }
    }
    
    // Check if it's a details/FAQ section
    if (trimmedElement.match(/^<details/)) {
      const detailsMatch = trimmedElement.match(/<details[^>]*><summary[^>]*>(.*?)<\/summary><p[^>]*>(.*?)<\/p><\/details>/)
      if (detailsMatch) {
        const summary = detailsMatch[1].replace(/<[^>]*>/g, '').trim()
        const content = detailsMatch[2].replace(/<[^>]*>/g, '').trim()
        
        return (
          <details key={index} className="mb-4 p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
            <summary className="font-semibold text-slate-900 dark:text-white cursor-pointer mb-2">
              {summary}
            </summary>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {content}
            </p>
          </details>
        )
      }
    }
    
    // Regular text content - clean up HTML tags
    const cleanText = trimmedElement
      .replace(/<[^>]*>/g, '') // Remove all HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with regular space
      .replace(/&amp;/g, '&') // Replace &amp; with &
      .replace(/&lt;/g, '<') // Replace &lt; with <
      .replace(/&gt;/g, '>') // Replace &gt; with >
      .replace(/&quot;/g, '"') // Replace &quot; with "
      .trim()
    
    if (cleanText && cleanText.length > 10) { // Only render meaningful text
      return (
        <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {cleanText}
        </p>
      )
    }
    
    return null
  }).filter(Boolean)
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [post, relatedPosts] = await Promise.all([
    getPost(slug),
    getRelatedPosts(slug)
  ])

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 mt-12">

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            {post.author && (
              <div className="text-slate-600 dark:text-slate-300">
                By {post.author}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="max-w-4xl mx-auto mb-12">
            <img
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            {post.content ? renderWordPressContent(post.content) : 
             post.bodyText ? renderWordPressContent(post.bodyText) :
             renderRichText(post.body)}
          </div>
        </article>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                More from our Blog
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Discover more insights and tutorials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost: any) => {
                const imageField = relatedPost.mainImage || relatedPost.coverImage || relatedPost.featuredImage || relatedPost.image || relatedPost.heroImage;
                const extractedImage = extractFirstImage(relatedPost.body);
                
                return (
                  <Link key={relatedPost.slug.current} href={`/blog/${relatedPost.slug.current}`}>
                    <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg cursor-pointer h-full overflow-hidden">
                      {/* Thumbnail Image */}
                      {imageField ? (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={urlFor(imageField).width(400).height(225).url()}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : extractedImage ? (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={extractedImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                          <span className="text-slate-500 dark:text-slate-400 text-sm">No image</span>
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                          {relatedPost.title}
                        </h3>
                        {relatedPost.excerpt && (
                          <p className="text-slate-600 dark:text-slate-300 line-clamp-3 text-sm">
                            {relatedPost.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

// ✅ Don’t prebuild slugs, let Next.js fetch dynamically
export const dynamic = 'force-dynamic'
