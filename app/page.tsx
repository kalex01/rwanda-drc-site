import Link from "next/link"

const quickLinks = [
  {
    title: "Chapters",
    href: "/chapters",
    description:
      "Open the full chapter index and navigate to all 12 chapters."
  },
  {
    title: "Actors",
    href: "/actors",
    description:
      "Read structured pages on Rwanda, the DRC, and M23."
  },
  {
    title: "Appendix",
    href: "/appendix",
    description:
      "Open the glossary, timeline, and sources reference section."
  }
]

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide">
          Rwanda–DRC Site
        </p>
        <h1 className="mt-3 text-5xl font-bold leading-tight">
          Understanding the Rwanda–DRC conflict
        </h1>
        <p className="mt-6 text-lg leading-8">
          This site presents structured chapters, actor profiles, and reference
          material to help readers understand the conflict, its history, and its
          regional implications.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6">{item.description}</p>
            <p className="mt-4 text-sm font-medium underline">
              Open section
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Current site structure</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link
            href="/chapters"
            className="block rounded-xl border p-4 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">12 Chapters</h3>
            <p className="mt-2 text-sm leading-6">
              Open the chapter index and navigate chapter by chapter.
            </p>
          </Link>

          <Link
            href="/actors"
            className="block rounded-xl border p-4 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">3 Actor Pages</h3>
            <p className="mt-2 text-sm leading-6">
              Rwanda, the DRC, and M23 in one shared structure.
            </p>
          </Link>

          <Link
            href="/appendix"
            className="block rounded-xl border p-4 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">Appendix</h3>
            <p className="mt-2 text-sm leading-6">
              Glossary, timeline, and sources reference section.
            </p>
          </Link>
        </div>
      </section>
    </main>
  )
}