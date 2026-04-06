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
  siteName: "Rwanda–DRC Site",
  url: "https://yourdomain.com", // update after deployment
  images: [
    {
      url: "/og-preview.png",
      width: 1200,
      height: 630,
      alt: "Rwanda–DRC Conflict Overview"
    }
  ]
},
  twitter: {
  card: "summary_large_image",
  title: "Rwanda–DRC Site",
  description:
    "Analysis of the Rwanda–DRC conflict, key actors, chapters, and reference materials.",
  images: ["/og-preview.png"]
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