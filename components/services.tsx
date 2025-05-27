import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, FileText, PresentationIcon as PresentationChart, Microscope } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Essay & Makalah",
      description: "Penulisan essay, makalah, dan karya tulis ilmiah dengan referensi lengkap dan berkualitas tinggi.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Jasa Ketik & Desain",
      description: "Layanan pengetikan dokumen, desain grafis, pembuatan poster, banner, dan materi visual lainnya.",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Programming",
      description: "Pembuatan program, aplikasi, website, dan tugas coding dalam berbagai bahasa pemrograman.",
    },
    {
      icon: <PresentationChart className="h-8 w-8 text-blue-600" />,
      title: "Presentasi",
      description: "Pembuatan slide presentasi yang menarik dan profesional untuk berbagai keperluan.",
    },
    {
      icon: <Microscope className="h-8 w-8 text-blue-600" />,
      title: "Laporan Praktikum",
      description: "Penyusunan laporan praktikum lengkap dengan analisis data dan pembahasan mendalam.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Skripsi & Thesis",
      description: "Bantuan penyusunan skripsi, thesis, dan penelitian akademik dengan metodologi yang tepat.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              className="border-2 border-gray-100 hover:border-blue-200 transition-colors duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
