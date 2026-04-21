import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Human Cost | Chapter 10 | Rwanda–DRC Site",
  description:
    "Chapter 10 examines the human cost of the Rwanda–DRC conflict, including insecurity, displacement, interrupted education, fragile livelihoods, and the everyday burden carried by civilians.",
}

const chapterNotes = [
  {
    title: "Human focus",
    text:
      "This chapter shifts attention from states, armed groups, and trade systems to the civilians who live inside the conflict’s daily consequences.",
  },
  {
    title: "Core reality",
    text:
      "The conflict is not experienced only through moments of violence. It is also lived as repeated interruption, uncertainty, displacement, and fragile routine.",
  },
  {
    title: "Why it matters",
    text:
      "A serious understanding of the conflict must account not only for strategic logic, but for the long-term burden placed on households, children, and local communities.",
  },
]

export default function ChapterTenPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 10
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                The Human Cost
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                The Rwanda–DRC conflict is often analyzed through strategy,
                armed actors, and regional power. This chapter turns to the
                people living inside that system and examines how insecurity,
                displacement, interrupted education, and fragile livelihoods
                shape daily life over time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-9"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-11"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Next chapter
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Chapter lens
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                The deepest cost of prolonged conflict is not only visible in
                emergencies. It is also visible in ordinary life becoming
                unstable, reversible, and difficult to trust.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  Civilians do not experience the conflict as a theory. They
                  experience it as interrupted normalcy: unsafe roads, broken
                  schooling, repeated movement, and exhausted resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {chapterNotes.map((item) => (
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

      <article className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            It is possible to discuss eastern Congo in terms of states, armed
            groups, mineral routes, and regional strategy for a long time
            without speaking about the people who live inside the system. Yet
            their lives are where the conflict becomes most real. For them,
            this is not a geopolitical case study. It is a condition of daily
            life shaped by uncertainty, movement, interruption, and endurance.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            In places touched by repeated insecurity, time itself is
            experienced differently. Stability is not assumed. It is temporary,
            conditional, and often fragile. A road may be usable for months,
            then suddenly not. A market may reopen, only to shrink again when
            movement becomes risky. A family may return home after
            displacement, only to leave once more when control shifts nearby.
            The conflict is therefore not only a series of violent moments. It
            is also a long pattern of interrupted normalcy.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Life under uncertainty
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              For many households, the central question is not long-term
              planning but short-term safety. Can children travel to school?
              Can goods reach the market? Can one sleep in the same place next
              week? These are not dramatic questions in appearance, but
              together they define the limits of ordinary life. Where control
              is unstable, even modest routines become difficult to sustain.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Displacement is one of the clearest expressions of this
              insecurity. People do not always flee because a battle is taking
              place directly in front of them. Often they move because
              uncertainty itself becomes too heavy to live under. Rumor, fear,
              and shifting authority can be enough to unsettle an entire
              community. When movement begins, it is rarely elegant or orderly.
              Families take what they can carry and move toward a place that
              seems marginally safer.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Human reality
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                One of the deepest injuries of prolonged conflict is that
                uncertainty becomes normal enough to organize daily life.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Children shaped by interruption
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              For children, the effects are both immediate and long-lasting.
              Education becomes fragmented. Schooling may stop and restart
              multiple times. Teachers may leave. Families may be relocated.
              Entire years of learning can be broken into pieces that never
              fully reconnect. What this produces is not only educational loss,
              but a narrower horizon of expectation. A child raised in repeated
              instability learns to measure life differently from one raised in
              continuity.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Over time, the abnormal becomes familiar. The presence of armed
              actors, the sudden movement of people, the caution around roads
              and gatherings — these become part of what feels ordinary. This
              normalization is one of the deepest injuries of prolonged
              conflict, because it reshapes what communities come to consider
              possible or realistic.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Work reduced to survival
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The economic effects are equally severe. In stable settings, work
              can serve as a bridge toward improvement. In conflict-affected
              zones, work is often reduced to immediate survival. Mining, small
              trade, transport, and informal labor become not stepping stones
              to advancement, but ways of enduring one day at a time. Even when
              these activities generate movement and value in the broader
              system, they do not necessarily create security for the people
              performing them.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is where the human cost and the economic structure intersect.
              The same resources that connect the region to global markets do
              not guarantee protection for those living closest to them. On the
              contrary, they can intensify competition over space, routes, and
              influence. The region’s value in the international economy does
              not automatically translate into dignity in everyday life.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Resilience without romanticizing suffering
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              It is important to recognize resilience, but not to romanticize
              it. Communities continue to rebuild. Markets return. Families
              reorganize. Social life persists in forms both quiet and
              practical. But resilience should never be mistaken for evidence
              that conditions are acceptable. It is often simply the human
              capacity to continue under circumstances that should not have
              become normal.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The human cost of the Rwanda–DRC conflict is therefore not only
              counted in deaths, though those are grave enough. It is also
              measured in deferred futures, disrupted childhoods, interrupted
              education, repeated displacement, and the exhaustion of living
              within structures one does not control.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-9"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-11"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}