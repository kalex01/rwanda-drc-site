import Link from "next/link";

export default function M23ActorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Key Actor
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">M23</h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          M23 is one of the most prominent armed groups in eastern Congo. Its
          role extends beyond battlefield presence. By shaping access to
          strategic zones, routes, and areas of economic importance, it becomes
          part of the wider logic of conflict and extraction.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          M23 is central to regional controversy because its actions are not
          understood only as local insurgency. They are also interpreted through
          wider debates about external backing, regional influence, and the
          structure of insecurity in eastern Congo.
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