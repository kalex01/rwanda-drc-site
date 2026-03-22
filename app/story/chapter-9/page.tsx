import Link from "next/link";

export default function ChapterNinePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 9
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          The Narrative Battle
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          The conflict in eastern Congo is fought not only on the ground, but
          also through interpretation. Different actors describe the same events
          in sharply different ways, and these differences shape diplomacy,
          legitimacy, and international response.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          One narrative emphasizes regional interference, armed influence, and
          external support to groups such as M23. Another emphasizes Rwanda’s
          security concerns, internal Congolese instability, and the long shadow
          of unresolved threats near the border.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          These narratives do not simply describe events. They influence how the
          conflict is understood and what solutions appear reasonable. In this
          sense, perception becomes a form of power.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          The challenge is that complex conflicts rarely yield to simple
          explanations. Security, economics, history, and politics all overlap.
          To understand the conflict responsibly, one must distinguish between
          documented fact, analytical inference, and contested allegation.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-8"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-10"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}