import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Context",
  description:
    "Geographic context, major milestones, leadership, accountability, and diplomacy related to the Rwanda–DRC conflict.",
}

const orientationNotes = [
  {
    title: "Geography first",
    text:
      "The conflict is regional in meaning, but the most active military and humanitarian consequences are concentrated in eastern Democratic Republic of the Congo.",
  },
  {
    title: "Security frame",
    text:
      "Rwanda emphasizes border security and hostile armed groups near its frontier, while the DRC emphasizes sovereignty, territorial integrity, and external interference.",
  },
  {
    title: "Diplomatic frame",
    text:
      "The crisis sits inside a wider system of regional mediation, international pressure, sanctions, and recurring efforts to reduce escalation.",
  },
]

const referencePoints = [
  {
    value: "1994",
    label: "Regional rupture",
    text: "A foundational turning point for the wider crisis.",
  },
  {
    value: "1996–2003",
    label: "Congo wars",
    text: "The period that regionalized the conflict most deeply.",
  },
  {
    value: "North & South Kivu",
    label: "Core theatre",
    text: "Eastern DRC remains the central military and humanitarian zone.",
  },
  {
    value: "2",
    label: "Principal states",
    text: "Rwanda and the DRC remain at the center of interstate tension.",
  },
]

const contextGuides = [
  {
    title: "Timeline markers",
    value: "7",
    text:
      "A concise chronology from the 1994 rupture through recent diplomacy and sanctions.",
  },
  {
    title: "Leader profiles",
    value: "2",
    text:
      "The page focuses on the two principal heads of state shaping conflict policy.",
  },
  {
    title: "Diplomatic tracks",
    value: "3",
    text:
      "U.S., regional, and UN engagement remain important to de-escalation efforts.",
  },
]

const whyItMatters = [
  "Eastern DRC borders Rwanda, making frontier insecurity and spillover central to the conflict.",
  "The crisis combines local armed-group dynamics with interstate accusations, diplomacy, and mineral politics.",
  "Readers often need geographic orientation before they can make sense of the timeline, actors, and recent diplomatic pressure.",
]

const timeline = [
  {
    years: "1994",
    title: "Genocide against the Tutsi in Rwanda",
    text:
      "The genocide became a foundational turning point for the regional crisis. Its aftermath reshaped security dynamics inside Rwanda and across the border in eastern Zaire, later the DRC.",
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
      "In June 2025, Rwanda and the DRC signed a U.S.-brokered peace agreement in Washington, marking a new phase of high-level diplomacy around ceasefire commitments, sovereignty, and regional stabilization.",
  },
  {
    years: "2026",
    title: "Sanctions and de-escalation efforts",
    text:
      "In March 2026, the United States sanctioned the Rwanda Defence Force and four senior officers, and later that month Rwanda and the DRC agreed in Washington on steps intended to reduce tensions.",
  },
]

