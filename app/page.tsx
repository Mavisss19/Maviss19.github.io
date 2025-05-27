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

export const metadata: Metadata = {
  title: "KelarBro - Joki Tugas Kuliah Terpercaya",
  description:
    "Solusi terpercaya untuk semua kebutuhan tugas kuliah Anda. Dikerjakan oleh ahli berpengalaman dengan kualitas terjamin dan tepat waktu.",
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
    </div>
  )
}
