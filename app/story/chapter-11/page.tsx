import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Can the Cycle Be Broken? | Chapter 11 | Rwanda–DRC Site",
  description:
    "Chapter 11 examines whether the conflict cycle can be broken through state continuity, regional security, economic reform, and international responsibility."
}

export default function ChapterElevenPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 11
      </p>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        Can the Cycle Be Broken?
      </h1>

      <p className="mt-8 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        After tracing the historical roots, the war economy, the regional
        system, and the human cost, the natural question is whether the cycle
        can be broken at all. The answer is neither simple optimism nor
        resigned pessimism. Change is possible, but only if the conflict is
        treated not as a single problem with a single remedy, but as a system
        whose parts reinforce one another.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This is why so many peace efforts struggle. They often address one
        layer while leaving the others largely intact. A military response may
        weaken one group without changing the economic conditions that allow new
        actors to emerge. A diplomatic agreement may reduce immediate tension
        without resolving the mistrust that produced it. A trade reform may
        improve traceability in one part of the chain while leaving governance
        gaps untouched at the source.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        The state question
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        At the center of any durable solution lies the Congolese state. No
        external actor can substitute for the steady presence of institutions
        able to secure roads, regulate trade, resolve disputes, and remain
        visible after crises fade from headlines. The problem is not only the
        absence of force. It is the absence of continuity. Stability requires
        not just intervention, but repetition: a road that stays open, a local
        office that continues to function, a school that remains staffed, a
        community that experiences the state as reliably present.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        This makes the path forward slow by definition. It is easier to launch
        an operation than to build continuity. Yet without continuity, each
        short-term gain risks being swallowed again by the larger structure.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        The regional security problem
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        A second condition is that regional security concerns cannot simply be
        wished away. Rwanda’s sense of vulnerability is part of the system,
        whether one agrees with every action taken in its name or not. Any
        serious effort to stabilize eastern Congo must therefore address not
        only Congolese sovereignty but also the regional security anxieties
        that continue to shape cross-border behavior. Ignoring these concerns
        does not eliminate them; it merely pushes them back into more informal
        and potentially destabilizing channels.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Durable progress requires a framework in which sovereignty and security
        are not treated as mutually exclusive claims. That is difficult, but
        essential. One side cannot build stability by acting as though borders
        do not matter. The other cannot build it by pretending that regional
        fears have no political force.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        Redirecting value
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The third condition concerns economic flow. Minerals will remain
        important. The goal is not to make them irrelevant, but to redirect
        how their value is captured. That means improving formalization,
        increasing transparency, tightening oversight where possible, and
        ensuring that more of the benefit remains tied to lawful structures
        rather than to armed influence and informal extraction.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        None of this is easy because the current system is adaptive. But the
        fact that it adapts does not mean it cannot be reshaped. It means only
        that reforms must be persistent enough to become stronger than the old
        patterns they are trying to replace.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        The world’s responsibility
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The wider world also has a role. Global demand is part of the structure
        of the conflict, even if it does not directly cause it. This creates a
        responsibility for companies, regulators, and states that benefit from
        the mineral chain. Supply chains do not need to be treated as morally
        pure to be improved, but they do need to be treated seriously enough to
        reduce the gap between value and accountability.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        In the end, breaking the cycle is less about finding a single decisive
        act than about aligning many smaller ones. Security reform, governance
        continuity, economic redirection, and regional diplomacy must begin to
        support one another rather than operate in isolation. That is what
        makes the task difficult. It is also what makes change possible.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-10"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-12"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}