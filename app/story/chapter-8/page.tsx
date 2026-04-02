import Link from "next/link";

export default function ChapterEightPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Chapter 8
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          The Global Layer
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          If one looks only at the mine, the conflict appears local. A miner
          digs, a trader buys, a road is crossed, a checkpoint is negotiated.
          But that view becomes too narrow the moment the mineral leaves the
          ground. What begins in eastern Congo enters a chain that stretches far
          beyond the region, eventually becoming part of global supply systems.
          This is where the local conflict becomes global in meaning.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Coltan, gold, tin, and tungsten do not remain in the places where they
          are extracted. They move through traders, intermediaries, exporters,
          refiners, and manufacturers. By the time they reach end markets, they
          are no longer seen as fragments of a conflict zone. They become
          standardized commodities and industrial inputs. The violence that may
          have surrounded their earlier movement becomes increasingly difficult
          to see.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Where M23 enters the chain
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          M23 matters in this system not because it is a global trading company,
          but because it can shape conditions at the earliest and most
          vulnerable stage of the chain. Its influence over strategic zones,
          routes, or areas of extraction gives it significance beyond immediate
          battlefield movement. When an armed actor affects who can enter an
          area, who can move goods, or which routes remain viable, it becomes
          part of the economic architecture of the conflict.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This is one reason M23 attracts such scrutiny. Its role is not only
          military. It sits at the intersection of insecurity and economic flow.
          The more such a group becomes embedded in the movement of value, the
          more difficult it becomes to separate security questions from trade
          questions.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Where Rwanda enters the debate
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Rwanda occupies a critical and contested place in this picture. It is
          a structured state with export capacity, processing infrastructure, and
          growing relevance in regional mineral trade. That alone would make it
          important. But what places Rwanda at the center of international debate
          is the accusation—advanced by various observers and rejected by
          Kigali—that regional insecurity, M23’s operations, and mineral flows
          are not separate issues but interconnected ones.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Rwanda’s own position is that its conduct is driven by security
          concerns, and that its mineral exports operate through formal and
          legitimate structures. Critics argue that Rwanda’s role as a hub cannot
          be fully separated from what happens across the border. This dispute is
          central to how the conflict is interpreted internationally. It is not
          only a question of trade. It is a question of whether regional power
          and economic flow are reinforcing each other through the same system.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          The disappearance of origin
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          One of the structural problems in the global layer is that origin
          becomes less visible as minerals move. At the extraction stage, place
          matters. By the time processing and export occur, the chain becomes
          more formalized but also more opaque. Minerals may be aggregated,
          transformed, mixed with other inputs, or documented in ways that make
          their earlier journey difficult to reconstruct precisely.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This is why global markets can absorb value more efficiently than they
          absorb accountability. The farther a resource moves from its site of
          extraction, the weaker the visible trace of conflict tends to become.
          And yet the earlier conditions still matter, because they shape how the
          chain was made possible in the first place.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          A local conflict inside a global economy
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          The global layer does not erase local suffering. It depends on it being
          structurally distant. Consumers, companies, and states may benefit from
          the availability of these materials without directly experiencing the
          instability at their source. That distance is part of what allows the
          system to endure. The region remains essential, but its lived reality
          can be overlooked by those interacting only with the final product.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          To understand the global layer, then, is not merely to follow
          commodities. It is to understand how conflict can be folded into wider
          systems of trade, processing, and consumption—often without appearing
          as conflict at all by the time it reaches the end of the chain.
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
          <Link
            href="/story/chapter-7"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Previous Chapter
          </Link>

          <Link
            href="/story/chapter-9"
            className="rounded-2xl bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700"
          >
            Next Chapter
          </Link>
        </div>
      </article>
    </main>
  );
}