import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Global Layer | Chapter 8 | Rwanda–DRC Site",
  description:
    "Chapter 8 examines how eastern Congo’s conflict connects to regional gateways, global supply chains, mineral traceability debates, and wider systems of trade and accountability.",
}

const chapterNotes = [
  {
    title: "Global frame",
    text:
      "This chapter shows that the conflict cannot be understood only at the mine or checkpoint level. Once minerals move, they enter a wider system of trade, processing, and global demand.",
  },
  {
    title: "Core tension",
    text:
      "The farther minerals travel from eastern Congo, the less visible their origin often becomes. Markets absorb value efficiently, but not always accountability.",
  },
  {
    title: "Why it matters",
    text:
      "The conflict persists in part because local instability can be folded into global supply chains without appearing as conflict by the time products reach end markets.",
  },
]

export default function ChapterEightPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 8
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                The Global Layer
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Eastern Congo’s conflict does not remain local once minerals
                leave the ground. This chapter examines how extraction,
                transport, regional gateways, and global markets connect the
                conflict to wider systems of trade, traceability, and
                accountability.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-7"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-9"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Next chapter
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Chapter lens
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                The global layer matters because conflict minerals do not remain
                tied visibly to conflict for long. As they move through trade
                and processing networks, their origin becomes harder to see even
                though the earlier conditions still shape the chain.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  The conflict becomes global not because the mine changes
                  location, but because what begins in eastern Congo is absorbed
                  into wider systems that can distance value from violence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {chapterNotes.map((item) => (
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

      <article className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            If one looks only at the mine, the conflict appears local. A miner
            digs, a trader buys, a road is crossed, a checkpoint is negotiated.
            But that view becomes too narrow the moment the mineral leaves the
            ground. What begins in eastern Congo enters a chain that stretches
            far beyond the region, eventually becoming part of global supply
            systems. This is where the local conflict becomes global in
            meaning.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Coltan, gold, tin, and tungsten do not remain in the places where
            they are extracted. They move through traders, intermediaries,
            exporters, refiners, and manufacturers. By the time they reach end
            markets, they are no longer seen as fragments of a conflict zone.
            They become standardized commodities and industrial inputs. The
            violence that may have surrounded their earlier movement becomes
            increasingly difficult to see.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Where M23 enters the chain
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              M23 matters in this system not because it is a global trading
              company, but because it can shape conditions at the earliest and
              most vulnerable stage of the chain. Its influence over strategic
              zones, routes, or areas of extraction gives it significance beyond
              immediate battlefield movement. When an armed actor affects who
              can enter an area, who can move goods, or which routes remain
              viable, it becomes part of the economic architecture of the
              conflict.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Structural point
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                M23’s significance is not only military. It lies in how armed
                influence at the start of the chain can shape trade conditions
                far beyond the battlefield.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is one reason M23 attracts such scrutiny. Its role is not
              only military. It sits at the intersection of insecurity and
              economic flow. The more such a group becomes embedded in the
              movement of value, the more difficult it becomes to separate
              security questions from trade questions.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Where Rwanda enters the debate
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Rwanda occupies a critical and contested place in this picture. It
              is a structured state with export capacity, processing
              infrastructure, and growing relevance in regional mineral trade.
              That alone would make it important. But what places Rwanda at the
              center of international debate is the accusation, advanced by
              various observers and rejected by Kigali, that regional
              insecurity, M23’s operations, and mineral flows are not separate
              issues but interconnected ones.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Rwanda’s own position is that its conduct is driven by security
              concerns, and that its mineral exports operate through formal and
              legitimate structures. Critics argue that Rwanda’s role as a hub
              cannot be fully separated from what happens across the border.
              This dispute is central to how the conflict is interpreted
              internationally. It is not only a question of trade. It is a
              question of whether regional power and economic flow are
              reinforcing each other through the same system.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The disappearance of origin
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              One of the structural problems in the global layer is that origin
              becomes less visible as minerals move. At the extraction stage,
              place matters. By the time processing and export occur, the chain
              becomes more formalized but also more opaque. Minerals may be
              aggregated, transformed, mixed with other inputs, or documented in
              ways that make their earlier journey difficult to reconstruct
              precisely.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is why global markets can absorb value more efficiently than
              they absorb accountability. The farther a resource moves from its
              site of extraction, the weaker the visible trace of conflict tends
              to become. And yet the earlier conditions still matter, because
              they shape how the chain was made possible in the first place.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A local conflict inside a global economy
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The global layer does not erase local suffering. It depends on it
              being structurally distant. Consumers, companies, and states may
              benefit from the availability of these materials without directly
              experiencing the instability at their source. That distance is
              part of what allows the system to endure. The region remains
              essential, but its lived reality can be overlooked by those
              interacting only with the final product.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              To understand the global layer, then, is not merely to follow
              commodities. It is to understand how conflict can be folded into
              wider systems of trade, processing, and consumption, often
              without appearing as conflict at all by the time it reaches the
              end of the chain.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-7"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-9"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}