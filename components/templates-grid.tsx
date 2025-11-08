"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { ExternalLink, Check } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Restaurant Starter",
    category: "Starter",
    price: "Rs 3,000",
    description:
      "Perfect single-page website for small restaurants and cafes. Includes menu display, contact form, and location map.",
    image: "/modern-restaurant-website-with-menu-and-contact-fo.jpg",
    features: ["Menu showcase", "Contact form", "Google Maps", "WhatsApp integration", "Mobile responsive"],
    contentOptions:
      "You provide: Restaurant name, menu items, photos, location. I handle: Design, layout, optimization.",
  },
  {
    id: 2,
    name: "Salon & Spa Starter",
    category: "Starter",
    price: "Rs 3,000",
    description: "Elegant single-page design for beauty salons and spas. Showcase services and enable easy booking.",
    image: "/elegant-beauty-salon-spa-website-with-services.jpg",
    features: ["Services list", "Booking form", "Gallery section", "Social media links", "Contact details"],
    contentOptions:
      "You provide: Business name, services, pricing, photos. I can create: Service descriptions, compelling copy.",
  },
  {
    id: 3,
    name: "Retail Shop Starter",
    category: "Starter",
    price: "Rs 3,000",
    description: "Clean and modern design for local retail shops. Display products and connect with customers.",
    image: "/modern-retail-shop-website-with-product-showcase.jpg",
    features: ["Product showcase", "Contact form", "Store hours", "WhatsApp ordering", "Location map"],
    contentOptions:
      "You provide: Shop details, product photos, prices. I can create: Product descriptions, promotional content.",
  },
  {
    id: 4,
    name: "Professional Services",
    category: "Business",
    price: "Rs 6,000",
    description:
      "Multi-page website for lawyers, accountants, consultants. Includes service pages, about, testimonials, and contact.",
    image: "/professional-services-website-with-multiple-pages.jpg",
    features: ["5 custom pages", "Service details", "Team profiles", "Testimonials", "Booking system", "Blog section"],
    contentOptions:
      "You provide: Company info, team photos, services offered. I can create: Professional copy, service descriptions, SEO content.",
  },
  {
    id: 5,
    name: "Hotel & Guesthouse",
    category: "Business",
    price: "Rs 6,000",
    description:
      "Beautiful multi-page website for hotels and guesthouses. Showcase rooms, amenities, and enable bookings.",
    image: "/luxury-hotel-website-with-room-gallery-and-booking.jpg",
    features: [
      "Room galleries",
      "Booking forms",
      "Amenities page",
      "Location & attractions",
      "Reviews section",
      "Contact page",
    ],
    contentOptions:
      "You provide: Property photos, room details, pricing. I can create: Compelling descriptions, area guides, promotional content.",
  },
  {
    id: 6,
    name: "Fitness & Gym",
    category: "Business",
    price: "Rs 6,000",
    description:
      "Dynamic website for gyms and fitness centers. Display classes, trainers, membership plans, and schedule.",
    image: "/modern-fitness-gym-website-with-classes-and-traine.jpg",
    features: [
      "Class schedules",
      "Trainer profiles",
      "Membership plans",
      "Gallery",
      "Registration forms",
      "Blog/Tips section",
    ],
    contentOptions:
      "You provide: Gym photos, trainer info, class details. I can create: Motivational content, class descriptions, fitness tips.",
  },
  {
    id: 7,
    name: "E-Commerce Store",
    category: "Pro",
    price: "Rs 10,000",
    description:
      "Full-featured online store with product catalog, shopping cart, and payment integration. Perfect for growing businesses.",
    image: "/modern-ecommerce-website-with-shopping-cart.jpg",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway",
      "Order management",
      "Customer accounts",
      "Inventory tracking",
      "Analytics",
    ],
    contentOptions:
      "You provide: Product data, photos, pricing, policies. I can create: Product descriptions, category organization, marketing content.",
  },
  {
    id: 8,
    name: "Real Estate Agency",
    category: "Pro",
    price: "Rs 10,000",
    description:
      "Comprehensive website for real estate agencies. Property listings, search filters, agent profiles, and inquiry system.",
    image: "/real-estate-website.png",
    features: [
      "Property listings",
      "Advanced search",
      "Agent profiles",
      "Virtual tours",
      "Inquiry forms",
      "Blog section",
      "Newsletter",
      "Analytics",
    ],
    contentOptions:
      "You provide: Property details, photos, agent info. I can create: Property descriptions, area guides, market insights, SEO content.",
  },
  {
    id: 9,
    name: "Educational Platform",
    category: "Pro",
    price: "Rs 10,000",
    description:
      "Complete platform for schools, training centers, or online courses. Course catalog, enrollment, and student portal.",
    image: "/modern-educational-platform-with-courses-and-enrol.jpg",
    features: [
      "Course catalog",
      "Enrollment system",
      "Student portal",
      "Instructor profiles",
      "Resources library",
      "Blog/News",
      "Events calendar",
      "Email integration",
    ],
    contentOptions:
      "You provide: Course details, instructor info, curriculum. I can create: Course descriptions, educational content, promotional materials.",
  },
]

export function TemplatesGrid() {
  const categories = ["Starter", "Business", "Pro"]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-20 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{category} Package Templates</h2>
              <p className="text-muted-foreground">
                {category === "Starter" && "Single-page websites perfect for small businesses getting started online"}
                {category === "Business" &&
                  "Multi-page websites ideal for growing businesses with multiple services and content"}
                {category === "Pro" &&
                  "Complete solutions with advanced features for established businesses and e-commerce"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates
                .filter((template) => template.category === category)
                .map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all group overflow-hidden">
                      <div className="relative overflow-hidden aspect-[3/2]">
                        <img
                          src={template.image || "/placeholder.svg"}
                          alt={template.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">{template.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                          <p className="text-2xl font-bold text-primary mb-3">{template.price}</p>
                          <p className="text-sm text-muted-foreground text-pretty">{template.description}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-foreground">Included Features:</p>
                          <ul className="space-y-1">
                            {template.features.slice(0, 4).map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-xs">
                                <Check className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                            {template.features.length > 4 && (
                              <li className="text-xs text-muted-foreground pl-5">
                                +{template.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-semibold text-foreground mb-2">Content Options:</p>
                          <p className="text-xs text-muted-foreground text-pretty">{template.contentOptions}</p>
                        </div>

                        <Button className="w-full group/btn" asChild>
                          <a href="#contact">
                            Get This Template
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-pretty">
              Don't see exactly what you're looking for? I can create a completely custom design tailored to your
              specific business needs and brand identity.
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Discuss Custom Project</a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
