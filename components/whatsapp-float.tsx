"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "motion/react"

export function WhatsAppFloat() {
  const handleClick = () => {
    window.open(
      "https://wa.me/23057901383?text=Hi%20Vince!%20I'm%20interested%20in%20getting%20a%20website%20for%20my%20business.",
      "_blank",
    )
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7" />
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-16 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium hidden group-hover:block"
      >
        Chat on WhatsApp
      </motion.div>
    </motion.button>
  )
}
