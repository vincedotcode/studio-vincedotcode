"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

const projects = [
  {
    name: "TechKours",
    description:
      "Educational platform for learning development skills with practical curriculum and real-world projects",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.55.55%E2%80%AFAM-nSi57KqRJf2WCqZI7AwmF8A7XGiYAr.png",
    url: "https://techkours.vercel.app/",
    tags: ["Education", "Next.js", "Full-Stack"],
  },
  {
    name: "MoPet",
    description: "Pet adoption platform connecting people with veterinarians and pets in need of homes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.56.57%E2%80%AFAM-rEmigGW9T4jXDarGzW9ZzrrLRondVV.png",
    url: "https://mopet.vercel.app/",
    tags: ["Social Impact", "Community", "React"],
  },
  {
    name: "MoTravel",
    description: "Travel booking platform for flights and hotels with AI-powered trip planning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.56.47%E2%80%AFAM-B9SWD5BTeRvZ2bIWr28EFWXjHG3gNr.png",
    url: "https://motravel.vercel.app/",
    tags: ["Travel", "Booking", "AI"],
  },
  {
    name: "MoNature",
    description: "Environmental platform promoting sustainable development goals and protecting nature",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.56.32%E2%80%AFAM-DCxCdw6NBQ5klql31iPblDcuCM0kHM.png",
    url: "https://monature.vercel.app/",
    tags: ["Environment", "Sustainability", "NGO"],
  },
  {
    name: "MoTalent",
    description: "Job platform connecting talented professionals with companies seeking the best candidates",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.56.19%E2%80%AFAM-g8JS20XDmrksQxJy8vX6Ernxo1pAf0.png",
    url: "https://motalentmu.vercel.app/",
    tags: ["Jobs", "Recruitment", "Platform"],
  },
  {
    name: "MoBet",
    description: "AI-powered sports betting platform with smart predictions and data-driven insights",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%209.56.08%E2%80%AFAM-iRbNqKj8nacoJf4jALdtjZTEYyqNmg.png",
    url: "https://mobet.vercel.app/",
    tags: ["Sports", "AI", "Analytics"],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-balance text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of recent web applications I've built for various industries and use cases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-border bg-card group-hover:border-primary/50">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <span>View Project</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
