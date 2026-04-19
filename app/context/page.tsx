import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Context & Timeline",
  description:
    "Geographic context, major milestones, leadership, accountability, and diplomacy related to the Rwanda–DRC conflict.",
}

const referencePoints = [
  {
    value: "1994",
    label: "Rwandan genocide",
    text: "A foundational turning point for the wider regional crisis.",
  },
  {
    value: "1996–2003",
    label: "Congo war period",
    text: "The regional conflict escalated across two successive Congo wars.",
  },
  {
    value: "2",
    label: "Principal states",
    text: "Rwanda and the DRC remain at the center of interstate tension.",
  },
  {
    value: "North & South Kivu",
    label: "Main conflict zone",
    text: "Eastern DRC remains the core military and humanitarian theatre.",
  },
]

const structuralStats = [
  {
    value: "7",
    label: "timeline markers",
    text: "A concise chronology from 1994 to 2026.",
  },
  {
    value: "2",
    label: "leader profiles",
    text: "The page focuses on the main heads of state.",
  },
  {
    value: "3",
    label: "diplomatic tracks",
    text: "U.S., regional, and UN engagement.",
  },
]

const crisisPanels = [
  {
    eyebrow: "Geography",
    title: "Eastern DRC is the core theatre",
    text:
      "The conflict is regional in political meaning, but its most active military and humanitarian consequences are concentrated in eastern Congo, especially in and around North Kivu and South Kivu.",
  },
  {
    eyebrow: "Security",
    title: "Borders and armed groups drive escalation",
    text:
      "Rwanda frames the eastern DRC crisis through security threats near its frontier, while the DRC frames the conflict through sovereignty, territorial integrity, and external interference.",
  },
  {
    eyebrow: "Diplomacy",
    title: "Regional war, international pressure",
    text:
      "The conflict cannot be understood only as a local insurgency. It sits at the intersection of regional diplomacy, sanctions, peace talks, accountability debates, and mineral politics.",
  },
]

const timeline = [
  {
    years: "1994",
    title: "Genocide against the Tutsi in Rwanda",
    text:
      "The genocide in Rwanda became a foundational turning point for the regional crisis. Its aftermath reshaped security dynamics in Rwanda and across the border in eastern Zaire, later the DRC.",
  },
  {
    years: "1996–1997",
    title: "First Congo War",
    text:
      "Regional instability spilled into eastern Zaire. Rwanda supported a rebellion led by Laurent-Désiré Kabila, and Mobutu was overthrown.",
  },
  {
    years: "1998–2003",
    title: "Second Congo War",
    text:
      "The conflict widened into a major regional war involving multiple states and armed groups. Even after the formal war period ended, eastern DRC remained volatile.",
  },
  {
    years: "2012–2013",
    title: "Rise of M23 and the fall of Goma",
    text:
      "M23 emerged as a major armed actor and briefly captured Goma in 2012 before later being militarily weakened in 2013.",
  },
  {
    years: "2021–2024",
    title: "Renewed M23 insurgency",
    text:
      "M23 re-emerged and intensified operations in eastern DRC, reviving regional accusations, military confrontation, and diplomatic pressure.",
  },
  {
    years: "2025",
    title: "Washington peace agreement and renewed pressure",
    text:
      "In June 2025, Rwanda and the DRC signed a U.S.-brokered peace agreement in Washington, reflecting a new phase of high-level diplomacy around ceasefire commitments, sovereignty, and regional stabilization.",
  },
  {
    years: "2026",
    title: "Sanctions and de-escalation efforts",
    text:
      "In March 2026, the United States sanctioned the Rwanda Defence Force and four senior officers, and later that month Rwanda and the DRC agreed in Washington on steps intended to reduce tensions.",
  },
]

const timelineVisuals = [
  {
    years: "1994",
    title: "1994",
    subtitle: "Historical anchor",
    image: "/images/timeline-1994.jpg",
    alt: "Historical image connected to the 1994 genocide in Rwanda",
    text:
      "This visual marks the foundational rupture that shaped the regional security and political environment for decades afterward.",
  },
  {
    years: "2012–2013, 2021–2024",
    title: "M23 and Goma",
    subtitle: "Conflict escalation",
    image: "/images/timeline-m23-goma.jpg",
    alt: "Image connected to M23 and the conflict around Goma",
    text:
      "This image represents the armed and territorial dimension of the crisis in eastern DRC, especially around Goma and the Kivu provinces.",
  },
  {
    years: "2025–2026",
    title: "Washington diplomacy",
    subtitle: "Recent pressure and mediation",
    image: "/images/timeline-washington-2025.jpg",
    alt: "Image connected to Washington diplomacy between Rwanda and the DRC",
    text:
      "This visual anchors the recent phase of diplomacy, sanctions pressure, and de-escalation efforts linked to Washington talks.",
  },
]

