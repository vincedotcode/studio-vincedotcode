"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export function RestaurantExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-orange-600 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tropical Bites</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="hover:text-orange-200 transition-colors">
              Menu
            </a>
            <a href="#about" className="hover:text-orange-200 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-orange-200 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">Book Table</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20" />
        <img
          src="/tropical-restaurant-interior.jpg"
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="relative z-10 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Authentic Mauritian Cuisine</h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Experience the flavors of paradise</p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            View Menu
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dholl Puri", price: "Rs 50", desc: "Traditional flatbread with yellow split peas" },
              { name: "Chicken Biryani", price: "Rs 250", desc: "Fragrant rice with tender chicken" },
              { name: "Fish Vindaye", price: "Rs 300", desc: "Spicy fish curry with mustard" },
              { name: "Rougaille Saucisse", price: "Rs 200", desc: "Sausage in tomato sauce" },
              { name: "Gateaux Piment", price: "Rs 30", desc: "Spicy lentil fritters" },
              { name: "Alouda", price: "Rs 80", desc: "Sweet milk drink with basil seeds" },
            ].map((item) => (
              <Card key={item.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-orange-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Tropical Bites brings you the authentic taste of Mauritius. Our family recipes have been passed down through
            generations, ensuring every dish is prepared with love and tradition.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Visit us to experience the warmth of Mauritian hospitality and the rich flavors of our island cuisine.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Royal Road, Port Louis, Mauritius</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">Mon-Sun: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+230 5790 1383</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@tropicalbites.mu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2025 Tropical Bites. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Website by vincedotcode Studio</p>
        </div>
      </footer>
    </div>
  )
}
