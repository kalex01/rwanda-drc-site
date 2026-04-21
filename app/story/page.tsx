import Link from "next/link"
import { chapters } from "@/app/data/chapters"

const featuredLinks = [
  {
    title: "Start at Chapter 1",
    href: "/story/chapter-1",
    description:
      "Begin the narrative from the opening chapter and follow the full argument in sequence.",
    note: "Best for first-time reading.",
  },
  {
    title: "Open Chapters Index",
    href: "/chapters",
    description:
      "Browse all twelve chapters from the full chapter index and jump into any part of the sequence.",
    note: "Best for selective reading.",
  },
  {
    title: "View Key Actors",
    href: "/actors",
    description:
      "Review the main actors connected to the conflict before or during the chapter sequence.",
    note: "Best for orientation and comparison.",
  },
]

const storyNotes = [
  {
    title: "Narrative purpose",
    text:
      "The story section is designed as a guided explanatory arc, not a collection of disconnected essays.",
  },
  {
    title: "Reading approach",
    text:
      "Readers can move chapter by chapter for the full structure, or use the actors and appendix pages alongside the narrative.",
  },
  {
    title: "Editorial tone",
    text:
      "The aim is seriousness, clarity, and layered understanding rather than dramatic simplification.",
  },
]

export default function StoryIndexPage() {
  const chapterCount = Object.values(chapters).length

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Story
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Narrative chapter overview
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This section contains the chapter-based narrative of the
              Rwanda–DRC site. It is designed to help readers move through the
              conflict as a structured argument, beginning with historical and
              strategic foundations and building toward broader regional,
              global, and human consequences.
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
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Reading structure
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Total chapters
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  {chapterCount}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Reading mode
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                  Guided sequence
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600 sm:text-base">
              The story section works best when read in order, but it also
              supports selective entry points for readers who want to move
              between chapters, actors, and reference pages.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Editorial aim
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                The goal is not just to tell what happened, but to help explain
                why the conflict keeps recurring and why its layers remain so
                difficult to separate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {storyNotes.map((item) => (
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
                Entry points
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Choose how to enter the narrative
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              These paths are designed for different reading styles while
              keeping the overall story coherent and accessible.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredLinks.map((item) => (
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
                  Open path →
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
              Reading support
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Move between narrative and reference
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Readers can follow the story in order, compare the main actors,
              or use the appendix for chronology, definitions, and supporting
              sources while reading.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/actors"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Review actors
              </Link>

              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open appendix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}