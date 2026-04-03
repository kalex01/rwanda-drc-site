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
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6">
        <Link href="/appendix" className="underline">
          ← Back to Appendix
        </Link>
      </div>

      <h1 className="text-4xl font-bold">Sources</h1>
      <p className="mt-4 text-lg">
        Reference organizations, research institutions, and news sources relevant to the conflict.
      </p>

      <div className="mt-8 space-y-8">
        {sourceGroups.map((group) => (
          <section key={group.title} className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{group.title}</h2>

            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}