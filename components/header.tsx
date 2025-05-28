"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Tentang", href: "#about" },
    { name: "Harga", href: "#pricing" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
  ]

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3">
              <Image
                src="/images/kelarbro-logo.webp"
                alt="KelarBro Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold text-blue-900">
                Kelar<span className="text-blue-600">Bro</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-700"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20layanan%20kalian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`shadow-md hover:shadow-lg transition-all duration-300 ${
                  scrolled ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-700 hover:bg-blue-800"
                }`}
              >
                Konsultasi Gratis
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/6289504407244?text=Halo%20KelarBro,%20saya%20ingin%20konsultasi%20tentang%20layanan%20kalian"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Konsultasi Gratis</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
