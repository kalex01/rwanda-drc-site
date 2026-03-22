import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
          Narrative Research Platform
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
          The Rwanda–DRC Nexus
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          A structured narrative and research website on conflict, minerals,
          sovereignty, armed actors, and the global systems connected to eastern
          Congo.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/story"
            className="rounded-2xl bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-700"
          >
            Start Reading
          </Link>

          <Link
            href="/appendix"
            className="rounded-2xl border border-neutral-300 px-6 py-3 transition hover:bg-neutral-100"
          >
            Explore the Data
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          <Link
            href="/story"
            className="rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-400 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold">Read the Story</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Follow the project chapter by chapter, from historical roots to
              the global mineral system.
            </p>
          </Link>

          <Link
            href="/actors"
            className="rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-400 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold">Understand the Actors</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Explore the roles of Rwanda, the DRC, M23, and other regional
              players.
            </p>
          </Link>

          <Link
            href="/appendix"
            className="rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-400 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold">Review the Data</h2>
            <p className="mt-3 leading-7 text-neutral-700">
              Access minerals, companies, timelines, and structured reference
              material.
            </p>
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-neutral-100 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Why this project matters
            </p>
            <p className="mt-4 max-w-4xl text-2xl font-medium leading-10 text-neutral-900">
              Eastern Congo is not only a regional conflict zone. It is a place
              where memory, insecurity, mineral wealth, and global demand meet
              in ways that shape lives far beyond the region itself.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}