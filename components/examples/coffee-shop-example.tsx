"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, MapPin, Clock } from "lucide-react"

export function CoffeeShopExample() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900">
      <header className="bg-amber-900 text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Café Mauricien</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="hover:text-amber-200">
              Menu
            </a>
            <a href="#about" className="hover:text-amber-200">
              About
            </a>
            <a href="#contact" className="hover:text-amber-200">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative h-[500px] flex items-center justify-center text-center px-4 bg-gradient-to-b from-amber-100 to-amber-50 dark:from-gray-800 dark:to-gray-900">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-amber-900 dark:text-white">Artisan Coffee</h2>
          <p className="text-xl md:text-2xl mb-8 text-amber-800 dark:text-gray-300">
            Brewed with passion, served with love
          </p>
          <Button size="lg" className="bg-amber-900 hover:bg-amber-800 text-white">
            View Menu
          </Button>
        </div>
      </section>

      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900 dark:text-white">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Espresso", price: "Rs 60", desc: "Rich and bold single shot" },
              { name: "Cappuccino", price: "Rs 90", desc: "Espresso with steamed milk foam" },
              { name: "Latte", price: "Rs 95", desc: "Smooth espresso with steamed milk" },
              { name: "Mocha", price: "Rs 110", desc: "Chocolate and espresso blend" },
              { name: "Croissant", price: "Rs 50", desc: "Buttery French pastry" },
              { name: "Chocolate Cake", price: "Rs 80", desc: "Rich chocolate indulgence" },
            ].map((item) => (
              <Card key={item.name}>
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-amber-900 dark:text-amber-500 font-bold text-lg">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-amber-900 dark:text-white">Visit Us</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-amber-900 dark:text-amber-500" />
              <span className="text-gray-700 dark:text-gray-300">789 Coffee Lane, Quatre Bornes</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-amber-900 dark:text-amber-500" />
              <span className="text-gray-700 dark:text-gray-300">Daily: 7AM-8PM</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-amber-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Café Mauricien. Website by vincedotcode Studio</p>
        </div>
      </footer>
    </div>
  )
}
