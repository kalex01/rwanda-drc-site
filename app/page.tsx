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

const siteStructure = [
  {
    title: "12 Chapters",
    href: "/chapters",
    description: "Open the chapter index and navigate chapter by chapter."
  },
  {
    title: "3 Actor Pages",
    href: "/actors",
    description: "Rwanda, the DRC, and M23 in one shared structure."
  },
  {
    title: "Appendix",
    href: "/appendix",
    description: "Glossary, timeline, and sources reference section."
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Rwanda–DRC Site
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Understanding the Rwanda–DRC conflict
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            This site presents structured chapters, actor profiles, and reference
            material to help readers understand the conflict, its history, and its
            regional implications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/chapters"
              className="inline-flex items-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Start with chapters
            </Link>

            <Link
              href="/actors"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Explore actors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {item.description}
              </p>
              <p className="mt-4 text-sm font-medium text-blue-700">
                Open section →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold text-slate-900">
            Current site structure
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            The project currently includes a chapter hub, actor profiles, and an
            appendix section for reference material.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {siteStructure.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}