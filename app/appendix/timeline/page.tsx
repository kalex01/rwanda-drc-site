import Image from "next/image"
import Link from "next/link"

type TimelineEvent = {
  year: string
  title: string
  summary: string
  significance: string
  image?: string
  alt?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1994",
    title: "The genocide against the Tutsi reshapes Rwanda’s security outlook",
    summary:
      "The genocide against the Tutsi remains the foundational trauma behind modern Rwanda’s security doctrine. The collapse of order, the role of extremist networks, and the flight of perpetrators into what was then Zaire deeply shaped how Kigali came to view threats emerging from across the border.",
    significance:
      "Any serious reading of Rwanda’s later actions in eastern Congo begins here: security fears, regional intervention, and political narratives were all heavily influenced by the aftermath of 1994.",
    image: "/images/timeline-1994.jpg",
    alt: "Memorial-related image representing the 1994 genocide against the Tutsi in Rwanda",
  },
  {
    year: "1996–1998",
    title: "Regional war spills across borders",
    summary:
      "As armed elements reorganized in eastern Congo and state authority weakened, Rwanda became deeply involved in cross-border military dynamics. The wider region was pulled into overlapping wars involving multiple states, rebel movements, and local power brokers.",
    significance:
      "This period turned eastern Congo into a regional security arena, not just a domestic conflict zone. It also laid the groundwork for the long-term militarization of politics in the east.",
  },
  {
    year: "2000s",
    title: "Armed fragmentation becomes a lasting feature of the east",
    summary:
      "Even after formal peace processes and national transitions, eastern Congo continued to experience militia formation, armed competition, local grievances, and weak state control. Security did not stabilize evenly across the region.",
    significance:
      "The conflict became harder to explain through a single storyline. Local disputes, regional interests, mineral routes, state weakness, and civilian insecurity became tightly intertwined.",
  },
  {
    year: "2012–2013",
    title: "M23 emerges, then is pushed back",
    summary:
      "The M23 rebellion drew major regional and international attention. Its rise highlighted the fragility of state control in eastern Congo, while its later military setback did not eliminate the deeper conditions that had enabled its emergence.",
    significance:
      "This moment made clear that military reversals alone were not enough to produce durable stability. The political and regional dimensions remained unresolved.",
  },
  {
    year: "2022–2024",
    title: "M23 returns and the crisis intensifies around North Kivu",
    summary:
      "M23 re-emerged as a central force in the conflict, capturing territory and sharply raising regional tensions. Civilians again faced displacement, insecurity, and an atmosphere of escalating confrontation as diplomatic efforts struggled to keep pace.",
    significance:
      "The renewed M23 advance forced the region back into a high-stakes phase, making the Rwanda–DRC relationship a central part of the crisis once again.",
    image: "/images/timeline-m23-goma.jpg",
    alt: "Conflict-related image associated with the M23 crisis near Goma",
  },
  {
    year: "2025",
    title: "Diplomatic pressure grows as external mediation intensifies",
    summary:
      "As the security situation remained serious, diplomatic engagement increased. Regional actors, international partners, and external mediators sought pathways to reduce escalation and revive negotiation channels.",
    significance:
      "This phase underscored a recurring lesson of the conflict: armed developments and political settlements move together, and diplomacy remains essential even when trust is low.",
    image: "/images/timeline-washington-2025.jpg",
    alt: "Diplomatic meeting image linked to 2025 mediation efforts",
  },
]

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-12">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Appendix · Timeline
            </p>

            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              A chronological guide to the Rwanda–DRC conflict
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This timeline does not try to capture every event. It is designed
              to help readers track the major turning points that shaped the
              conflict, the regional relationship, and the recurring cycle of
              insecurity in eastern Congo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Back to appendix
              </Link>
              <Link
                href="/appendix/sources"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View sources
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/timeline-washington-2025.jpg"
                alt="Diplomatic meeting illustrating the most recent phase of mediation and regional diplomacy"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Reading note
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                The conflict has no single starting point and no single cause.
                The most useful way to read it is through layers: historical
                trauma, state weakness, armed mobilization, regional security,
                and repeated but incomplete diplomacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How to use this page
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              Read down the page as a sequence of turning points. Each entry is
              meant to explain why a moment mattered, not just record that it
              happened.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Editorial focus
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              The emphasis here is explanatory: why the conflict keeps
              returning, why the east remains unstable, and why military and
              diplomatic phases are so tightly connected.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="space-y-6 md:space-y-8">
          {timelineEvents.map((event, index) => {
            const hasImage = Boolean(event.image)

            return (
              <article
                key={`${event.year}-${event.title}`}
                className="rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[170px_minmax(0,1fr)]">
                  <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r lg:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Moment {index + 1}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {event.year}
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-7">
                    <div
                      className={`grid items-start gap-6 ${
                        hasImage
                          ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(250px,0.8fr)]"
                          : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                          {event.title}
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                          {event.summary}
                        </p>

                        <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Why it matters
                          </p>
                          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                            {event.significance}
                          </p>
                        </div>
                      </div>

                      {hasImage ? (
                        <div className="self-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                          <div className="relative aspect-[5/4] w-full">
                            <Image
                              src={event.image as string}
                              alt={event.alt as string}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Next reference paths
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Continue into the reference material
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              After the timeline, the glossary helps decode recurring terms,
              while the sources page shows the reporting, documents, and
              materials that support the project.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/appendix/glossary"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open glossary
              </Link>
              <Link
                href="/appendix/sources"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open sources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}