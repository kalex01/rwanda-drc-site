import Link from "next/link"

const sourceGroups = [
  {
    title: "International Organizations",
    description:
      "Institutions that publish official statements, humanitarian reporting, peacekeeping material, and regional conflict documentation.",
    items: [
      {
        name: "United Nations",
        url: "https://www.un.org",
        note: "Official documentation, statements, agencies, and reporting.",
      },
      {
        name: "African Union",
        url: "https://au.int",
        note: "Regional diplomacy, communiqués, and political positioning.",
      },
      {
        name: "International Crisis Group",
        url: "https://www.crisisgroup.org",
        note: "Conflict analysis, briefings, and policy-focused reporting.",
      },
    ],
  },
  {
    title: "Research and Analysis",
    description:
      "Institutions and think tanks that provide analytical framing, regional interpretation, and longer-form policy discussion.",
    items: [
      {
        name: "Brookings Institution",
        url: "https://www.brookings.edu",
        note: "Policy analysis and regional context.",
      },
      {
        name: "Chatham House",
        url: "https://www.chathamhouse.org",
        note: "Research, commentary, and international affairs analysis.",
      },
      {
        name: "Council on Foreign Relations",
        url: "https://www.cfr.org",
        note: "Background explainers and foreign policy perspectives.",
      },
    ],
  },
  {
    title: "News and Reporting",
    description:
      "Reporting organizations used to track current developments, diplomatic movement, and the pace of military or humanitarian change.",
    items: [
      {
        name: "Reuters",
        url: "https://www.reuters.com",
        note: "Wire reporting and fast-moving international coverage.",
      },
      {
        name: "BBC News",
        url: "https://www.bbc.com/news",
        note: "International news coverage and regional reporting.",
      },
      {
        name: "Al Jazeera",
        url: "https://www.aljazeera.com",
        note: "Global reporting with strong international conflict coverage.",
      },
    ],
  },
]

const sourceNotes = [
  {
    title: "Purpose",
    text:
      "This page shows the kinds of organizations and institutions that inform the project’s reference layer.",
  },
  {
    title: "Method",
    text:
      "The goal is not to rely on one source type alone, but to read across reporting, official institutions, and analytical work.",
  },
  {
    title: "Use",
    text:
      "Readers can use these references for verification, further reading, or deeper context beyond the main narrative pages.",
  },
]

export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Appendix · Sources
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Reference organizations and research paths
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This page gathers the main types of institutions, reporting
                outlets, and analytical sources relevant to the conflict and the
                wider regional context. It is designed to strengthen
                transparency, credibility, and further reading.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/appendix"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Back to appendix
                </Link>
                <Link
                  href="/appendix/timeline"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Open timeline
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Reading note
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                A serious explanatory project benefits from multiple source
                layers. Official institutions provide formal positions and
                documentation. Reporting tracks change over time. Research
                institutions help interpret the broader strategic picture.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Editorial approach
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  The emphasis here is structure and trust: a clear map of where
                  readers can go next, rather than a long unorganized link list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {sourceNotes.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Source groups
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Organized reference categories
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              These categories separate official institutions, analytical work,
              and reporting so readers can understand what kind of source they
              are consulting.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {sourceGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6"
              >
                <div className="md:max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Category
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-4">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[1.5rem] border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm sm:p-5"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                            {item.name}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                            {item.note}
                          </p>
                        </div>

                        <span className="text-sm font-medium text-slate-900 transition group-hover:translate-x-0.5">
                          Visit source →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Next reference paths
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Continue through the appendix
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Readers can move from sources back into the project’s chronology
              or terminology pages, depending on whether they want sequence,
              definitions, or documentation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/appendix/timeline"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open timeline
              </Link>
              <Link
                href="/appendix/glossary"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open glossary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}