import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Andi Pratama",
      university: "Universitas Bengkulu (UNIB)",
      rating: 5,
      text: "KelarBro sangat membantu saya menyelesaikan skripsi tepat waktu. Kualitas penulisan sangat baik dan sesuai dengan standar akademik UNIB. Highly recommended untuk mahasiswa Bengkulu!",
    },
    {
      name: "Sari Wulandari",
      university: "Universitas Dehasen Bengkulu",
      rating: 5,
      text: "Tugas programming saya dikerjakan dengan sangat profesional. Code bersih, dokumentasi lengkap, dan berfungsi dengan baik. Tim KelarBro sangat memahami kebutuhan mahasiswa IT.",
    },
    {
      name: "Rizki Ramadhan",
      university: "Universitas Muhammadiyah Bengkulu",
      rating: 5,
      text: "Pelayanan customer service sangat responsif dan ramah. Revisi dilakukan dengan cepat sesuai feedback dosen. Puas banget dengan hasilnya, nilai A untuk makalah saya!",
    },
    {
      name: "Maya Anggraini",
      university: "Universitas Prof. Dr. Hazairin, SH",
      rating: 5,
      text: "Harga terjangkau untuk mahasiswa tapi kualitas tidak murahan. Laporan praktikum hukum saya dapat nilai A. Akan order lagi pasti untuk tugas-tugas selanjutnya!",
    },
    {
      name: "Doni Saputra",
      university: "STAIN Curup",
      rating: 5,
      text: "Deadline yang sangat mepet tapi KelarBro bisa handle dengan baik. Hasilnya memuaskan dan sesuai dengan requirement yang diminta. Sangat membantu mahasiswa Curup!",
    },
    {
      name: "Fitri Handayani",
      university: "Politeknik Negeri Bengkulu",
      rating: 5,
      text: "Tim KelarBro sangat ahli di bidangnya. Makalah teknik yang dikerjakan mendapat apresiasi dari dosen. Kualitas referensi juga sangat bagus dan up to date.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Mahasiswa Bengkulu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengar langsung dari mahasiswa universitas di Bengkulu yang telah merasakan layanan KelarBro dan berhasil
            mencapai prestasi akademik yang membanggakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.university}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bergabung dengan 500+ Mahasiswa Bengkulu yang Puas
            </h3>
            <p className="text-gray-600 mb-6">
              Jangan biarkan tugas kuliah mengganggu aktivitas penting Anda. Percayakan pada KelarBro dan rasakan
              perbedaannya!
            </p>
            <div className="flex justify-center items-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">Rating Rata-rata</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Mahasiswa Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
            </div>
            <a
              href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ingin%20bergabung%20dan%20menggunakan%20layanan%20kalian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Mulai Sekarang</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
