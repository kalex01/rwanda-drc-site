import Link from "next/link"

const appendixSections = [
  {
    slug: "glossary",
    title: "Glossary",
    description: "Key conflict terms, concepts, and definitions."
  },
  {
    slug: "timeline",
    title: "Timeline",
    description: "Major dates and turning points in the conflict."
  },
  {
    slug: "sources",
    title: "Sources",
    description: "Reference links, reports, and research materials."
  }
]

export default function AppendixPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Appendix
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Reference material and supporting context
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            This section provides reference material to support the main
            chapters and actor pages, including definitions, chronology, and
            source material.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {appendixSections.map((section) => (
            <Link
              key={section.slug}
              href={`/appendix/${section.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {section.description}
              </p>

              <p className="mt-5 text-sm font-medium text-blue-700">
                Open section →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}