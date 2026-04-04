import Link from "next/link"

const navLinks = [
  { href: "/chapters", label: "Chapters" },
  { href: "/actors", label: "Actors" },
  { href: "/appendix", label: "Appendix" }
]

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-blue-700"
        >
          Rwanda–DRC Site
        </Link>

        <nav className="flex flex-wrap gap-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}