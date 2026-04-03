import Link from "next/link"

export default function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Rwanda–DRC Site
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link href="/chapters" className="underline">
            Chapters
          </Link>
          <Link href="/actors" className="underline">
            Actors
          </Link>
          <Link href="/appendix" className="underline">
            Appendix
          </Link>
        </nav>
      </div>
    </header>
  )
}