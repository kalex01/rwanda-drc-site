import Link from "next/link";

export default function ChapterElevenPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 11
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Can the Cycle Be Broken?
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          The conflict persists not because no one has tried to stop it, but
          because the system holding it together is multi-layered. Security,
          governance, regional distrust, economic incentives, and global demand
          all reinforce one another. Addressing only one part rarely changes the
          whole.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Any lasting change must involve stronger and more consistent state
          presence in eastern Congo. Not only military deployment, but roads,
          administration, local trust, and functioning institutions. Stability
          is built through continuity, not only through reaction.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          At the same time, regional security concerns cannot be ignored.
          Rwanda’s sense of vulnerability, however contested in some of its
          consequences, remains part of the real structure of the problem.
          Economic reform also matters. As long as conflict and mineral flows
          remain linked, violence will retain a source of resilience.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-10"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-12"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}