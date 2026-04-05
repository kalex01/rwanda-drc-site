import Link from "next/link"

const timelineEvents = [
  {
    year: "1994",
    title: "Genocide against the Tutsi in Rwanda",
    description:
      "The genocide reshaped Rwanda’s security outlook and had lasting regional consequences across the Great Lakes region."
  },
  {
    year: "1996–1997",
    title: "First Congo War",
    description:
      "Regional military intervention and the collapse of Mobutu’s rule transformed conflict dynamics in then-Zaire."
  },
  {
    year: "1998–2003",
    title: "Second Congo War",
    description:
      "A broader regional war deepened armed fragmentation, foreign involvement, and long-term instability in eastern Congo."
  },
  {
    year: "2012",
    title: "M23 emerges",
    description:
      "M23 became a major armed movement in eastern DRC and drew strong international attention."
  },
  {
    year: "2013",
    title: "M23 defeated",
    description:
      "Congolese and regional military pressure contributed to the group’s decline."
  },
  {
    year: "2021–2022",
    title: "M23 resurgence",
    description:
      "The group re-emerged, reigniting conflict in North Kivu and increasing regional tensions."
  },
  {
    year: "2023–2024",
    title: "Ceasefire and mediation efforts",
    description:
      "Regional diplomacy, ceasefire discussions, and renewed accusations shaped the political response to the conflict."
  }
]

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/appendix"
        className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        ← Back to Appendix
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Timeline
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Major dates and turning points
      </h1>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        This timeline highlights major historical moments and conflict-related
        developments referenced throughout the site.
      </p>

      <div className="mt-10 space-y-5">
        {timelineEvents.map((item) => (
          <section
            key={`${item.year}-${item.title}`}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              {item.year}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
          </section>
        ))}
      </div>
    </div>
  )
}