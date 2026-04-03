import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { actors } from "@/app/data/actors"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const actor = actors[slug]

  if (!actor) {
    return {
      title: "Actor Not Found | Rwanda–DRC Site"
    }
  }

  return {
    title: `${actor.name} | Rwanda–DRC Site`,
    description: actor.summary
  }
}

export default async function ActorPage({ params }: Props) {
  const { slug } = await params
  const actor = actors[slug]

  if (!actor) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6">
        <Link href="/actors" className="underline">
          ← Back to Actors
        </Link>
      </div>

      <h1 className="text-4xl font-bold">{actor.name}</h1>

      <p className="mt-4 text-lg">{actor.summary}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="mt-2">{actor.overview}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Goals</h2>
        <ul className="mt-2 list-disc pl-6">
          {actor.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Methods</h2>
        <ul className="mt-2 list-disc pl-6">
          {actor.methods.map((method, i) => (
            <li key={i}>{method}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <ul className="mt-2 space-y-2">
          {actor.timeline.map((item, i) => (
            <li key={i}>
              <strong>{item.year}:</strong> {item.event}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Sources</h2>
        <ul className="mt-2 list-disc pl-6">
          {actor.sources.map((source, i) => (
            <li key={i}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}