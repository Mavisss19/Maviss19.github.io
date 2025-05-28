"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function OptimizedLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Minimum loading time
    const minLoadTime = setTimeout(() => {
      setProgress(100)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearTimeout(minLoadTime)
    }
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
            priority
          />
        </div>
        <div className="text-3xl font-bold text-blue-900 mb-4">
          Kelar<span className="text-blue-600">Bro</span>
        </div>
        <div className="text-gray-600 mb-6">Memuat website terbaik untuk tugas kuliah Anda...</div>

        {/* Loading Bar */}
        <div className="w-64 h-3 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-500 mt-2">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
