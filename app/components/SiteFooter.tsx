import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Rwanda–DRC Site
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Structured chapters, actor profiles, and reference material for
            understanding the Rwanda–DRC conflict.
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-slate-600">
          <Link href="/chapters" className="transition hover:text-slate-900">
            Chapters
          </Link>
          <Link href="/actors" className="transition hover:text-slate-900">
            Actors
          </Link>
          <Link href="/appendix" className="transition hover:text-slate-900">
            Appendix
          </Link>
          <Link href="/context" className="transition hover:text-slate-900">
            Context
          </Link>
        </nav>
      </div>
    </footer>
  )
}