import Link from "next/link"

const sourceGroups = [
  {
    title: "International Organizations",
    items: [
      {
        name: "United Nations",
        url: "https://www.un.org"
      },
      {
        name: "African Union",
        url: "https://au.int"
      },
      {
        name: "International Crisis Group",
        url: "https://www.crisisgroup.org"
      }
    ]
  },
  {
    title: "Research and Analysis",
    items: [
      {
        name: "Brookings Institution",
        url: "https://www.brookings.edu"
      },
      {
        name: "Chatham House",
        url: "https://www.chathamhouse.org"
      },
      {
        name: "Council on Foreign Relations",
        url: "https://www.cfr.org"
      }
    ]
  },
  {
    title: "News and Reporting",
    items: [
      {
        name: "Reuters",
        url: "https://www.reuters.com"
      },
      {
        name: "BBC News",
        url: "https://www.bbc.com/news"
      },
      {
        name: "Al Jazeera",
        url: "https://www.aljazeera.com"
      }
    ]
  }
]

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/appendix"
        className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        ← Back to Appendix
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Sources
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Reference organizations and research sources
      </h1>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        This section lists organizations, research institutions, and reporting
        sources relevant to the conflict and the broader regional context.
      </p>

      <div className="mt-10 space-y-6">
        {sourceGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {group.title}
            </h2>

            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 transition hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}