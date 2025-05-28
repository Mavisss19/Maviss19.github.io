"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const testimonials = [
    {
      name: "Andi Pratama",
      university: "Universitas Bengkulu (UNIB)",
      rating: 5,
      text: "KelarBro sangat membantu saya menyelesaikan skripsi tepat waktu. Kualitas penulisan sangat baik dan sesuai dengan standar akademik UNIB. Highly recommended untuk mahasiswa Bengkulu!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sari Wulandari",
      university: "Universitas Dehasen Bengkulu",
      rating: 5,
      text: "Tugas programming saya dikerjakan dengan sangat profesional. Code bersih, dokumentasi lengkap, dan berfungsi dengan baik. Tim KelarBro sangat memahami kebutuhan mahasiswa IT.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rizki Ramadhan",
      university: "Universitas Muhammadiyah Bengkulu",
      rating: 5,
      text: "Pelayanan customer service sangat responsif dan ramah. Revisi dilakukan dengan cepat sesuai feedback dosen. Puas banget dengan hasilnya, nilai A untuk makalah saya!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Maya Anggraini",
      university: "Universitas Prof. Dr. Hazairin, SH",
      rating: 5,
      text: "Harga terjangkau untuk mahasiswa tapi kualitas tidak murahan. Laporan praktikum hukum saya dapat nilai A. Akan order lagi pasti untuk tugas-tugas selanjutnya!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Doni Saputra",
      university: "STAIN Curup",
      rating: 5,
      text: "Deadline yang sangat mepet tapi KelarBro bisa handle dengan baik. Hasilnya memuaskan dan sesuai dengan requirement yang diminta. Sangat membantu mahasiswa Curup!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Fitri Handayani",
      university: "Politeknik Negeri Bengkulu",
      rating: 5,
      text: "Tim KelarBro sangat ahli di bidangnya. Makalah teknik yang dikerjakan mendapat apresiasi dari dosen. Kualitas referensi juga sangat bagus dan up to date.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Handle autoplay of testimonials
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && inView) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, inView, testimonials.length])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  // Get visible testimonials (3 on desktop, 1 on mobile)
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
    <section id="testimonials" className="py-20 bg-blue-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Mahasiswa Bengkulu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengar langsung dari mahasiswa universitas di Bengkulu yang telah merasakan layanan KelarBro dan berhasil
            mencapai prestasi akademik yang membanggakan.
          </p>
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-aos="fade-up">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-500 ${
                  index === 0
                    ? "transform translate-y-0"
                    : index === 1
                      ? "transform -translate-y-4"
                      : "transform translate-y-0"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-blue-100">
                      {/* Placeholder for user image */}
                      <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.university}</div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Testimonial */}
          <div className="md:hidden">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-blue-100">
                    {/* Placeholder for user image */}
                    <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold text-xl">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonials[activeIndex].university}</div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonials[activeIndex].text}"</p>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
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

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bergabung dengan 500+ Mahasiswa Bengkulu yang Puas
            </h3>
            <p className="text-gray-600 mb-6">
              Jangan biarkan tugas kuliah mengganggu aktivitas penting Anda. Percayakan pada KelarBro dan rasakan
              perbedaannya!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 mb-6">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">Rating Rata-rata</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Mahasiswa Puas</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
            </div>
            <a
              href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ingin%20bergabung%20dan%20menggunakan%20layanan%20kalian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Mulai Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
