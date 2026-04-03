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
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold">Appendix</h1>
      <p className="mt-4 text-lg">
        This section provides reference material to support the main chapters and actor pages.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {appendixSections.map((section) => (
          <Link
            key={section.slug}
            href={`/appendix/${section.slug}`}
            className="block rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-6">{section.description}</p>
            <p className="mt-4 text-sm font-medium underline">
              Open section
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}