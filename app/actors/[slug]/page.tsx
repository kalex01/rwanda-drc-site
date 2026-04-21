import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type ActorSection = {
  title: string
  text: string
}

type ActorData = {
  slug: string
  name: string
  countryLabel: string
  role: string
  image: string
  alt: string
  intro: string
  summary: string
  imagePosition: string
  sections: ActorSection[]
  keyTakeaways: string[]
}

const actors: ActorData[] = [
  {
    slug: "rwanda",
    name: "Rwanda",
    countryLabel: "State actor",
    role: "Regional state actor",
    image: "/images/paul-kagame.jpg",
    alt: "Paul Kagame representing Rwanda in the conflict context",
    intro:
      "Rwanda is one of the most consequential actors in the conflict system around eastern DRC. Its role is shaped by security doctrine, regional influence, and the legacy of the 1994 genocide.",
    summary:
      "Rwanda presents the conflict primarily through a security lens. Its leadership has repeatedly argued that armed groups operating in eastern DRC, especially the FDLR, remain a direct concern for Rwanda’s national security.",
    imagePosition: "object-[center_20%]",
    sections: [
      {
        title: "Strategic objectives",
        text:
          "Rwanda’s stated strategic objective is to prevent hostile armed groups from using eastern DRC as a rear base for threats against Rwanda. More broadly, Rwanda seeks a stable or at least manageable security environment along its western border.",
      },
      {
        title: "Documented public position",
        text:
          "Rwandan officials have publicly denied supporting M23 and have framed Rwanda’s posture as defensive. In this view, the central unresolved issue is the continued presence of the FDLR and the failure to neutralize it effectively.",
      },
      {
        title: "Role in the conflict",
        text:
          "International reporting has repeatedly described Rwanda as a major factor in the conflict’s evolution. UN and U.S. assessments have gone beyond general concern, with recent sanctions and reporting alleging direct RDF support to M23. Rwanda disputes those characterizations.",
      },
      {
        title: "International perspective",
        text:
          "Externally, Rwanda is viewed through two competing frames. One presents it as a state with legitimate security concerns tied to genocide-era armed networks. The other presents it as a regional actor whose conduct has helped deepen instability in eastern DRC.",
      },
      {
        title: "Diplomacy and pressure",
        text:
          "Rwanda has participated in U.S.-facilitated and regional diplomatic processes, including recent Washington engagement. At the same time, it has faced stronger international pressure, including sanctions and sharper public attribution by foreign governments.",
      },
      {
        title: "Key tension",
        text:
          "The central tension is between Rwanda’s stated security narrative and external findings that depict it as materially involved in sustaining M23’s military strength.",
      },
    ],
    keyTakeaways: [
      "Rwanda frames the conflict primarily through border security.",
      "Its position is closely tied to the FDLR issue and post-1994 regional security concerns.",
      "External reporting and sanctions have increased pressure on Kigali’s role in the crisis.",
    ],
  },
  {
    slug: "drc",
    name: "Democratic Republic of Congo",
    countryLabel: "State actor",
    role: "Principal territorial state",
    image: "/images/felix-tshisekedi2.jpg",
    alt: "Félix Tshisekedi representing the Democratic Republic of Congo",
    intro:
      "The DRC is the principal territorial state affected by the conflict, with eastern provinces such as North Kivu and South Kivu bearing the brunt of repeated armed confrontation.",
    summary:
      "For the DRC, the conflict is at once a sovereignty crisis, a governance crisis, and a regional security crisis. It is also a struggle over control, legitimacy, and the state’s ability to protect populations in the east.",
    imagePosition: "object-[78%_18%]",
    sections: [
      {
        title: "Strategic objectives",
        text:
          "The DRC’s core objectives are to restore territorial control, reduce or defeat armed groups, protect sovereignty, and mobilize regional and international backing against what it sees as external interference.",
      },
      {
        title: "Documented public position",
        text:
          "Congolese officials have repeatedly accused Rwanda of backing M23. Publicly, Kinshasa has framed the issue less as a purely internal insurgency and more as a crisis involving cross-border support and regional destabilization.",
      },
      {
        title: "Role in the conflict",
        text:
          "The DRC is both the battlefield state and the diplomatic complainant. It has relied on military force, regional arrangements, and international advocacy, while also facing criticism over weak state reach, fragmented security structures, and unresolved governance problems in the east.",
      },
      {
        title: "International perspective",
        text:
          "Internationally, the DRC is often treated as a state confronting both internal armed-group fragmentation and external pressure. Sympathy for its sovereignty claims has often coexisted with concern about corruption, weak institutions, and uneven military performance.",
      },
      {
        title: "Diplomacy and pressure",
        text:
          "The DRC has actively sought sanctions, stronger attribution, and diplomatic support from partners including the United States, the United Nations, and African mediators. It has also engaged in high-level talks despite continued mistrust.",
      },
      {
        title: "Key tension",
        text:
          "The DRC argues that external backing for M23 is central. At the same time, long-standing internal weaknesses in state authority and local security governance remain part of why the east is so persistently unstable.",
      },
    ],
    keyTakeaways: [
      "The DRC treats the conflict as a sovereignty and territorial control crisis.",
      "Kinshasa has pushed hard for international attribution and pressure.",
      "Internal state weakness remains part of the conflict environment.",
    ],
  },
  {
    slug: "m23",
    name: "M23",
    countryLabel: "Armed group",
    role: "Non-state armed actor",
    image: "/images/timeline-m23-goma.jpg",
    alt: "Image connected to M23 and the conflict around Goma",
    intro:
      "M23 is the most internationally visible armed group in the current phase of the conflict and has been one of the main drivers of renewed military escalation in eastern DRC.",
    summary:
      "M23 emerged in 2012, declined after military setbacks, and later re-emerged as a powerful armed actor. Its resurgence has transformed the conflict from chronic instability into a sharper regional crisis.",
    imagePosition: "object-center",
    sections: [
      {
        title: "Strategic objectives",
        text:
          "M23 has presented itself as a movement seeking political redress, protection for communities, and implementation of prior commitments. In practice, its military operations have also focused on territory, mobility corridors, and leverage.",
      },
      {
        title: "Documented public position",
        text:
          "Publicly, M23 has framed itself as a political-military movement responding to exclusion, insecurity, and broken agreements. It presents its struggle as one tied to rights, protection, and representation.",
      },
      {
        title: "Role in the conflict",
        text:
          "M23 has been central to the latest escalation, conducting major offensives and controlling strategically important areas. Its battlefield effectiveness has been one of the defining features of the conflict’s recent phase.",
      },
      {
        title: "International perspective",
        text:
          "International organizations and many foreign governments treat M23 as a destabilizing armed group whose operations have driven displacement, insecurity, and broader regional confrontation. It is also widely discussed in connection with external support allegations.",
      },
      {
        title: "Diplomacy and pressure",
        text:
          "M23’s position affects not only battlefield dynamics but also the architecture of peace talks. Any durable settlement has to account for its territorial presence, military capability, and political demands, whether directly or indirectly.",
      },
      {
        title: "Key tension",
        text:
          "M23 presents itself as a political actor with grievances; much of the international community sees it primarily as an armed force intensifying instability through violence and coercive territorial expansion.",
      },
    ],
    keyTakeaways: [
      "M23 is central to the current military escalation in eastern DRC.",
      "Its battlefield effectiveness has shaped both diplomacy and security policy.",
      "It is viewed internationally primarily as a destabilizing armed actor.",
    ],
  },
]

