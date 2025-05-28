"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Coffee,
  Plus,
  Upload,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  ArrowLeft,
  Camera,
} from "lucide-react"

export default function VendorDashboard() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Arabica Premium Blend",
      price: 125000,
      stock: 50,
      status: "active",
      image: "/placeholder.svg?height=200&width=200",
      sales: 124,
    },
    {
      id: 2,
      name: "Robusta Single Origin",
      price: 95000,
      stock: 30,
      status: "active",
      image: "/placeholder.svg?height=200&width=200",
      sales: 89,
    },
  ])

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    type: "",
    origin: "",
    roastLevel: "",
    image: null as File | null,
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setNewProduct({ ...newProduct, image: file })
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate adding product
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number.parseInt(newProduct.price),
      stock: Number.parseInt(newProduct.stock),
      status: "active" as const,
      image: selectedImage || "/placeholder.svg?height=200&width=200",
      sales: 0,
    }
    setProducts([...products, product])

    // Reset form
    setNewProduct({
      name: "",
      description: "",
      price: "",
      stock: "",
      type: "",
      origin: "",
      roastLevel: "",
      image: null,
    })
    setSelectedImage(null)

    alert("Produk berhasil ditambahkan!")
  }

  const stats = [
    {
      title: "Total Produk",
      value: products.length,
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Total Penjualan",
      value: `Rp ${products.reduce((sum, p) => sum + p.sales * p.price, 0).toLocaleString("id-ID")}`,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Produk Terjual",
      value: products.reduce((sum, p) => sum + p.sales, 0),
      icon: TrendingUp,
      color: "text-amber-600",
    },
    {
      title: "Pelanggan",
      value: "156",
      icon: Users,
      color: "text-purple-600",
    },
  ]

  return (
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
                <span className="text-xl font-bold text-gray-900">Vendor Dashboard</span>
              </div>
            </div>
            <Link href="/products">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Lihat Toko
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat Datang, Kopi Nusantara!</h1>
          <p className="text-gray-600">Kelola produk kopi Anda dan pantau penjualan dari dashboard ini</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Kelola Produk</TabsTrigger>
            <TabsTrigger value="add-product">Tambah Produk</TabsTrigger>
          </TabsList>

          {/* Products Management */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Produk Saya</CardTitle>
                <CardDescription>Kelola semua produk kopi yang Anda jual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-gray-600">
                            Rp {product.price.toLocaleString("id-ID")} • Stok: {product.stock}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={product.status === "active" ? "default" : "secondary"}>
                              {product.status === "active" ? "Aktif" : "Nonaktif"}
                            </Badge>
                            <span className="text-sm text-gray-500">{product.sales} terjual</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Product */}
          <TabsContent value="add-product">
            <Card>
              <CardHeader>
                <CardTitle>Tambah Produk Baru</CardTitle>
                <CardDescription>Tambahkan produk kopi baru ke katalog Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitProduct} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="space-y-4">
                      <Label>Foto Produk</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        {selectedImage ? (
                          <div className="space-y-4">
                            <Image
                              src={selectedImage || "/placeholder.svg"}
                              alt="Preview"
                              width={200}
                              height={200}
                              className="mx-auto rounded-lg object-cover"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("image-upload")?.click()}
                            >
                              <Camera className="h-4 w-4 mr-2" />
                              Ganti Foto
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                            <div>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById("image-upload")?.click()}
                              >
                                Upload Foto
                              </Button>
                              <p className="text-sm text-gray-500 mt-2">PNG, JPG hingga 5MB</p>
                            </div>
                          </div>
                        )}
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nama Produk</Label>
                        <Input
                          id="name"
                          value={newProduct.name}
                          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                          placeholder="Contoh: Arabica Premium Blend"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Deskripsi</Label>
                        <Textarea
                          id="description"
                          value={newProduct.description}
                          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                          placeholder="Deskripsikan kopi Anda..."
                          rows={3}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price">Harga (Rp)</Label>
                          <Input
                            id="price"
                            type="number"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            placeholder="125000"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="stock">Stok</Label>
                          <Input
                            id="stock"
                            type="number"
                            value={newProduct.stock}
                            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                            placeholder="50"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="type">Jenis Kopi</Label>
                        <Select
                          value={newProduct.type}
                          onValueChange={(value) => setNewProduct({ ...newProduct, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih jenis kopi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="arabica">Arabica</SelectItem>
                            <SelectItem value="robusta">Robusta</SelectItem>
                            <SelectItem value="liberica">Liberica</SelectItem>
                            <SelectItem value="specialty">Specialty</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="origin">Asal Daerah</Label>
                        <Input
                          id="origin"
                          value={newProduct.origin}
                          onChange={(e) => setNewProduct({ ...newProduct, origin: e.target.value })}
                          placeholder="Contoh: Aceh Gayo"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="roast">Tingkat Roasting</Label>
                        <Select
                          value={newProduct.roastLevel}
                          onValueChange={(value) => setNewProduct({ ...newProduct, roastLevel: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih tingkat roasting" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light Roast</SelectItem>
                            <SelectItem value="medium">Medium Roast</SelectItem>
                            <SelectItem value="dark">Dark Roast</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button type="button" variant="outline">
                      Batal
                    </Button>
                    <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Tambah Produk
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
