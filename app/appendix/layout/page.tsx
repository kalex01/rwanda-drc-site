import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Appendix | Rwanda–DRC Site",
  description:
    "Reference material for the Rwanda–DRC site, including glossary terms, timeline entries, and source links."
}

export default function AppendixLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-6">
      <nav className="mb-8 flex flex-wrap gap-3 border-b pb-4 text-sm">
        <Link href="/appendix" className="underline">
          Appendix Home
        </Link>
        <Link href="/appendix/glossary" className="underline">
          Glossary
        </Link>
        <Link href="/appendix/timeline" className="underline">
          Timeline
        </Link>
        <Link href="/appendix/sources" className="underline">
          Sources
        </Link>
      </nav>

      {children}
    </div>
  )
}