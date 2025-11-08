"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const packages = [
  {
    name: "Starter",
    price: "Rs 3,000",
    description: "Perfect for small businesses getting started online",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "Free hosting included",
      "1 month support",
    ],
  },
  {
    name: "Business",
    price: "Rs 6,000",
    description: "Ideal for growing businesses with multiple services",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Contact & booking forms",
      "Social media integration",
      "Advanced SEO",
      "Google Maps integration",
      "Free hosting included",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "Rs 10,000",
    description: "Complete solution for established businesses",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "E-commerce ready",
      "Blog/News section",
      "Analytics dashboard",
      "Email marketing setup",
      "Free hosting included",
      "6 months support",
      "Priority updates",
    ],
  },
]

export function PackagesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance">Pricing Packages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Affordable pricing for Mauritian businesses with free hosting included
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full hover:shadow-xl transition-all ${pkg.popular ? "border-primary border-2 scale-105" : "border-2"}`}
              >
                <CardHeader>
                  {pkg.popular && <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold mt-4">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                    <a href="#contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="py-8">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Don't see exactly what you need? I can customize any package to fit your specific business requirements.
                Whether it's a unique feature, special integration, or a completely custom solution - let's build it
                together.
              </p>
              <Button variant="outline" asChild>
                <a href="#contact">
                  Discuss Custom Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold mb-3">See What You'll Get</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through real, functional website examples I've designed for different industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Tropical Bites Restaurant",
                image: "/modern-restaurant-website-with-menu-and-contact-fo.jpg",
                category: "Business",
              },
              {
                name: "Elegance Beauty Salon",
                image: "/elegant-beauty-salon-spa-website-with-services.jpg",
                category: "Business",
              },
              {
                name: "Island Boutique",
                image: "/modern-retail-shop-website-with-product-showcase.jpg",
                category: "Pro",
              },
            ].map((example, index) => (
              <motion.div
                key={example.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={example.image || "/placeholder.svg"}
                    alt={example.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-primary font-semibold mb-1">{example.category} Package</div>
                  <h4 className="font-semibold text-sm">{example.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/templates">
                View All Website Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
