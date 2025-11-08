"use client"

import { motion } from "motion/react"
import { SquaresBackground } from "@/components/squares-background"

export function TemplatesHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <SquaresBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Website <span className="text-primary">Templates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore professionally designed templates tailored for Mauritian businesses. Each template can be customized
            with your content and branding, or I can create the content for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Fully customizable designs</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Mobile responsive</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>SEO optimized</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
