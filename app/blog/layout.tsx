"use client"

import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          {/* Back Button (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="inline-flex items-center text-muted-foreground hover:text-primary-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </motion.div>

          {/* Optional placeholder for right-side actions */}
          <div className="flex-1 text-right"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
