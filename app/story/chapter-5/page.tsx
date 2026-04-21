import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rwanda’s Strategic Mindset | Chapter 5 | Rwanda–DRC Site",
  description:
    "Chapter 5 examines Rwanda’s strategic mindset through historical memory, security vigilance, state discipline, and regional economic positioning.",
}

const chapterNotes = [
  {
    title: "Strategic frame",
    text:
      "This chapter explains Rwanda’s regional posture through the combined weight of historical memory, security vigilance, and state discipline.",
  },
  {
    title: "Core tension",
    text:
      "Rwanda presents its regional behavior as rooted in survival and prevention, while critics see a posture that can extend beyond legitimate defense.",
  },
  {
    title: "Why it matters",
    text:
      "Understanding Rwanda’s mindset is essential because the conflict is shaped not only by events on the ground, but by how those events are interpreted from Kigali.",
  },
]

export default function ChapterFivePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 5
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Rwanda’s Strategic Mindset
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Some states are shaped mainly by size or geography. Others are
                shaped by memory. This chapter examines Rwanda’s regional
                outlook through the legacy of 1994, the logic of security beyond
                borders, and the disciplined state posture that gives Kigali
                influence beyond what its size alone might suggest.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-4"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-6"
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
                Rwanda’s regional behavior cannot be understood through a single
                label. It sits at the intersection of trauma, vigilance,
                discipline, and ambition, with each shaping how instability in
                eastern Congo is read and acted upon.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  Rwanda does not treat the border as a clean line separating
                  domestic safety from external danger. Its mindset is built on
                  the belief that threats must be watched before they mature.
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
            There are countries whose regional behavior is shaped mainly by
            size, and there are others shaped by memory. Rwanda belongs to the
            second category. Its posture toward eastern Congo cannot be
            understood without recognizing how deeply the aftermath of 1994
            continues to inform its sense of danger, urgency, and statecraft.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            The genocide was not simply a national trauma. It was also a
            foundational event in how the modern Rwandan state understands
            vulnerability. From that experience emerged a governing outlook in
            which security is treated not as an abstract policy area, but as a
            condition of survival. That helps explain why instability across
            the border is not viewed in Kigali as someone else’s problem. It is
            seen as something that can directly affect Rwanda’s own future.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Security beyond borders
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              One of the most important ideas in Rwanda’s strategic mindset is
              that threats do not stop at formal borders. Armed groups linked
              to the post-1994 regional crisis moved into eastern Congo and
              remained part of Rwanda’s security calculations for years. This
              gave rise to a logic of preemptive attention: waiting for
              instability to mature into direct danger is seen as too costly.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Strategic consequence
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                In Rwanda’s reading, insecurity across the border is not remote.
                It belongs to the same security field as the state itself.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              In practical terms, this means Rwanda tends to approach the
              region not passively, but actively. It watches developments
              closely, interprets shifts in eastern Congo through the lens of
              national security, and seeks to avoid strategic surprise.
              Supporters may describe this as realism rooted in historical
              experience. Critics may view it as a regional posture that goes
              beyond legitimate defense. Both readings exist because Rwanda’s
              behavior occupies a difficult space between memory, necessity, and
              ambition.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Discipline as a form of power
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Rwanda is not a large country, yet it often exerts influence
              beyond what its size might suggest. Part of that comes from
              military and administrative discipline. Part comes from the image
              it has built of itself as organized, efficient, and strategically
              coherent. In a region where many states struggle with internal
              fragmentation, that coherence becomes a source of leverage.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This internal discipline matters externally. It allows Rwanda to
              act quickly, frame its actions with confidence, and position
              itself as a state that knows what it wants. Whether others agree
              with those goals is another matter, but the clarity itself is a
              form of strength. It affects diplomacy, reputation, and the
              ability to shape narratives in the region.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Security and economics do not remain separate
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Rwanda’s strategic position is also tied to economics. Over time,
              it has developed mineral processing, trade, and export capacity
              that makes it an important regional node in broader supply
              chains. This does not automatically prove illicit conduct, but it
              does mean that Rwanda occupies a structurally significant place in
              how resources move through the region.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is one reason debates around Rwanda are rarely limited to
              security. They also touch trade, traceability, and regional
              economic advantage. Critics argue that economic and strategic
              interests may overlap. Rwanda insists that its trade is legitimate
              and that its actions are guided by security rather than
              opportunism. The tension between these views is central to the
              broader conflict narrative.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A state that acts from vigilance
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              In the end, Rwanda’s regional behavior is best understood not
              through a single label, but through a combination of historical
              memory, strategic vigilance, and structured ambition. It is a
              state that does not see itself as buffered by geography. It sees
              itself as surrounded by uncertainties that must be managed
              actively.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              That mindset helps explain why Rwanda remains such a central actor
              in the wider conflict. It is not merely reacting to events. It is
              interpreting them through a specific understanding of survival,
              control, and regional order.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-4"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-6"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}