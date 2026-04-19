import Link from "next/link"
import { chapters } from "@/app/data/chapters"

export default function ChaptersPage() {
  const chapterList = Object.values(chapters)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 px-5 py-8 shadow-sm backdrop-blur md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Chapters
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Explore all twelve chapters
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 text-left md:text-lg md:leading-8">
            Browse the full chapter sequence of the Rwanda–DRC site and move
            through the narrative one chapter at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 lg:px-8 md:pb-14">
        <div className="grid gap-5 md:grid-cols-2">
          {chapterList.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/chapters/${chapter.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-6"
            >
              <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                {chapter.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {chapter.summary}
              </p>

              <p className="mt-5 text-sm font-medium text-blue-700">
                Open chapter →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}