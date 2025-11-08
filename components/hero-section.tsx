"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useRef } from "react"
import { SquaresBackground } from "@/components/squares-background"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-200/30 via-background to-secondary-200/20 dark:from-primary-950/50 dark:via-background dark:to-secondary-950/30">
      <div className="absolute inset-0 opacity-50">
        <SquaresBackground
          direction="diagonal"
          borderColor="rgba(34, 197, 94, 0.15)"
          hoverColor="rgba(34, 197, 94, 0.4)"
          size={50}
          speed={0.7}
        />
      </div>

      <div className="absolute inset-0 bg-grid-base-300/[0.05] dark:bg-grid-base-700/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary-300/20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary-400/20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div ref={containerRef} className="container relative z-10 px-4 py-20 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-medium text-foreground"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Launching vincedotcode Studio</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-balance text-foreground">
            Professional Websites for Mauritian Businesses
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I build{" "}
            <span className="font-semibold text-secondary-600 dark:text-secondary-400">
              affordable, modern websites
            </span>{" "}
            tailored for local businesses
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              asChild
            >
              <a href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 text-foreground hover:bg-accent bg-transparent"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 text-foreground/80">
              <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span>Fast delivery</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <div className="h-2 w-2 rounded-full bg-secondary-500 animate-pulse" />
              <span>Mobile-friendly</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <div className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
              <span>Free hosting</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
