"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <Image
            src="/images/kelarbro-logo.webp"
            alt="KelarBro Logo"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto animate-pulse"
          />
        </div>
        <div className="text-3xl font-bold text-blue-900 mb-4">
          Kelar<span className="text-blue-600">Bro</span>
        </div>
        <div className="text-gray-600 mb-6">Memuat website terbaik untuk tugas kuliah Anda...</div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
