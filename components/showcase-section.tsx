"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ShowcaseSection() {
  return (
    <section className="py-20 px-4 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance text-foreground">What We Build</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional, modern websites designed for Mauritian businesses
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl p-6 shadow-lg">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">Meet Vince</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl text-pretty">
                Passionate Senior Fullstack Software Engineer with over 40 successful projects. Building innovative
                solutions for Mauritian businesses with modern technology and local expertise.
              </p>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="https://www.vincedotcode.com/" target="_blank" rel="noopener noreferrer">
                  View Full Portfolio
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-500"
        >
          <div className="bg-card dark:bg-card p-3 border-b border-border flex items-center gap-2">
            <div className="flex gap-2">
              <motion.div className="h-3 w-3 rounded-full bg-red-500" whileHover={{ scale: 1.2 }} />
              <motion.div className="h-3 w-3 rounded-full bg-yellow-500" whileHover={{ scale: 1.2 }} />
              <motion.div className="h-3 w-3 rounded-full bg-green-500" whileHover={{ scale: 1.2 }} />
            </div>
            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-2 bg-muted dark:bg-muted/50 px-4 py-1 rounded-md text-sm">
                <span className="text-muted-foreground">vincedotcode.com</span>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 dark:from-primary/10 dark:via-secondary/5 dark:to-accent/10">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.37.14%E2%80%AFAM-Y0lZCQaIrysmf8l1YFyNCw7TnbjdYD.png"
              alt="Vince's Portfolio - Senior Fullstack Software Engineer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
