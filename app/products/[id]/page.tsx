"use client"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/providers/cart-provider"
import { useAuth } from "@/components/providers/auth-provider"
import {
  Coffee,
  Star,
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  MapPin,
  Award,
  Truck,
  Shield,
  MessageCircle,
} from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const { user } = useAuth()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" })

  // Mock product data
  const product = {
    id: params.id,
    name: "Arabica Premium Blend",
    vendor: "Kopi Nusantara",
    price: 125000,
    originalPrice: 150000,
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    sold: 1250,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    description:
      "Kopi arabica premium dengan cita rasa yang kaya dan aroma yang menggoda. Dipetik langsung dari kebun kopi terbaik di dataran tinggi Aceh Gayo dengan ketinggian 1200-1500 mdpl.",
    specifications: {
      origin: "Aceh Gayo",
      altitude: "1200-1500 mdpl",
      process: "Washed",
      roastLevel: "Medium",
      flavor: "Chocolate, Caramel, Citrus",
      acidity: "Medium",
      body: "Full",
    },
    badges: ["Best Seller", "Organic", "Fair Trade"],
    vendorInfo: {
      name: "Kopi Nusantara",
      rating: 4.9,
      location: "Aceh Gayo",
      established: "2015",
      products: 25,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  }

  const reviews = [
    {
      id: 1,
      user: "Ahmad Rizki",
      rating: 5,
      date: "2024-01-15",
      comment:
        "Kopi yang luar biasa! Aromanya sangat harum dan rasanya balance antara manis dan asam. Pasti akan order lagi.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      user: "Sari Dewi",
      rating: 4,
      date: "2024-01-10",
      comment: "Kualitas bagus, packaging rapi. Cocok untuk yang suka kopi dengan body medium.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        vendor: product.vendor,
      })
    }
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle review submission
    console.log("Review submitted:", newReview)
    setNewReview({ rating: 5, comment: "" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/products">
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
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-amber-600" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} className="bg-amber-600">
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-amber-600 font-medium mb-4">{product.vendor}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviewCount} ulasan)</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{product.sold} terjual</span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">Rp {product.price.toLocaleString("id-ID")}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </Button>
                </div>
                <span className="text-gray-600">Stok: {product.stock}</span>
              </div>

              <div className="flex space-x-4 mb-6">
                <Button className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Tambah ke Keranjang
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-600 border-red-600" : ""}
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2 p-3 bg-gray-50 rounded-lg">
                  <Truck className="h-6 w-6 text-amber-600" />
                  <span className="text-sm font-medium">Gratis Ongkir</span>
                  <span className="text-xs text-gray-600">Min. Rp 100k</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-3 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-amber-600" />
                  <span className="text-sm font-medium">Garansi Kualitas</span>
                  <span className="text-xs text-gray-600">100% Original</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-3 bg-gray-50 rounded-lg">
                  <Award className="h-6 w-6 text-amber-600" />
                  <span className="text-sm font-medium">Sertifikat</span>
                  <span className="text-xs text-gray-600">Organic & Fair Trade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Deskripsi</TabsTrigger>
            <TabsTrigger value="specifications">Spesifikasi</TabsTrigger>
            <TabsTrigger value="reviews">Ulasan ({product.reviewCount})</TabsTrigger>
            <TabsTrigger value="vendor">Vendor</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tentang Produk</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <p className="text-gray-600 leading-relaxed">
                  Kopi ini diproses dengan metode washed yang menghasilkan cita rasa yang bersih dan bright. Dengan
                  notes chocolate, caramel, dan citrus yang seimbang, cocok untuk berbagai metode brewing mulai dari
                  espresso hingga pour over.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Spesifikasi Produk</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Review Summary */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-amber-600">{product.rating}</div>
                      <div className="flex items-center justify-center space-x-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{product.reviewCount} ulasan</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2 mb-1">
                          <span className="text-sm w-8">{rating}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{
                                width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 8 : rating === 2 ? 2 : 0}%`,
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {rating === 5 ? 87 : rating === 4 ? 25 : rating === 3 ? 10 : rating === 2 ? 2 : 0}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Add Review */}
              {user && (
                <Card>
                  <CardHeader>
                    <CardTitle>Tulis Ulasan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Rating</Label>
                        <div className="flex items-center space-x-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({ ...newReview, rating: star })}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="comment">Komentar</Label>
                        <Textarea
                          id="comment"
                          value={newReview.comment}
                          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                          placeholder="Bagikan pengalaman Anda dengan produk ini..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                        Kirim Ulasan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{review.user}</h4>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vendor" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={product.vendorInfo.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{product.vendorInfo.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{product.vendorInfo.name}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.vendorInfo.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{product.vendorInfo.location}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-lg font-semibold">{product.vendorInfo.established}</div>
                        <div className="text-sm text-gray-600">Tahun Berdiri</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{product.vendorInfo.products}</div>
                        <div className="text-sm text-gray-600">Produk</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">4.9</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat Vendor
                      </Button>
                      <Link href={`/vendors/${product.vendorInfo.name}`}>
                        <Button variant="outline">Lihat Toko</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
