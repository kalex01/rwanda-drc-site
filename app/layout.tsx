import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/app/components/SiteHeader"

export const metadata: Metadata = {
  title: {
    default: "Rwanda–DRC Site",
    template: "%s | Rwanda–DRC Site"
  },
  description:
    "Analysis of the Rwanda–DRC conflict, key actors, chapters, and reference materials.",
  openGraph: {
    title: "Rwanda–DRC Site",
    description:
      "Analysis of the Rwanda–DRC conflict, key actors, chapters, and reference materials.",
    type: "website",
    locale: "en_CA",
    siteName: "Rwanda–DRC Site"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda–DRC Site",
    description:
      "Analysis of the Rwanda–DRC conflict, key actors, chapters, and reference materials."
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  )
}