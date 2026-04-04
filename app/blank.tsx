import Link from "next/link"

const helpfulLinks = [
  { href: "/", label: "Go home" },
  { href: "/chapters", label: "Browse chapters" },
  { href: "/actors", label: "View actors" },
  { href: "/appendix", label: "Open appendix" }
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Page not found
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            The page you requested does not exist, may have been moved, or the
            link may be incorrect.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}