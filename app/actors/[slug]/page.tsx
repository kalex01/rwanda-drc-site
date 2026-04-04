import Link from "next/link"
import { notFound } from "next/navigation"

const actors = {
  rwanda: {
    name: "Rwanda",
    summary:
      "Rwanda is one of the central state actors in the regional conflict and is frequently discussed in relation to border security, regional influence, and alleged support networks.",
    sections: [
      {
        title: "Role in the conflict",
        body: "Rwanda is often presented as a major regional actor whose security concerns, historical grievances, and cross-border interests shape its position in eastern Congo."
      },
      {
        title: "Core interests",
        body: "Its interests are commonly described in terms of border security, regional leverage, protection against hostile armed groups, and influence over the political and military balance near its frontier."
      },
      {
        title: "Regional significance",
        body: "Because of its military capacity, diplomatic weight, and geographic proximity, Rwanda remains one of the most consequential actors in any analysis of the conflict."
      }
    ]
  },
  drc: {
    name: "Democratic Republic of the Congo",
    summary:
      "The DRC is the primary territorial state in the conflict and faces persistent challenges involving sovereignty, internal security, armed groups, and governance in the east.",
    sections: [
      {
        title: "Role in the conflict",
        body: "The DRC is the central state on whose territory the conflict unfolds, particularly in the eastern provinces where insecurity, displacement, and armed mobilization have persisted for years."
      },
      {
        title: "Core interests",
        body: "Its main interests include restoring territorial control, protecting civilians, reducing the influence of armed movements, and reinforcing national sovereignty."
      },
      {
        title: "Regional significance",
        body: "The country’s size, mineral wealth, fragile security environment, and ties to neighboring states make it the focal point of the broader regional crisis."
      }
    ]
  },
  m23: {
    name: "M23",
    summary:
      "M23 is a rebel movement that has played a major role in the recent escalation of violence in eastern Congo and is central to regional diplomatic and security debates.",
    sections: [
      {
        title: "Role in the conflict",
        body: "M23 is a non-state armed actor whose military operations, territorial advances, and confrontations with Congolese forces have shaped recent developments in the conflict."
      },
      {
        title: "Core interests",
        body: "The group is often discussed in relation to military survival, territorial control, political recognition, and leverage within negotiations and regional power dynamics."
      },
      {
        title: "Regional significance",
        body: "Its actions have had consequences far beyond a single armed movement, affecting civilian security, interstate relations, displacement patterns, and peace efforts."
      }
    ]
  }
} as const

type ActorSlug = keyof typeof actors

export function generateStaticParams() {
  return Object.keys(actors).map((slug) => ({ slug }))
}

export default async function ActorPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const actor = actors[slug as ActorSlug]

  if (!actor) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Actor Profile
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {actor.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            {actor.summary}
          </p>

          <div className="mt-8">
            <Link
              href="/actors"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              ← Back to actors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="space-y-6">
          {actor.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}