"use client"

import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically 1-2 weeks depending on the package. Starter websites take about 5-7 days, while Premium packages with custom features may take up to 14 days. I'll give you a specific timeline during our discovery call.",
  },
  {
    question: "Do I need to provide content and images?",
    answer:
      "You can provide your own content and images, or I can help create them for you. For photos, I can source high-quality stock images or use AI-generated images. For content, I can write compelling copy based on your business information.",
  },
  {
    question: "What if I need changes after the website is launched?",
    answer:
      "All packages include 30 days of free revisions after launch. After that, I offer affordable maintenance packages starting from Rs 1,500/month for updates, content changes, and technical support.",
  },
  {
    question: "Is hosting really free?",
    answer:
      "Yes! I host all websites on Vercel, which provides excellent performance and reliability at no cost for standard business websites. You only pay if you need advanced features or very high traffic (which is rare for local businesses).",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "All websites I build are mobile-first, meaning they're designed to look perfect on phones, tablets, and desktops. Over 70% of web traffic comes from mobile, so this is a top priority.",
  },
  {
    question: "Can you help with SEO and Google rankings?",
    answer:
      "Yes! All websites are built with SEO best practices including fast loading speeds, proper meta tags, structured data, and mobile optimization. I can also help you set up Google Business Profile and provide basic SEO guidance.",
  },
  {
    question: "What happens if I want to cancel or change my package?",
    answer:
      "You can change packages before development starts. If you need to cancel, I offer a full refund if no work has begun, or a partial refund based on work completed. I want you to be completely satisfied.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! For Business and Pro packages, I offer flexible payment plans. Typically 50% upfront and 50% upon completion. Contact me to discuss a payment schedule that works for your budget.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Got questions? I've got answers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
