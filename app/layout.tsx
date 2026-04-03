import type { Metadata } from "next"
import "./globals.css"
import SiteHeader from "@/app/components/SiteHeader"

export const metadata: Metadata = {
  title: "Rwanda–DRC Site",
  description:
    "Analysis of the Rwanda–DRC conflict, key actors, chapters, and reference materials."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}