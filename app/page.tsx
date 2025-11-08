import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ProcessSection } from "@/components/process-section"
import { ProjectsSection } from "@/components/projects-section"
import { PackagesSection } from "@/components/packages-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogPreviewSection } from "@/components/blog-preview-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <div id="why">
          <WhySection />
        </div>
        <ProcessSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="packages">
          <PackagesSection />
        </div>
        <ShowcaseSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <FAQSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
