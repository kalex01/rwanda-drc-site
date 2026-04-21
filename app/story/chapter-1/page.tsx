import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Introduction | Chapter 1 | Rwanda–DRC Site",
  description:
    "Chapter 1 introduces the Rwanda–DRC conflict as an interconnected system shaped by history, insecurity, sovereignty, extraction, and regional rivalry.",
}

const chapterNotes = [
  {
    title: "Chapter purpose",
    text:
      "This opening chapter frames the conflict as an interconnected system rather than a single issue with a single cause.",
  },
  {
    title: "Core tension",
    text:
      "The central tension runs between Congolese sovereignty and Rwandan security logic, with both shaping how events are interpreted.",
  },
  {
    title: "Reading approach",
    text:
      "The chapter is designed to prepare readers for the wider sequence by identifying the main layers that recur throughout the site.",
  },
]

export default function ChapterOnePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 1
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Introduction
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                The Rwanda–DRC conflict is often described in fragments: a
                border crisis, a rebel problem, a mineral struggle, or a
                failure of governance. This chapter introduces a different way
                to read it — as a system in which history, insecurity,
                sovereignty, extraction, and regional rivalry reinforce one
                another over time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/chapters"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Back to chapters
                </Link>
                <Link
                  href="/story/chapter-2"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Next chapter
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Opening frame
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                This chapter does not try to solve the conflict in one formula.
                It establishes the reading logic for the rest of the site:
                several realities must be held together at once if the crisis is
                to be understood responsibly.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key lens
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  The conflict is not a single event. It is a layered structure
                  in which local violence, regional strategy, and international
                  economic systems remain linked.
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
            The Rwanda–DRC conflict is often described as if it were one thing:
            a border problem, a rebel problem, a mineral problem, or a failure
            of governance. Each of these descriptions captures part of the
            truth. None is enough on its own. What makes this conflict so
            difficult to grasp is that it is not a single crisis. It is a system
            in which history, insecurity, sovereignty, extraction, and regional
            rivalry reinforce one another over time.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Eastern Congo lies at the center of this system. It is rich in gold,
            coltan, tin, and tungsten — resources that are deeply connected to
            the global economy. Yet it is also one of the most unstable regions
            in the world. This is not a coincidence. The same conditions that
            make the region strategically valuable also make it vulnerable:
            difficult geography, uneven state authority, fragmented armed
            presence, and persistent cross-border insecurity.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              More than a local conflict
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              It is tempting to think of eastern Congo as a distant crisis
              affecting only those who live there. But the region cannot be
              understood in strictly local terms. Its instability has shaped
              relations between neighboring states, especially Rwanda and the
              Democratic Republic of the Congo. It has also become entangled
              with global industries that depend on minerals extracted, moved,
              and processed through complex supply chains.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This means the conflict operates at several levels at once.
              Locally, it affects families, markets, schools, and movement.
              Regionally, it shapes security calculations, alliances, and
              mistrust. Globally, it connects to trade, manufacturing, and the
              persistent difficulty of tracing value back to unstable origins.
            </p>
          </section>

          <section className="mt-12">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Central tension
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                One side emphasizes sovereignty and territorial control. The
                other emphasizes security, historical memory, and vigilance
                against danger across the border.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              At the heart of the Rwanda–DRC conflict lies a tension that has
              never been fully resolved. For the Democratic Republic of the
              Congo, the issue is fundamentally about sovereignty, territorial
              control, and the challenge of governing a vast and complex
              country. For Rwanda, it is deeply tied to security, historical
              memory, and the refusal to treat danger across the border as
              someone else’s problem.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              These perspectives are not merely rhetorical. They shape how
              events are interpreted, how states justify their actions, and why
              diplomacy often begins from incompatible assumptions. One side
              emphasizes territorial integrity. The other emphasizes existential
              vigilance. The conflict persists, in part, because these two
              frames continue to collide without being fully reconciled.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Reading the conflict as a system
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This project approaches the conflict not as a sequence of isolated
              episodes, but as an interconnected structure. Armed groups do not
              exist separately from mineral routes. Mineral routes do not exist
              separately from weak governance. Weak governance does not exist
              separately from regional competition. And regional competition
              does not exist separately from history.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              To understand eastern Congo responsibly, one must therefore be
              willing to hold several realities together at once: the memory of
              genocide, the fragility of the Congolese state, the strategic
              calculations of Rwanda, the role of armed actors such as M23, and
              the global systems that absorb the region’s resources while
              remaining structurally distant from its suffering.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is what the chapters that follow attempt to do. They do not
              offer a single cause or a single solution. Instead, they trace the
              layers of a conflict whose complexity is precisely what has
              allowed it to endure.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/chapters"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Back to chapters
          </Link>

          <Link
            href="/story/chapter-2"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}