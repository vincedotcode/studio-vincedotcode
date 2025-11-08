"use client"

import { motion } from "motion/react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Beams from "@/components/Beams"
import { useEffect, useState } from "react"
///change the beams color to the primary color of the current theme
const testimonials = [
  {
    name: "Sarah Chen",
    business: "Tropical Bites Restaurant",
    role: "Owner",
    content:
      "Vince transformed my restaurant's online presence. The website is beautiful, fast, and I've seen a 40% increase in online reservations. Best investment I've made!",
    rating: 5,
    image: "/restaurant-owner-woman.png",
  },
  {
    name: "Raj Patel",
    business: "Elite Fitness Gym",
    role: "Manager",
    content:
      "Professional, responsive, and delivered ahead of schedule. The website perfectly captures our brand and has helped us attract new members. Highly recommend!",
    rating: 5,
    image: "/fitness-manager-man.jpg",
  },
  {
    name: "Marie Dubois",
    business: "Serenity Spa",
    role: "Founder",
    content:
      "Working with Vince was a pleasure. He understood my vision and created a stunning website that reflects the calm, luxurious experience we offer. Our bookings have doubled!",
    rating: 5,
    image: "/spa-owner-woman.jpg",
  },
]

export function TestimonialsSection() {
  const [beamColor, setBeamColor] = useState("#00ffb2")

  // Automatically adjust the Beams color to the current theme
  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains("dark")
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue(isDark ? "--primary-400" : "--primary-300")
        .trim()
      setBeamColor(color || (isDark ? "#00ffb2" : "#66ffb2"))
    }

    updateColor()
    const observer = new MutationObserver(updateColor)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-base-950 dark:bg-base-1000 relative overflow-hidden">
      {/* Dynamic Beams background */}
      <div className="absolute inset-0 opacity-60">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor={beamColor}
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance text-white">
            What My Clients Say
          </h2>
          <p className="text-xl text-base-300 max-w-2xl mx-auto text-pretty">
            Don't just take my word for it – hear from businesses I've helped grow online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 border-2 border-base-800 bg-base-900/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary-400/40" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                  <p className="text-base-200 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-base-800">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500/30"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-base-400">
                        {testimonial.role}, {testimonial.business}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
