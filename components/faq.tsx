"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Bagaimana cara memesan layanan KelarBro?",
      answer:
        "Anda bisa memesan melalui website kami dengan mengisi form pemesanan, atau menghubungi customer service melalui WhatsApp. Tim kami akan merespons dalam waktu maksimal 1 jam.",
    },
    {
      question: "Berapa lama waktu pengerjaan tugas?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas tugas dan paket yang dipilih. Untuk tugas standar, biasanya 2-5 hari kerja. Kami juga melayani pengerjaan express untuk deadline mendesak.",
    },
    {
      question: "Apakah ada garansi revisi?",
      answer:
        "Ya, kami memberikan garansi revisi sesuai paket yang dipilih. Paket Basic mendapat 1x revisi, Standard 3x revisi, dan Premium unlimited revisi hingga Anda puas dengan hasilnya.",
    },
    {
      question: "Bagaimana sistem pembayaran?",
      answer:
        "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan virtual account. Pembayaran bisa dilakukan 50% di awal dan 50% setelah tugas selesai. Khusus untuk daerah sekitar Kota Bengkulu, kami juga melayani COD (Cash on Delivery) untuk kemudahan Anda.",
    },
    {
      question: "Apakah data saya aman?",
      answer:
        "Keamanan dan privasi data Anda adalah prioritas utama kami. Semua informasi dijaga kerahasiaan dan tidak akan dibagikan kepada pihak ketiga. Kami juga menerapkan sistem keamanan berlapis.",
    },
    {
      question: "Apa saja mata kuliah yang bisa dibantu?",
      answer:
        "Kami melayani hampir semua mata kuliah dari berbagai jurusan seperti Ekonomi, Hukum, Teknik, Kedokteran, Psikologi, Sastra, dan lainnya. Tim kami terdiri dari ahli di berbagai bidang.",
    },
    {
      question: "Bagaimana jika hasil tidak sesuai ekspektasi?",
      answer:
        "Jika hasil tidak sesuai ekspektasi, Anda bisa mengajukan revisi sesuai kuota paket. Jika masih tidak puas, kami akan mengembalikan 100% uang Anda sesuai kebijakan garansi kami.",
    },
    {
      question: "Apakah bisa konsultasi dulu sebelum order?",
      answer:
        "Tentu saja! Kami menyediakan konsultasi gratis untuk membahas kebutuhan tugas Anda. Tim kami akan memberikan estimasi waktu, harga, dan saran terbaik untuk tugas Anda.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang layanan KelarBro. Jika masih ada yang ingin ditanyakan, jangan
            ragu untuk menghubungi kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`border border-gray-200 transition-all duration-300 ${
                openIndex === index ? "shadow-md" : "hover:border-gray-300"
              }`}
            >
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div
                    className="px-6 pb-6 animate-accordion-down"
                    id={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Masih Ada Pertanyaan?</h3>
            <p className="text-gray-600 mb-6">
              Tim customer service kami siap membantu Anda 24/7 melalui berbagai channel komunikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ada%20pertanyaan%20tentang%20layanan%20kalian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                WhatsApp
              </a>
              <a
                href="mailto:kelarbro01@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
