"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/providers/auth-provider"
import { Package, Truck, CheckCircle, Clock, ArrowLeft, Star } from "lucide-react"

export default function OrdersPage() {
  const { user } = useAuth()
  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: 140000,
      items: [
        {
          id: "1",
          name: "Arabica Premium Blend",
          vendor: "Kopi Nusantara",
          price: 125000,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      shipping: {
        method: "Regular",
        cost: 15000,
        tracking: "JNE123456789",
      },
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      status: "shipping",
      total: 375000,
      items: [
        {
          id: "2",
          name: "Specialty Luwak Coffee",
          vendor: "Premium Beans",
          price: 350000,
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      shipping: {
        method: "Express",
        cost: 25000,
        tracking: "JNE987654321",
      },
    },
    {
      id: "ORD-003",
      date: "2024-01-22",
      status: "processing",
      total: 270000,
      items: [
        {
          id: "3",
          name: "Robusta Single Origin",
          vendor: "Java Coffee Co",
          price: 95000,
          quantity: 2,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
      shipping: {
        method: "Regular",
        cost: 15000,
        tracking: null,
      },
    },
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="h-4 w-4" />
      case "shipping":
        return <Truck className="h-4 w-4" />
      case "delivered":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "shipping":
        return "bg-blue-100 text-blue-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "processing":
        return "Diproses"
      case "shipping":
        return "Dikirim"
      case "delivered":
        return "Diterima"
      default:
        return "Unknown"
    }
  }

  const filterOrdersByStatus = (status: string) => {
    if (status === "all") return orders
    return orders.filter((order) => order.status === status)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Masuk untuk Melihat Pesanan</h1>
          <p className="text-gray-600 mb-6">Silakan masuk terlebih dahulu untuk melihat riwayat pesanan Anda</p>
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
            <h1 className="text-2xl font-bold text-gray-900">Pesanan Saya</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Semua ({orders.length})</TabsTrigger>
            <TabsTrigger value="processing">Diproses ({filterOrdersByStatus("processing").length})</TabsTrigger>
            <TabsTrigger value="shipping">Dikirim ({filterOrdersByStatus("shipping").length})</TabsTrigger>
            <TabsTrigger value="delivered">Diterima ({filterOrdersByStatus("delivered").length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <OrdersList orders={orders} />
          </TabsContent>
          <TabsContent value="processing">
            <OrdersList orders={filterOrdersByStatus("processing")} />
          </TabsContent>
          <TabsContent value="shipping">
            <OrdersList orders={filterOrdersByStatus("shipping")} />
          </TabsContent>
          <TabsContent value="delivered">
            <OrdersList orders={filterOrdersByStatus("delivered")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  function OrdersList({ orders }: { orders: any[] }) {
    if (orders.length === 0) {
      return (
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Tidak Ada Pesanan</h2>
          <p className="text-gray-600 mb-6">Belum ada pesanan dalam kategori ini</p>
          <Link href="/products">
            <Button className="bg-amber-600 hover:bg-amber-700">Mulai Belanja</Button>
          </Link>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription>{new Date(order.date).toLocaleDateString("id-ID")}</CardDescription>
                </div>
                <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                  {getStatusIcon(order.status)}
                  <span>{getStatusText(order.status)}</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                {order.items.map((item: any) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.vendor}</p>
                      <p className="text-sm">
                        {item.quantity}x Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Subtotal</span>
                  <span>Rp {(order.total - order.shipping.cost).toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Ongkos Kirim ({order.shipping.method})</span>
                  <span>Rp {order.shipping.cost.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-amber-600">Rp {order.total.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4">
                <div>
                  {order.shipping.tracking && (
                    <p className="text-sm text-gray-600">
                      Tracking: <span className="font-mono">{order.shipping.tracking}</span>
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  {order.status === "delivered" && (
                    <Button variant="outline" size="sm">
                      <Star className="h-4 w-4 mr-1" />
                      Beri Ulasan
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    Detail Pesanan
                  </Button>
                  {order.status === "processing" && (
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Batalkan
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
}
