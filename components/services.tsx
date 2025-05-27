import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Code,
  FileText,
  PresentationIcon as PresentationChart,
  Microscope,
  Palette,
  ArrowRight,
} from "lucide-react"

export function Services() {
  const whatsappNumber = "6289504407244"

  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Essay & Makalah",
      description: "Penulisan essay, makalah, dan karya tulis ilmiah dengan referensi lengkap dan berkualitas tinggi.",
      features: ["Referensi terpercaya", "Plagiarism free", "Format APA/MLA"],
      price: "Mulai 50K",
      whatsappText: "Halo%20KelarBro,%20saya%20butuh%20bantuan%20untuk%20essay%20dan%20makalah",
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: "Jasa Ketik & Desain",
      description: "Layanan pengetikan dokumen, desain grafis, pembuatan poster, banner, dan materi visual lainnya.",
      features: ["Desain profesional", "Revisi unlimited", "File HD"],
      price: "Mulai 25K",
      whatsappText: "Halo%20KelarBro,%20saya%20butuh%20jasa%20ketik%20dan%20desain",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Programming",
      description: "Pembuatan program, aplikasi, website, dan tugas coding dalam berbagai bahasa pemrograman.",
      features: ["Clean code", "Dokumentasi lengkap", "Testing included"],
      price: "Mulai 100K",
      whatsappText: "Halo%20KelarBro,%20saya%20butuh%20bantuan%20programming",
    },
    {
      icon: <PresentationChart className="h-8 w-8 text-blue-600" />,
      title: "Presentasi",
      description: "Pembuatan slide presentasi yang menarik dan profesional untuk berbagai keperluan.",
      features: ["Template modern", "Animasi menarik", "Speaker notes"],
      price: "Mulai 75K",
      whatsappText: "Halo%20KelarBro,%20saya%20butuh%20bantuan%20presentasi",
    },
    {
      icon: <Microscope className="h-8 w-8 text-blue-600" />,
      title: "Laporan Praktikum",
      description: "Penyusunan laporan praktikum lengkap dengan analisis data dan pembahasan mendalam.",
      features: ["Analisis data", "Grafik & tabel", "Kesimpulan akurat"],
      price: "Mulai 60K",
      whatsappText: "Halo%20KelarBro,%20saya%20butuh%20bantuan%20laporan%20praktikum",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Skripsi & Thesis",
      description: "Bantuan penyusunan skripsi, thesis, dan penelitian akademik dengan metodologi yang tepat.",
      features: ["Bimbingan intensif", "Metodologi tepat", "Garansi lulus"],
      price: "Mulai 500K",
      whatsappText: "Halo%20KelarBro,%20saya%20butuh%20bantuan%20skripsi",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎓 Layanan Terlengkap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan untuk membantu menyelesaikan tugas kuliah Anda dengan kualitas terbaik dan
            tepat waktu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="relative z-10">
                <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <div className="text-lg font-bold text-blue-600">{service.price}</div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed mb-4">{service.description}</CardDescription>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${service.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                    Pesan Sekarang
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Tidak Menemukan Layanan yang Anda Cari?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Kami melayani hampir semua jenis tugas kuliah. Konsultasikan kebutuhan Anda dengan tim ahli kami secara
              gratis!
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20layanan%20khusus`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 shadow-lg">
                💬 Konsultasi Gratis Sekarang
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
