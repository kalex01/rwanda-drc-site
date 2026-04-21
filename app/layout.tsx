import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import SiteHeader from "@/app/components/SiteHeader"
import SiteFooter from "@/app/components/SiteFooter"

const siteTitle = "Rwanda–DRC Site"
const siteDescription =
  "A structured analysis of the Rwanda–DRC conflict, its history, key actors, regional dynamics, and humanitarian consequences."

export const metadata: Metadata = {
  metadataBase: new URL("https://rwanda-drc-project1.vercel.app"),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Rwanda–DRC Site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-preview.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}