import Link from "next/link"

const featuredLinks = [
  {
    title: "Start at Chapter 1",
    href: "/story/chapter-1",
    description: "Begin the narrative from the opening chapter."
  },
  {
    title: "Open Chapters Index",
    href: "/chapters",
    description: "Browse all twelve chapters from the full index."
  },
  {
    title: "View Key Actors",
    href: "/actors",
    description: "Review the main actors connected to the story."
  }
]

export default function StoryIndexPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Story
      </p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Narrative chapter overview
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This section contains the chapter-based narrative of the Rwanda–DRC
        site. Use it to move through the story in sequence or jump directly to
        the full chapter index.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/story/chapter-1"
          className="inline-flex items-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Start reading
        </Link>

        <Link
          href="/chapters"
          className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          View all chapters
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featuredLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {item.description}
            </p>
            <p className="mt-4 text-sm font-medium text-blue-700">
              Open →
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}