"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Heart, Star } from "lucide-react"

export function RetailExample() {
  const products = [
    { name: "Summer Dress", price: "Rs 1,200", image: "summer dress", rating: 5 },
    { name: "Casual Shirt", price: "Rs 800", image: "casual shirt", rating: 4 },
    { name: "Denim Jeans", price: "Rs 1,500", image: "denim jeans", rating: 5 },
    { name: "Sneakers", price: "Rs 2,000", image: "sneakers", rating: 4 },
    { name: "Handbag", price: "Rs 1,800", image: "handbag", rating: 5 },
    { name: "Sunglasses", price: "Rs 600", image: "sunglasses", rating: 4 },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Island Boutique</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#new" className="hover:text-gray-300 transition-colors">
              New Arrivals
            </a>
            <a href="#products" className="hover:text-gray-300 transition-colors">
              Shop
            </a>
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Cart (0)
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-center px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="relative z-10 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">New Collection</h2>
          <p className="text-xl md:text-2xl mb-8">Discover the latest trends in fashion</p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.name} className="group hover:shadow-xl transition-all overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={`/.jpg?height=400&width=400&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-600" />
                  </button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Island Boutique</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Your destination for trendy and affordable fashion in Mauritius. We curate the latest styles to help you
            express your unique personality.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Visit our store or shop online for convenient delivery across the island.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Store Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">456 Shopping Street, Curepipe, Mauritius</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Hours:</strong> Mon-Sat: 9AM-6PM
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Phone:</strong> +230 5790 1383
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>WhatsApp:</strong> Order via WhatsApp
                </p>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Order on WhatsApp</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <Button className="w-full bg-gray-900 hover:bg-gray-800">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2025 Island Boutique. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Website by vincedotcode Studio</p>
        </div>
      </footer>
    </div>
  )
}
