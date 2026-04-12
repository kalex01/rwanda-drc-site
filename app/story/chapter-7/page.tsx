import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Regional Chessboard | Chapter 7 | Rwanda–DRC Site",
  description:
    "Chapter 7 examines the regional dimension of the conflict, showing how neighboring states project power, pursue security, and remain entangled in eastern Congo."
}

export default function ChapterSevenPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 7
      </p>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        The Regional Chessboard
      </h1>

      <p className="mt-8 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        When war returned to Congo in 1998, it did not remain contained within
        Congolese territory. It widened into a regional crisis, drawing in
        neighboring states whose calculations were shaped by fear, rivalry,
        survival, and opportunity. To describe it as a civil conflict alone is
        to miss its broader structure. Eastern Congo became a space in which
        several countries projected power at once.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Rwanda re-entered Congo because it viewed the east not as a distant
        frontier, but as an active security zone. Uganda also entered, at
        first aligned with Rwanda, but not permanently tied to Rwanda’s exact
        priorities. Angola intervened out of concern for its own security and
        the risk that instability in Congo could empower hostile forces.
        Zimbabwe and Namibia entered in support of Kinshasa, linking military
        action to political alignment and, in some cases, economic interest.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        A war of overlapping motives
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        What made the regional dimension so complex was that these countries
        were not acting for one shared reason. Rwanda’s logic was rooted in
        border security and post-genocide vigilance. Uganda sought influence
        and room to shape events in its own areas of concern. Angola feared
        regional spillover. Zimbabwe’s intervention reflected alliance
        commitments but also access to political and economic advantage.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This meant that even when states appeared to be on the same side, they
        were not necessarily working toward the same outcome. The war therefore
        evolved as a layered struggle rather than a clean alliance system. At
        times, actors who entered with overlapping goals later found
        themselves competing for influence, routes, and leverage.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Congo as a regional arena
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        One of the most enduring consequences of the Congo wars is that
        eastern Congo ceased to be viewed only as a domestic space. It became
        a regional arena. Its instability affected neighboring capitals. Its
        armed groups crossed borders in strategic meaning if not always in
        formal movement. Its mineral wealth made control even more valuable.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        That legacy remains visible today. Even when direct interstate war is
        absent, the region continues to be interpreted through regional
        security lenses. Governments do not simply react to events in eastern
        Congo. They anticipate them, fear them, and at times attempt to shape
        them before they consolidate into outcomes they dislike.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        The enduring problem of mistrust
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The regional system is sustained not only by power but by mistrust.
        Congo views external involvement through the lens of sovereignty and
        violation. Rwanda views instability through the lens of unfinished
        danger. Uganda watches both security and influence. Other states
        calculate how changes in eastern Congo affect their own position. In
        such an environment, diplomacy is difficult because the parties do not
        begin from the same reading of reality.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This is why the region can appear stuck between war and peace. Formal
        conflict may recede, yet the logic of competition remains. The board
        stays in place even when the pieces are not moving openly.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        A chessboard that never fully clears
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The phrase “regional chessboard” is useful because it captures the
        strategic character of what is taking place, but it is also
        incomplete. Unlike a chessboard, this is not a closed game with fixed
        rules and visible moves. It is a shifting field in which the pieces do
        not stay still, motives overlap, and the consequences are borne most
        heavily by civilians rather than by the states making calculations.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        To understand eastern Congo today, one must therefore see it not just
        as a Congolese tragedy, but as a regional system in which many actors
        remain invested, watchful, and unresolved.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-6"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-8"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}