"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/providers/cart-provider"
import { useAuth } from "@/components/providers/auth-provider"
import { Heart, Star, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"

export default function WishlistPage() {
  const { addItem } = useCart()
  const { user } = useAuth()
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Arabica Premium Blend",
      vendor: "Kopi Nusantara",
      price: 125000,
      originalPrice: 150000,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Best Seller",
    },
    {
      id: "2",
      name: "Specialty Luwak Coffee",
      vendor: "Premium Beans",
      price: 350000,
      rating: 4.9,
      reviews: 45,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Premium",
    },
  ])

  const removeFromWishlist = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      vendor: item.vendor,
    })
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Masuk untuk Melihat Wishlist</h1>
          <p className="text-gray-600 mb-6">Silakan masuk terlebih dahulu untuk melihat produk favorit Anda</p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Wishlist Saya</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Wishlist Kosong</h2>
            <p className="text-gray-600 mb-6">Belum ada produk yang ditambahkan ke wishlist</p>
            <Link href="/products">
              <Button className="bg-amber-600 hover:bg-amber-700">Jelajahi Produk</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">{wishlistItems.length} produk dalam wishlist</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 left-3 bg-amber-600">{item.badge}</Badge>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white text-red-600 hover:text-red-700"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 text-lg">{item.name}</CardTitle>
                    <CardDescription className="mb-3 text-amber-600 font-medium">{item.vendor}</CardDescription>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-sm text-gray-500">({item.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-lg font-bold text-gray-900">Rp {item.price.toLocaleString("id-ID")}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          Rp {item.originalPrice.toLocaleString("id-ID")}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={() => handleAddToCart(item)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Tambah ke Keranjang
                      </Button>
                      <Link href={`/products/${item.id}`}>
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
