import Link from "next/link"

export default function ChapterThreePage() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 3
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        The Land Beneath the Conflict
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        Eastern Congo is often described as a place of instability, but that
        description is incomplete. It is also a place of extraordinary value.
        Beneath its soil lies one of the richest concentrations of strategic
        minerals in the world. This dual reality—instability above ground and
        wealth beneath it—defines the logic of the conflict more than any
        single political explanation.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Geography plays a decisive role. The terrain is vast, mountainous in
        parts, and difficult to access. Infrastructure is limited, and state
        presence is uneven. In such an environment, authority does not simply
        disappear—it fragments. Control becomes localized, shifting from one
        actor to another depending on proximity, strength, and opportunity.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Minerals and Global Demand
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        The region’s mineral wealth connects it directly to the global economy.
        Coltan is essential to modern electronics. Gold remains a universal
        store of value. Tin and tungsten are critical for industrial
        production. These are not marginal resources—they are embedded in the
        infrastructure of modern life.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Yet extraction often takes place through artisanal mining rather than
        large-scale industrial systems. Thousands of individuals work in
        conditions shaped by necessity rather than regulation. In this space,
        survival is immediate, and formal oversight is limited. This creates an
        environment where multiple actors—local, regional, and external—can
        insert themselves into the chain of extraction and movement.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Fragmented Control and Armed Presence
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        In eastern Congo, control is rarely absolute. It is exercised through
        access: to a road, to a mine, to a border crossing. Armed groups do not
        always seek to govern entire territories. It is often sufficient to
        control strategic points that allow them to influence movement and
        extract value.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Among these actors, M23 has played a significant role. Its presence is
        not limited to military confrontation. By positioning itself near key
        zones and routes, it becomes part of the broader economic structure.
        The consequences are severe: communities are displaced, insecurity
        spreads, and the authority of the state becomes further diluted.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        This creates a cycle in which instability is not only a result of
        conflict but also a condition that allows the system to continue
        functioning. The absence of consistent control becomes an enabling
        factor rather than a temporary disruption.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Routes, Borders, and Regional Flow
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        Once extracted, minerals do not remain in place. They move. This
        movement is structured through networks of traders, intermediaries, and
        transport routes that connect remote mining sites to regional hubs. At
        each stage, value is added, recorded, or sometimes obscured.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Rwanda occupies a critical position in this system as a regional
        gateway. It offers infrastructure, organization, and export capacity
        that stand in contrast to the fragmented environment across the
        border. This position has placed it at the center of ongoing debates
        about origin, traceability, and influence.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        The complexity lies in the overlap between structure and ambiguity.
        Minerals may pass through multiple hands before reaching formal export
        channels. By the time they enter global markets, their earlier journey
        is often difficult to reconstruct with certainty.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        A System, Not a Moment
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        What emerges is not a single conflict, but a system. Geography,
        mineral wealth, armed presence, and global demand interact in ways that
        reinforce one another. The land is not merely a backdrop—it is an
        active participant in the logic of the conflict.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        To understand eastern Congo is therefore to understand how local
        conditions connect to regional dynamics and global structures. The
        story is not only about who controls the land, but about what flows
        through it, who benefits, and why the system continues to endure.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-2"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-4"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}