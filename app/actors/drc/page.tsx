import Link from "next/link";

export default function DRCActorPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Key Actor
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Democratic Republic of the Congo
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          The Democratic Republic of the Congo is the central territorial space
          in which the conflict unfolds. It is vast, resource-rich, and
          strategically important, yet much of its modern history has been marked
          by a persistent gap between formal sovereignty and effective control,
          especially in the east.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This gap is not simply administrative. It shapes everything else. Where
          the state cannot remain consistently present, other forms of authority
          emerge—armed groups, informal economic networks, local power brokers,
          and external actors who find room to influence events. In this sense,
          Congo is not only the victim of regional interference. It is also the
          place where weak and uneven control makes such interference possible.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          A state of immense potential
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          Few countries possess the natural wealth of Congo. Its mineral
          resources place it at the center of regional politics and global supply
          chains. But potential is not the same as realized power. One of the
          core tragedies of the Congolese state is that resources that should
          strengthen national development have often become part of systems that
          weaken local stability instead.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          This has produced a long-standing contradiction: a country of immense
          wealth repeatedly struggling to convert that wealth into broad security,
          institutional continuity, and shared prosperity. The east, where many
          of the most valuable resources are found, is also where this
          contradiction becomes most visible.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          Sovereignty and its limits
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          From Kinshasa’s point of view, the conflict is fundamentally about
          sovereignty. Armed groups operating in the east are not only security
          threats. They are also reminders that the state’s authority remains
          contested in parts of its own territory. External involvement, whether
          direct or indirect, further sharpens this sensitivity.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Yet asserting sovereignty in principle is not the same as consolidating
          it in practice. The challenge for Congo is not merely to claim its
          territory, but to make state presence meaningful and reliable within
          it—through roads, services, administration, security, and continuity.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          The central actor, but not always the controlling one
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-700">
          This is what makes Congo such a tragic and central actor. The conflict
          happens on its land, affects its people, and concerns its sovereignty.
          Yet the state has not always been the actor most able to shape events
          consistently on the ground. That imbalance lies at the heart of the
          broader crisis.
        </p>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          Congo remains the indispensable actor in any durable solution. Without
          stronger Congolese institutions and more consistent territorial
          presence, no diplomatic or regional arrangement can produce lasting
          stability. The question is not whether Congo matters. It is whether it
          can increasingly become the state most capable of shaping what happens
          within its own borders.
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