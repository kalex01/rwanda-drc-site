import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The War Economy | Chapter 4 | Rwanda–DRC Site",
  description:
    "Chapter 4 examines the war economy in eastern Congo, showing how insecurity, extraction, transport routes, and armed influence combine into a self-sustaining conflict system."
}

export default function ChapterFourPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 4
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        The War Economy
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        There comes a point in some conflicts when violence stops being only a
        reaction to fear, territory, or politics. It becomes part of a system
        that sustains itself. Eastern Congo is one of those places. Over time,
        the conflict has evolved into something more than periodic fighting. It
        has become a structure in which control, movement, and extraction are
        tied together through economic value.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        The most important thing to understand is that armed actors do not
        always need to rule in the formal sense. They do not need ministries,
        functioning bureaucracies, or complete territorial control. Often, it
        is enough to influence key points in the chain: a mine, a road, a
        checkpoint, a border crossing, or a zone through which goods must pass.
        Whoever controls these points can shape the flow of value without ever
        needing to fully govern the population.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        From insecurity to revenue
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        In a formal economy, production and trade are regulated through taxes,
        licenses, and institutions. In a war economy, many of these functions
        are informally reproduced by non-state actors. A miner extracts ore. A
        trader purchases it. A transporter moves it along a route. At each
        step, someone can impose a cost, extract a payment, or control access.
        Those payments may appear small in isolation, but when repeated across
        large volumes and long periods, they become a source of real income.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This is why conflict in eastern Congo is not simply destructive. It is
        also productive in a narrow economic sense. It generates opportunities
        for some actors even as it destroys stability for others. That is one
        reason the system is so difficult to dismantle. If peace interrupts
        access to these flows, then peace is not only politically difficult—it
        can also be economically disruptive to those who benefit from disorder.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        A chain of actors, not a single mastermind
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        One of the common misunderstandings about war economies is the idea
        that they are controlled by a single actor. In reality, the system is
        layered. Artisanal miners work for immediate survival. Local traders
        aggregate small quantities. Armed actors influence routes or sites.
        Exporters and processors add structure further along the chain. Global
        buyers absorb the final product into international markets. Each part
        of the chain sees only part of the whole, yet together they form a
        functioning economic network.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This layered character is what makes the conflict economy adaptive. If
        one route becomes unusable, another is found. If one actor weakens,
        another may fill the space. The system is resilient precisely because
        it is decentralized. It does not depend on perfect order. It depends on
        enough continuity to keep value moving.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        The local cost of an international system
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        For communities living inside this reality, the war economy does not
        feel like an abstract model. It feels like daily uncertainty. Roads
        become risky. Markets shrink. Families move repeatedly. Work becomes
        tied to immediate survival rather than long-term stability. The same
        minerals that generate value far beyond the region often leave behind
        insecurity where they are extracted.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This creates one of the central contradictions of eastern Congo: the
        region is rich in material value, yet poor in secure development. The
        flow of wealth outward does not necessarily build order inward. In many
        cases, it does the opposite, sustaining the very conditions that allow
        informal capture to continue.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Why the system persists
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        The war economy persists because it sits at the intersection of weak
        governance, strong demand, and fragmented control. None of these
        factors alone is enough to explain it. Together, they make conflict
        durable. As long as minerals remain valuable, governance remains
        uneven, and routes remain vulnerable to capture, the underlying logic
        of the system will continue.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        To understand eastern Congo, one must therefore understand that war is
        not only fought there. It is financed there, organized there, and
        normalized there through patterns of movement and exchange that have
        become embedded over time.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-3"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-5"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}