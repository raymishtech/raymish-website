import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity-utils'
import { notFound } from 'next/navigation'

// ✅ Fetch single post
async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, body, mainImage, publishedAt
    }`,
    { slug }
  )
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose mx-auto p-6">
      <h1>{post.title}</h1>

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
          className="rounded-xl my-6"
        />
      )}

      <div>
        {post.body?.map((block: any, i: number) => (
          <p key={i}>{block.children?.[0]?.text}</p>
        ))}
      </div>
    </article>
  )
}

// ✅ Don’t prebuild slugs, let Next.js fetch dynamically
export const dynamic = 'force-dynamic'
