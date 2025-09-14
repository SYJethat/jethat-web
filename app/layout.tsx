import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: "JetHat Cyber Security - Securing Tomorrow's Digital Innovation",
  description:
    "JetHat Cyber Security Pvt. Ltd. - Leading cybersecurity, AI/ML, and cloud solutions company. Empowering businesses with secure, scalable digital transformation since 2018.",
  keywords: "cybersecurity, AI, ML, cloud services, web development, mobile apps, JetHat, Noida, India",
  authors: [{ name: "JetHat Cyber Security Pvt. Ltd." }],
  generator: "Next.js",
  openGraph: {
    title: "JetHat Cyber Security - Securing Tomorrow's Digital Innovation",
    description:
      "Leading cybersecurity and AI solutions company empowering businesses with secure digital transformation.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Suspense fallback={null}>
            {children}
            <ScrollProgress />
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
