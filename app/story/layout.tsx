import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Story | Rwanda–DRC Site",
  description:
    "Chapter-based narrative content for the Rwanda–DRC site."
}

export default function StoryLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur md:p-5">
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              href="/chapters"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Chapters Index
            </Link>
            <Link
              href="/story"
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Story Home
            </Link>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          {children}
        </div>
      </section>
    </main>
  )
}