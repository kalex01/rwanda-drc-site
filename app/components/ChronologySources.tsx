import { chronologySources, type ChronologySourceId } from "@/app/data/chronology"

export default function ChronologySources({ sources }: { sources: ChronologySourceId[] }) {
  return (
    <ul aria-label="Sources for this event" className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
      {sources.map((id) => (
        <li key={id}>
          <a
            href={chronologySources[id].href}
            className="rounded-sm underline underline-offset-4 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
          >
            {chronologySources[id].label}
          </a>
        </li>
      ))}
    </ul>
  )
}
