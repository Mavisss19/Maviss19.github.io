import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { EnhancedTestimonials } from "@/components/enhanced-testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AOSProvider } from "@/components/aos-provider"
import { OptimizedLoading } from "@/components/optimized-loading"
import { SimpleAnalytics } from "@/components/simple-analytics"

export const metadata = {
  title: "KelarBro - Joki Tugas Kuliah #1 di Bengkulu | Essay, Skripsi, Programming",
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
    images: [
      {
        url: "/images/kelarbro-og.jpg",
        width: 1200,
        height: 630,
        alt: "KelarBro - Joki Tugas Kuliah Terpercaya",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kelarbro.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
  themeColor: "#1d4ed8",
  manifest: "/manifest.json",
}

export default function Home() {
  return (
    <AOSProvider>
      <div className="min-h-screen bg-white">
        <OptimizedLoading />
        <SimpleAnalytics />
        <Header />
        <Hero />
        <Services />
        <About />
        <Pricing />
        <EnhancedTestimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </AOSProvider>
  )
}
