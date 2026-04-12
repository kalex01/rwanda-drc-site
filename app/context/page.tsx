import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Context & Timeline",
  description:
    "Geographic context, major milestones, leadership, accountability, and diplomacy related to the Rwanda–DRC conflict."
}

const timeline = [
  {
    years: "1994",
    title: "Genocide against the Tutsi in Rwanda",
    text:
      "The genocide in Rwanda became a foundational turning point for the regional crisis. Its aftermath reshaped security dynamics in Rwanda and across the border in eastern Zaire, later the DRC."
  },
  {
    years: "1996–1997",
    title: "First Congo War",
    text:
      "Regional instability spilled into eastern Zaire. Rwanda supported a rebellion led by Laurent-Désiré Kabila, and Mobutu was overthrown."
  },
  {
    years: "1998–2003",
    title: "Second Congo War",
    text:
      "The conflict widened into a major regional war involving multiple states and armed groups. Even after the formal war period ended, eastern DRC remained volatile."
  },
  {
    years: "2012–2013",
    title: "Rise of M23 and the fall of Goma",
    text:
      "M23 emerged as a major armed actor and briefly captured Goma in 2012 before later being militarily weakened in 2013."
  },
  {
    years: "2021–2024",
    title: "Renewed M23 insurgency",
    text:
      "M23 re-emerged and intensified operations in eastern DRC, reviving regional accusations, military confrontation, and diplomatic pressure."
  },
  {
    years: "2025",
    title: "Washington peace agreement and renewed pressure",
    text:
      "In June 2025, Rwanda and the DRC signed a U.S.-brokered peace agreement in Washington, reflecting a new phase of high-level diplomacy around ceasefire commitments, sovereignty, and regional stabilization."
  },
  {
    years: "2026",
    title: "Sanctions and de-escalation efforts",
    text:
      "In March 2026, the United States sanctioned the Rwanda Defence Force and four senior officers, and later that month Rwanda and the DRC agreed in Washington on steps intended to reduce tensions."
  }
]

const leaders = [
  {
    country: "Rwanda",
    name: "Paul Kagame",
    role: "President of Rwanda",
    summary:
      "Paul Kagame has been the central figure in Rwanda’s political and security policy since 2000. Rwanda has consistently argued that its core security concern is the presence in eastern DRC of armed groups linked to the perpetrators of the 1994 genocide, especially the FDLR.",
    publicPosition:
      "Publicly, Kagame and the Rwandan government have denied supporting M23 and have framed Rwanda’s position as one of border security, self-defence, and the need to neutralize hostile armed groups near Rwanda’s frontier.",
    policyRole:
      "His role in the conflict is therefore both strategic and diplomatic: Rwanda has remained active in regional talks while also rejecting international allegations that it has backed M23 militarily.",
    note:
      "For credibility, this page focuses on documented public positions and state policy rather than unverified private comments."
  },
  {
    country: "Democratic Republic of Congo",
    name: "Félix Tshisekedi",
    role: "President of the DRC",
    summary:
      "Félix Tshisekedi has led the DRC since 2019 and has made the eastern conflict one of the defining issues of his presidency. His government has repeatedly accused Rwanda of supporting M23 and violating Congolese sovereignty.",
    publicPosition:
      "Publicly, Tshisekedi’s administration has called for stronger international pressure, diplomatic action, and sanctions against actors it says contribute to instability in eastern DRC.",
    policyRole:
      "His role combines military and diplomatic leadership: the DRC has pursued military responses on the ground while also seeking mediation through the United States, African regional processes, and the United Nations.",
    note:
      "This page summarizes documented public positions and conflict-related policy, not private or unsourced conversations."
  }
]

const accountability = [
  {
    title: "International Criminal Tribunal for Rwanda (ICTR)",
    text:
      "The ICTR was established after the 1994 genocide and prosecuted senior figures responsible for genocide and related crimes. Its work helped shape international jurisprudence on genocide, incitement, and command responsibility."
  },
  {
    title: "International Criminal Court (ICC) and the DRC",
    text:
      "The ICC has handled several landmark DRC-related cases, making the country central to the court’s early jurisprudence on war crimes and crimes against humanity."
  },
  {
    title: "Thomas Lubanga",
    text:
      "Thomas Lubanga became the first person convicted by the ICC. His case focused on the enlistment, conscription, and use of child soldiers in the DRC conflict."
  },
  {
    title: "Bosco Ntaganda",
    text:
      "Bosco Ntaganda was later convicted by the ICC of war crimes and crimes against humanity connected to atrocities in the DRC. His case is among the most significant accountability cases arising from the Congolese conflict."
  },
  {
    title: "Sanctions as a legal and diplomatic tool",
    text:
      "Beyond criminal prosecutions, governments have used sanctions to target individuals and entities accused of fueling the conflict. These measures are not criminal convictions, but they are an important part of the international response."
  },
  {
    title: "Recent U.S. sanctions",
    text:
      "In February 2025, the United States sanctioned James Kabarebe. In March 2026, the U.S. Treasury sanctioned the Rwanda Defence Force and four senior officers, citing support for M23 and destabilization in eastern DRC."
  },
  {
    title: "UN reporting and evidentiary context",
    text:
      "UN expert reports and monitoring mechanisms continue to shape international understanding of the conflict. Their findings often inform diplomatic pressure, sanctions decisions, and policy debates even when they are not court judgments."
  }
]

