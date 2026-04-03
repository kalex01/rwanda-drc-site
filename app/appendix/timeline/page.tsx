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
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6">
        <Link href="/appendix" className="underline">
          ← Back to Appendix
        </Link>
      </div>

      <h1 className="text-4xl font-bold">Timeline</h1>
      <p className="mt-4 text-lg">
        Major dates and turning points referenced throughout the site.
      </p>

      <div className="mt-8 space-y-6">
        {timelineEvents.map((item) => (
          <section key={`${item.year}-${item.title}`} className="rounded-2xl border p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide">{item.year}</p>
            <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 leading-7">{item.description}</p>
          </section>
        ))}
      </div>
    </main>
  )
}