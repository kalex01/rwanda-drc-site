import Link from "next/link"
import { chapters } from "@/app/data/chapters"

const readingNotes = [
  {
    title: "Narrative flow",
    text:
      "The chapter sequence is designed to move from historical grounding into actors, security dynamics, and the broader regional logic of the conflict.",
  },
  {
    title: "How to read",
    text:
      "Readers can move in order for the full argument, or use the actors and appendix pages alongside the chapters for added context and reference.",
  },
  {
    title: "Editorial aim",
    text:
      "This section is structured as a guided reading path rather than a simple archive of pages.",
  },
]

export default function ChaptersPage() {
  const chapterList = Object.values(chapters)

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Chapters
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Explore the full chapter sequence
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Browse the narrative structure of the Rwanda–DRC site and move
              through the project chapter by chapter. This section is meant to
              make the reading path feel deliberate, coherent, and easy to
              follow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Back to homepage
              </Link>
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Open appendix
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
                  {chapterList.length}
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
              The chapters are intended to work together as a structured
              explanatory arc, while still allowing readers to enter at
              different points and return to the reference material when needed.
            </p>
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

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Chapter index
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Read one chapter at a time
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              Each chapter card is treated as a narrative entry point. The goal
              is clarity, sequence, and momentum rather than a dense list of
              links.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {chapterList.map((chapter, index) => (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Chapter {index + 1}
                  </div>
                  <span className="text-sm font-medium text-slate-400 transition group-hover:text-slate-700">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {chapter.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {chapter.summary}
                </p>

                <p className="mt-6 text-sm font-medium text-slate-900">
                  Open chapter
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
              Readers can follow the chapters in order, compare the main actors,
              or use the appendix for definitions, chronology, and supporting
              sources.
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