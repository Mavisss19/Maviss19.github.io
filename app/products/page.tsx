"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Coffee, Search, Star, Filter, ArrowLeft } from "lucide-react"
import { AuthProvider } from "@/components/providers/auth-provider"
import { CartProvider } from "@/components/providers/cart-provider"
import { useCart } from "@/components/providers/cart-provider"

export default function ProductsPage() {
  const { addItem } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [filterType, setFilterType] = useState("all")

  const products = [
    {
      id: 1,
      name: "Arabica Premium Blend",
      vendor: "Kopi Nusantara",
      price: 125000,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      type: "arabica",
      badge: "Best Seller",
      description: "Kopi arabica premium dengan cita rasa yang kaya dan aroma yang menggoda.",
    },
    {
      id: 2,
      name: "Robusta Single Origin",
      vendor: "Java Coffee Co",
      price: 95000,
      rating: 4.6,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      type: "robusta",
      badge: "New",
      description: "Robusta asli dengan karakteristik kuat dan body yang penuh.",
    },
    {
      id: 3,
      name: "Specialty Luwak Coffee",
      vendor: "Premium Beans",
      price: 350000,
      rating: 4.9,
      reviews: 45,
      image: "/placeholder.svg?height=300&width=300",
      type: "specialty",
      badge: "Premium",
      description: "Kopi luwak eksklusif dengan proses fermentasi alami yang unik.",
    },
    {
      id: 4,
      name: "Toraja Highland",
      vendor: "Sulawesi Coffee",
      price: 180000,
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      type: "arabica",
      badge: "Organic",
      description: "Kopi dari dataran tinggi Toraja dengan cita rasa earthy yang khas.",
    },
    {
      id: 5,
      name: "Aceh Gayo Mountain",
      vendor: "Gayo Highlands",
      price: 145000,
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      type: "arabica",
      badge: "Fair Trade",
      description: "Arabica Gayo dengan keasaman yang seimbang dan aroma floral.",
    },
    {
      id: 6,
      name: "Bali Kintamani",
      vendor: "Bali Coffee Farm",
      price: 135000,
      rating: 4.5,
      reviews: 78,
      image: "/placeholder.svg?height=300&width=300",
      type: "arabica",
      badge: "Local",
      description: "Kopi dari lereng Gunung Batur dengan karakteristik citrusy yang segar.",
    },
  ]

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      vendor: product.vendor,
    })
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || product.type === filterType
    return matchesSearch && matchesType
  })

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          {/* Header */}
          <header className="border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link href="/">
                    <Button variant="ghost" size="sm">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Kembali
                    </Button>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <Coffee className="h-6 w-6 text-amber-600" />
                    <span className="text-xl font-bold text-gray-900">KopiMarket</span>
                  </div>
                </div>
                <Link href="/vendor/dashboard">
                  <Button className="bg-amber-600 hover:bg-amber-700">Jual Kopi</Button>
                </Link>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Katalog Kopi</h1>
              <p className="text-gray-600">Temukan kopi berkualitas tinggi dari seluruh Nusantara</p>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Cari kopi atau vendor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter jenis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Jenis</SelectItem>
                    <SelectItem value="arabica">Arabica</SelectItem>
                    <SelectItem value="robusta">Robusta</SelectItem>
                    <SelectItem value="specialty">Specialty</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Terpopuler</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                    <SelectItem value="newest">Terbaru</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
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
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-t-lg" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-lg">{product.name}</CardTitle>
                    <CardDescription className="mb-3 text-amber-600 font-medium">{product.vendor}</CardDescription>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        Rp {product.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        className="flex-1 bg-amber-600 hover:bg-amber-700"
                        onClick={() => handleAddToCart(product)}
                      >
                        Tambah ke Keranjang
                      </Button>
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" size="icon">
                          <Coffee className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Coffee className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
                <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
              </div>
            )}
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}