const timelineAnchors = [
  {
    eyebrow: "Historical anchor",
    years: "1994–2003",
    title: "Regional crisis formation",
    text:
      "The regional order that followed 1994 shaped the wars that later unfolded across eastern Congo.",
    image: "/images/timeline-1994.jpg",
    alt: "Historical image connected to the 1994 genocide in Rwanda",
  },
  {
    eyebrow: "Conflict escalation",
    years: "2012–2024",
    title: "M23 and Goma",
    text:
      "M23’s return and the battles around Goma revived the military and diplomatic crisis in eastern DRC.",
    image: "/images/timeline-m23-goma.jpg",
    alt: "Image connected to M23 and the conflict around Goma",
  },
  {
    eyebrow: "Diplomatic pressure",
    years: "2025–2026",
    title: "Washington diplomacy",
    text:
      "Recent diplomacy shifted toward ceasefire pressure, sanctions-related leverage, and high-level mediation.",
    image: "/images/timeline-washington-2025.jpg",
    alt: "Image connected to Washington diplomacy between Rwanda and the DRC",
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
    image: "/images/felix-tshisekedi2.jpg",
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

export default function ContextPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 md:py-14">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Context
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Geographic context, leadership, accountability, and diplomacy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This page gives readers a structured entry point into the conflict:
              where it is unfolding, which turning points shaped it, who the
              principal leaders are, what accountability has looked like, and
              how recent diplomacy has evolved.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/actors"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Explore actors
              </Link>
              <Link
                href="/appendix/timeline"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open timeline
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
                src="/images/drc-location-map-ocha-2025.png"
                alt="Map showing Rwanda, eastern Democratic Republic of Congo, and the surrounding regional setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Regional orientation
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                The conflict is best understood by locating eastern DRC within
                the wider Great Lakes region, where borders, proximity, and
                mobility shape both security fears and diplomatic response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {orientationNotes.map((item) => (
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

      <section className="mx-auto max-w-4xl px-4 pb-2 sm:px-6 lg:px-8 md:pb-4">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {referencePoints.map((item) => (
            <article
              key={item.label}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="grid gap-4 md:grid-cols-3">
          {contextGuides.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
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
        <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Geographic context
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Where the conflict is taking place
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The conflict is centered in eastern Democratic Republic of Congo,
              along the border with Rwanda. For many readers, this is the first
              missing piece: the crisis is regional, but the most active
              military theatre is in eastern DRC, especially around North Kivu
              and South Kivu.
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/drc-location-map-ocha-2025.png"
                  alt="Map showing Rwanda, eastern Democratic Republic of Congo, Goma, and Kigali"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              <div className="border-t border-slate-200 p-4 sm:p-5">
                <p className="text-sm leading-6 text-slate-700 sm:text-base">
                  This map helps locate Rwanda, eastern DRC, Goma, and Kigali
                  within the broader Great Lakes setting before the page moves
                  into the denser security picture.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://www.google.com/maps/place/Rwanda"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                View Rwanda on Google Maps →
              </a>
              <a
                href="https://www.google.com/maps/place/Democratic+Republic+of+the+Congo"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                View DRC on Google Maps →
              </a>
              <a
                href="https://www.google.com/maps/place/Goma"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                View Goma on Google Maps →
              </a>
              <a
                href="https://www.google.com/maps/place/Kigali"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-950"
              >
                View Kigali on Google Maps →
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
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
              <p className="mt-3 text-sm leading-6 text-slate-200 sm:text-base">
                This page is meant to orient the reader before they move deeper
                into the chapter narrative. It reduces confusion without trying
                to replace the fuller analysis elsewhere in the site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5 sm:p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Security geography
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Armed-group distribution in eastern DRC, February 2025
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This second map moves from basic location to the more complex
              security picture on the ground, including M23’s prominence and the
              wider armed-group environment across eastern DRC.
            </p>
          </div>

          <div className="bg-slate-50 p-4 sm:p-5 lg:p-6">
            <Image
              src="/images/armed-groups-map-feb-2025.png"
              alt="Map showing armed-group distribution in eastern Democratic Republic of Congo in February 2025"
              width={960}
              height={1463}
              className="h-auto w-full rounded-[1.5rem] border border-slate-200 bg-white object-contain"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>

          <div className="border-t border-slate-200 p-5 sm:p-6 lg:p-8">
            <p className="text-sm leading-6 text-slate-700 sm:text-base">
              Because this map is denser and more technical, it works best after
              the basic location map. The page therefore moves from orientation
              to analytical depth instead of overwhelming the reader at first
              glance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-2 sm:px-6 lg:px-8 md:py-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Timeline
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Key events that shaped the conflict
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              This compressed timeline is designed as an orientation tool before
              readers move into longer analysis.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timelineAnchors.map((item) => (
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
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {item.years}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      {item.title}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-base leading-7 text-slate-700">
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
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-[1.5rem] bg-slate-900/80" />

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="md:max-w-[180px]">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.years}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
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
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Leadership
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                The two principal heads of state
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              These profiles are framed around public position, state policy,
              and conflict-related leadership.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
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

                <div className="p-5 sm:p-6">
                  <p className="text-base leading-7 text-slate-700">
                    {leader.summary}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    {leader.publicPosition}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-700">
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
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Accountability
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
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
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Diplomacy
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
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

              <div className="border-t border-slate-200 p-5">
                <p className="text-sm leading-6 text-slate-700 sm:text-base">
                  A diplomacy image helps anchor this section in negotiation,
                  consultation, and state-level engagement rather than abstract
                  policy language alone.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {diplomacy.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-950 px-5 py-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Reader note
              </p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                This section is designed to show that diplomacy is not a side
                issue. It is one of the main ways the regional crisis is
                managed, contested, and interpreted internationally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}