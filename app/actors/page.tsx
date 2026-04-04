import Link from "next/link"

const actorLinks = [
  {
    title: "Rwanda",
    href: "/actors/rwanda",
    description:
      "Read the Rwanda profile, including its role, interests, and strategic position in the conflict."
  },
  {
    title: "Democratic Republic of the Congo",
    href: "/actors/drc",
    description:
      "Review the DRC profile and its political, security, and territorial challenges."
  },
  {
    title: "M23",
    href: "/actors/m23",
    description:
      "Examine the M23 profile, including its emergence, military activity, and regional significance."
  }
]

export default function ActorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Actors
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Key actors in the Rwanda–DRC conflict
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Explore the main actors featured in the site through structured
            profile pages focused on roles, interests, and regional impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {actorLinks.map((actor) => (
            <Link
              key={actor.href}
              href={actor.href}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {actor.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {actor.description}
              </p>

              <p className="mt-5 text-sm font-medium text-blue-700">
                Open actor page →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}