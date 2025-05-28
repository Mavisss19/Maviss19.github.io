"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function EnhancedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Andi Pratama",
      university: "Universitas Bengkulu (UNIB)",
      major: "Teknik Informatika",
      rating: 5,
      text: "KelarBro sangat membantu saya menyelesaikan skripsi tepat waktu. Kualitas penulisan sangat baik dan sesuai dengan standar akademik UNIB. Tim sangat profesional dan responsif. Highly recommended untuk mahasiswa Bengkulu!",
      image: "/placeholder.svg?height=80&width=80",
      project: "Skripsi - Sistem Informasi",
      grade: "A",
    },
    {
      name: "Sari Wulandari",
      university: "Universitas Dehasen Bengkulu",
      major: "Manajemen",
      rating: 5,
      text: "Tugas programming saya dikerjakan dengan sangat profesional. Code bersih, dokumentasi lengkap, dan berfungsi dengan baik. Tim KelarBro sangat memahami kebutuhan mahasiswa IT. Pelayanan 24/7 sangat membantu!",
      image: "/placeholder.svg?height=80&width=80",
      project: "Aplikasi Web E-Commerce",
      grade: "A-",
    },
    {
      name: "Rizki Ramadhan",
      university: "Universitas Muhammadiyah Bengkulu",
      major: "Hukum",
      rating: 5,
      text: "Pelayanan customer service sangat responsif dan ramah. Revisi dilakukan dengan cepat sesuai feedback dosen. Puas banget dengan hasilnya, nilai A untuk makalah saya! Harga juga terjangkau untuk mahasiswa.",
      image: "/placeholder.svg?height=80&width=80",
      project: "Makalah Hukum Pidana",
      grade: "A",
    },
    {
      name: "Maya Anggraini",
      university: "Universitas Prof. Dr. Hazairin, SH",
      major: "Ekonomi",
      rating: 5,
      text: "Harga terjangkau untuk mahasiswa tapi kualitas tidak murahan. Laporan praktikum ekonomi saya dapat nilai A. Akan order lagi pasti untuk tugas-tugas selanjutnya! Tim sangat memahami kebutuhan akademik.",
      image: "/placeholder.svg?height=80&width=80",
      project: "Laporan Praktikum Ekonomi",
      grade: "A",
    },
    {
      name: "Doni Saputra",
      university: "STAIN Curup",
      major: "Pendidikan Agama Islam",
      rating: 5,
      text: "Deadline yang sangat mepet tapi KelarBro bisa handle dengan baik. Hasilnya memuaskan dan sesuai dengan requirement yang diminta. Sangat membantu mahasiswa Curup! Garansi revisi juga sangat membantu.",
      image: "/placeholder.svg?height=80&width=80",
      project: "Makalah Pendidikan Islam",
      grade: "A-",
    },
    {
      name: "Fitri Handayani",
      university: "Politeknik Negeri Bengkulu",
      major: "Teknik Sipil",
      rating: 5,
      text: "Tim KelarBro sangat ahli di bidangnya. Makalah teknik yang dikerjakan mendapat apresiasi dari dosen. Kualitas referensi juga sangat bagus dan up to date. Proses pengerjaan transparan dan komunikatif.",
      image: "/placeholder.svg?height=80&width=80",
      project: "Analisis Struktur Bangunan",
      grade: "A",
    },
  ]

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visibleItems = []
    const totalItems = testimonials.length

    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % totalItems
      visibleItems.push(testimonials[index])
    }

    return visibleItems
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ Testimoni Mahasiswa
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kata Mereka Tentang KelarBro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengar langsung dari mahasiswa universitas di Bengkulu yang telah merasakan layanan KelarBro dan berhasil
            mencapai prestasi akademik yang membanggakan.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          {/* Desktop Testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 relative overflow-hidden ${
                  index === 1 ? "transform -translate-y-4 scale-105" : ""
                }`}
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-blue-100" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.major}</div>
                      <div className="text-xs text-gray-500">{testimonial.university}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      Grade: {testimonial.grade}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonial.text}"</p>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Project:</div>
                    <div className="text-sm font-medium text-gray-900">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Testimonial */}
          <div className="md:hidden">
            <Card className="border-0 shadow-lg bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-blue-100" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonials[activeIndex].major}</div>
                    <div className="text-xs text-gray-500">{testimonials[activeIndex].university}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                    Grade: {testimonials[activeIndex].grade}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonials[activeIndex].text}"</p>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-600 mb-1">Project:</div>
                  <div className="text-sm font-medium text-gray-900">{testimonials[activeIndex].project}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goPrev}
              className="rounded-full border-gray-300 hover:bg-blue-100 hover:border-blue-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-1 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={goNext}
              className="rounded-full border-gray-300 hover:bg-blue-100 hover:border-blue-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bergabung dengan 500+ Mahasiswa Bengkulu yang Puas
            </h3>
            <p className="text-gray-600 mb-8">
              Jangan biarkan tugas kuliah mengganggu aktivitas penting Anda. Percayakan pada KelarBro dan rasakan
              perbedaannya!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Rating Rata-rata</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Mahasiswa Puas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Online</div>
              </div>
            </div>
            <a
              href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ingin%20bergabung%20dan%20menggunakan%20layanan%20kalian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                🚀 Mulai Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
