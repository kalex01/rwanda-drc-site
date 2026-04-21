import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Regional Chessboard | Chapter 7 | Rwanda–DRC Site",
  description:
    "Chapter 7 examines the regional dimension of the conflict, showing how neighboring states project power, pursue security, and remain entangled in eastern Congo.",
}

const chapterNotes = [
  {
    title: "Regional frame",
    text:
      "This chapter explains that eastern Congo cannot be understood only as a domestic crisis. It is also a regional arena shaped by the calculations of neighboring states.",
  },
  {
    title: "Overlapping motives",
    text:
      "States intervened for different reasons: security, survival, influence, alliance commitments, and at times economic interest. Those motives did not always align cleanly.",
  },
  {
    title: "Why it matters",
    text:
      "The conflict persists not only because violence continues on the ground, but because mistrust and strategic competition remain embedded in the wider region.",
  },
]

export default function ChapterSevenPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 7
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                The Regional Chessboard
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Eastern Congo is not only a site of internal conflict. This
                chapter examines how it became a regional arena in which
                neighboring states projected power, pursued security, competed
                for influence, and remained tied to outcomes beyond Congo’s
                borders.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-6"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-8"
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
                The regional dimension matters because states do not enter the
                conflict from a single shared logic. Each brings its own fears,
                interests, and strategic assumptions, which makes diplomacy far
                harder than a simple peace formula suggests.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  Eastern Congo became not just a Congolese battlefield, but a
                  regional security space where several states learned to see
                  their own futures at stake.
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
            When war returned to Congo in 1998, it did not remain contained
            within Congolese territory. It widened into a regional crisis,
            drawing in neighboring states whose calculations were shaped by
            fear, rivalry, survival, and opportunity. To describe it as a civil
            conflict alone is to miss its broader structure. Eastern Congo
            became a space in which several countries projected power at once.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Rwanda re-entered Congo because it viewed the east not as a distant
            frontier, but as an active security zone. Uganda also entered, at
            first aligned with Rwanda, but not permanently tied to Rwanda’s
            exact priorities. Angola intervened out of concern for its own
            security and the risk that instability in Congo could empower
            hostile forces. Zimbabwe and Namibia entered in support of Kinshasa,
            linking military action to political alignment and, in some cases,
            economic interest.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A war of overlapping motives
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              What made the regional dimension so complex was that these
              countries were not acting for one shared reason. Rwanda’s logic
              was rooted in border security and post-genocide vigilance. Uganda
              sought influence and room to shape events in its own areas of
              concern. Angola feared regional spillover. Zimbabwe’s
              intervention reflected alliance commitments but also access to
              political and economic advantage.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Strategic point
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                Even when states appeared to stand on the same side, they were
                not necessarily moving toward the same outcome.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This meant that even when states appeared to be on the same side,
              they were not necessarily working toward the same outcome. The war
              therefore evolved as a layered struggle rather than a clean
              alliance system. At times, actors who entered with overlapping
              goals later found themselves competing for influence, routes, and
              leverage.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Congo as a regional arena
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              One of the most enduring consequences of the Congo wars is that
              eastern Congo ceased to be viewed only as a domestic space. It
              became a regional arena. Its instability affected neighboring
              capitals. Its armed groups crossed borders in strategic meaning if
              not always in formal movement. Its mineral wealth made control
              even more valuable.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              That legacy remains visible today. Even when direct interstate war
              is absent, the region continues to be interpreted through regional
              security lenses. Governments do not simply react to events in
              eastern Congo. They anticipate them, fear them, and at times
              attempt to shape them before they consolidate into outcomes they
              dislike.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The enduring problem of mistrust
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The regional system is sustained not only by power but by
              mistrust. Congo views external involvement through the lens of
              sovereignty and violation. Rwanda views instability through the
              lens of unfinished danger. Uganda watches both security and
              influence. Other states calculate how changes in eastern Congo
              affect their own position. In such an environment, diplomacy is
              difficult because the parties do not begin from the same reading
              of reality.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is why the region can appear stuck between war and peace.
              Formal conflict may recede, yet the logic of competition remains.
              The board stays in place even when the pieces are not moving
              openly.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A chessboard that never fully clears
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The phrase “regional chessboard” is useful because it captures the
              strategic character of what is taking place, but it is also
              incomplete. Unlike a chessboard, this is not a closed game with
              fixed rules and visible moves. It is a shifting field in which the
              pieces do not stay still, motives overlap, and the consequences
              are borne most heavily by civilians rather than by the states
              making calculations.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              To understand eastern Congo today, one must therefore see it not
              just as a Congolese tragedy, but as a regional system in which
              many actors remain invested, watchful, and unresolved.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-6"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-8"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}