import Link from "next/link";

export default function M23ActorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Key Actor
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          M23
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          M23 is one of the most prominent armed groups in eastern Congo and one
          of the most internationally scrutinized actors in the current phase of
          the conflict. Its significance comes not only from military capacity,
          but from the wider meanings attached to its operations: questions of
          regional backing, strategic coordination, territorial influence, and
          economic consequence.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Unlike many smaller militias that remain localized and loosely
          organized, M23 has often been perceived as more structured, more
          disciplined, and more capable of coordinated movement. That alone has
          made it stand out. But what elevates its importance further is that its
          actions are rarely interpreted as purely local. They are read through
          the larger debate about the regional order in eastern Congo.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          More than a battlefield actor
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          M23 matters because it can affect more than territory. By influencing
          key routes, strategic zones, and areas connected to movement or
          extraction, it becomes part of the broader economic structure of the
          conflict. In this sense, its role is not only military. It sits where
          insecurity and value can overlap.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This is one reason the group has such a destabilizing effect. Where it
          gains influence, state authority is weakened further, population
          displacement increases, and already fragile local systems become more
          uncertain. The result is not only violence, but an expansion of the
          conditions that make violence harder to reverse.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Why M23 is politically sensitive
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          M23 is also central because of how it is politically interpreted.
          International observers and regional actors have often linked the group
          to broader questions of cross-border support and regional influence.
          Rwanda, in turn, rejects accusations of supporting it. This means M23
          is never treated only as an internal insurgent movement. It is almost
          always discussed within a larger regional frame.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          That political sensitivity gives the group significance beyond its
          size. It becomes a symbol of unresolved questions: who shapes the east,
          how insecurity is organized, and whether the conflict is primarily
          domestic, regional, or both at once.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          A symptom and a force
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          M23 should be understood both as a force in its own right and as a
          symptom of larger structural conditions. It exists because eastern
          Congo remains a space of uneven control, historical grievance,
          fragmented armed presence, and regional mistrust. But once active, it
          also reshapes that environment, intensifying instability and altering
          how the wider conflict is understood.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          In that sense, M23 is not just another armed group. It is one of the
          clearest expressions of how local violence in eastern Congo becomes
          entangled with larger systems of regional power and international
          concern.
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