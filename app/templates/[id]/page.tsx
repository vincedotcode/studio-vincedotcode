import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrowserMockup } from "@/components/browser-mockup"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Import example components
import { RestaurantExample } from "@/components/examples/restaurant-example"
import { SalonExample } from "@/components/examples/salon-example"
import { RetailExample } from "@/components/examples/retail-example"
import { CoffeeShopExample } from "@/components/examples/coffee-shop-example"
import { BarbershopExample } from "@/components/examples/barbershop-example"

const exampleComponents: Record<string, { component: React.ComponentType; url: string; name: string }> = {
  restaurant: { component: RestaurantExample, url: "tropicalbites.mu", name: "Tropical Bites Restaurant" },
  salon: { component: SalonExample, url: "elegancebeauty.mu", name: "Elegance Beauty Salon" },
  retail: { component: RetailExample, url: "islandboutique.mu", name: "Island Boutique" },
  "coffee-shop": { component: CoffeeShopExample, url: "cafemauricien.mu", name: "Café Mauricien" },
  barbershop: { component: BarbershopExample, url: "classiccuts.mu", name: "Classic Cuts Barbershop" },
}

export function generateStaticParams() {
  return Object.keys(exampleComponents).map((id) => ({ id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const example = exampleComponents[params.id]
  if (!example) return {}

  return {
    title: `${example.name} - Website Example | vincedotcode Studio`,
    description: `View a live, functional example of ${example.name}. See what I can build for your business.`,
  }
}

export default function ExamplePage({ params }: { params: { id: string } }) {
  const example = exampleComponents[params.id]

  if (!example) {
    notFound()
  }

  const ExampleComponent = example.component

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <SiteHeader />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/templates">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Examples
              </Link>
            </Button>
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{example.name}</h1>
            <p className="text-muted-foreground">
              This is a fully functional example. Scroll and interact to see it in action.
            </p>
          </div>

          <BrowserMockup url={`https://www.${example.url}`}>
            <ExampleComponent />
          </BrowserMockup>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
