"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu menyelesaikan tugas kuliah Anda? Hubungi kami sekarang untuk konsultasi gratis dan dapatkan
            penawaran terbaik.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">+62 895-0440-7244</p>
                <a
                  href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20layanan%20kalian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Chat Sekarang</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">kelarbro01@gmail.com</p>
                <a href="mailto:kelarbro01@gmail.com">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Kirim Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">@kelarbro_</p>
                <a href="https://instagram.com/kelarbro_" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                    Follow Instagram
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lokasi</h3>
                    <p className="text-gray-600">Kota Bengkulu, Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Jam Operasional</h3>
                    <p className="text-gray-600">24/7 Online Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
            <p className="text-blue-100 mb-6">
              Hubungi kami langsung melalui WhatsApp untuk respon yang lebih cepat dan konsultasi gratis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20butuh%20bantuan%20untuk%20tugas%20kuliah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg w-full sm:w-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Chat WhatsApp Sekarang
                </Button>
              </a>
              <a href="https://instagram.com/kelarbro_" target="_blank" rel="noopener noreferrer">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg w-full sm:w-auto">
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
