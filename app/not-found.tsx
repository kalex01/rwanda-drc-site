import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide">
        404
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        Page not found
      </h1>

      <p className="mt-4 text-lg leading-8">
        The page you requested does not exist or may have been moved.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-xl border px-4 py-2 underline"
        >
          Go Home
        </Link>

        <Link
          href="/actors"
          className="rounded-xl border px-4 py-2 underline"
        >
          View Actors
        </Link>

        <Link
          href="/appendix"
          className="rounded-xl border px-4 py-2 underline"
        >
          Open Appendix
        </Link>
      </div>
    </main>
  )
}