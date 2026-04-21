import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Story",
  description: "Chapter-based narrative content for the Rwanda–DRC site.",
}

export default function StoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-sm sm:p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Story navigation
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Move between the homepage, the story landing page, and the full
                  chapters index while reading the narrative sequence.
                </p>
              </div>

              <nav
                className="flex flex-wrap gap-2 md:justify-end"
                aria-label="Story navigation"
              >
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Home
                </Link>
                <Link
                  href="/story"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Story home
                </Link>
                <Link
                  href="/chapters"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Chapters index
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  )
}