import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conclusion | Chapter 12 | Rwanda–DRC Site",
  description:
    "Chapter 12 concludes the Rwanda–DRC site by synthesizing the conflict’s historical, territorial, economic, regional, and global layers, and reflecting on the possibility of a different future."
}

export default function ChapterTwelvePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 12
      </p>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        Conclusion
      </h1>

      <p className="mt-8 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The Rwanda–DRC conflict does not yield easily to a single explanation.
        It is not only a story of armed groups, nor only of state weakness,
        nor only of minerals, nor only of history. It is the point at which
        all of these forces meet. That is what makes it so difficult to resolve
        and so important to understand carefully.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Congo remains the central space in which the crisis unfolds, a country
        of immense wealth that continues to struggle with the challenge of
        turning territorial scale into lived state presence. Rwanda remains one
        of the most decisive regional actors, shaped by a strategic mindset
        formed through trauma, vigilance, and the conviction that threats
        beyond the border cannot be treated as distant. Armed groups such as
        M23 remain important not only for what they do militarily, but for how
        they become part of larger structures of access, movement, and value.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        Around these actors sits a wider regional and global system. Neighboring
        states continue to interpret eastern Congo through their own security
        and political concerns. International markets continue to absorb the
        region’s resources with far greater efficiency than they absorb its
        instability. Narratives continue to compete, because perception
        influences diplomacy almost as much as evidence itself.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        A story of layers, not lines
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        What this project has tried to show is that the conflict is best
        understood in layers. There is the historical layer, rooted in the
        regional consequences of the 1994 genocide and the Congo wars. There
        is the territorial layer, in which geography and uneven state presence
        shape what is possible. There is the economic layer, in which minerals
        and trade turn insecurity into value. There is the regional layer, in
        which neighboring states remain entangled in the outcome. And there is
        the global layer, in which distant industries and consumers are linked
        to a chain they rarely see clearly.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        To collapse these layers into one simple explanation would be easier.
        It would also be less truthful. The region demands a more patient form
        of understanding—one willing to hold together multiple realities at the
        same time.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900 md:text-3xl">
        The possibility of another future
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        And yet complexity should not be confused with hopelessness. Systems
        that were built over time can also be changed over time. Not quickly,
        and not by a single solution, but through accumulated shifts that begin
        to redirect authority, security, and value. A road kept open. A local
        administration that remains present. A trade route made more
        transparent. A region in which sovereignty and security are negotiated
        with greater seriousness than before. These are not dramatic endings,
        but they are the material from which real change is made.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        The future of eastern Congo will not be determined only by those who
        speak most loudly about it. It will also be shaped by quieter things:
        institutional consistency, political restraint, regional honesty, and
        the refusal to treat civilians as an afterthought in systems larger
        than themselves.
      </p>

      <p className="mt-6 text-base leading-7 text-slate-700 text-justify md:text-left md:text-lg md:leading-8">
        If there is a final lesson here, it is that the region should not be
        understood only as a place of conflict. It is also a place of
        consequence—historical, regional, and global. What happens there tells
        us something not only about Central Africa, but about how the modern
        world connects violence, value, and distance.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-11"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Back to Story
        </Link>
      </div>
    </article>
  )
}