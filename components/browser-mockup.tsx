"use client"

import type React from "react"

import { motion } from "motion/react"
import { X, Minus, Square, ChevronLeft, ChevronRight, RotateCw, Home } from "lucide-react"

interface BrowserMockupProps {
  children: React.ReactNode
  url?: string
}

export function BrowserMockup({ children, url = "https://example.com" }: BrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto"
    >
      {/* Browser Chrome */}
      <div className="bg-background border border-border rounded-t-xl shadow-2xl">
        {/* Window Controls */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 flex-1 max-w-2xl mx-4">
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <RotateCw className="h-4 w-4 text-muted-foreground" />
            </button>

            {/* URL Bar */}
            <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg">
              <Home className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground truncate">{url}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <Minus className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <Square className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-background border-x border-b border-border rounded-b-xl shadow-2xl overflow-hidden">
        <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-y-auto">{children}</div>
      </div>
    </motion.div>
  )
}
