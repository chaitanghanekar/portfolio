import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/projects/utils'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-sm mt-0.5 text-neutral-400 w-[120px] tabular-nums ">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex items-center space-x-1 hover-secondary">
                <p className="tracking-tight">
                  {post.metadata.title}
                </p>
                <ArrowIcon />
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
