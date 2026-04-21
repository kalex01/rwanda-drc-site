import Image from "next/image"
import Link from "next/link"

const comparisonPoints = [
  {
    title: "Security frame",
    text:
      "Rwanda emphasizes border security and the FDLR. The DRC emphasizes sovereignty and external interference. M23 emphasizes grievance, protection, and political exclusion.",
  },
  {
    title: "Territorial frame",
    text:
      "The DRC sees the crisis through control of sovereign territory. M23’s relevance is linked to its operational reach on that territory. Rwanda’s role is assessed in relation to what happens across the border.",
  },
  {
    title: "Diplomatic frame",
    text:
      "All three actors shape diplomacy differently: the DRC seeks backing, Rwanda seeks recognition of its security concerns, and M23 complicates or conditions any political settlement.",
  },
]

const actors = [
  {
    name: "Rwanda",
    slug: "rwanda",
    subtitle: "State actor",
    image: "/images/paul-kagame.jpg",
    imagePosition: "object-[center_20%]",
    intro:
      "Rwanda is one of the most consequential actors in the conflict system around eastern DRC. Its role is shaped by security doctrine, regional influence, and the legacy of the 1994 genocide.",
    summary:
      "Rwanda frames the conflict primarily through border security, the FDLR question, and wider regional stability concerns.",
    highlights: [
      "Security doctrine and border concerns",
      "Repeated denials of support for M23",
      "Central to diplomacy and external pressure",
    ],
  },
  {
    name: "Democratic Republic of Congo",
    slug: "drc",
    subtitle: "State actor",
    image: "/images/felix-tshisekedi2.jpg",
    imagePosition: "object-[78%_18%]",
    intro:
      "The DRC is the principal territorial state affected by the conflict, with eastern provinces such as North Kivu and South Kivu bearing the brunt of repeated armed confrontation.",
    summary:
      "The DRC sees the crisis as a sovereignty, governance, and territorial-control struggle shaped by both internal armed groups and external interference.",
    highlights: [
      "Sovereignty and territorial integrity",
      "Strong push for international attribution",
      "Military response alongside diplomacy",
    ],
  },
  {
    name: "M23",
    slug: "m23",
    subtitle: "Armed group",
    image: "/images/timeline-m23-goma.jpg",
    imagePosition: "object-center",
    intro:
      "M23 is the most internationally visible armed group in the current phase of the conflict and has been one of the main drivers of renewed military escalation in eastern DRC.",
    summary:
      "M23’s resurgence transformed chronic instability into a sharper regional crisis with major military, diplomatic, and territorial implications.",
    highlights: [
      "Central actor in recent escalation",
      "Territorial control and military leverage",
      "Major obstacle in peace efforts",
    ],
  },
]

const overviewNotes = [
  {
    title: "Why these actors",
    text:
      "These three pages bring together the main state and armed actors that most consistently shape the conflict’s direction, meaning, and diplomatic difficulty.",
  },
  {
    title: "How to read them",
    text:
      "The profiles work best when read comparatively. Each actor frames the conflict differently, and those differences help explain why the crisis persists.",
  },
  {
    title: "What they reveal",
    text:
      "Taken together, the profiles show how security, sovereignty, territory, and leverage interact across state policy and armed mobilization.",
  },
]

export default function ActorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Actors
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Compare the main actors shaping the conflict
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              These profiles help readers compare the principal actors through a
              shared analytical structure: objectives, public positions, role in
              the conflict, international perspective, and key tensions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/context"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Open context page
              </Link>
              <Link
                href="/chapters"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Return to chapters
              </Link>
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open appendix
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src="/images/diplomacy-meeting.jpg"
                alt="Diplomatic meeting representing negotiation, pressure, and competing actor positions"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Comparative lens
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                The conflict becomes clearer when state actors and armed actors
                are read side by side rather than in isolation. Comparison helps
                explain why the same event can produce sharply different
                interpretations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {overviewNotes.map((item) => (
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

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Comparative lens
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                How to read the actors together
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              These are not isolated profiles. They are meant to clarify how the
              same conflict is framed differently by different participants.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {comparisonPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 pb-10 sm:px-6 lg:px-8 md:py-4 md:pb-14">
        <div className="grid gap-5 md:grid-cols-3">
          {actors.map((actor) => (
            <article
              key={actor.slug}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <Link href={`/actors/${actor.slug}`} className="block">
                <div className="relative aspect-[4/3] w-full bg-slate-200">
                  <Image
                    src={actor.image}
                    alt={actor.name}
                    fill
                    className={`object-cover ${actor.imagePosition}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-5 py-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                      {actor.subtitle}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      {actor.name}
                    </h2>
                  </div>
                </div>
              </Link>

              <div className="p-5 sm:p-6">
                <p className="text-base leading-7 text-slate-700">
                  {actor.intro}
                </p>

                <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    At a glance
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {actor.summary}
                  </p>
                </div>

                <ul className="mt-5 space-y-3">
                  {actor.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-[1rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={`/actors/${actor.slug}`}
                    className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Open full profile
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reading support
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Move between actors and the wider system
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The actor pages work best alongside the story, context, and
              appendix sections. Readers can compare positions here, then return
              to chronology, geography, and chapter-based explanation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/story"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open story
              </Link>
              <Link
                href="/context"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View context
              </Link>
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open appendix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}