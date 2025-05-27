import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KelarBro - Joki Tugas Kuliah Terpercaya di Bengkulu",
  description:
    "Solusi terpercaya untuk semua kebutuhan tugas kuliah mahasiswa Bengkulu. Dikerjakan oleh ahli berpengalaman dengan kualitas terjamin dan tepat waktu. Melayani UNIB, Dehasen, UMB, dan universitas lainnya.",
  keywords: "joki tugas, tugas kuliah, essay, makalah, programming, skripsi, bengkulu, UNIB, universitas bengkulu",
  authors: [{ name: "KelarBro Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "KelarBro - Joki Tugas Kuliah Terpercaya di Bengkulu",
    description: "Solusi terpercaya untuk semua kebutuhan tugas kuliah mahasiswa Bengkulu",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/kelarbro-logo.webp" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
