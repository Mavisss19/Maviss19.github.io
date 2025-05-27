import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Clock, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Tim Ahli Berpengalaman",
      description:
        "Dikerjakan oleh lulusan terbaik dari berbagai universitas ternama dengan pengalaman bertahun-tahun.",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Keamanan & Privasi",
      description: "Data dan informasi Anda dijamin aman dengan sistem keamanan berlapis dan kebijakan privasi ketat.",
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Tepat Waktu",
      description: "Komitmen tinggi untuk menyelesaikan tugas sesuai deadline yang telah disepakati bersama.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Support 24/7",
      description: "Tim customer service siap membantu Anda kapan saja melalui berbagai channel komunikasi.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang KelarBro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KelarBro adalah platform terpercaya yang menghubungkan mahasiswa dengan para ahli untuk menyelesaikan
            berbagai tugas kuliah dengan kualitas terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Membantu mahasiswa Indonesia mencapai prestasi akademik terbaik dengan menyediakan layanan bantuan tugas
                yang berkualitas, terpercaya, dan terjangkau.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami percaya bahwa setiap mahasiswa berhak mendapatkan dukungan akademik yang mereka butuhkan untuk
                sukses dalam perjalanan pendidikan mereka.
              </p>
            </div>
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Komitmen Kami</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Kualitas hasil kerja terbaik</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Pelayanan yang ramah dan profesional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Harga yang fair dan transparan</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                  <span>Kepuasan pelanggan adalah prioritas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
