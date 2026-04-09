import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Actors",
  description:
    "Deep profiles of Rwanda, the Democratic Republic of Congo, and M23."
}

const actors = [
  {
    name: "Rwanda",
    subtitle: "State actor",
    intro:
      "Rwanda is one of the most consequential actors in the conflict system around eastern DRC. Its role is shaped by security doctrine, regional influence, and the legacy of the 1994 genocide.",
    sections: [
      {
        title: "Overview",
        text:
          "Rwanda presents the conflict primarily through a security lens. Its leadership has repeatedly argued that armed groups operating in eastern DRC, especially the FDLR, remain a direct concern for Rwanda’s national security."
      },
      {
        title: "Strategic objectives",
        text:
          "Rwanda’s stated strategic objective is to prevent hostile armed groups from using eastern DRC as a rear base for threats against Rwanda. More broadly, Rwanda seeks a stable or at least manageable security environment along its western border."
      },
      {
        title: "Documented public position",
        text:
          "Rwandan officials have publicly denied supporting M23 and have framed Rwanda’s posture as defensive. In this view, the central unresolved issue is the continued presence of the FDLR and the failure to neutralize it effectively."
      },
      {
        title: "Role in the conflict",
        text:
          "International reporting has repeatedly described Rwanda as a major factor in the conflict’s evolution. UN and U.S. assessments have gone beyond general concern, with recent sanctions and reporting alleging direct RDF support to M23. Rwanda disputes those characterizations."
      },
      {
        title: "International perspective",
        text:
          "Externally, Rwanda is viewed through two competing frames. One presents it as a state with legitimate security concerns tied to genocide-era armed networks. The other presents it as a regional actor whose conduct has helped deepen instability in eastern DRC."
      },
      {
        title: "Diplomacy and pressure",
        text:
          "Rwanda has participated in U.S.-facilitated and regional diplomatic processes, including recent Washington engagement. At the same time, it has faced stronger international pressure, including sanctions and sharper public attribution by foreign governments."
      },
      {
        title: "Key tension",
        text:
          "The central tension is between Rwanda’s stated security narrative and external findings that depict it as materially involved in sustaining M23’s military strength."
      }
    ]
  },
  {
    name: "Democratic Republic of Congo",
    subtitle: "State actor",
    intro:
      "The DRC is the principal territorial state affected by the conflict, with eastern provinces such as North Kivu and South Kivu bearing the brunt of repeated armed confrontation.",
    sections: [
      {
        title: "Overview",
        text:
          "For the DRC, the conflict is at once a sovereignty crisis, a governance crisis, and a regional security crisis. It is also a struggle over control, legitimacy, and the state’s ability to protect populations in the east."
      },
      {
        title: "Strategic objectives",
        text:
          "The DRC’s core objectives are to restore territorial control, reduce or defeat armed groups, protect sovereignty, and mobilize regional and international backing against what it sees as external interference."
      },
      {
        title: "Documented public position",
        text:
          "Congolese officials have repeatedly accused Rwanda of backing M23. Publicly, Kinshasa has framed the issue less as a purely internal insurgency and more as a crisis involving cross-border support and regional destabilization."
      },
      {
        title: "Role in the conflict",
        text:
          "The DRC is both the battlefield state and the diplomatic complainant. It has relied on military force, regional arrangements, and international advocacy, while also facing criticism over weak state reach, fragmented security structures, and unresolved governance problems in the east."
      },
      {
        title: "International perspective",
        text:
          "Internationally, the DRC is often treated as a state confronting both internal armed-group fragmentation and external pressure. Sympathy for its sovereignty claims has often coexisted with concern about corruption, weak institutions, and uneven military performance."
      },
      {
        title: "Diplomacy and pressure",
        text:
          "The DRC has actively sought sanctions, stronger attribution, and diplomatic support from partners including the United States, the United Nations, and African mediators. It has also engaged in high-level talks despite continued mistrust."
      },
      {
        title: "Key tension",
        text:
          "The DRC argues that external backing for M23 is central. At the same time, long-standing internal weaknesses in state authority and local security governance remain part of why the east is so persistently unstable."
      }
    ]
  },
  {
    name: "M23",
    subtitle: "Armed group",
    intro:
      "M23 is the most internationally visible armed group in the current phase of the conflict and has been one of the main drivers of renewed military escalation in eastern DRC.",
    sections: [
      {
        title: "Overview",
        text:
          "M23 emerged in 2012, declined after military setbacks, and later re-emerged as a powerful armed actor. Its resurgence has transformed the conflict from chronic instability into a sharper regional crisis."
      },
      {
        title: "Strategic objectives",
        text:
          "M23 has presented itself as a movement seeking political redress, protection for communities, and implementation of prior commitments. In practice, its military operations have also focused on territory, mobility corridors, and leverage."
      },
      {
        title: "Documented public position",
        text:
          "Publicly, M23 has framed itself as a political-military movement responding to exclusion, insecurity, and broken agreements. It presents its struggle as one tied to rights, protection, and representation."
      },
      {
        title: "Role in the conflict",
        text:
          "M23 has been central to the latest escalation, conducting major offensives and controlling strategically important areas. Its battlefield effectiveness has been one of the defining features of the conflict’s recent phase."
      },
      {
        title: "International perspective",
        text:
          "International organizations and many foreign governments treat M23 as a destabilizing armed group whose operations have driven displacement, insecurity, and broader regional confrontation. It is also widely discussed in connection with external support allegations."
      },
      {
        title: "Diplomacy and pressure",
        text:
          "M23’s position affects not only battlefield dynamics but also the architecture of peace talks. Any durable settlement has to account for its territorial presence, military capability, and political demands, whether directly or indirectly."
      },
      {
        title: "Key tension",
        text:
          "M23 presents itself as a political actor with grievances; much of the international community sees it primarily as an armed force intensifying instability through violence and coercive territorial expansion."
      }
    ]
  }
]

const comparisonPoints = [
  {
    title: "Security frame",
    text:
      "Rwanda emphasizes border security and the FDLR. The DRC emphasizes sovereignty and external interference. M23 emphasizes grievance, protection, and political exclusion."
  },
  {
    title: "Territorial frame",
    text:
      "The DRC sees the crisis through control of sovereign territory. M23’s relevance is linked to its operational reach on that territory. Rwanda’s role is assessed in relation to what happens across the border."
  },
  {
    title: "Diplomatic frame",
    text:
      "All three actors shape diplomacy differently: the DRC seeks backing, Rwanda seeks recognition of its security concerns, and M23 complicates or conditions any political settlement."
  }
]

export default function ActorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pb-16 md:pt-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Actors
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Deep profiles of the main actors
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            These profiles are organized to help readers compare the principal
            actors through a shared analytical structure: objectives, public
            positions, role in the conflict, international perspective, and key
            tensions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/context"
              className="inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              Open context page
            </Link>
            <Link
              href="/chapters"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Return to chapters
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Comparative lens
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            How to read the actors together
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {comparisonPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6 md:pb-20">
        <div className="space-y-10">
          {actors.map((actor) => (
            <div
              key={actor.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {actor.subtitle}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                    {actor.name}
                  </h2>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                {actor.intro}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {actor.sections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}