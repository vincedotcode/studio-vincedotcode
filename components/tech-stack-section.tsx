"use client"

import { motion } from "motion/react"
import { Zap, Shield, Smartphone, TrendingUp } from "lucide-react"

const technologies = [
  { name: "Next.js", description: "React framework for production" },
  { name: "React", description: "Modern UI library" },
  { name: "TypeScript", description: "Type-safe code" },
  { name: "Tailwind CSS", description: "Utility-first styling" },
  { name: "Vercel", description: "Lightning-fast hosting" },
  { name: "Framer Motion", description: "Smooth animations" },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with 90+ performance scores",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with enterprise-grade security standards",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Perfect experience on all devices and screen sizes",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimized",
    description: "Built to rank well on Google and search engines",
  },
]

export function TechStackSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-base-50 to-background dark:from-base-950 dark:to-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">Built With Modern Technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I use cutting-edge tools to build fast, secure, and scalable websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border-2 hover:border-primary/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full bg-background border-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