function getSectionText(actor: ActorData, title: string) {
  return actor.sections.find((section) => section.title === title)?.text ?? ""
}

export function generateStaticParams() {
  return actors.map((actor) => ({
    slug: actor.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const actor = actors.find((item) => item.slug === slug)

  if (!actor) {
    return {
      title: "Actor not found",
    }
  }

  return {
    title: `${actor.name} | Actors`,
    description: actor.intro,
  }
}

export default async function ActorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const actor = actors.find((item) => item.slug === slug)

  if (!actor) {
    notFound()
  }

  const readingNotes = [
    {
      title: "Strategic role",
      text: getSectionText(actor, "Strategic objectives"),
    },
    {
      title: "International view",
      text: getSectionText(actor, "International perspective"),
    },
    {
      title: "Main tension",
      text: getSectionText(actor, "Key tension"),
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              {actor.countryLabel}
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              {actor.name}
            </h1>

            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {actor.role}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              {actor.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/actors"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Back to actors
              </Link>
              <Link
                href="/context"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open context
              </Link>
              <Link
                href="/story"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open story
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src={actor.image}
                alt={actor.alt}
                fill
                className={`object-cover ${actor.imagePosition}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Actor frame
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {actor.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {readingNotes.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Summary
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Core analytical frame
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              {actor.summary}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Key takeaways
            </p>

            <ul className="mt-5 space-y-4 text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              {actor.keyTakeaways.map((item) => (
                <li
                  key={item}
                  className="border-b border-slate-800 pb-4 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 pb-10 sm:px-6 lg:px-8 md:py-4 md:pb-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Detailed profile
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Main dimensions of the actor
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              These sections are designed to keep the profile structured while
              showing how strategy, public position, diplomacy, and outside
              interpretation fit together.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {actor.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Reading support
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Move between this actor and the wider system
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              These detail pages work best when read alongside the story,
              context, and appendix sections. Readers can compare actor
              positions here, then return to chronology, geography, and the
              broader narrative structure.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/actors"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Back to actors
              </Link>
              <Link
                href="/context"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                View context
              </Link>
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open appendix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}