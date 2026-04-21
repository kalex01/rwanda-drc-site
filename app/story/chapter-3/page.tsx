import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Land Beneath the Conflict | Chapter 3 | Rwanda–DRC Site",
  description:
    "Chapter 3 examines eastern Congo’s mineral wealth, fragmented control, armed presence, and the regional and global systems built around extraction and movement.",
}

const chapterNotes = [
  {
    title: "Core argument",
    text:
      "This chapter explains that eastern Congo is not defined only by instability. It is also defined by extraordinary mineral value, and the interaction between those two realities shapes the conflict.",
  },
  {
    title: "Control logic",
    text:
      "Authority in the east is often fragmented and localized. Control over roads, mines, and crossings can matter more than control over an entire territory.",
  },
  {
    title: "Why it matters",
    text:
      "Minerals, armed presence, and transport networks connect local insecurity to regional politics and global economic demand.",
  },
]

export default function ChapterThreePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 3
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                The Land Beneath the Conflict
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Eastern Congo is often described as a zone of instability, but
                that description is incomplete. This chapter argues that the
                region must also be understood as a place of extraordinary
                mineral value, where geography, fragmented authority, armed
                actors, and global demand combine into a durable system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-2"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-4"
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
                The conflict is not only about who fights. It is also about what
                the land contains, how value moves through it, and why
                fragmented control can become economically and politically
                useful.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  Eastern Congo is not simply a battleground. It is a terrain of
                  extraction, movement, and contested access woven into regional
                  and global systems.
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
            Eastern Congo is often described as a place of instability, but
            that description is incomplete. It is also a place of extraordinary
            value. Beneath its soil lies one of the richest concentrations of
            strategic minerals in the world. This dual reality — instability
            above ground and wealth beneath it — defines the logic of the
            conflict more than any single political explanation.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Geography plays a decisive role. The terrain is vast, mountainous in
            parts, and difficult to access. Infrastructure is limited, and state
            presence is uneven. In such an environment, authority does not
            simply disappear — it fragments. Control becomes localized, shifting
            from one actor to another depending on proximity, strength, and
            opportunity.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Minerals and global demand
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The region’s mineral wealth connects it directly to the global
              economy. Coltan is essential to modern electronics. Gold remains a
              universal store of value. Tin and tungsten are critical for
              industrial production. These are not marginal resources — they are
              embedded in the infrastructure of modern life.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Yet extraction often takes place through artisanal mining rather
              than large-scale industrial systems. Thousands of individuals work
              in conditions shaped by necessity rather than regulation. In this
              space, survival is immediate, and formal oversight is limited.
              This creates an environment where multiple actors — local,
              regional, and external — can insert themselves into the chain of
              extraction and movement.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Fragmented control and armed presence
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              In eastern Congo, control is rarely absolute. It is exercised
              through access: to a road, to a mine, to a border crossing. Armed
              groups do not always seek to govern entire territories. It is
              often sufficient to control strategic points that allow them to
              influence movement and extract value.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Structural point
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                In the east, instability is not only a result of conflict. It
                can also become a condition that allows extraction networks and
                coercive control to continue operating.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Among these actors, M23 has played a significant role. Its
              presence is not limited to military confrontation. By positioning
              itself near key zones and routes, it becomes part of the broader
              economic structure. The consequences are severe: communities are
              displaced, insecurity spreads, and the authority of the state
              becomes further diluted.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This creates a cycle in which instability is not only a result of
              conflict but also a condition that allows the system to continue
              functioning. The absence of consistent control becomes an enabling
              factor rather than a temporary disruption.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Routes, borders, and regional flow
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Once extracted, minerals do not remain in place. They move. This
              movement is structured through networks of traders,
              intermediaries, and transport routes that connect remote mining
              sites to regional hubs. At each stage, value is added, recorded,
              or sometimes obscured.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Rwanda occupies a critical position in this system as a regional
              gateway. It offers infrastructure, organization, and export
              capacity that stand in contrast to the fragmented environment
              across the border. This position has placed it at the center of
              ongoing debates about origin, traceability, and influence.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The complexity lies in the overlap between structure and
              ambiguity. Minerals may pass through multiple hands before
              reaching formal export channels. By the time they enter global
              markets, their earlier journey is often difficult to reconstruct
              with certainty.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A system, not a moment
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              What emerges is not a single conflict, but a system. Geography,
              mineral wealth, armed presence, and global demand interact in ways
              that reinforce one another. The land is not merely a backdrop —
              it is an active participant in the logic of the conflict.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              To understand eastern Congo is therefore to understand how local
              conditions connect to regional dynamics and global structures. The
              story is not only about who controls the land, but about what
              flows through it, who benefits, and why the system continues to
              endure.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-2"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-4"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}