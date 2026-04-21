import Link from "next/link"

const glossaryTerms = [
  {
    term: "Great Lakes Region",
    definition:
      "A region of Central and East Africa that includes Rwanda, the DRC, Burundi, Uganda, and neighboring states shaped by connected political and security dynamics.",
  },
  {
    term: "Armed Group",
    definition:
      "A non-state organization that uses military force or armed coercion to pursue political, territorial, or security aims.",
  },
  {
    term: "Territorial Integrity",
    definition:
      "The principle that a state’s borders and territory should remain secure and not be altered by force.",
  },
  {
    term: "Regional Diplomacy",
    definition:
      "Negotiation and political engagement between neighboring states and regional organizations to manage conflict and security issues.",
  },
  {
    term: "Ceasefire",
    definition:
      "An agreement to stop fighting, whether temporarily or as part of a broader peace process.",
  },
  {
    term: "Humanitarian Crisis",
    definition:
      "A severe situation in which civilians face major threats to safety, access to food, shelter, health care, or displacement protection.",
  },
]

const glossaryNotes = [
  {
    title: "Purpose",
    text:
      "This page is designed for quick clarification. It helps readers decode recurring terms without interrupting the main narrative for too long.",
  },
  {
    title: "Style",
    text:
      "Definitions are concise and plain-language. The goal is orientation, not exhaustive academic treatment.",
  },
  {
    title: "Use",
    text:
      "Readers can return here whenever a chapter, actor profile, or appendix page introduces unfamiliar conflict or diplomatic language.",
  },
]

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Appendix · Glossary
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Key terms used across the site
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This glossary provides concise definitions for important
                concepts that appear across the chapters, actor pages, and
                appendix material. It is designed to keep the site readable
                without forcing every page to stop and define recurring terms.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/appendix"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Back to appendix
                </Link>
                <Link
                  href="/appendix/sources"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  View sources
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Quick index
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {glossaryTerms.map((item) => (
                  <a
                    key={item.term}
                    href={`#${item.term.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                  >
                    {item.term}
                  </a>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-600 sm:text-base">
                Use the glossary as a reference layer while reading the site.
                The aim is to reduce friction and help readers stay oriented as
                the conflict shifts between security, diplomacy, and
                humanitarian language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {glossaryNotes.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Definitions
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Glossary terms
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              The entries below are intentionally short and readable. They are
              meant to support the project, not overwhelm it.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {glossaryTerms.map((item) => {
              const id = item.term.toLowerCase().replace(/\s+/g, "-")

              return (
                <section
                  key={item.term}
                  id={id}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="md:max-w-[280px]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Term
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                        {item.term}
                      </h3>
                    </div>

                    <div className="flex-1 rounded-[1.25rem] border border-slate-200 bg-white p-4 sm:p-5">
                      <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                        {item.definition}
                      </p>
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Next reference paths
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Continue through the appendix
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              After clarifying terms, readers can return to the chronological
              timeline or move into the sources page for the project’s reference
              base.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/appendix/timeline"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open timeline
              </Link>
              <Link
                href="/appendix/sources"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open sources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}