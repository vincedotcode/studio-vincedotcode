"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Eye, Check } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    id: "restaurant",
    name: "Tropical Bites Restaurant",
    category: "Starter",
    price: "Rs 3,000",
    description: "Single-page restaurant website with menu, gallery, and contact form. Perfect for local eateries.",
    image: "/modern-restaurant-website-with-menu-and-contact-fo.jpg",
    features: ["Menu showcase", "Contact form", "Google Maps", "WhatsApp integration"],
    contentOptions: "You provide: Menu items, photos, location. I can create: Descriptions, compelling copy.",
  },
  {
    id: "salon",
    name: "Elegance Beauty Salon",
    category: "Starter",
    price: "Rs 3,000",
    description: "Elegant single-page design for beauty salons. Showcase services and enable easy booking.",
    image: "/elegant-beauty-salon-spa-website-with-services.jpg",
    features: ["Services list", "Booking form", "Gallery", "Social media links"],
    contentOptions: "You provide: Services, pricing, photos. I can create: Service descriptions, promotional content.",
  },
  {
    id: "retail",
    name: "Island Boutique",
    category: "Starter",
    price: "Rs 3,000",
    description: "Clean design for local retail shops. Display products and connect with customers easily.",
    image: "/modern-retail-shop-website-with-product-showcase.jpg",
    features: ["Product showcase", "Contact form", "Store hours", "WhatsApp ordering"],
    contentOptions: "You provide: Product photos, prices. I can create: Product descriptions, promotional text.",
  },
  {
    id: "coffee-shop",
    name: "Café Mauricien",
    category: "Starter",
    price: "Rs 3,000",
    description: "Cozy coffee shop website with menu, ambiance photos, and location details.",
    image: "/modern-coffee-shop-website.jpg",
    features: ["Menu display", "Photo gallery", "Opening hours", "Location map"],
    contentOptions: "You provide: Menu, photos. I can create: Descriptions, coffee stories, promotional content.",
  },
  {
    id: "barbershop",
    name: "Classic Cuts Barbershop",
    category: "Starter",
    price: "Rs 3,000",
    description: "Modern barbershop website with services, pricing, and online booking.",
    image: "/modern-barbershop-website.jpg",
    features: ["Services & pricing", "Booking form", "Gallery", "Contact details"],
    contentOptions: "You provide: Services, photos. I can create: Service descriptions, style guides.",
  },
  {
    id: "law-firm",
    name: "Legal Associates",
    category: "Business",
    price: "Rs 6,000",
    description: "Professional multi-page website for law firms with practice areas, team profiles, and case studies.",
    image: "/professional-services-website-with-multiple-pages.jpg",
    features: ["5 custom pages", "Practice areas", "Attorney profiles", "Testimonials", "Contact forms"],
    contentOptions:
      "You provide: Firm info, team photos, practice areas. I can create: Professional copy, SEO content.",
  },
  {
    id: "hotel",
    name: "Paradise Resort",
    category: "Business",
    price: "Rs 6,000",
    description: "Beautiful hotel website with room galleries, amenities, and booking system.",
    image: "/luxury-hotel-website-with-room-gallery-and-booking.jpg",
    features: ["Room galleries", "Booking forms", "Amenities page", "Reviews", "Location guide"],
    contentOptions:
      "You provide: Property photos, room details. I can create: Descriptions, area guides, promotional content.",
  },
  {
    id: "gym",
    name: "FitZone Gym",
    category: "Business",
    price: "Rs 6,000",
    description: "Dynamic fitness center website with class schedules, trainer profiles, and membership plans.",
    image: "/modern-fitness-gym-website-with-classes-and-traine.jpg",
    features: ["Class schedules", "Trainer profiles", "Membership plans", "Gallery", "Registration forms"],
    contentOptions:
      "You provide: Gym photos, trainer info, class details. I can create: Motivational content, fitness tips.",
  },
  {
    id: "dental",
    name: "Smile Dental Clinic",
    category: "Business",
    price: "Rs 6,000",
    description: "Professional dental clinic website with services, team, appointment booking, and patient resources.",
    image: "/modern-dental-clinic-website.jpg",
    features: ["Services pages", "Doctor profiles", "Appointment booking", "Patient resources", "Testimonials"],
    contentOptions:
      "You provide: Services, team photos, clinic info. I can create: Service descriptions, patient education content.",
  },
  {
    id: "photography",
    name: "Lens & Light Photography",
    category: "Business",
    price: "Rs 6,000",
    description: "Stunning portfolio website for photographers with galleries, packages, and booking system.",
    image: "/modern-photography-portfolio-website.jpg",
    features: ["Portfolio galleries", "Package pricing", "Booking system", "About page", "Contact form"],
    contentOptions:
      "You provide: Photos, packages, bio. I can create: Package descriptions, compelling portfolio copy.",
  },
  {
    id: "construction",
    name: "BuildRight Construction",
    category: "Business",
    price: "Rs 6,000",
    description: "Professional construction company website with project portfolio, services, and quote request.",
    image: "/modern-construction-company-website.jpg",
    features: ["Project portfolio", "Services pages", "Quote request", "Team profiles", "Testimonials"],
    contentOptions:
      "You provide: Project photos, services, company info. I can create: Project descriptions, service details.",
  },
  {
    id: "ecommerce",
    name: "Island Shop Online",
    category: "Pro",
    price: "Rs 10,000",
    description:
      "Full e-commerce store with product catalog, shopping cart, payment integration, and order management.",
    image: "/modern-ecommerce-website-with-shopping-cart.jpg",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment gateway",
      "Order management",
      "Customer accounts",
      "Analytics",
    ],
    contentOptions:
      "You provide: Product data, photos, pricing. I can create: Product descriptions, category organization, marketing content.",
  },
  {
    id: "real-estate",
    name: "Prime Properties",
    category: "Pro",
    price: "Rs 10,000",
    description: "Comprehensive real estate website with property listings, advanced search, and agent profiles.",
    image: "/real-estate-website.png",
    features: [
      "Property listings",
      "Advanced search",
      "Agent profiles",
      "Virtual tours",
      "Inquiry forms",
      "Blog",
      "Analytics",
    ],
    contentOptions:
      "You provide: Property details, photos, agent info. I can create: Property descriptions, area guides, market insights.",
  },
  {
    id: "education",
    name: "LearnHub Academy",
    category: "Pro",
    price: "Rs 10,000",
    description: "Complete educational platform with course catalog, enrollment system, and student portal.",
    image: "/modern-educational-platform-with-courses-and-enrol.jpg",
    features: [
      "Course catalog",
      "Enrollment system",
      "Student portal",
      "Instructor profiles",
      "Resources library",
      "Events calendar",
    ],
    contentOptions:
      "You provide: Course details, instructor info. I can create: Course descriptions, educational content, promotional materials.",
  },
  {
    id: "event-planning",
    name: "Celebrate Events",
    category: "Business",
    price: "Rs 6,000",
    description: "Event planning website with portfolio, services, packages, and inquiry forms.",
    image: "/modern-event-planning-website.jpg",
    features: ["Event portfolio", "Service packages", "Vendor directory", "Inquiry forms", "Testimonials", "Blog"],
    contentOptions:
      "You provide: Event photos, packages, services. I can create: Package descriptions, event planning tips.",
  },
  {
    id: "auto-repair",
    name: "AutoCare Garage",
    category: "Starter",
    price: "Rs 3,000",
    description: "Auto repair shop website with services, pricing, and appointment booking.",
    image: "/modern-auto-repair-garage-website.jpg",
    features: ["Services list", "Pricing guide", "Appointment booking", "Contact form", "Location map"],
    contentOptions: "You provide: Services, pricing, shop info. I can create: Service descriptions, maintenance tips.",
  },
  {
    id: "yoga-studio",
    name: "Zen Yoga Studio",
    category: "Business",
    price: "Rs 6,000",
    description: "Peaceful yoga studio website with class schedules, instructor bios, and membership options.",
    image: "/modern-yoga-studio-website.jpg",
    features: [
      "Class schedules",
      "Instructor profiles",
      "Membership plans",
      "Workshop events",
      "Blog",
      "Booking system",
    ],
    contentOptions:
      "You provide: Class info, instructor photos, studio details. I can create: Class descriptions, wellness content.",
  },
  {
    id: "pet-services",
    name: "Paws & Claws Pet Care",
    category: "Starter",
    price: "Rs 3,000",
    description: "Pet grooming and care website with services, pricing, and online booking.",
    image: "/modern-pet-grooming-website.jpg",
    features: ["Services & pricing", "Booking form", "Pet care tips", "Gallery", "Contact details"],
    contentOptions: "You provide: Services, pricing, photos. I can create: Service descriptions, pet care advice.",
  },
  {
    id: "cleaning",
    name: "Sparkle Cleaning Services",
    category: "Starter",
    price: "Rs 3,000",
    description: "Cleaning services website with service packages, pricing, and quote request form.",
    image: "/modern-cleaning-services-website.jpg",
    features: ["Service packages", "Pricing calculator", "Quote request", "Before/after gallery", "Contact form"],
    contentOptions: "You provide: Services, pricing, company info. I can create: Service descriptions, cleaning tips.",
  },
  {
    id: "landscaping",
    name: "GreenScape Landscaping",
    category: "Business",
    price: "Rs 6,000",
    description: "Landscaping company website with project portfolio, services, and consultation booking.",
    image: "/modern-landscaping-company-website.jpg",
    features: [
      "Project portfolio",
      "Services pages",
      "Consultation booking",
      "Seasonal tips",
      "Testimonials",
      "Quote request",
    ],
    contentOptions:
      "You provide: Project photos, services, company info. I can create: Project descriptions, landscaping guides.",
  },
]

