import Link from "next/link"
import { chapters } from "@/app/data/chapters"

export default function ChaptersPage() {
  const chapterList = Object.values(chapters)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Chapters
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Explore all twelve chapters
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Browse the full chapter sequence of the Rwanda–DRC site and move
            through the narrative one chapter at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {chapterList.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/chapters/${chapter.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
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