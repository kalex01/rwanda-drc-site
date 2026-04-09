import Link from "next/link"

const quickLinks = [
  {
    title: "Chapters",
    href: "/chapters",
    description:
      "Open the full chapter index and navigate through all 12 chapters."
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
      "Consult the glossary, timeline, and source reference section."
  }
]

const siteStructure = [
  {
    title: "12 Chapters",
    href: "/chapters",
    description: "A chapter-based structure designed for sequential reading."
  },
  {
    title: "3 Actor Pages",
    href: "/actors",
    description: "Focused profiles on Rwanda, the DRC, and M23."
  },
  {
    title: "Reference Appendix",
    href: "/appendix",
    description: "Glossary, timeline, and supporting source material."
  }
]

const highlights = [
  "Structured chapter navigation",
  "Actor-based conflict analysis",
  "Reference material in one place"
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
              Rwanda–DRC Site
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              Understanding the Rwanda–DRC conflict with clarity and structure
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Explore the conflict through organized chapters, actor profiles,
              and reference material designed to make a complex regional issue
              easier to follow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/chapters"
                className="inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Start with chapters
              </Link>

              <Link
                href="/actors"
                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Explore actors
              </Link>
            </div>

            <div className="mt-10 grid gap-3 border-t border-slate-200 pt-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h2>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                  Section
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <p className="mt-6 text-sm font-medium text-blue-700 transition group-hover:translate-x-1">
                Open section →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Project overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              A structured reading experience
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              The site is organized to help readers move between broad context,
              key actors, and reference material without losing continuity. It
              is designed to support both first-time readers and more targeted
              review.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {siteStructure.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Focus
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              What this site helps you do
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <li>Follow the conflict through a clear chapter-based structure.</li>
              <li>Compare the main actors through a shared analytical format.</li>
              <li>Use the appendix for timeline, glossary, and source support.</li>
            </ul>

            <div className="mt-8">
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
              >
                Open reference section
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}