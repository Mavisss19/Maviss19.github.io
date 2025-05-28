"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals with error handling
    const reportWebVitals = (metric: any) => {
      // You can send this data to analytics service
      console.log("Web Vital:", metric)
    }

    // Lazy load performance monitoring with proper error handling
    if (typeof window !== "undefined") {
      // Use a more robust approach for web-vitals
      const loadWebVitals = async () => {
        try {
          // Check if web-vitals is available
          const webVitals = await import("web-vitals").catch(() => null)

          if (webVitals) {
            const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals

            // Only call functions if they exist
            if (typeof getCLS === "function") getCLS(reportWebVitals)
            if (typeof getFID === "function") getFID(reportWebVitals)
            if (typeof getFCP === "function") getFCP(reportWebVitals)
            if (typeof getLCP === "function") getLCP(reportWebVitals)
            if (typeof getTTFB === "function") getTTFB(reportWebVitals)
          } else {
            // Fallback: Basic performance monitoring
            console.log("Web Vitals not available, using basic performance monitoring")

            // Basic performance metrics
            if (window.performance && window.performance.timing) {
              const timing = window.performance.timing
              const loadTime = timing.loadEventEnd - timing.navigationStart
              console.log("Page Load Time:", loadTime + "ms")
            }
          }
        } catch (error) {
          console.log("Performance monitoring error:", error)
          // Silently fail - don't break the app
        }
      }

      loadWebVitals()
    }
  }, [])

  return null
}
