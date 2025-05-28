import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Users, Clock, Shield, Award } from "lucide-react"

export function EnhancedHero() {
  const whatsappNumber = "6289504407244"

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="h-4 w-4 mr-2" />
                #1 Jasa Tugas Kuliah di Bengkulu
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Tugas Kuliah{" "}
                <span className="text-blue-600 relative">
                  Kelar
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10 rounded"></div>
                </span>{" "}
                Bersama{" "}
                <span className="text-blue-600 relative">
                  Bro!
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10 rounded"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Solusi terpercaya untuk semua kebutuhan tugas kuliah mahasiswa Bengkulu. Dikerjakan oleh ahli
                berpengalaman dengan <span className="font-semibold text-blue-600">kualitas terjamin</span> dan{" "}
                <span className="font-semibold text-blue-600">tepat waktu</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20pesan%20jasa%20untuk%20tugas%20kuliah`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🚀 Pesan Sekarang
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
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💬 Konsultasi Gratis
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">100% Aman & Terpercaya</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Garansi Revisi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Tepat Waktu</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Mahasiswa Puas</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Tingkat Keberhasilan</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Layanan Support</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Rating Pelanggan</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative z-10">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white mb-6">
                <h3 className="text-2xl font-bold mb-4">🎯 Mengapa Pilih KelarBro?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>Dikerjakan oleh ahli berpengalaman</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>Garansi revisi hingga puas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>Pengerjaan tepat waktu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>Harga terjangkau untuk mahasiswa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>Kerahasiaan data terjamin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span>Melayani seluruh universitas di Bengkulu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
              ⭐ Terpercaya
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
              ✅ Garansi 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
