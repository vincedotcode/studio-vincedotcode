"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Share2, FileText, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: UserPlus,
    title: "Follow Us",
    description: "Follow @vincedotcode on TikTok & Facebook",
    step: "1",
  },
  {
    icon: Share2,
    title: "Share the Post",
    description: "Share our giveaway announcement on your story",
    step: "2",
  },
  {
    icon: FileText,
    title: "Fill the Form",
    description: "Complete the application form below",
    step: "3",
  },
  {
    icon: CheckCircle,
    title: "Wait for Selection",
    description: "We'll contact the 3 selected businesses",
    step: "4",
  },
]

export function QualifySection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">How to Qualify</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Follow these simple steps to enter the giveaway
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-4xl font-bold text-muted/20">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
