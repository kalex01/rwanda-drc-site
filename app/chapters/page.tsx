import Link from "next/link"
import { chapters } from "@/app/data/chapters"

export default function ChaptersPage() {
  const chapterList = Object.values(chapters)

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold">Chapters</h1>
      <p className="mt-4 text-lg">
        Browse all twelve chapters of the Rwanda–DRC site.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {chapterList.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="block rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">{chapter.title}</h2>
            <p className="mt-3 text-sm leading-6">{chapter.summary}</p>
            <p className="mt-4 text-sm font-medium underline">
              Open chapter
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}