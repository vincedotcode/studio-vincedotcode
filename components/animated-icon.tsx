"use client"

import { motion, type Variants } from "motion/react"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  variants?: Variants
}

const defaultVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
    },
  },
}

export function AnimatedIcon({ icon: Icon, className, variants = defaultVariants }: AnimatedIconProps) {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" whileHover="hover" className={className}>
      <Icon className="w-full h-full" />
    </motion.div>
  )
}
