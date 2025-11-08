"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors } from "lucide-react"

export function BarbershopExample() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black py-4 px-6 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-bold">Classic Cuts</h1>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">Book Appointment</Button>
        </div>
      </header>

      <section className="py-20 px-4 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h2 className="text-5xl font-bold mb-4">Gentleman's Grooming</h2>
        <p className="text-xl mb-8 text-gray-300">Traditional barbering with modern style</p>
        <Button size="lg" className="bg-red-600 hover:bg-red-700">
          View Services
        </Button>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Services & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Classic Haircut", price: "Rs 300" },
              { name: "Beard Trim", price: "Rs 150" },
              { name: "Hot Towel Shave", price: "Rs 250" },
              { name: "Hair & Beard Combo", price: "Rs 400" },
              { name: "Kids Haircut", price: "Rs 200" },
              { name: "Hair Coloring", price: "Rs 500" },
            ].map((service) => (
              <Card key={service.name} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-red-600 font-bold text-2xl">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Website by vincedotcode Studio</p>
        </div>
      </footer>
    </div>
  )
}
