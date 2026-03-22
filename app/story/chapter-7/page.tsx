import Link from "next/link";

export default function ChapterSevenPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 7
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          The Regional Chessboard
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          When war returned to Congo in 1998, it did not remain only Congolese.
          It widened into a regional struggle, drawing in neighboring states with
          different interests, fears, and ambitions. Eastern Congo became a space
          where alliances overlapped and where regional security concerns merged
          with competition for influence.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Rwanda re-entered the conflict through the lens of unfinished security,
          while Uganda moved as both ally and later competitor. Angola entered to
          prevent hostile forces from benefiting from Congolese instability.
          Zimbabwe and Namibia intervened in defense of Kabila and in pursuit of
          wider strategic interests. What emerged was not a single war, but a
          layered regional confrontation.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Over time, this involvement reshaped the conflict. Congo became a
          regional arena, where military presence, political leverage, and access
          to territory mattered simultaneously. Even after formal peace
          agreements, the structures created during this period did not vanish.
          They evolved into the regional tensions that continue to influence the
          eastern provinces today.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-6"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-8"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}