const leaders = [
  {
    country: "Rwanda",
    name: "Paul Kagame",
    role: "President of Rwanda",
    image: "/images/paul-kagame.jpg",
    summary:
      "Paul Kagame has been the central figure in Rwanda’s political and security policy since 2000. Rwanda has consistently argued that its core security concern is the presence in eastern DRC of armed groups linked to the perpetrators of the 1994 genocide, especially the FDLR.",
    publicPosition:
      "Publicly, Kagame and the Rwandan government have denied supporting M23 and have framed Rwanda’s position as one of border security, self-defence, and the need to neutralize hostile armed groups near Rwanda’s frontier.",
    policyRole:
      "His role in the conflict is therefore both strategic and diplomatic: Rwanda has remained active in regional talks while also rejecting international allegations that it has backed M23 militarily.",
    note:
      "This section focuses on documented public positions and state policy rather than unverified private comments.",
  },
  {
    country: "Democratic Republic of Congo",
    name: "Félix Tshisekedi",
    role: "President of the DRC",
    image: "/images/felix-tshisekedi.jpg",
    summary:
      "Félix Tshisekedi has led the DRC since 2019 and has made the eastern conflict one of the defining issues of his presidency. His government has repeatedly accused Rwanda of supporting M23 and violating Congolese sovereignty.",
    publicPosition:
      "Publicly, Tshisekedi’s administration has called for stronger international pressure, diplomatic action, and sanctions against actors it says contribute to instability in eastern DRC.",
    policyRole:
      "His role combines military and diplomatic leadership: the DRC has pursued military responses on the ground while also seeking mediation through the United States, African regional processes, and the United Nations.",
    note:
      "This section summarizes documented public positions and conflict-related policy, not private or unsourced conversations.",
  },
]

const accountability = [
  {
    title: "International Criminal Tribunal for Rwanda (ICTR)",
    text:
      "The ICTR was established after the 1994 genocide and prosecuted senior figures responsible for genocide and related crimes. Its work helped shape international jurisprudence on genocide, incitement, and command responsibility.",
  },
  {
    title: "International Criminal Court (ICC) and the DRC",
    text:
      "The ICC has handled several landmark DRC-related cases, making the country central to the court’s early jurisprudence on war crimes and crimes against humanity.",
  },
  {
    title: "Thomas Lubanga",
    text:
      "Thomas Lubanga became the first person convicted by the ICC. His case focused on the enlistment, conscription, and use of child soldiers in the DRC conflict.",
  },
  {
    title: "Bosco Ntaganda",
    text:
      "Bosco Ntaganda was later convicted by the ICC of war crimes and crimes against humanity connected to atrocities in the DRC. His case is among the most significant accountability cases arising from the Congolese conflict.",
  },
  {
    title: "Sanctions as a legal and diplomatic tool",
    text:
      "Beyond criminal prosecutions, governments have used sanctions to target individuals and entities accused of fueling the conflict. These measures are not criminal convictions, but they are an important part of the international response.",
  },
  {
    title: "Recent U.S. sanctions",
    text:
      "In February 2025, the United States sanctioned James Kabarebe. In March 2026, the U.S. Treasury sanctioned the Rwanda Defence Force and four senior officers, citing support for M23 and destabilization in eastern DRC.",
  },
  {
    title: "UN reporting and evidentiary context",
    text:
      "UN expert reports and monitoring mechanisms continue to shape international understanding of the conflict. Their findings often inform diplomatic pressure, sanctions decisions, and policy debates even when they are not court judgments.",
  },
]

const diplomacy = [
  {
    title: "United States mediation",
    text:
      "Washington has hosted high-level engagement between Rwanda and the DRC. A U.S.-brokered peace agreement was signed in June 2025, marking a major diplomatic milestone.",
  },
  {
    title: "March 2026 Washington meeting",
    text:
      "In March 2026, Rwanda and the DRC agreed in Washington on steps aimed at de-escalating tensions after a period of intensified pressure and sanctions.",
  },
  {
    title: "Regional and UN diplomacy",
    text:
      "UN engagement and African regional mediation have continued alongside bilateral talks and broader international efforts to lower the risk of regional escalation.",
  },
]

