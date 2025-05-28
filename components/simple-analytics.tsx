"use client"

import { useEffect } from "react"

export function SimpleAnalytics() {
  useEffect(() => {
    // Simple page view tracking
    const trackPageView = () => {
      try {
        // Basic page view tracking
        console.log("Page viewed:", window.location.pathname)

        // Track page load time
        if (window.performance && window.performance.timing) {
          const timing = window.performance.timing
          const loadTime = timing.loadEventEnd - timing.navigationStart
          console.log("Page load time:", loadTime + "ms")
        }

        // Track viewport size
        console.log("Viewport:", {
          width: window.innerWidth,
          height: window.innerHeight,
        })

        // Track user agent
        console.log("User Agent:", navigator.userAgent)
      } catch (error) {
        // Silently fail
        console.log("Analytics error:", error)
      }
    }

    // Track on load
    if (document.readyState === "complete") {
      trackPageView()
    } else {
      window.addEventListener("load", trackPageView)
    }

    // Track scroll depth
    let maxScroll = 0
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        console.log("Max scroll depth:", maxScroll + "%")
      }
    }

    window.addEventListener("scroll", trackScroll, { passive: true })

    return () => {
      window.removeEventListener("load", trackPageView)
      window.removeEventListener("scroll", trackScroll)
    }
  }, [])

  return null
}
