import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "KelarBro - Joki Tugas Kuliah Terpercaya #1 di Bengkulu | Essay, Skripsi, Programming",
  description:
    "🎓 Jasa tugas kuliah terpercaya di Bengkulu! ✅ Essay, Makalah, Programming, Skripsi ✅ Garansi revisi ✅ Tepat waktu ✅ Harga mahasiswa ✅ COD tersedia. Melayani UNIB, Dehasen, UMB, STAIN Curup.",
  keywords:
    "joki tugas kuliah bengkulu, jasa essay bengkulu, jasa skripsi UNIB, tugas kuliah dehasen, programming bengkulu, makalah UMB, jasa ketik bengkulu, COD bengkulu",
  authors: [{ name: "KelarBro Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "KelarBro - Joki Tugas Kuliah Terpercaya #1 di Bengkulu",
    description:
      "Jasa tugas kuliah terpercaya di Bengkulu dengan garansi revisi dan tepat waktu. Melayani semua universitas.",
    type: "website",
    locale: "id_ID",
    siteName: "KelarBro",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kelarbro.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