const whyItMatters = [
  "Eastern DRC borders Rwanda, making border security and regional spillover central to the conflict.",
  "The crisis combines local armed-group dynamics with interstate accusations, diplomacy, and mineral politics.",
  "Readers often need geographic orientation before they can make sense of the timeline and the main actors.",
]

export default function ContextPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 px-5 py-10 text-white md:px-10 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Context page
            </p>

            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Geographic context, leadership, accountability, and diplomacy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              This page gives readers a clean entry point into the conflict:
              where it is unfolding, which turning points shaped it, who the
              principal leaders are, what accountability has looked like, and
              how recent diplomacy has evolved.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/actors"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5"
              >
                Explore actors
              </Link>
              <Link
                href="/timeline"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Open timeline
              </Link>
            </div>
          </div>

          <div className="grid gap-4 px-5 py-5 md:grid-cols-3 md:px-10 md:py-8">
            {crisisPanels.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                  {item.eyebrow}
                </p>
                <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-2 sm:px-6 lg:px-8 md:pb-4">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {referencePoints.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-6 shadow-sm"
            >
              <p className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {item.label}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="grid gap-4 md:grid-cols-3">
          {structuralStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-blue-100 bg-blue-50/70 px-5 py-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {item.label}
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
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

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              The conflict is centered in eastern Democratic Republic of Congo,
              along the border with Rwanda. For many readers, this is the first
              missing piece: the crisis is regional, but the most active
              military theatre is in eastern DRC, especially around North Kivu
              and South Kivu.
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/drc-location-map-ocha-2025.png"
                  alt="Map showing Rwanda and Democratic Republic of Congo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              <div className="border-t border-slate-200 px-4 py-4 md:px-5">
                <p className="text-sm leading-6 text-slate-600">
                  A reference map helps locate Rwanda, eastern DRC, Goma, and
                  Kigali within the broader Great Lakes and Central African
                  setting.
                </p>

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
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-5 py-8 text-white shadow-sm md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Why this matters
            </p>

            <ul className="mt-5 space-y-4 text-base leading-7 text-slate-200 md:text-lg md:leading-8">
              {whyItMatters.map((item) => (
                <li
                  key={item}
                  className="border-b border-slate-800 pb-4 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Reader note
              </p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                This page is meant to orient the reader before they move into
                the chapter narrative. It is designed to reduce confusion, not
                to replace the deeper analysis elsewhere in the site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Timeline
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Key events that shaped the conflict
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              This compressed timeline is designed as an orientation tool before
              readers move into longer analysis.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timelineVisuals.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-5 py-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      {item.years}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <p className="text-base leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {timeline.map((item, index) => (
              <div
                key={`${item.years}-${index}`}
                className="relative rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5 md:px-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-[1.5rem] bg-blue-700/80" />

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="md:max-w-[180px]">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                      {item.years}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Leadership
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                The two principal heads of state
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              These profiles are framed around public position, state policy,
              and conflict-related leadership.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent px-5 py-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                      {leader.country}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{leader.role}</p>
                  </div>
                </div>

                <div className="px-5 py-6">
                  <p className="text-base leading-7 text-slate-600">
                    {leader.summary}
                  </p>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {leader.publicPosition}
                  </p>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {leader.policyRole}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {leader.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Accountability
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Legal and sanctions framework
            </h2>

            <div className="mt-6 space-y-4">
              {accountability.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Diplomacy
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Recent mediation and de-escalation
            </h2>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/diplomacy-meeting.jpg"
                  alt="High-level diplomatic meeting related to regional mediation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              <div className="border-t border-slate-200 px-5 py-5">
                <p className="text-sm leading-6 text-slate-600">
                  A high-level meeting image helps anchor the diplomacy section
                  in actual negotiation, consultation, and state-level
                  engagement rather than abstract policy language alone.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {diplomacy.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-blue-100 bg-blue-50/70 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-950 px-5 py-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Design note
              </p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                This section now carries a clearer diplomatic signal while still
                leaving room for a future, more specific Washington or regional
                summit visual if you find one later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}