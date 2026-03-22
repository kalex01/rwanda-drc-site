import Link from "next/link";

export default function ChapterTwelvePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 12
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Conclusion
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          The Rwanda–DRC conflict is not a single story. It is the meeting point
          of memory, security, sovereignty, extraction, and global demand. Each
          actor sees the region differently, yet all remain connected to the
          same system.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Congo remains the territorial center of the crisis, Rwanda remains a
          decisive regional actor, and groups such as M23 remain symbols of how
          local conflict can become embedded in wider structures of influence
          and trade.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          The future will not be determined by one dramatic solution, but by the
          accumulation of many changes that gradually shift the system toward
          stability, dignity, and more accountable control.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-11"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Back to Story
          </Link>
        </div>
      </article>
    </main>
  );
}