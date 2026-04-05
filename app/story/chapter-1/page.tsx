import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Introduction | Chapter 1 | Rwanda–DRC Site",
  description:
    "Chapter 1 introduces the Rwanda–DRC conflict as an interconnected system shaped by history, insecurity, sovereignty, extraction, and regional rivalry."
}

export default function ChapterOnePage() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 1
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        Introduction
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        The Rwanda–DRC conflict is often described as if it were one thing: a
        border problem, a rebel problem, a mineral problem, or a failure of
        governance. Each of these descriptions captures part of the truth. None
        is enough on its own. What makes this conflict so difficult to grasp is
        that it is not a single crisis. It is a system in which history,
        insecurity, sovereignty, extraction, and regional rivalry reinforce one
        another over time.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Eastern Congo lies at the center of this system. It is rich in gold,
        coltan, tin, and tungsten—resources that are deeply connected to the
        global economy. Yet it is also one of the most unstable regions in the
        world. This is not a coincidence. The same conditions that make the
        region strategically valuable also make it vulnerable: difficult
        geography, uneven state authority, fragmented armed presence, and
        persistent cross-border insecurity.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        More than a local conflict
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        It is tempting to think of eastern Congo as a distant crisis affecting
        only those who live there. But the region cannot be understood in
        strictly local terms. Its instability has shaped relations between
        neighboring states, especially Rwanda and the Democratic Republic of
        the Congo. It has also become entangled with global industries that
        depend on minerals extracted, moved, and processed through complex
        supply chains.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This means the conflict operates at several levels at once. Locally, it
        affects families, markets, schools, and movement. Regionally, it shapes
        security calculations, alliances, and mistrust. Globally, it connects
        to trade, manufacturing, and the persistent difficulty of tracing value
        back to unstable origins.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        The central tension
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        At the heart of the Rwanda–DRC nexus lies a tension that has never been
        fully resolved. For the Democratic Republic of the Congo, the issue is
        fundamentally about sovereignty, territorial control, and the challenge
        of governing a vast and complex country. For Rwanda, it is deeply tied
        to security, historical memory, and the refusal to treat danger across
        the border as someone else’s problem.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        These perspectives are not merely rhetorical. They shape how events are
        interpreted, how states justify their actions, and why diplomacy often
        begins from incompatible assumptions. One side emphasizes territorial
        integrity. The other emphasizes existential vigilance. The conflict
        persists, in part, because these two frames continue to collide without
        being fully reconciled.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Reading the conflict as a system
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        This project approaches the conflict not as a sequence of isolated
        episodes, but as an interconnected structure. Armed groups do not exist
        separately from mineral routes. Mineral routes do not exist separately
        from weak governance. Weak governance does not exist separately from
        regional competition. And regional competition does not exist
        separately from history.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        To understand eastern Congo responsibly, one must therefore be willing
        to hold several realities together at once: the memory of genocide, the
        fragility of the Congolese state, the strategic calculations of Rwanda,
        the role of armed actors such as M23, and the global systems that absorb
        the region’s resources while remaining structurally distant from its
        suffering.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This is what the chapters that follow attempt to do. They do not offer
        a single cause or a single solution. Instead, they trace the layers of
        a conflict whose complexity is precisely what has allowed it to endure.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Back to Story
        </Link>

        <Link
          href="/story/chapter-2"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}