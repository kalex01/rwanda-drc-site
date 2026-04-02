import Link from "next/link";

export default function ChapterTenPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 10
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          The Human Cost
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          It is possible to discuss eastern Congo in terms of states, armed
          groups, mineral routes, and regional strategy for a long time without
          speaking about the people who live inside the system. Yet their lives
          are where the conflict becomes most real. For them, this is not a
          geopolitical case study. It is a condition of daily life shaped by
          uncertainty, movement, interruption, and endurance.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          In places touched by repeated insecurity, time itself is experienced
          differently. Stability is not assumed. It is temporary, conditional,
          and often fragile. A road may be usable for months, then suddenly not.
          A market may reopen, only to shrink again when movement becomes risky.
          A family may return home after displacement, only to leave once more
          when control shifts nearby. The conflict is therefore not only a series
          of violent moments. It is also a long pattern of interrupted normalcy.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Life under uncertainty
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          For many households, the central question is not long-term planning
          but short-term safety. Can children travel to school? Can goods reach
          the market? Can one sleep in the same place next week? These are not
          dramatic questions in appearance, but together they define the limits
          of ordinary life. Where control is unstable, even modest routines
          become difficult to sustain.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Displacement is one of the clearest expressions of this insecurity.
          People do not always flee because a battle is taking place directly in
          front of them. Often they move because uncertainty itself becomes too
          heavy to live under. Rumor, fear, and shifting authority can be enough
          to unsettle an entire community. When movement begins, it is rarely
          elegant or orderly. Families take what they can carry and move toward
          a place that seems marginally safer.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Children shaped by interruption
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          For children, the effects are both immediate and long-lasting.
          Education becomes fragmented. Schooling may stop and restart multiple
          times. Teachers may leave. Families may be relocated. Entire years of
          learning can be broken into pieces that never fully reconnect. What
          this produces is not only educational loss, but a narrower horizon of
          expectation. A child raised in repeated instability learns to measure
          life differently from one raised in continuity.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Over time, the abnormal becomes familiar. The presence of armed actors,
          the sudden movement of people, the caution around roads and gatherings
          — these become part of what feels ordinary. This normalization is one
          of the deepest injuries of prolonged conflict, because it reshapes what
          communities come to consider possible or realistic.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Work reduced to survival
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          The economic effects are equally severe. In stable settings, work can
          serve as a bridge toward improvement. In conflict-affected zones, work
          is often reduced to immediate survival. Mining, small trade, transport,
          and informal labor become not stepping stones to advancement, but ways
          of enduring one day at a time. Even when these activities generate
          movement and value in the broader system, they do not necessarily
          create security for the people performing them.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This is where the human cost and the economic structure intersect. The
          same resources that connect the region to global markets do not
          guarantee protection for those living closest to them. On the contrary,
          they can intensify competition over space, routes, and influence. The
          region’s value in the international economy does not automatically
          translate into dignity in everyday life.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Resilience without romanticizing suffering
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          It is important to recognize resilience, but not to romanticize it.
          Communities continue to rebuild. Markets return. Families reorganize.
          Social life persists in forms both quiet and practical. But resilience
          should never be mistaken for evidence that conditions are acceptable.
          It is often simply the human capacity to continue under circumstances
          that should not have become normal.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          The human cost of the Rwanda–DRC conflict is therefore not only counted
          in deaths, though those are grave enough. It is also measured in
          deferred futures, disrupted childhoods, interrupted education, repeated
          displacement, and the exhaustion of living within structures one does
          not control.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-9"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-11"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}