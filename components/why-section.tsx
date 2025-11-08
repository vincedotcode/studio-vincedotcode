"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Smartphone, DollarSign, Clock } from "lucide-react"
import { motion } from "motion/react"
import { AnimatedIcon } from "@/components/animated-icon"
import { SquaresBackground } from "@/components/squares-background"

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates designed for Mauritian businesses of all sizes",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Your website will be delivered within days, not weeks",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for all devices with modern, responsive layouts",
  },
  {
    icon: Zap,
    title: "Free Hosting Included",
    description: "No hidden costs — hosting is included with every package",
  },
]

export function WhySection() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <SquaresBackground
          direction="right"
          borderColor="rgba(34, 197, 94, 0.1)"
          hoverColor="rgba(34, 197, 94, 0.3)"
          size={60}
          speed={0.5}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance text-foreground">Why Choose Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm dedicated to helping Mauritian businesses establish a strong online presence with quality websites at
            affordable prices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-border bg-card/80 backdrop-blur-sm group">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <AnimatedIcon icon={benefit.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
