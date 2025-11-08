import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ExamplesHero } from "@/components/examples-hero"
import { ExamplesGrid } from "@/components/examples-grid"

export const metadata = {
  title: "Website Examples | vincedotcode Studio",
  description:
    "Browse my collection of professionally designed website examples for Mauritian businesses. See real, functional examples of what I can build for you.",
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ExamplesHero />
        <ExamplesGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
