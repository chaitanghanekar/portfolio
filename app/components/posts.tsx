import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/projects/utils'

function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={className}
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
            <div className="w-full flex flex-col md:flex-row md:items-center">
              <p className="text-sm text-neutral-400 w-full md:w-[120px] tabular-nums mb-1 md:mb-0">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex items-center hover-secondary overflow-hidden">
                <p className="tracking-tight truncate flex-1 inline-flex items-center">
                  <span className="truncate">{post.metadata.title}</span>
                  <ArrowIcon className="flex-shrink-0 ml-1" />
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}