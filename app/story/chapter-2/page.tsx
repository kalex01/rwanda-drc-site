import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Historical Roots of the Conflict | Chapter 2 | Rwanda–DRC Site",
  description:
    "Chapter 2 examines the historical roots of the Rwanda–DRC conflict, including colonial legacies, weak state development, the 1994 genocide, and the Congo wars."
}

export default function ChapterTwoPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        Chapter 2
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        Historical Roots of the Conflict
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        The conflict in eastern Congo did not begin with one rebellion or one
        diplomatic crisis. Its foundations were laid much earlier, through a
        combination of colonial boundary-making, weak state development, and the
        accumulation of unresolved violence across the Great Lakes region. To
        understand the present, one must first understand that the region
        entered the modern era already burdened by fragility.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Colonial administration left behind borders that were politically formal
        but socially and historically complicated. After independence, neither
        Rwanda nor Congo entered a period of stable institutional
        consolidation. Rwanda experienced repeated political upheavals and
        ethnic violence. Congo, vast and difficult to govern, became a state
        whose reach often failed to match its territorial scale. Eastern Congo
        remained especially vulnerable to marginalization, weak infrastructure,
        and fragmented authority.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        1994 as regional rupture
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        The decisive rupture came in 1994 with the genocide in Rwanda. The end
        of the genocide did not produce a clean regional reset. Instead, it
        generated movement on a massive scale. Large numbers of refugees and
        armed elements crossed into eastern Congo. What arrived there was not
        just displacement, but fear, militarization, and the continuation of
        unresolved threat across a border that was politically real but
        strategically porous.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        For Rwanda, this changed the meaning of eastern Congo permanently. The
        region was no longer only a neighboring zone of instability. It became
        a place from which future threats could emerge. This perception, rooted
        in the experience of genocide and its aftermath, remains central to
        Rwanda’s strategic reading of the east.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        The Congo wars and their legacy
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        The First and Second Congo Wars deepened this regional entanglement.
        Foreign armies entered Congolese territory. Alliances formed and broke.
        Eastern Congo became not only a battlefield, but an arena in which
        sovereignty, security, and resource access collided. The wars were not
        isolated episodes. They transformed the structure of the region,
        embedding cross-border insecurity into the political logic of both
        Congo and its neighbors.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        Even after formal peace agreements, the deeper patterns did not
        disappear. Armed groups adapted. Local and regional networks remained.
        Trade routes continued to operate. Mistrust survived diplomatic
        language. What ended on paper did not fully end in practice. Instead,
        the conflict shifted from large-scale interstate war toward a more
        fragmented but persistent system of instability.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-slate-900">
        Why history still governs the present
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        This historical background matters because current tensions are not
        simply the result of present-day opportunism. They are also shaped by
        inherited fears, past violence, and institutions that never fully
        recovered or consolidated. Rwanda’s posture cannot be understood apart
        from 1994. Congo’s vulnerabilities cannot be understood apart from the
        long history of weak state penetration in the east. Armed groups cannot
        be understood apart from the wars that normalized fragmented violence
        as part of regional political life.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        History, in this region, is not background. It is active. It informs
        how events are interpreted, how states justify their actions, and why
        mistrust remains so durable even when diplomacy appears to move
        forward. The conflict persists not only because of what is happening
        now, but because the past still structures what each side believes is
        at stake.
      </p>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/story/chapter-1"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Previous Chapter
        </Link>

        <Link
          href="/story/chapter-3"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Next Chapter
        </Link>
      </div>
    </article>
  )
}