import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Appendix | Rwanda–DRC Site",
  description:
    "Reference material for the Rwanda–DRC site, including glossary terms, timeline entries, and source links."
}

const appendixLinks = [
  { href: "/appendix", label: "Appendix Home" },
  { href: "/appendix/glossary", label: "Glossary" },
  { href: "/appendix/timeline", label: "Timeline" },
  { href: "/appendix/sources", label: "Sources" }
]

export default function AppendixLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur md:p-5">
          <nav className="flex flex-wrap gap-3 text-sm">
            {appendixLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
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