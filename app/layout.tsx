import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Rwanda–DRC Nexus",
  description: "Conflict, minerals, and power in Central Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold">
              The Rwanda–DRC Nexus
            </Link>

            <nav className="flex gap-6 text-sm text-neutral-700">
              <Link href="/story">Story</Link>
              <Link href="/actors">Actors</Link>
              <Link href="/appendix">Appendix</Link>
              <Link href="/timeline">Timeline</Link>
              <Link href="/sources">Sources</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
            <p>The Rwanda–DRC Nexus — research website project</p>
            <div className="flex gap-5">
              <Link href="/story">Story</Link>
              <Link href="/appendix">Appendix</Link>
              <Link href="/sources">Sources</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}