const diplomacy = [
  {
    title: "United States mediation",
    text:
      "Washington has hosted high-level engagement between Rwanda and the DRC. A U.S.-brokered peace agreement was signed in June 2025, marking a major diplomatic milestone."
  },
  {
    title: "March 2026 Washington meeting",
    text:
      "In March 2026, Rwanda and the DRC agreed in Washington on steps aimed at de-escalating tensions after a period of intensified pressure and sanctions."
  },
  {
    title: "Regional and UN diplomacy",
    text:
      "UN engagement and African regional mediation have continued alongside bilateral talks and broader international efforts to lower the risk of regional escalation."
  }
]

const whyItMatters = [
  "Eastern DRC borders Rwanda, making border security and regional spillover central to the conflict.",
  "The crisis combines local armed-group dynamics with interstate accusations, diplomacy, and mineral politics.",
  "Readers often need geographic orientation before they can make sense of the timeline and the main actors."
]

export default function ContextPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 px-5 py-8 shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Context page
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Geographic context, leadership, accountability, and diplomacy
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            This page is designed to put the basic facts in front of the reader:
            where Rwanda and the DRC are located, which major events shaped the
            conflict, who the principal state leaders are, what international
            accountability has looked like, and how recent diplomacy has evolved.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/actors"
              className="inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              Explore actors
            </Link>
            <Link
              href="/appendix"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Open appendix
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Geographic context
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Where the conflict is taking place
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              The conflict is centered in eastern Democratic Republic of Congo,
              along the border with Rwanda. For many readers, this is the first
              missing piece: the crisis is regional, but the most active military
              theatre is in eastern DRC, especially around North Kivu and South
              Kivu.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <img
                src="/map-central-africa.png"
                alt="Map showing Rwanda and Democratic Republic of Congo"
                className="w-full rounded-xl object-cover"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://www.google.com/maps/place/Rwanda"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  View Rwanda on Google Maps →
                </a>

                <a
                  href="https://www.google.com/maps/place/Democratic+Republic+of+the+Congo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  View DRC on Google Maps →
                </a>

                <a
                  href="https://www.google.com/maps/place/Goma"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  View Goma on Google Maps →
                </a>

                <a
                  href="https://www.google.com/maps/place/Kigali"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  View Kigali on Google Maps →
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-5 py-8 text-white shadow-sm md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Why this matters
            </p>

            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              {whyItMatters.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Timeline
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            Key events that shaped the conflict
          </h2>

          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <div
                key={`${item.years}-${item.title}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-6 md:py-6"
              >
                <p className="text-sm font-semibold text-blue-700">
                  {item.years}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            State leadership
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            Principal national leaders
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            The positions of Rwanda and the Democratic Republic of Congo are
            largely shaped by their respective national leadership. Public
            statements, diplomatic engagement, and security policies have all
            played a central role in shaping the trajectory of the conflict.
          </p>

          <div className="mt-6 space-y-5">
            {leaders.map((item) => (
              <div
                key={`${item.country}-${item.name}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-6 md:py-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.country}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-slate-950 md:text-xl">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-700">
                  {item.role}
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {item.summary}
                </p>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Public position:
                  </span>{" "}
                  {item.publicPosition}
                </p>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Role in the conflict:
                  </span>{" "}
                  {item.policyRole}
                </p>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-base leading-7 text-slate-600">
                    <span className="font-semibold text-slate-900">
                      Method note:
                    </span>{" "}
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Accountability
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            International cases and legal context
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            The Rwanda–DRC conflict intersects with multiple international legal
            processes, including tribunals, sanctions regimes, and conflict
            monitoring. These mechanisms do not all do the same thing: criminal
            courts determine guilt, while sanctions and UN reporting are tools of
            pressure, monitoring, and international policy response.
          </p>

          <div className="mt-6 space-y-5">
            {accountability.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-6 md:py-6"
              >
                <h3 className="text-lg font-semibold text-slate-950 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-5 md:px-6 md:py-6">
            <h3 className="text-lg font-semibold text-slate-950 md:text-xl">
              Reading this section carefully
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
              This page distinguishes between court convictions, sanctions, and
              allegations in reporting. A conviction follows a criminal judicial
              process. Sanctions are executive measures. UN and expert reports
              may shape international understanding without themselves being
              final court judgments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Diplomacy
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            Recent mediation and de-escalation efforts
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {diplomacy.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-6 md:py-6"
              >
                <h3 className="text-lg font-semibold text-slate-950 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-5 md:px-6 md:py-6">
            <h3 className="text-lg font-semibold text-slate-950 md:text-xl">
              Sanctions context
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
              Recent diplomacy has unfolded alongside sanctions and public
              pressure. That combination reflects a broader international effort
              to influence state behavior, reduce armed confrontation, and
              support de-escalation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-5 py-8 text-white shadow-sm md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
            Editorial note
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
            This page is intentionally factual and high-level. It keeps the
            focus on geography, chronology, leadership, diplomacy, and confirmed
            legal context so readers can understand the structure of the crisis
            before going deeper into detail.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/chapters"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Return to chapters
            </Link>

            <Link
              href="/actors"
              className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
            >
              Open actor pages
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}