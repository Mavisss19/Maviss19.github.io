import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, CreditCard, Banknote } from "lucide-react"

export function Pricing() {
  const whatsappNumber = "6289504407244"

  const packages = [
    {
      name: "Basic",
      price: "Mulai 50K",
      description: "Cocok untuk tugas-tugas sederhana",
      features: ["Essay hingga 1000 kata", "Revisi 1x", "Pengerjaan 3-5 hari", "Format standar", "Support via chat"],
      popular: false,
      whatsappText: "Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20Basic.%20Bisa%20info%20lebih%20lanjut?",
    },
    {
      name: "Standard",
      price: "Contact for Information",
      description: "Pilihan terpopuler untuk mahasiswa",
      features: [
        "Essay hingga 2500 kata",
        "Revisi 3x",
        "Pengerjaan 2-4 hari",
        "Format sesuai permintaan",
        "Support prioritas",
        "Referensi lengkap",
      ],
      popular: true,
      whatsappText:
        "Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20Standard.%20Bisa%20info%20harga%20dan%20detailnya?",
    },
    {
      name: "Premium",
      price: "Contact for Information",
      description: "Untuk tugas kompleks dan mendesak",
      features: [
        "Essay unlimited kata",
        "Revisi unlimited",
        "Pengerjaan 1-2 hari",
        "Format premium",
        "Support 24/7",
        "Referensi premium",
        "Konsultasi langsung",
      ],
      popular: false,
      whatsappText:
        "Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20Premium.%20Bisa%20info%20harga%20dan%20detailnya?",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Harga</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk garansi kualitas dan
            kepuasan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.popular ? "border-2 border-blue-600 shadow-xl scale-105" : "border border-gray-200"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Terpopuler</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                  {pkg.name === "Basic" && <span className="text-gray-600">/tugas</span>}
                </div>
                <CardDescription className="mt-2 text-gray-600">{pkg.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
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
                    className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
                    size="lg"
                  >
                    Pilih Paket
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Metode Pembayaran</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <span className="font-medium">Transfer Bank, E-Wallet (OVO, GoPay, DANA)</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white rounded-lg p-4">
                <Banknote className="h-6 w-6 text-green-600" />
                <span className="font-medium">COD (Cash on Delivery) - Area Bengkulu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Paket Khusus Skripsi</h3>
            <div className="text-4xl font-bold mb-2">Mulai dari Rp 500K</div>
            <p className="text-blue-100 mb-6">
              Paket lengkap untuk skripsi dengan bimbingan intensif dan garansi lulus
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left mb-6">
              <div className="bg-blue-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">✓ Konsultasi Intensif</h4>
                <p className="text-sm text-blue-100">Bimbingan dari awal hingga selesai</p>
              </div>
              <div className="bg-blue-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">✓ Revisi Unlimited</h4>
                <p className="text-sm text-blue-100">Revisi sampai dosen approve</p>
              </div>
              <div className="bg-blue-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">✓ Garansi Lulus</h4>
                <p className="text-sm text-blue-100">Jaminan kelulusan sidang</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20tertarik%20dengan%20paket%20skripsi.%20Bisa%20info%20lebih%20detail?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Konsultasi Paket Skripsi
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Butuh paket khusus atau ada pertanyaan tentang harga?</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20paket%20dan%20harga`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Konsultasi Harga
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
