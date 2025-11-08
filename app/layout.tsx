import type React from "react"
import type { Metadata } from "next"
import { Alexandria, Roboto_Flex } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
})

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.vincedotcode.com"),
  title: {
    default: "vincedotcode Studio | Affordable Websites in Mauritius",
    template: "%s | vincedotcode Studio",
  },
  description:
    "We build affordable, modern websites for Mauritian businesses. Get your business online fast with local support and 48-hour delivery. First 3 customers get free websites!",
  keywords: [
    "Mauritius web developer",
    "Affordable websites Mauritius",
    "vincedotcode Studio",
    "Freelance web developer Mauritius",
    "Next.js developer Mauritius",
    "Website design Mauritius",
    "Small business websites Mauritius",
    "AI web studio Mauritius",
    "Free website Mauritius",
    "Web development Mauritius",
  ],
  authors: [{ name: "Vince Erkadoo", url: "https://vincedotcode.com" }],
  creator: "Vince Erkadoo",
  publisher: "vincedotcode Studio",
  alternates: {
    canonical: "https://studio.vincedotcode.com",
  },
  openGraph: {
    type: "website",
    locale: "en_MU",
    url: "https://studio.vincedotcode.com",
    title: "vincedotcode Studio | Affordable Websites for Mauritian Businesses",
    description:
      "First 3 customers get free websites! Affordable, mobile-friendly websites for Mauritian businesses, delivered in 48 hours with free hosting.",
    siteName: "vincedotcode Studio",
    images: [
      {
        url: "https://res.cloudinary.com/eldoraui/image/upload/v1758570676/mac_llxzg3.jpg",
        width: 1200,
        height: 630,
        alt: "vincedotcode Studio — Affordable Websites Mauritius",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vincedotcode",
    creator: "@vincedotcode",
    title: "vincedotcode Studio | Affordable Websites for Mauritian Businesses",
    description:
      "First 3 customers get free websites! Get your business online fast — affordable websites for Mauritian entrepreneurs, built in 48 hours.",
    images: ["https://res.cloudinary.com/eldoraui/image/upload/v1758570676/mac_llxzg3.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${alexandria.variable} ${robotoFlex.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
    
  )
}
