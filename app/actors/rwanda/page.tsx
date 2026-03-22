import Link from "next/link";

export default function RwandaActorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Key Actor
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Rwanda</h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Rwanda is one of the most important regional actors in the Rwanda–DRC
          conflict system. Its posture is shaped by the legacy of the 1994
          genocide, by long-term security concerns related to armed groups near
          its borders, and by a broader strategy of maintaining influence in a
          highly unstable neighborhood.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          At the same time, Rwanda presents itself as a disciplined, organized,
          and economically modernizing state. This image affects how it is seen
          internationally and how it frames its own role in regional affairs.
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