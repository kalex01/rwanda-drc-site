import Link from "next/link";

export default function ChapterEightPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 8
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          The Global Layer
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          The conflict in eastern Congo may begin locally, but it does not stay
          there. Once minerals leave the ground, they begin a journey through
          traders, borders, export systems, refiners, and manufacturing chains
          that stretch far beyond the region. What starts in an artisanal mine
          can end inside a global supply chain.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This is where the roles of M23 and Rwanda become especially important.
          In resource-rich areas, M23’s influence is tied not only to violence
          but also to movement—control over who can access, transport, and move
          materials outward. Rwanda enters the story as a regional hub with
          structured export and processing systems, and this raises the core
          questions of traceability, origin, and regional influence.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          By the time minerals reach international traders, refineries, and end
          markets, their earlier journey can be difficult to reconstruct with
          certainty. That is why the global layer matters: it shows how a local
          conflict becomes embedded in a wider economic system, where value
          travels more easily than clarity.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-7"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-9"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}