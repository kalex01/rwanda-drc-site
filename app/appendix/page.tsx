import Image from "next/image"
import Link from "next/link"

const appendixSections = [
  {
    eyebrow: "Chronology",
    title: "Timeline",
    href: "/appendix/timeline",
    description:
      "Follow the major turning points that shaped the conflict, from the regional rupture of the 1990s to the present diplomatic phase.",
    note: "Built for sequence, turning points, and historical pacing.",
  },
  {
    eyebrow: "Definitions",
    title: "Glossary",
    href: "/appendix/glossary",
    description:
      "Clarify the recurring terms, institutions, acronyms, and conflict language used across the site.",
    note: "Built for quick reference and repeated consultation.",
  },
  {
    eyebrow: "Documentation",
    title: "Sources",
    href: "/appendix/sources",
    description:
      "Review the reporting, analysis, and supporting material behind the project’s framing and narrative choices.",
    note: "Built for transparency, verification, and further reading.",
  },
]

const appendixNotes = [
  {
    title: "Purpose",
    text:
      "The appendix is where the project becomes easier to navigate. It supports the main narrative with reference material, not repetition.",
  },
  {
    title: "Tone",
    text:
      "This section is designed to feel structured, calm, and usable—closer to a briefing file than a dramatic landing page.",
  },
  {
    title: "Use",
    text:
      "Readers can move between chapters and reference pages as needed, depending on whether they want explanation, terminology, or chronology.",
  },
]

export default function AppendixPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Appendix
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Reference material for reading the Rwanda–DRC conflict
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This section gathers the site’s supporting reference material into
              one place. It is designed to help readers move between narrative,
              chronology, terminology, and source material without losing the
              thread of the wider project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/context"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Back to context
              </Link>
              <Link
                href="/appendix/timeline"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Open timeline
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/diplomacy-meeting.jpg"
                alt="Diplomatic meeting visual representing the project’s reference and documentation layer"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Reference frame
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                The appendix is not a side note. It is the project’s structured
                support layer: dates, definitions, and documentation that make
                the broader analysis easier to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {appendixNotes.map((item) => (
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
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Sections
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Choose a reference path
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
            Each section has a different editorial purpose. Together, they turn
            the appendix into a working reference layer rather than a simple
            archive.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {appendixSections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {item.eyebrow}
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.description}
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-600">{item.note}</p>
              </div>

              <p className="mt-6 text-sm font-medium text-slate-900 transition group-hover:translate-x-0.5">
                Open section →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reading flow
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Move between narrative and reference
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Readers who want deeper structure can move from the chapters into
              chronology, definitions, and sources, then return to the main site
              with better orientation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/chapters"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Browse chapters
              </Link>
              <Link
                href="/actors"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Review actors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}