export function ExamplesGrid() {
  const categories = ["Starter", "Business", "Pro"]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {categories.map((category) => (
          <div key={category} className="mb-20 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{category} Package Examples</h2>
              <p className="text-muted-foreground">
                {category === "Starter" && "Single-page websites perfect for small businesses getting started online"}
                {category === "Business" && "Multi-page websites ideal for growing businesses with multiple services"}
                {category === "Pro" && "Complete solutions with advanced features for established businesses"}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {examples
                .filter((example) => example.category === category)
                .map((example, index) => (
                  <motion.div
                    key={example.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all group overflow-hidden">
                      <div className="relative overflow-hidden aspect-[3/2]">
                        <img
                          src={example.image || "/placeholder.svg"}
                          alt={example.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">{example.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{example.name}</h3>
                          <p className="text-2xl font-bold text-primary mb-3">{example.price}</p>
                          <p className="text-sm text-muted-foreground text-pretty">{example.description}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-foreground">Included Features:</p>
                          <ul className="space-y-1">
                            {example.features.slice(0, 4).map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-xs">
                                <Check className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                            {example.features.length > 4 && (
                              <li className="text-xs text-muted-foreground pl-5">
                                +{example.features.length - 4} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-xs font-semibold text-foreground mb-2">Content Options:</p>
                          <p className="text-xs text-muted-foreground text-pretty">{example.contentOptions}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                         
                          <Button className="w-full" asChild>
                            <a href="#contact">Get This</a>
                          </Button>
                        </div>
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
