"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

const links = [
  { href: "/story", label: "Story" },
  { href: "/chapters", label: "Chapters" },
  { href: "/actors", label: "Actors" },
  { href: "/context", label: "Context" },
  { href: "/appendix", label: "Appendix" },
]

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  if (pathname === href) return true
  return pathname.startsWith(`${href}/`)
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const activeLabel = useMemo(() => {
    const activeLink = links.find((link) => isLinkActive(pathname, link.href))
    return activeLink?.label ?? "Home"
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72px] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/"
              className="min-w-0"
              onClick={() => setMenuOpen(false)}
              aria-label="Go to homepage"
            >
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Rwanda–DRC
                </span>
                <span className="truncate text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                  Explanatory Project
                </span>
              </div>
            </Link>
          </div>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary navigation"
          >
            {links.map((link) => {
              const isActive = isLinkActive(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/story/chapter-1"
              className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:text-slate-950 md:inline-flex"
            >
              Start reading
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:text-slate-950 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-site-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-site-navigation"
            className="border-t border-slate-200 pb-4 pt-4 md:hidden"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Current section
                </p>
                <p className="mt-2 text-base font-semibold tracking-tight text-slate-950">
                  {activeLabel}
                </p>
              </div>

              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile primary navigation"
              >
                {links.map((link) => {
                  const isActive = isLinkActive(pathname, link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-[1.25rem] px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <Link
                    href="/story/chapter-1"
                    className="inline-flex items-center justify-center rounded-[1.25rem] border border-slate-900 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Start reading
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-[1.25rem] border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:text-slate-950"
                  >
                    Home
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}