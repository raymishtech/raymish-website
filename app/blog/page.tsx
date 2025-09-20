import Link from 'next/link'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity-utils'
import { decodeHtmlEntities } from '@/lib/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'

// Helper function to extract first image from body content
function extractFirstImage(body: any[]): string | null {
  if (!body || !Array.isArray(body)) return null
  
  for (const block of body) {
    if (block._type === 'block' && block.children) {
      for (const child of block.children) {
        if (child.text && child.text.includes('<img')) {
          const imgMatch = child.text.match(/<img[^>]+src="([^"]+)"[^>]*>/)
          if (imgMatch) {
            // Decode HTML entities in the URL
            return decodeHtmlEntities(imgMatch[1])
          }
        }
      }
    }
  }
  return null
}

async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id, title, slug, publishedAt, excerpt, tags, body,
      mainImage, coverImage, featuredImage, image, heroImage
    }`
  )
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16 mt-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Our Blogs
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Insights, tutorials, and updates from our team of experts
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post: any) => (
            <Link key={post._id || post.slug.current} href={`/blog/${post.slug.current}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800 border-0 shadow-lg cursor-pointer h-full overflow-hidden">
                {/* Featured Image */}
                {(() => {
                  const imageField = post.mainImage || post.coverImage || post.featuredImage || post.image || post.heroImage;
                  const extractedImage = extractFirstImage(post.body);
                  
                  if (imageField) {
                    return (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={urlFor(imageField).width(400).height(225).url()}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    );
                  } else if (extractedImage) {
                    return (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={extractedImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">No image</span>
                      </div>
                    );
                  }
                })()}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent className="pt-0">
                  {post.excerpt && (
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 font-medium group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
              No posts yet
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
