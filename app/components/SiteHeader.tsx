"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
  { href: "/chapters", label: "Chapters" },
  { href: "/actors", label: "Actors" },
  { href: "/context", label: "Context" },
  { href: "/appendix", label: "Appendix" }
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 md:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-slate-950"
            onClick={() => setMenuOpen(false)}
          >
            Rwanda–DRC Site
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/chapters"
              className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 md:inline-flex"
            >
              Start reading
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50 md:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Link
                href="/chapters"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Start reading
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}