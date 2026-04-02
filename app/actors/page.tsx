import Link from "next/link";

export default function RwandaActorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Key Actor
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Rwanda
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Rwanda is one of the most consequential actors in the wider Rwanda–DRC
          conflict system. Its role cannot be understood only in terms of current
          policy. It is deeply shaped by the legacy of the 1994 genocide, by the
          fear of renewed insecurity near its borders, and by a broader strategic
          conviction that threats beyond the frontier cannot simply be ignored.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This historical experience produced a state that sees vigilance as a
          necessity rather than a preference. From Kigali’s perspective, eastern
          Congo is not just a neighboring zone of instability. It is a region
          whose disorder can have direct implications for Rwanda’s own safety.
          That view helps explain why Rwanda’s actions are often proactive,
          security-centered, and interpreted through the language of prevention.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          A security-driven outlook
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Rwanda’s strategic thinking is rooted in the belief that security must
          be maintained before threats become fully visible. The presence of
          hostile armed groups in eastern Congo, especially those connected in
          memory or lineage to the post-1994 crisis, has remained central to how
          Rwanda frames the regional environment. Whether one agrees with all of
          Kigali’s interpretations or not, this security lens is fundamental to
          understanding its posture.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This approach also affects diplomacy. Rwanda does not usually present
          itself as a passive observer of regional disorder. It presents itself
          as a state with legitimate interests, urgent concerns, and a right to
          take instability near its borders seriously.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Discipline, image, and influence
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Rwanda’s importance also comes from its internal coherence. It is often
          perceived as organized, disciplined, and administratively effective.
          That image matters. In a region where many states face institutional
          weakness, Rwanda’s internal order becomes a form of power in itself. It
          allows the country to project confidence, act with strategic clarity,
          and shape how it is perceived internationally.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          At the same time, this image does not remove controversy. Critics argue
          that Rwanda’s regional behavior cannot be explained by security alone
          and must also be understood through the lenses of influence,
          opportunity, and control. Supporters, by contrast, see Rwanda as a
          state forced by history to remain alert in an unstable neighborhood.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Rwanda in the mineral and regional system
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Rwanda also occupies an important place in regional mineral trade. It
          has developed more structured systems of processing and export than
          much of eastern Congo. This makes it a significant regional hub. That
          role, however, places it at the center of ongoing scrutiny and debate,
          especially when questions of traceability, regional flows, and the
          relationship between insecurity and economic structure become difficult
          to separate.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          In the end, Rwanda is not simply a neighboring state in this conflict.
          It is a strategic actor whose historical memory, security concerns, and
          regional position make it one of the most important forces shaping how
          the system operates.
        </p>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <Link
            href="/actors"
            className="rounded-2xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
          >
            Back to Actors
          </Link>
        </div>
      </article>
    </main>
  );
}