"use client"

import type React from "react"
import { useEffect } from "react"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import AOS to avoid SSR issues
    const initAOS = async () => {
      const AOS = (await import("aos")).default
      await import("aos/dist/aos.css")

      // Initialize AOS
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
        offset: 100,
        delay: 100,
      })
    }

    initAOS()
  }, [])

  return <>{children}</>
}
