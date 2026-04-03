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
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6">
        <Link href="/appendix" className="underline">
          ← Back to Appendix
        </Link>
      </div>

      <h1 className="text-4xl font-bold">Glossary</h1>
      <p className="mt-4 text-lg">
        Key terms used throughout the site.
      </p>

      <div className="mt-8 space-y-6">
        {glossaryTerms.map((item) => (
          <section key={item.term} className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{item.term}</h2>
            <p className="mt-3 leading-7">{item.definition}</p>
          </section>
        ))}
      </div>
    </main>
  )
}