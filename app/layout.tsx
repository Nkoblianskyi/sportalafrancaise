import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "MEILLEURS SITES DE PARIS SPORTIFS FRANCE | sportalafrancaise.com",
  description:
    "Découvrez notre sélection experte des meilleurs sites de paris sportifs licenciés ANJ en France. Comparaison détaillée des bonus, cotes, sécurité et services.",
  keywords: "paris sportifs, bookmakers France, ANJ, bonus paris, sites de paris",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
