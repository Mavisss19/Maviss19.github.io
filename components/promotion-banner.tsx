"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, X } from "lucide-react"

export function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const whatsappNumber = "6289504407244"

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 sm:px-6 relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <Clock className="h-4 w-4 animate-pulse" />
          <span className="text-sm">
            <span className="font-bold">Promo Spesial:</span> Diskon 15% untuk pemesanan minggu ini!
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo%20KelarBro,%20saya%20ingin%20mengambil%20promo%20diskon%2015%25`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-white hover:bg-gray-100 text-blue-700 text-xs">
              Dapatkan Sekarang
            </Button>
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close promotion"
            className="text-white/80 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
