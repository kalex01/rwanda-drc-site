import Link from "next/link"
import { actors } from "@/app/data/actors"

export default function ActorsIndexPage() {
  const actorList = Object.values(actors)

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-4xl font-bold">Actors</h1>
      <p className="mt-4 text-lg">
        Explore the main state and non-state actors involved in the Rwanda–DRC conflict.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {actorList.map((actor) => (
          <Link
            key={actor.slug}
            href={`/actors/${actor.slug}`}
            className="block rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">{actor.name}</h2>
            <p className="mt-3 text-sm leading-6">{actor.summary}</p>
            <p className="mt-4 text-sm font-medium underline">
              Read actor page
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}