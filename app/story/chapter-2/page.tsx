import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Historical Roots of the Conflict | Chapter 2 | Rwanda–DRC Site",
  description:
    "Chapter 2 examines the historical roots of the Rwanda–DRC conflict, including colonial legacies, weak state development, the 1994 genocide, and the Congo wars.",
}

const chapterNotes = [
  {
    title: "Historical frame",
    text:
      "This chapter shows that the conflict did not begin with one rebellion or one diplomatic crisis. Its roots reach back through colonial boundaries, weak institutions, and accumulated regional violence.",
  },
  {
    title: "1994 rupture",
    text:
      "The genocide in Rwanda and the movement of armed elements into eastern Congo transformed the regional security landscape in lasting ways.",
  },
  {
    title: "Why it matters",
    text:
      "Current tensions are shaped not only by present-day calculations, but by fears, wars, and political structures inherited from earlier decades.",
  },
]

export default function ChapterTwoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 2
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Historical Roots of the Conflict
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                The conflict in eastern Congo did not begin with one rebellion
                or one diplomatic crisis. This chapter traces the deeper forces
                that shaped the region long before the current phase:
                colonial-era boundaries, uneven state development, the 1994
                rupture, and the wars that embedded insecurity across borders.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-1"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-3"
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
                This chapter argues that history is not background. In the
                Rwanda–DRC conflict, past violence, inherited borders, and
                unresolved security fears remain active forces in the present.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  To understand the present crisis, readers must see how the
                  region entered the modern era already carrying fragility,
                  militarization, and incomplete state control.
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
            The conflict in eastern Congo did not begin with one rebellion or
            one diplomatic crisis. Its foundations were laid much earlier,
            through a combination of colonial boundary-making, weak state
            development, and the accumulation of unresolved violence across the
            Great Lakes region. To understand the present, one must first
            understand that the region entered the modern era already burdened
            by fragility.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Colonial administration left behind borders that were politically
            formal but socially and historically complicated. After
            independence, neither Rwanda nor Congo entered a period of stable
            institutional consolidation. Rwanda experienced repeated political
            upheavals and ethnic violence. Congo, vast and difficult to govern,
            became a state whose reach often failed to match its territorial
            scale. Eastern Congo remained especially vulnerable to
            marginalization, weak infrastructure, and fragmented authority.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              1994 as regional rupture
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The decisive rupture came in 1994 with the genocide in Rwanda.
              The end of the genocide did not produce a clean regional reset.
              Instead, it generated movement on a massive scale. Large numbers
              of refugees and armed elements crossed into eastern Congo. What
              arrived there was not just displacement, but fear, militarization,
              and the continuation of unresolved threat across a border that was
              politically real but strategically porous.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Regional consequence
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                After 1994, eastern Congo became central to Rwanda’s security
                imagination, not simply a neighboring zone of instability.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              For Rwanda, this changed the meaning of eastern Congo
              permanently. The region was no longer only a neighboring zone of
              instability. It became a place from which future threats could
              emerge. This perception, rooted in the experience of genocide and
              its aftermath, remains central to Rwanda’s strategic reading of
              the east.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The Congo wars and their legacy
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The First and Second Congo Wars deepened this regional
              entanglement. Foreign armies entered Congolese territory.
              Alliances formed and broke. Eastern Congo became not only a
              battlefield, but an arena in which sovereignty, security, and
              resource access collided. The wars were not isolated episodes.
              They transformed the structure of the region, embedding
              cross-border insecurity into the political logic of both Congo and
              its neighbors.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Even after formal peace agreements, the deeper patterns did not
              disappear. Armed groups adapted. Local and regional networks
              remained. Trade routes continued to operate. Mistrust survived
              diplomatic language. What ended on paper did not fully end in
              practice. Instead, the conflict shifted from large-scale
              interstate war toward a more fragmented but persistent system of
              instability.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Why history still governs the present
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This historical background matters because current tensions are
              not simply the result of present-day opportunism. They are also
              shaped by inherited fears, past violence, and institutions that
              never fully recovered or consolidated. Rwanda’s posture cannot be
              understood apart from 1994. Congo’s vulnerabilities cannot be
              understood apart from the long history of weak state penetration
              in the east. Armed groups cannot be understood apart from the wars
              that normalized fragmented violence as part of regional political
              life.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              History, in this region, is not background. It is active. It
              informs how events are interpreted, how states justify their
              actions, and why mistrust remains so durable even when diplomacy
              appears to move forward. The conflict persists not only because of
              what is happening now, but because the past still structures what
              each side believes is at stake.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-1"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-3"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}