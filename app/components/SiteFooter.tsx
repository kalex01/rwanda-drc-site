import Link from "next/link"

const primaryLinks = [
  { href: "/story", label: "Story" },
  { href: "/chapters", label: "Chapters" },
  { href: "/actors", label: "Actors" },
  { href: "/context", label: "Context" },
  { href: "/appendix", label: "Appendix" },
]

const referenceLinks = [
  { href: "/appendix/timeline", label: "Timeline" },
  { href: "/appendix/glossary", label: "Glossary" },
  { href: "/appendix/sources", label: "Sources" },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
        <div className="rounded-[2rem] border border-slate-800 bg-blue-950 p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                Rwanda–DRC
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Explanatory Project
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-200 sm:text-base">
                Structured chapters, actor profiles, context pages, and
                reference material designed to help readers understand the
                Rwanda–DRC conflict as a layered regional and global system.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-1"
                  className="inline-flex items-center rounded-full border border-white bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Start reading
                </Link>
                <Link
                  href="/appendix"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Open appendix
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Main sections
              </p>
              <nav className="mt-4 flex flex-col gap-2">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Reference paths
              </p>
              <nav className="mt-4 flex flex-col gap-2">
                {referenceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-200">
                A narrative and reference-oriented site for reading the
                conflict with greater structure, clarity, and context.
              </p>

              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}