import Link from "next/link"

export default function ChapterSixPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 6
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        Congo: A Giant That Struggles to Hold Itself Together
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        The Democratic Republic of the Congo is a country of immense scale and
        extraordinary possibility. Its size, natural wealth, and human
        potential could, under different conditions, make it one of the most
        powerful states on the continent. And yet much of its modern history
        has been marked by a painful contrast between what it possesses and
        what it is able to control.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This gap is especially visible in the east. There, the state is not
        absent in a total sense, but its presence is uneven. Authority may be
        visible in one town and weak on the road beyond it. Institutions may
        exist formally while struggling to shape reality consistently on the
        ground. In such conditions, control becomes unstable, and instability
        becomes part of everyday life.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        A tragedy of reach and presence
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        One of the enduring tragedies of Congo is that it has often struggled
        to fully reach itself. Kinshasa can project sovereignty on the map, but
        governing a vast territory requires roads, institutions, security, and
        continuity. Where these are inconsistent, the state’s authority becomes
        thinner. That thinning creates spaces in which others—armed groups,
        informal networks, and external actors—can shape reality more than the
        state itself.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This is not only a governance problem. It is a national wound. Because
        every zone left partially unsecured or weakly regulated becomes a place
        where sovereignty is diluted. For the population, this is experienced
        not in constitutional language, but in daily terms: whether roads are
        safe, markets function, schools stay open, and local authority can be
        trusted to remain present.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Wealth without sufficient capture
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        The country’s mineral wealth should be a foundation for long-term
        national strength. Instead, it has too often become part of a system
        in which value escapes more easily than it is captured. Resources are
        extracted, traded, transported, and absorbed into wider networks while
        the state struggles to retain enough of that value to transform local
        conditions sustainably.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This is one of the most painful dimensions of the Congolese story: a
        land of such abundance repeatedly witnessing the outward movement of
        wealth while insecurity remains inwardly entrenched. It is not simply
        a matter of corruption or technical weakness, though both matter. It
        is a structural mismatch between economic potential and institutional
        control.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Armed persistence as a mirror of state limitation
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        The persistence of armed actors in eastern Congo is not only a story
        about those groups themselves. It is also a reflection of the spaces in
        which the state has not yet fully consolidated itself. When groups like
        M23 can operate, reposition, or influence strategic zones, they reveal
        something deeper about the landscape in which they move. They reveal
        that authority remains contested.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This is why Congo’s challenge is not merely to defeat one armed group
        or secure one district. It is to create continuity of state presence in
        places where people have long learned to live with uncertainty. That is
        a much larger task than military response alone. It involves trust,
        infrastructure, administration, and time.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        A wake-up call, not a verdict
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        And yet this story should not be read as a final judgment on Congo. It
        should be read as a wake-up call. The country’s limitations are real,
        but so is its potential. Recognizing the scale of the problem is not
        surrender. It is the first step toward building something more durable.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Congo does not lack resources. It does not lack human resilience. What
        it needs is a stronger alignment between territory, authority, and
        benefit. Until that alignment becomes more real, the gap between the
        country’s promise and its lived reality will remain one of the central
        tragedies of the region.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-5"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-7"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}