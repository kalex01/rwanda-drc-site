import Image from "next/image"
import Link from "next/link"
import { chapters } from "@/app/data/chapters"

const sectionPaths = [
  {
    title: "Story",
    href: "/story",
    description:
      "Enter the narrative through a structured chapter-based reading path that explains how the conflict’s layers connect.",
    note: "Best for the full argument.",
  },
  {
    title: "Actors",
    href: "/actors",
    description:
      "Compare Rwanda, the Democratic Republic of the Congo, and M23 through focused pages with a shared analytical structure.",
    note: "Best for comparison and orientation.",
  },
  {
    title: "Context",
    href: "/context",
    description:
      "Use maps, geography, and security framing to understand why eastern Congo matters regionally and strategically.",
    note: "Best for spatial and regional grounding.",
  },
  {
    title: "Appendix",
    href: "/appendix",
    description:
      "Move into the timeline, glossary, and sources when you want chronology, definitions, or reference support.",
    note: "Best for verification and reference.",
  },
]

const readingNotes = [
  {
    title: "What this site is",
    text:
      "A structured explanatory project designed to make the Rwanda–DRC conflict more readable without flattening its complexity.",
  },
  {
    title: "How to use it",
    text:
      "Read chapter by chapter for the full narrative, or move between actors, context, and appendix pages as needed.",
  },
  {
    title: "Why it matters",
    text:
      "The conflict is shaped by history, security, minerals, state weakness, regional rivalry, and civilian consequence at the same time.",
  },
]

const statCards = [
  {
    value: Object.values(chapters).length.toString(),
    label: "Chapters",
    text: "A full narrative sequence from introduction to conclusion.",
  },
  {
    value: "3",
    label: "Actor pages",
    text: "Structured profiles on Rwanda, the DRC, and M23.",
  },
  {
    value: "4",
    label: "Reference paths",
    text: "Context, timeline, glossary, and sources for deeper reading.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Rwanda–DRC Site
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Understanding the conflict with greater structure and clarity
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This site is designed as a serious explanatory project on the
              Rwanda–DRC conflict. It combines long-form chapters, actor-based
              analysis, regional context, and reference material to help readers
              move through a complex issue with stronger orientation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/story/chapter-1"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Start reading
              </Link>

              <Link
                href="/chapters"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View all chapters
              </Link>

              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open appendix
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/lake-kivu-hero.jpg"
                alt="Lake Kivu and the eastern Great Lakes landscape"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Regional setting
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                The project approaches the conflict as a layered system shaped
                by geography, insecurity, sovereignty, armed actors, mineral
                flows, and regional rivalry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {readingNotes.map((item) => (
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

      <section className="mx-auto max-w-4xl px-4 pb-2 sm:px-6 lg:px-8 md:pb-4">
        <div className="grid gap-4 md:grid-cols-3">
          {statCards.map((item) => (
            <article
              key={item.label}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8 md:py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Main sections
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Choose how to enter the site
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              Each section has a different purpose. Together they turn the site
              into a connected reading and reference system rather than a simple
              archive of pages.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sectionPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md sm:p-6"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {item.description}
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4">
                  <p className="text-sm leading-6 text-slate-600">{item.note}</p>
                </div>

                <p className="mt-6 text-sm font-medium text-slate-900 transition group-hover:translate-x-0.5">
                  Open section →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reading recommendation
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Start with the story, then widen the frame
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              A strong way to use the site is to begin with the chapter
              sequence, then move into actors, context, and appendix pages as
              the conflict’s different layers become more important to the
              reader.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/story"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Open story
              </Link>

              <Link
                href="/actors"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Review actors
              </Link>

              <Link
                href="/context"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View context
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}