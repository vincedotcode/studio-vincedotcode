"use client"

import { motion } from "motion/react"
import { SquaresBackground } from "@/components/squares-background"

export function ExamplesHero() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <SquaresBackground />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Website Examples</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore real, functional examples of websites I've designed. Click any example to see it in action and get
            inspired for your own project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
