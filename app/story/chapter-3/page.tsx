import Link from "next/link";

export default function ChapterThreePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 3
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          The Land Beneath the Conflict-Updated March 31
        </h1>

        {/* INTRO */}
        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Eastern Congo is often described as a place of instability, but that
          description is incomplete. It is also a place of extraordinary value.
          Beneath its soil lies one of the richest concentrations of strategic
          minerals in the world. This dual reality—instability above ground and
          wealth beneath it—defines the logic of the conflict more than any
          single political explanation.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Geography plays a decisive role. The terrain is vast, mountainous in
          parts, and difficult to access. Infrastructure is limited, and state
          presence is uneven. In such an environment, authority does not simply
          disappear—it fragments. Control becomes localized, shifting from one
          actor to another depending on proximity, strength, and opportunity.
        </p>

        {/* SECTION 1 */}
        <h2 className="mt-10 text-2xl font-semibold">
          Minerals and Global Demand
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          The region’s mineral wealth connects it directly to the global
          economy. Coltan is essential to modern electronics. Gold remains a
          universal store of value. Tin and tungsten are critical for industrial
          production. These are not marginal resources—they are embedded in the
          infrastructure of modern life.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Yet extraction often takes place through artisanal mining rather than
          large-scale industrial systems. Thousands of individuals work in
          conditions shaped by necessity rather than regulation. In this space,
          survival is immediate, and formal oversight is limited. This creates
          an environment where multiple actors—local, regional, and external—
          can insert themselves into the chain of extraction and movement.
        </p>

        {/* SECTION 2 */}
        <h2 className="mt-10 text-2xl font-semibold">
          Fragmented Control and Armed Presence
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          In eastern Congo, control is rarely absolute. It is exercised through
          access: to a road, to a mine, to a border crossing. Armed groups do
          not always seek to govern entire territories. It is often sufficient
          to control strategic points that allow them to influence movement and
          extract value.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Among these actors, M23 has played a significant role. Its presence is
          not limited to military confrontation. By positioning itself near key
          zones and routes, it becomes part of the broader economic structure.
          The consequences are severe: communities are displaced, insecurity
          spreads, and the authority of the state becomes further diluted.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This creates a cycle in which instability is not only a result of
          conflict but also a condition that allows the system to continue
          functioning. The absence of consistent control becomes an enabling
          factor rather than a temporary disruption.
        </p>

        {/* SECTION 3 */}
        <h2 className="mt-10 text-2xl font-semibold">
          Routes, Borders, and Regional Flow
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Once extracted, minerals do not remain in place. They move. This
          movement is structured through networks of traders, intermediaries,
          and transport routes that connect remote mining sites to regional
          hubs. At each stage, value is added, recorded, or sometimes obscured.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Rwanda occupies a critical position in this system as a regional
          gateway. It offers infrastructure, organization, and export capacity
          that stand in contrast to the fragmented environment across the
          border. This position has placed it at the center of ongoing debates
          about origin, traceability, and influence.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          The complexity lies in the overlap between structure and ambiguity.
          Minerals may pass through multiple hands before reaching formal export
          channels. By the time they enter global markets, their earlier journey
          is often difficult to reconstruct with certainty.
        </p>

        {/* CONCLUSION */}
        <h2 className="mt-10 text-2xl font-semibold">
          A System, Not a Moment
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          What emerges is not a single conflict, but a system. Geography,
          mineral wealth, armed presence, and global demand interact in ways
          that reinforce one another. The land is not merely a backdrop—it is an
          active participant in the logic of the conflict.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          To understand eastern Congo is therefore to understand how local
          conditions connect to regional dynamics and global structures. The
          story is not only about who controls the land, but about what flows
          through it, who benefits, and why the system continues to endure.
        </p>

        {/* NAVIGATION */}
        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-2"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-4"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}