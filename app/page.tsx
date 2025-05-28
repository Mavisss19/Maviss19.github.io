import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Star, Users, Upload, TrendingUp } from "lucide-react"
import { CartButton } from "@/components/ui/cart-button"
import { UserMenu } from "@/components/ui/user-menu"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Arabica Premium Blend",
      vendor: "Kopi Nusantara",
      price: 125000,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Robusta Single Origin",
      vendor: "Java Coffee Co",
      price: 95000,
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
    },
    {
      id: 3,
      name: "Specialty Luwak Coffee",
      vendor: "Premium Beans",
      price: 350000,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Premium",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">KopiMarket</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/products" className="text-gray-600 hover:text-amber-600 transition-colors">
                Produk
              </Link>
              <Link href="/vendors" className="text-gray-600 hover:text-amber-600 transition-colors">
                Vendor
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-amber-600 transition-colors">
                Tentang
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <CartButton />
              <UserMenu />
              <Link href="/vendor/dashboard">
                <Button variant="outline" className="hidden sm:flex">
                  <Upload className="h-4 w-4 mr-2" />
                  Jual Kopi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Marketplace Kopi
            <span className="text-amber-600"> Terbaik</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan kopi berkualitas tinggi dari seluruh Nusantara. Dari petani langsung ke cangkir Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                Jelajahi Kopi
              </Button>
            </Link>
            <Link href="/vendor/dashboard">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Mulai Berjualan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Varietas Kopi</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Vendor Terpercaya</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-amber-100 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600">Pelanggan Puas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kopi Pilihan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Koleksi kopi terbaik dari vendor-vendor pilihan kami</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-amber-600">{product.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-3">{product.vendor}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-amber-600">Rp {product.price.toLocaleString("id-ID")}</span>
                  </div>
                  <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Tambah ke Keranjang</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg">
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Mulai Berjualan Kopi Anda</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ratusan vendor yang telah mempercayai platform kami untuk menjual kopi berkualitas
            tinggi.
          </p>
          <Link href="/vendor/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Daftar Sebagai Vendor
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-6 w-6 text-amber-600" />
                <span className="text-xl font-bold">KopiMarket</span>
              </div>
              <p className="text-gray-400">
                Marketplace kopi terpercaya yang menghubungkan petani dengan pecinta kopi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    Semua Kopi
                  </Link>
                </li>
                <li>
                  <Link href="/products?type=arabica" className="hover:text-white">
                    Arabica
                  </Link>
                </li>
                <li>
                  <Link href="/products?type=robusta" className="hover:text-white">
                    Robusta
                  </Link>
                </li>
                <li>
                  <Link href="/products?type=specialty" className="hover:text-white">
                    Specialty
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Vendor</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/vendor/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/register" className="hover:text-white">
                    Daftar Vendor
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/guide" className="hover:text-white">
                    Panduan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Bantuan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KopiMarket. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
