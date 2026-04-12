import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Narrative Battle | Chapter 9 | Rwanda–DRC Site",
  description:
    "Chapter 9 examines the struggle over meaning, legitimacy, and competing explanations that shape diplomacy, public perception, and political response in the Rwanda–DRC conflict."
}

export default function ChapterNinePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 9
      </p>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        The Narrative Battle
      </h1>

      <p className="mt-8 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Conflicts are fought not only with weapons, but with explanations. In
        the Rwanda–DRC crisis, the battle over meaning is almost as important
        as the battle over territory. The same event can be narrated as
        aggression, defense, infiltration, resistance, intervention, or
        survival depending on who is speaking and to whom they are speaking.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This matters because narratives do more than describe. They shape
        legitimacy. They influence sanctions, diplomacy, international
        sympathy, and the range of actions considered acceptable. In this
        conflict, control over interpretation has become a form of power in
        its own right.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Two dominant frames
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        One dominant narrative emphasizes regional interference, external
        backing to armed actors, and the idea that what is happening in eastern
        Congo cannot be understood as an internal problem alone. In this view,
        groups such as M23 are read through the lens of broader regional
        influence, and the conflict becomes part of a larger political and
        economic structure.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The other dominant narrative emphasizes insecurity, the unfinished
        consequences of the post-1994 regional order, and the dangers posed by
        hostile armed groups near Rwanda’s border. In this telling, Rwanda’s
        posture is framed as rooted in defensive necessity rather than
        expansion or opportunism. Eastern Congo appears less as a site of
        influence and more as a site of unresolved threat.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Why clarity is difficult
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The difficulty is that both narratives draw on elements of reality,
        yet neither fully contains it. Security concerns are genuine. So are
        questions of sovereignty. Economic incentives matter. Historical memory
        matters. Armed groups are local in one sense and regionally entangled
        in another. The result is a conflict that resists simple moral or
        political categorization.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This is why responsible analysis must distinguish between documented
        facts, analytical inference, and contested allegation. If these layers
        are collapsed into one another, explanation becomes advocacy rather
        than understanding. But if they are kept too rigidly apart, the larger
        structure of the conflict can disappear from view. The challenge is to
        remain precise without becoming naive, and critical without becoming
        careless.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Perception as political force
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Perception has real consequences. A state seen as disciplined and
        effective gains room to shape events diplomatically. A state seen as
        weak or fragmented struggles to control the terms in which its crisis
        is interpreted. An armed group seen as an isolated insurgency will be
        treated differently from one seen as part of a cross-border system.
        In each case, language influences response.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This is especially important for a conflict like this one, where much
        of the struggle occurs in places that most external audiences never
        see directly. Reports, headlines, official statements, and diplomatic
        briefings become the windows through which the conflict is understood.
        Whoever shapes those windows shapes part of the conflict itself.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Beyond simplification
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The temptation in any complex crisis is to reduce it to a single key:
        one villain, one cause, one decisive interpretation. But the
        Rwanda–DRC conflict resists that impulse. It is a layered system in
        which history, trade, security, and power overlap. To flatten it into
        one narrative may feel satisfying, but it often leads to incomplete or
        distorted solutions.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The narrative battle therefore matters not because stories replace
        reality, but because stories shape how reality is acted upon. And in a
        conflict this complex, the struggle over meaning is part of the
        conflict itself.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-8"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-10"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}