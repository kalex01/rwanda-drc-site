import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Can the Cycle Be Broken? | Chapter 11 | Rwanda–DRC Site",
  description:
    "Chapter 11 examines whether the conflict cycle can be broken through state continuity, regional security, economic reform, and international responsibility.",
}

const chapterNotes = [
  {
    title: "Central question",
    text:
      "This chapter asks whether the conflict can be broken at all, and argues that no single intervention can succeed if the wider system remains intact.",
  },
  {
    title: "Core challenge",
    text:
      "Peace efforts often target one layer at a time — military, diplomatic, or economic — while the other reinforcing layers continue operating.",
  },
  {
    title: "Why it matters",
    text:
      "Durable change depends on aligning state continuity, regional security, economic reform, and international responsibility rather than treating them as separate tracks.",
  },
]

export default function ChapterElevenPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 11
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Can the Cycle Be Broken?
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                After tracing the historical roots, the war economy, the
                regional system, and the human cost, this chapter asks whether
                the cycle can be broken at all. Its answer is neither simple
                optimism nor resignation: change is possible, but only if the
                conflict is treated as an interconnected system rather than a
                single problem with a single remedy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-10"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-12"
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
                The cycle endures because its different layers keep reinforcing
                one another. Military pressure, diplomacy, economic reform, and
                governance continuity must support each other if the structure
                is to weaken.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  The problem is not only to stop one armed group or secure one
                  agreement. It is to make lawful continuity stronger than the
                  patterns that repeatedly pull the region back into crisis.
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
            After tracing the historical roots, the war economy, the regional
            system, and the human cost, the natural question is whether the
            cycle can be broken at all. The answer is neither simple optimism
            nor resigned pessimism. Change is possible, but only if the
            conflict is treated not as a single problem with a single remedy,
            but as a system whose parts reinforce one another.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            This is why so many peace efforts struggle. They often address one
            layer while leaving the others largely intact. A military response
            may weaken one group without changing the economic conditions that
            allow new actors to emerge. A diplomatic agreement may reduce
            immediate tension without resolving the mistrust that produced it. A
            trade reform may improve traceability in one part of the chain while
            leaving governance gaps untouched at the source.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The state question
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              At the center of any durable solution lies the Congolese state. No
              external actor can substitute for the steady presence of
              institutions able to secure roads, regulate trade, resolve
              disputes, and remain visible after crises fade from headlines. The
              problem is not only the absence of force. It is the absence of
              continuity. Stability requires not just intervention, but
              repetition: a road that stays open, a local office that continues
              to function, a school that remains staffed, a community that
              experiences the state as reliably present.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Structural requirement
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                Stability depends not only on action, but on continuity —
                institutions remaining present after the emergency moment has
                passed.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This makes the path forward slow by definition. It is easier to
              launch an operation than to build continuity. Yet without
              continuity, each short-term gain risks being swallowed again by
              the larger structure.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The regional security problem
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              A second condition is that regional security concerns cannot
              simply be wished away. Rwanda’s sense of vulnerability is part of
              the system, whether one agrees with every action taken in its name
              or not. Any serious effort to stabilize eastern Congo must
              therefore address not only Congolese sovereignty but also the
              regional security anxieties that continue to shape cross-border
              behavior. Ignoring these concerns does not eliminate them; it
              merely pushes them back into more informal and potentially
              destabilizing channels.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Durable progress requires a framework in which sovereignty and
              security are not treated as mutually exclusive claims. That is
              difficult, but essential. One side cannot build stability by
              acting as though borders do not matter. The other cannot build it
              by pretending that regional fears have no political force.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Redirecting value
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The third condition concerns economic flow. Minerals will remain
              important. The goal is not to make them irrelevant, but to
              redirect how their value is captured. That means improving
              formalization, increasing transparency, tightening oversight where
              possible, and ensuring that more of the benefit remains tied to
              lawful structures rather than to armed influence and informal
              extraction.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              None of this is easy because the current system is adaptive. But
              the fact that it adapts does not mean it cannot be reshaped. It
              means only that reforms must be persistent enough to become
              stronger than the old patterns they are trying to replace.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The world’s responsibility
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The wider world also has a role. Global demand is part of the
              structure of the conflict, even if it does not directly cause it.
              This creates a responsibility for companies, regulators, and
              states that benefit from the mineral chain. Supply chains do not
              need to be treated as morally pure to be improved, but they do
              need to be treated seriously enough to reduce the gap between
              value and accountability.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              In the end, breaking the cycle is less about finding a single
              decisive act than about aligning many smaller ones. Security
              reform, governance continuity, economic redirection, and regional
              diplomacy must begin to support one another rather than operate in
              isolation. That is what makes the task difficult. It is also what
              makes change possible.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-10"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-12"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}