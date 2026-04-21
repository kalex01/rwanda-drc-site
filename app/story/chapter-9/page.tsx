import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Narrative Battle | Chapter 9 | Rwanda–DRC Site",
  description:
    "Chapter 9 examines the struggle over meaning, legitimacy, and competing explanations that shape diplomacy, public perception, and political response in the Rwanda–DRC conflict.",
}

const chapterNotes = [
  {
    title: "Narrative power",
    text:
      "This chapter shows that the conflict is fought not only through force, but through interpretation. Competing explanations shape legitimacy, diplomacy, and external response.",
  },
  {
    title: "Core tension",
    text:
      "The main narratives emphasize different realities: one foregrounds sovereignty and external interference, while the other foregrounds insecurity and unresolved regional threat.",
  },
  {
    title: "Why it matters",
    text:
      "How the conflict is described affects sanctions, public perception, diplomatic room, and the kinds of solutions that appear politically possible.",
  },
]

export default function ChapterNinePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 9
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                The Narrative Battle
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                The Rwanda–DRC conflict is not shaped only by what happens on
                the ground. It is also shaped by how events are named,
                interpreted, and framed. This chapter examines the struggle over
                legitimacy, meaning, and explanation that influences diplomacy,
                public perception, and political response.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-8"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-10"
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
                In this conflict, narratives do more than describe events. They
                help determine who appears legitimate, who seems threatening,
                and which actions external audiences are prepared to tolerate or
                condemn.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  The struggle over meaning is part of the conflict itself
                  because political response is shaped not only by facts, but by
                  the frame through which those facts are understood.
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
            Conflicts are fought not only with weapons, but with explanations.
            In the Rwanda–DRC crisis, the battle over meaning is almost as
            important as the battle over territory. The same event can be
            narrated as aggression, defense, infiltration, resistance,
            intervention, or survival depending on who is speaking and to whom
            they are speaking.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            This matters because narratives do more than describe. They shape
            legitimacy. They influence sanctions, diplomacy, international
            sympathy, and the range of actions considered acceptable. In this
            conflict, control over interpretation has become a form of power in
            its own right.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Two dominant frames
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              One dominant narrative emphasizes regional interference, external
              backing to armed actors, and the idea that what is happening in
              eastern Congo cannot be understood as an internal problem alone.
              In this view, groups such as M23 are read through the lens of
              broader regional influence, and the conflict becomes part of a
              larger political and economic structure.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The other dominant narrative emphasizes insecurity, the unfinished
              consequences of the post-1994 regional order, and the dangers
              posed by hostile armed groups near Rwanda’s border. In this
              telling, Rwanda’s posture is framed as rooted in defensive
              necessity rather than expansion or opportunism. Eastern Congo
              appears less as a site of influence and more as a site of
              unresolved threat.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Interpretive problem
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                Each side highlights something real, but neither frame fully
                contains the whole conflict on its own.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Why clarity is difficult
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The difficulty is that both narratives draw on elements of
              reality, yet neither fully contains it. Security concerns are
              genuine. So are questions of sovereignty. Economic incentives
              matter. Historical memory matters. Armed groups are local in one
              sense and regionally entangled in another. The result is a
              conflict that resists simple moral or political categorization.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is why responsible analysis must distinguish between
              documented facts, analytical inference, and contested allegation.
              If these layers are collapsed into one another, explanation
              becomes advocacy rather than understanding. But if they are kept
              too rigidly apart, the larger structure of the conflict can
              disappear from view. The challenge is to remain precise without
              becoming naive, and critical without becoming careless.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Perception as political force
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Perception has real consequences. A state seen as disciplined and
              effective gains room to shape events diplomatically. A state seen
              as weak or fragmented struggles to control the terms in which its
              crisis is interpreted. An armed group seen as an isolated
              insurgency will be treated differently from one seen as part of a
              cross-border system. In each case, language influences response.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is especially important for a conflict like this one, where
              much of the struggle occurs in places that most external audiences
              never see directly. Reports, headlines, official statements, and
              diplomatic briefings become the windows through which the conflict
              is understood. Whoever shapes those windows shapes part of the
              conflict itself.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Beyond simplification
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The temptation in any complex crisis is to reduce it to a single
              key: one villain, one cause, one decisive interpretation. But the
              Rwanda–DRC conflict resists that impulse. It is a layered system
              in which history, trade, security, and power overlap. To flatten
              it into one narrative may feel satisfying, but it often leads to
              incomplete or distorted solutions.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The narrative battle therefore matters not because stories replace
              reality, but because stories shape how reality is acted upon. And
              in a conflict this complex, the struggle over meaning is part of
              the conflict itself.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-8"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-10"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}