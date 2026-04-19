import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"

export const metadata: Metadata = {
  title: "Rwanda–DRC Nexus",
  description:
    "A structured analysis of the Rwanda–DRC conflict, its history, key actors, regional dynamics, and humanitarian consequences.",
  openGraph: {
    title: "Rwanda–DRC Nexus",
    description:
      "A structured analysis of the Rwanda–DRC conflict, its history, key actors, regional dynamics, and humanitarian consequences.",
    url: "https://rwanda-drc-nexus1.vercel.app/",
    siteName: "Rwanda–DRC Nexus",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Rwanda–DRC Nexus preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda–DRC Nexus",
    description:
      "A structured analysis of the Rwanda–DRC conflict, its history, key actors, regional dynamics, and humanitarian consequences.",
    images: ["/og-preview.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}