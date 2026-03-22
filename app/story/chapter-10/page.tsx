import Link from "next/link";

export default function ChapterTenPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 10
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          The Human Cost
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Behind every map, every route, and every political argument are
          people living inside the system. For families in eastern Congo,
          conflict is not an abstract subject. It is experienced through
          insecurity, interrupted livelihoods, sudden movement, and the constant
          uncertainty of whether stability will last.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Displacement often happens quickly. Communities leave not only because
          fighting reaches them directly, but because the environment becomes
          too uncertain to sustain daily life. A road becomes unsafe. A market
          stops functioning. A school no longer opens. Ordinary routines begin
          to collapse.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Children grow up in a landscape where instability can feel normal.
          Adults adapt constantly, building temporary patterns of survival
          inside a system they do not control. This is one of the deepest
          injustices of the conflict: those closest to the land and its wealth
          often bear the greatest burden while capturing the least benefit.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-9"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-11"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}