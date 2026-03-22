import Link from "next/link";

const actors = [
  {
    name: "Rwanda",
    role: "State actor",
    description:
      "A regional power whose approach is shaped by security concerns, historical memory, and strategic influence.",
    href: "/actors/rwanda",
  },
  {
    name: "Democratic Republic of the Congo",
    role: "State actor",
    description:
      "A vast, resource-rich state struggling to translate territorial size into consistent authority and control.",
    href: "/actors/drc",
  },
  {
    name: "M23",
    role: "Armed group",
    description:
      "A major armed actor in eastern Congo whose influence extends beyond battlefield movement into strategic economic zones.",
    href: "/actors/m23",
  },
];

export default function ActorsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Reference Section
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Key Actors</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          This section introduces the principal actors that appear throughout the
          project, from states and armed groups to regional systems of
          influence.
        </p>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
          {actors.map((actor) => (
            <Link
              key={actor.name}
              href={actor.href}
              className="rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-400 hover:shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.15em] text-neutral-500">
                {actor.role}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{actor.name}</h2>
              <p className="mt-4 leading-7 text-neutral-700">
                {actor.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}