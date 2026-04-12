import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rwanda’s Strategic Mindset | Chapter 5 | Rwanda–DRC Site",
  description:
    "Chapter 5 examines Rwanda’s strategic mindset through historical memory, security vigilance, state discipline, and regional economic positioning."
}

export default function ChapterFivePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 5
      </p>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        Rwanda’s Strategic Mindset
      </h1>

      <p className="mt-8 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        There are countries whose regional behavior is shaped mainly by size,
        and there are others shaped by memory. Rwanda belongs to the second
        category. Its posture toward eastern Congo cannot be understood without
        recognizing how deeply the aftermath of 1994 continues to inform its
        sense of danger, urgency, and statecraft.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The genocide was not simply a national trauma. It was also a
        foundational event in how the modern Rwandan state understands
        vulnerability. From that experience emerged a governing outlook in
        which security is treated not as an abstract policy area, but as a
        condition of survival. That helps explain why instability across the
        border is not viewed in Kigali as someone else’s problem. It is seen
        as something that can directly affect Rwanda’s own future.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Security beyond borders
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        One of the most important ideas in Rwanda’s strategic mindset is that
        threats do not stop at formal borders. Armed groups linked to the
        post-1994 regional crisis moved into eastern Congo and remained part of
        Rwanda’s security calculations for years. This gave rise to a logic of
        preemptive attention: waiting for instability to mature into direct
        danger is seen as too costly.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        In practical terms, this means Rwanda tends to approach the region not
        passively, but actively. It watches developments closely, interprets
        shifts in eastern Congo through the lens of national security, and
        seeks to avoid strategic surprise. Supporters may describe this as
        realism rooted in historical experience. Critics may view it as a
        regional posture that goes beyond legitimate defense. Both readings
        exist because Rwanda’s behavior occupies a difficult space between
        memory, necessity, and ambition.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Discipline as a form of power
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Rwanda is not a large country, yet it often exerts influence beyond
        what its size might suggest. Part of that comes from military and
        administrative discipline. Part comes from the image it has built of
        itself as organized, efficient, and strategically coherent. In a
        region where many states struggle with internal fragmentation, that
        coherence becomes a source of leverage.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This internal discipline matters externally. It allows Rwanda to act
        quickly, frame its actions with confidence, and position itself as a
        state that knows what it wants. Whether others agree with those goals
        is another matter, but the clarity itself is a form of strength. It
        affects diplomacy, reputation, and the ability to shape narratives in
        the region.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Security and economics do not remain separate
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Rwanda’s strategic position is also tied to economics. Over time, it
        has developed mineral processing, trade, and export capacity that
        makes it an important regional node in broader supply chains. This does
        not automatically prove illicit conduct, but it does mean that Rwanda
        occupies a structurally significant place in how resources move through
        the region.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This is one reason debates around Rwanda are rarely limited to
        security. They also touch trade, traceability, and regional economic
        advantage. Critics argue that economic and strategic interests may
        overlap. Rwanda insists that its trade is legitimate and that its
        actions are guided by security rather than opportunism. The tension
        between these views is central to the broader conflict narrative.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        A state that acts from vigilance
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        In the end, Rwanda’s regional behavior is best understood not through
        a single label, but through a combination of historical memory,
        strategic vigilance, and structured ambition. It is a state that does
        not see itself as buffered by geography. It sees itself as surrounded
        by uncertainties that must be managed actively.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        That mindset helps explain why Rwanda remains such a central actor in
        the Rwanda–DRC nexus. It is not merely reacting to events. It is
        interpreting them through a specific understanding of survival,
        control, and regional order.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-4"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-6"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}