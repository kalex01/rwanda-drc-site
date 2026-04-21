import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The War Economy | Chapter 4 | Rwanda–DRC Site",
  description:
    "Chapter 4 examines the war economy in eastern Congo, showing how insecurity, extraction, transport routes, and armed influence combine into a self-sustaining conflict system.",
}

const chapterNotes = [
  {
    title: "Core argument",
    text:
      "This chapter explains that conflict in eastern Congo is not only political or military. It also operates as an economic system built around access, movement, and extraction.",
  },
  {
    title: "System logic",
    text:
      "Armed actors do not need full territorial rule to shape outcomes. Control over mines, roads, checkpoints, and border routes can be enough to influence the flow of value.",
  },
  {
    title: "Why it matters",
    text:
      "The war economy persists because disorder can generate revenue for some actors even as it destroys stability for the wider population.",
  },
]

export default function ChapterFourPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 4
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                The War Economy
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Some conflicts reach a point where violence no longer functions
                only as a reaction to fear, territory, or politics. It becomes
                part of a structure that can sustain itself. This chapter
                examines how eastern Congo fits that pattern through networks of
                extraction, transport, coercion, and recurring economic value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-3"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/story/chapter-5"
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
                This chapter shows how insecurity can become economically
                useful. The conflict is sustained not only by force, but by a
                chain of actors who benefit from keeping value in motion through
                unstable territory.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  The war economy is not a separate layer added on top of the
                  conflict. It is one of the reasons the conflict remains so
                  difficult to unwind.
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
            There comes a point in some conflicts when violence stops being
            only a reaction to fear, territory, or politics. It becomes part of
            a system that sustains itself. Eastern Congo is one of those
            places. Over time, the conflict has evolved into something more
            than periodic fighting. It has become a structure in which control,
            movement, and extraction are tied together through economic value.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            The most important thing to understand is that armed actors do not
            always need to rule in the formal sense. They do not need
            ministries, functioning bureaucracies, or complete territorial
            control. Often, it is enough to influence key points in the chain:
            a mine, a road, a checkpoint, a border crossing, or a zone through
            which goods must pass. Whoever controls these points can shape the
            flow of value without ever needing to fully govern the population.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              From insecurity to revenue
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              In a formal economy, production and trade are regulated through
              taxes, licenses, and institutions. In a war economy, many of
              these functions are informally reproduced by non-state actors. A
              miner extracts ore. A trader purchases it. A transporter moves it
              along a route. At each step, someone can impose a cost, extract a
              payment, or control access. Those payments may appear small in
              isolation, but when repeated across large volumes and long
              periods, they become a source of real income.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This is why conflict in eastern Congo is not simply destructive.
              It is also productive in a narrow economic sense. It generates
              opportunities for some actors even as it destroys stability for
              others. That is one reason the system is so difficult to
              dismantle. If peace interrupts access to these flows, then peace
              is not only politically difficult — it can also be economically
              disruptive to those who benefit from disorder.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A chain of actors, not a single mastermind
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              One of the common misunderstandings about war economies is the
              idea that they are controlled by a single actor. In reality, the
              system is layered. Artisanal miners work for immediate survival.
              Local traders aggregate small quantities. Armed actors influence
              routes or sites. Exporters and processors add structure further
              along the chain. Global buyers absorb the final product into
              international markets. Each part of the chain sees only part of
              the whole, yet together they form a functioning economic network.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Structural point
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                The conflict economy is resilient because it is decentralized.
                It does not require perfect control. It requires enough
                continuity to keep value moving.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This layered character is what makes the conflict economy
              adaptive. If one route becomes unusable, another is found. If one
              actor weakens, another may fill the space. The system is resilient
              precisely because it is decentralized. It does not depend on
              perfect order. It depends on enough continuity to keep value
              moving.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The local cost of an international system
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              For communities living inside this reality, the war economy does
              not feel like an abstract model. It feels like daily uncertainty.
              Roads become risky. Markets shrink. Families move repeatedly.
              Work becomes tied to immediate survival rather than long-term
              stability. The same minerals that generate value far beyond the
              region often leave behind insecurity where they are extracted.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This creates one of the central contradictions of eastern Congo:
              the region is rich in material value, yet poor in secure
              development. The flow of wealth outward does not necessarily
              build order inward. In many cases, it does the opposite,
              sustaining the very conditions that allow informal capture to
              continue.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Why the system persists
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The war economy persists because it sits at the intersection of
              weak governance, strong demand, and fragmented control. None of
              these factors alone is enough to explain it. Together, they make
              conflict durable. As long as minerals remain valuable, governance
              remains uneven, and routes remain vulnerable to capture, the
              underlying logic of the system will continue.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              To understand eastern Congo, one must therefore understand that
              war is not only fought there. It is financed there, organized
              there, and normalized there through patterns of movement and
              exchange that have become embedded over time.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-3"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/story/chapter-5"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Next chapter
          </Link>
        </div>
      </article>
    </main>
  )
}