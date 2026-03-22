import Link from "next/link";

export default function DRCActorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Key Actor
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Democratic Republic of the Congo
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          The Democratic Republic of the Congo is the central territorial space
          within which the conflict unfolds. It is vast, resource-rich, and full
          of unrealized potential, but it has struggled to maintain consistent
          control across all parts of its territory, especially in the east.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This uneven control is not only a governance problem. It is the
          condition that allows armed groups, cross-border networks, and
          informal systems of power to operate with persistence.
        </p>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <Link
            href="/actors"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Back to Actors
          </Link>
        </div>
      </article>
    </main>
  );
}