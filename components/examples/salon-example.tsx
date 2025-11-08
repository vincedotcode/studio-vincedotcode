"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Sparkles, Clock, Phone } from "lucide-react"

export function SalonExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Elegance Beauty</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">Book Now</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">Your Beauty Sanctuary</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Pamper yourself with our premium services
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            Explore Services
          </Button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Scissors,
                name: "Hair Styling",
                price: "From Rs 500",
                desc: "Cut, color, and styling by expert stylists",
              },
              {
                icon: Sparkles,
                name: "Facial Treatment",
                price: "From Rs 800",
                desc: "Rejuvenating facials for glowing skin",
              },
              {
                icon: Sparkles,
                name: "Manicure & Pedicure",
                price: "From Rs 600",
                desc: "Complete nail care and polish",
              },
              { icon: Scissors, name: "Hair Treatment", price: "From Rs 1,200", desc: "Deep conditioning and repair" },
              { icon: Sparkles, name: "Makeup", price: "From Rs 1,500", desc: "Professional makeup for any occasion" },
              {
                icon: Sparkles,
                name: "Spa Package",
                price: "From Rs 2,500",
                desc: "Full day of relaxation and beauty",
              },
            ].map((service) => (
              <Card key={service.name} className="hover:shadow-xl transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/20 mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.name}</h3>
                  <p className="text-pink-600 font-bold mb-2">{service.price}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-4 bg-pink-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={`/beauty-salon-.jpg?height=300&width=300&query=beauty salon ${i}`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Book Your Appointment</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent">
                  <option>Select Service</option>
                  <option>Hair Styling</option>
                  <option>Facial Treatment</option>
                  <option>Manicure & Pedicure</option>
                  <option>Hair Treatment</option>
                  <option>Makeup</option>
                  <option>Spa Package</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                />
                <textarea
                  placeholder="Special Requests"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                />
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3">Book Appointment</Button>
              </form>
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5 text-pink-600" />
                  <span>+230 5790 1383</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-pink-600" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">&copy; 2025 Elegance Beauty Salon. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Website by vincedotcode Studio</p>
        </div>
      </footer>
    </div>
  )
}
