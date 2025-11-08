"use client"

import { motion } from "motion/react"
import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "1. Discovery Call",
    description: "I'll chat with you to understand your business, goals, and vision for your website.",
    duration: "30 mins",
  },
  {
    icon: Palette,
    title: "2. Design & Planning",
    description: "I'll create a custom design mockup and plan the structure of your website.",
    duration: "2-3 days",
  },
  {
    icon: Code,
    title: "3. Development",
    description: "I'll build your website using modern technologies, ensuring it's fast and mobile-friendly.",
    duration: "5-10 days",
  },
  {
    icon: Rocket,
    title: "4. Launch & Support",
    description: "Your website goes live with free hosting, and I provide ongoing support for any questions.",
    duration: "1 day",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-base-300/[0.05] dark:bg-grid-base-700/[0.05]" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A simple, transparent process from idea to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>

                  <p className="text-muted-foreground text-pretty">{step.description}</p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {step.duration}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
