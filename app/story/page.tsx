import Link from "next/link";

const chapters = [
  {
    number: "Chapter 1",
    title: "Introduction",
    description:
      "An opening overview of the Rwanda–DRC nexus, explaining why this conflict matters locally, regionally, and globally.",
    href: "/story/chapter-1",
  },
  {
    number: "Chapter 2",
    title: "Historical Roots of the Conflict",
    description:
      "A narrative look at the background to the conflict, including the regional consequences of the 1994 genocide and the Congo wars.",
    href: "/story/chapter-2",
  },
  {
    number: "Chapter 3",
    title: "The Land Beneath the Conflict",
    description:
      "How geography, minerals, M23, and regional flows shape the conflict system in eastern Congo.",
    href: "/story/chapter-3",
  },
  {
    number: "Chapter 4",
    title: "The War Economy",
    description:
      "How violence becomes financially sustainable through routes, access, taxation, and control.",
    href: "/story/chapter-4",
  },
  {
    number: "Chapter 5",
    title: "Rwanda’s Strategic Mindset",
    description:
      "A narrative explanation of how Rwanda’s history, security concerns, and regional strategy shape its posture.",
    href: "/story/chapter-5",
  },
  {
    number: "Chapter 6",
    title: "Congo: A Giant That Struggles to Hold Itself Together",
    description:
      "A narrative portrait of Congo’s governance gaps, lost control, and unrealized potential.",
    href: "/story/chapter-6",
  },
  {
    number: "Chapter 7",
    title: "The Regional Chessboard",
    description:
      "How neighboring states entered the wars in Congo and shaped the wider balance of power.",
    href: "/story/chapter-7",
  },
  {
    number: "Chapter 8",
    title: "The Global Layer",
    description:
      "How minerals moved from local extraction into regional and global supply chains, and where Rwanda and M23 fit in.",
    href: "/story/chapter-8",
  },
  {
    number: "Chapter 9",
    title: "The Narrative Battle",
    description:
      "How truth, interpretation, and perception shape diplomacy and the understanding of the conflict.",
    href: "/story/chapter-9",
  },
  {
    number: "Chapter 10",
    title: "The Human Cost",
    description:
      "A closer look at the lives lived inside the conflict system and the daily reality of uncertainty.",
    href: "/story/chapter-10",
  },
  {
    number: "Chapter 11",
    title: "Can the Cycle Be Broken?",
    description:
      "What a real path toward stability would require from Congo, Rwanda, and the wider world.",
    href: "/story/chapter-11",
  },
  {
    number: "Chapter 12",
    title: "Conclusion",
    description:
      "A final reflection on memory, power, structure, and the possibility of change.",
    href: "/story/chapter-12",
  },
];

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          The Book
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
          The Story
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          Read the project chapter by chapter. Each section combines narrative,
          analysis, and historical context to explain how conflict, minerals,
          and regional power interact in eastern Congo.
        </p>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
          {chapters.map((chapter) => (
            <Link
              key={chapter.href}
              href={chapter.href}
              className="rounded-3xl border border-neutral-200 p-6 transition hover:border-neutral-400 hover:shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.15em] text-neutral-500">
                {chapter.number}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{chapter.title}</h2>
              <p className="mt-4 leading-7 text-neutral-700">
                {chapter.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}