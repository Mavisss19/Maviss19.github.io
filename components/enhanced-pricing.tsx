import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, CreditCard, Banknote, Zap, Crown, Shield } from "lucide-react"

export function EnhancedPricing() {
  const whatsappNumber = "6289504407244"

  const packages = [
    {
      name: "Basic",
      price: "Mulai 50K",
      originalPrice: "75K",
      description: "Cocok untuk tugas-tugas sederhana",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Essay hingga 1000 kata",
        "Revisi 1x",
        "Pengerjaan 3-5 hari",
        "Format standar",
        "Support via chat",
        "Referensi dasar",
      ],
      popular: false,
      savings: "33%",
      whatsappText: "Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20Basic.%20Bisa%20info%20lebih%20lanjut?",
    },
    {
      name: "Standard",
      price: "Contact for Information",
      originalPrice: "",
      description: "Pilihan terpopuler untuk mahasiswa",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Essay hingga 2500 kata",
        "Revisi 3x",
        "Pengerjaan 2-4 hari",
        "Format sesuai permintaan",
        "Support prioritas",
        "Referensi lengkap",
        "Konsultasi gratis",
        "Garansi kualitas",
      ],
      popular: true,
      savings: "",
      whatsappText:
        "Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20Standard.%20Bisa%20info%20harga%20dan%20detailnya?",
    },
    {
      name: "Premium",
      price: "Contact for Information",
      originalPrice: "",
      description: "Untuk tugas kompleks dan mendesak",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Essay unlimited kata",
        "Revisi unlimited",
        "Pengerjaan 1-2 hari",
        "Format premium",
        "Support 24/7",
        "Referensi premium",
        "Konsultasi langsung",
        "Express delivery",
        "Quality assurance",
      ],
      popular: false,
      savings: "",
      whatsappText:
        "Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20Premium.%20Bisa%20info%20harga%20dan%20detailnya?",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 Harga Terjangkau
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Harga Terbaik</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk garansi kualitas dan
            kepuasan pelanggan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? "border-2 border-blue-600 shadow-xl scale-105 bg-gradient-to-b from-blue-50 to-white"
                  : "border border-gray-200 hover:border-blue-300"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <Star className="h-4 w-4" />
                    <span>Terpopuler</span>
                  </div>
                </div>
              )}

              {pkg.savings && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Hemat {pkg.savings}
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      pkg.popular ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {pkg.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                <div className="mt-4">
                  {pkg.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">{pkg.originalPrice}</div>
                  )}
                  <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                  {pkg.name === "Basic" && <span className="text-gray-600">/tugas</span>}
                </div>
                <CardDescription className="mt-2 text-gray-600">{pkg.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${pkg.whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full transition-all duration-300 ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    {pkg.popular ? "🚀 Pilih Terpopuler" : "Pilih Paket"}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Metode Pembayaran Fleksibel</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Transfer Bank & E-Wallet</div>
                  <div className="text-sm text-gray-600">BCA, Mandiri, OVO, GoPay, DANA</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                <Banknote className="h-8 w-8 text-green-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">COD (Cash on Delivery)</div>
                  <div className="text-sm text-gray-600">Khusus area Kota Bengkulu</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Package */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <h3 className="text-3xl font-bold">Paket Khusus Skripsi</h3>
            </div>
            <div className="text-5xl font-bold mb-2">Mulai dari Rp 500K</div>
            <p className="text-blue-100 mb-8 text-lg">
              Paket lengkap untuk skripsi dengan bimbingan intensif dan garansi lulus
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
              <div className="bg-blue-700 rounded-xl p-6 hover:bg-blue-600 transition-colors">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Konsultasi Intensif
                </h4>
                <p className="text-sm text-blue-100">Bimbingan dari awal hingga selesai dengan ahli berpengalaman</p>
              </div>
              <div className="bg-blue-700 rounded-xl p-6 hover:bg-blue-600 transition-colors">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Revisi Unlimited
                </h4>
                <p className="text-sm text-blue-100">Revisi sampai dosen approve dan Anda puas dengan hasilnya</p>
              </div>
              <div className="bg-blue-700 rounded-xl p-6 hover:bg-blue-600 transition-colors">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Garansi Lulus
                </h4>
                <p className="text-sm text-blue-100">Jaminan kelulusan sidang atau uang kembali 100%</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20skripsi.%20Bisa%20info%20lebih%20detail?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                📚 Konsultasi Paket Skripsi
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">Butuh paket khusus atau ada pertanyaan tentang harga?</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20paket%20dan%20harga`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💬 Konsultasi Harga Gratis
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
