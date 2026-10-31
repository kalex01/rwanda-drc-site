import Image from "next/image"
import Link from "next/link"
import ChronologySources from "@/app/components/ChronologySources"
import { chronologyEvents, chronologyScope, chronologyEditorialNote } from "@/app/data/chronology"

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-12">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Appendix · Timeline
            </p>

            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              A chronological guide to the Rwanda–DRC conflict
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              This timeline does not try to capture every event. It is designed
              to help readers track the major turning points that shaped the
              conflict, the regional relationship, and the recurring cycle of
              insecurity in eastern Congo.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-500">{chronologyScope}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/appendix"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Back to appendix
              </Link>
              <Link
                href="/appendix/sources"
                className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                View sources
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/timeline-washington-2025.jpg"
                alt="Diplomatic meeting associated with the 2025 Washington diplomatic process"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="border-t border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Reading note
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                The conflict has no single starting point and no single cause.
                The most useful way to read it is through layers: historical
                trauma, state weakness, armed mobilization, regional security,
                and repeated but incomplete diplomacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              How to use this page
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              Read down the page as a sequence of turning points. Each entry is
              meant to explain why a moment mattered, not just record that it
              happened.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Editorial focus
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              {chronologyEditorialNote}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="space-y-6 md:space-y-8">
          {chronologyEvents.map((event, index) => {
            const hasImage = Boolean(event.image)

            return (
              <article
                key={event.id}
                id={event.id}
                className="rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[170px_minmax(0,1fr)]">
                  <div className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r lg:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Moment {index + 1}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {event.year}
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-7">
                    <div
                      className={`grid items-start gap-6 ${
                        hasImage
                          ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(250px,0.8fr)]"
                          : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                          {event.title}
                        </h2>

                        <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                          {event.summary}
                        </p>

                        <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Why it matters
                          </p>
                          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
                            {event.significance}
                          </p>
                        </div>
                        <ChronologySources sources={event.sources} />
                      </div>

                      {hasImage ? (
                        <div className="self-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                          <div className="relative aspect-[5/4] w-full">
                            <Image
                              src={event.image as string}
                              alt={event.alt as string}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Next reference paths
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Continue into the reference material
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              After the timeline, the glossary helps decode recurring terms,
              while the sources page shows the reporting, documents, and
              materials that support the project.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/appendix/glossary"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open glossary
              </Link>
              <Link
                href="/appendix/sources"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Open sources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}