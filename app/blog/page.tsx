import Link from 'next/link'
import { client } from '@/lib/sanity'

async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      title, slug, publishedAt
    }`
  )
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <main className="prose mx-auto p-6">
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug.current}>
            <Link href={`/blog/${post.slug.current}`}>
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
