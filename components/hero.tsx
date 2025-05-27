import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Users, Clock } from "lucide-react"

export function Hero() {
  const whatsappNumber = "6289504407244"

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Tugas Kuliah <span className="text-blue-600">Kelar</span> Bersama{" "}
                <span className="text-blue-600">Bro!</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Solusi terpercaya untuk semua kebutuhan tugas kuliah mahasiswa Bengkulu. Dikerjakan oleh ahli
                berpengalaman dengan kualitas terjamin dan tepat waktu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20pesan%20jasa%20untuk%20tugas%20kuliah`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 w-full sm:w-auto">
                  Pesan Sekarang
                </Button>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20gratis%20tentang%20layanan%20kalian`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 w-full sm:w-auto"
                >
                  Konsultasi Gratis
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Mahasiswa Puas</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Tingkat Keberhasilan</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Layanan Support</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Rating Pelanggan</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Mengapa Pilih KelarBro?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Dikerjakan oleh ahli berpengalaman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Garansi revisi hingga puas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Pengerjaan tepat waktu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Harga terjangkau untuk mahasiswa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Kerahasiaan data terjamin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Melayani seluruh universitas di Bengkulu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
