import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conclusion | Chapter 12 | Rwanda–DRC Site",
  description:
    "Chapter 12 concludes the Rwanda–DRC site by synthesizing the conflict’s historical, territorial, economic, regional, and global layers, and reflecting on the possibility of a different future.",
}

const chapterNotes = [
  {
    title: "Final synthesis",
    text:
      "This chapter gathers the project’s major layers into one closing frame: history, territory, economics, regional strategy, global connection, and civilian consequence.",
  },
  {
    title: "Core message",
    text:
      "The conflict does not yield to a single explanation. It has to be understood as a layered system in which several forms of power and vulnerability meet at once.",
  },
  {
    title: "Why it matters",
    text:
      "A careful conclusion matters because simplistic readings may feel satisfying, but they usually produce shallow analysis and weak solutions.",
  },
]

export default function ChapterTwelvePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Chapter 12
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Conclusion
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                This final chapter brings the project’s main layers back
                together. The Rwanda–DRC conflict is not best explained through
                one cause alone, but through the point where history,
                territorial weakness, mineral value, regional security, and
                global distance meet and reinforce one another.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/story/chapter-11"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                >
                  Previous chapter
                </Link>
                <Link
                  href="/chapters"
                  className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Back to chapters
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Closing lens
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
                The aim of this conclusion is not to flatten the conflict into a
                single answer. It is to leave the reader with a clearer sense of
                how the different layers fit together, and why that complexity
                should be taken seriously rather than avoided.
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Key idea
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  Complexity is not the enemy of understanding. In this case, it
                  is the condition for understanding responsibly.
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
            The Rwanda–DRC conflict does not yield easily to a single
            explanation. It is not only a story of armed groups, nor only of
            state weakness, nor only of minerals, nor only of history. It is
            the point at which all of these forces meet. That is what makes it
            so difficult to resolve and so important to understand carefully.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Congo remains the central space in which the crisis unfolds, a
            country of immense wealth that continues to struggle with the
            challenge of turning territorial scale into lived state presence.
            Rwanda remains one of the most decisive regional actors, shaped by a
            strategic mindset formed through trauma, vigilance, and the
            conviction that threats beyond the border cannot be treated as
            distant. Armed groups such as M23 remain important not only for what
            they do militarily, but for how they become part of larger
            structures of access, movement, and value.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            Around these actors sits a wider regional and global system.
            Neighboring states continue to interpret eastern Congo through their
            own security and political concerns. International markets continue
            to absorb the region’s resources with far greater efficiency than
            they absorb its instability. Narratives continue to compete, because
            perception influences diplomacy almost as much as evidence itself.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              A story of layers, not lines
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              What this project has tried to show is that the conflict is best
              understood in layers. There is the historical layer, rooted in the
              regional consequences of the 1994 genocide and the Congo wars.
              There is the territorial layer, in which geography and uneven
              state presence shape what is possible. There is the economic
              layer, in which minerals and trade turn insecurity into value.
              There is the regional layer, in which neighboring states remain
              entangled in the outcome. And there is the global layer, in which
              distant industries and consumers are linked to a chain they rarely
              see clearly.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Closing point
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-900 md:text-xl">
                The conflict becomes easier to summarize when its layers are
                ignored. It becomes easier to understand when they are kept
                together.
              </p>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              To collapse these layers into one simple explanation would be
              easier. It would also be less truthful. The region demands a more
              patient form of understanding — one willing to hold together
              multiple realities at the same time.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              The possibility of another future
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              And yet complexity should not be confused with hopelessness.
              Systems that were built over time can also be changed over time.
              Not quickly, and not by a single solution, but through accumulated
              shifts that begin to redirect authority, security, and value. A
              road kept open. A local administration that remains present. A
              trade route made more transparent. A region in which sovereignty
              and security are negotiated with greater seriousness than before.
              These are not dramatic endings, but they are the material from
              which real change is made.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              The future of eastern Congo will not be determined only by those
              who speak most loudly about it. It will also be shaped by quieter
              things: institutional consistency, political restraint, regional
              honesty, and the refusal to treat civilians as an afterthought in
              systems larger than themselves.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              If there is a final lesson here, it is that the region should not
              be understood only as a place of conflict. It is also a place of
              consequence — historical, regional, and global. What happens there
              tells us something not only about Central Africa, but about how
              the modern world connects violence, value, and distance.
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/story/chapter-11"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Previous chapter
          </Link>

          <Link
            href="/chapters"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Back to chapters
          </Link>
        </div>
      </article>
    </main>
  )
}