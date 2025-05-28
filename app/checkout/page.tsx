"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/providers/cart-provider"
import { useAuth } from "@/components/providers/auth-provider"
import { ArrowLeft, CreditCard, Truck, MapPin, Clock } from "lucide-react"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const { user } = useAuth()
  const [shippingInfo, setShippingInfo] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer")
  const [shippingMethod, setShippingMethod] = useState("regular")
  const [isProcessing, setIsProcessing] = useState(false)

  const shippingCost = shippingMethod === "express" ? 25000 : 15000
  const finalTotal = total + shippingCost

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Pesanan berhasil dibuat! Anda akan diarahkan ke halaman pembayaran.")
    clearCart()
    setIsProcessing(false)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Keranjang Kosong</h1>
          <p className="text-gray-600 mb-6">Silakan tambahkan produk ke keranjang terlebih dahulu</p>
          <Link href="/products">
            <Button className="bg-amber-600 hover:bg-amber-700">Mulai Belanja</Button>
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
            <Link href="/products">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Informasi Pengiriman</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      value={shippingInfo.name}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Textarea
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    rows={3}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Kota</Label>
                    <Select
                      value={shippingInfo.city}
                      onValueChange={(value) => setShippingInfo({ ...shippingInfo, city: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kota" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jakarta">Jakarta</SelectItem>
                        <SelectItem value="bandung">Bandung</SelectItem>
                        <SelectItem value="surabaya">Surabaya</SelectItem>
                        <SelectItem value="medan">Medan</SelectItem>
                        <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Kode Pos</Label>
                    <Input
                      id="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">Catatan (Opsional)</Label>
                  <Textarea
                    id="notes"
                    value={shippingInfo.notes}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, notes: e.target.value })}
                    placeholder="Catatan untuk kurir atau penjual..."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5" />
                  <span>Metode Pengiriman</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="regular" id="regular" />
                    <div className="flex-1">
                      <Label htmlFor="regular" className="font-medium">
                        Reguler (3-5 hari)
                      </Label>
                      <p className="text-sm text-gray-600">Pengiriman standar</p>
                    </div>
                    <span className="font-semibold">Rp 15.000</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="express" id="express" />
                    <div className="flex-1">
                      <Label htmlFor="express" className="font-medium">
                        Express (1-2 hari)
                      </Label>
                      <p className="text-sm text-gray-600">Pengiriman cepat</p>
                    </div>
                    <span className="font-semibold">Rp 25.000</span>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Metode Pembayaran</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                    <div className="flex-1">
                      <Label htmlFor="bank_transfer" className="font-medium">
                        Transfer Bank
                      </Label>
                      <p className="text-sm text-gray-600">BCA, Mandiri, BNI, BRI</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="e_wallet" id="e_wallet" />
                    <div className="flex-1">
                      <Label htmlFor="e_wallet" className="font-medium">
                        E-Wallet
                      </Label>
                      <p className="text-sm text-gray-600">GoPay, OVO, DANA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="credit_card" id="credit_card" />
                    <div className="flex-1">
                      <Label htmlFor="credit_card" className="font-medium">
                        Kartu Kredit
                      </Label>
                      <p className="text-sm text-gray-600">Visa, Mastercard</p>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.vendor}</p>
                      <p className="text-sm font-semibold">
                        {item.quantity}x Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rp {total.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkos Kirim</span>
                    <span>Rp {shippingCost.toLocaleString("id-ID")}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-amber-600">Rp {finalTotal.toLocaleString("id-ID")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Estimasi pengiriman: 3-5 hari kerja</span>
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isProcessing}>
                  {isProcessing ? "Memproses..." : `Bayar Rp ${finalTotal.toLocaleString("id-ID")}`}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
                </p>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}
