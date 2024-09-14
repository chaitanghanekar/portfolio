import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-5xl mb-8 tracking-tighter">Projects</h1>
      <BlogPosts />
    </section>
  )
}
