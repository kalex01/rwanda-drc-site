import Link from "next/link"

const glossaryTerms = [
  {
    term: "Great Lakes Region",
    definition:
      "A region of Central and East Africa that includes Rwanda, the DRC, Burundi, Uganda, and neighboring states shaped by connected political and security dynamics."
  },
  {
    term: "Armed Group",
    definition:
      "A non-state organization that uses military force or armed coercion to pursue political, territorial, or security aims."
  },
  {
    term: "Territorial Integrity",
    definition:
      "The principle that a state’s borders and territory should remain secure and not be altered by force."
  },
  {
    term: "Regional Diplomacy",
    definition:
      "Negotiation and political engagement between neighboring states and regional organizations to manage conflict and security issues."
  },
  {
    term: "Ceasefire",
    definition:
      "An agreement to stop fighting, whether temporarily or as part of a broader peace process."
  },
  {
    term: "Humanitarian Crisis",
    definition:
      "A severe situation in which civilians face major threats to safety, access to food, shelter, health care, or displacement protection."
  }
]

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/appendix"
        className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        ← Back to Appendix
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Glossary
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Key terms used throughout the site
      </h1>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        This glossary provides concise definitions for important concepts that
        appear across the chapters, actor pages, and appendix material.
      </p>

      <div className="mt-10 space-y-5">
        {glossaryTerms.map((item) => (
          <section
            key={item.term}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {item.term}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{item.definition}</p>
          </section>
        ))}
      </div>
    </div>
  )
}