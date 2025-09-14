"use client"

import type React from "react"
import Logo from "/public/logo2.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Shield, Sun, Moon, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // State for expanded mobile dropdowns
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({})

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Avoid hydration mismatch
    return null
  }

  const productItems = [
    { name: "MagAI", href: "/products/magai", description: "AI-powered content management" },
    { name: "Virtual Naani", href: "/products/virtual-naani", description: "AI grandmother for elderly care" },
    { name: "JetChat", href: "/products/jetchat", description: "Multilingual chatbot platform" },
    { name: "JetOCR", href: "/products/jetocr", description: "Advanced OCR solutions" },
    { name: "JetTTS", href: "/products/jettts", description: "Text-to-speech technology" },
  ]

  const serviceItems = [
    { name: "Cybersecurity", href: "/services/cybersecurity", description: "Comprehensive security solutions" },
    { name: "AI/ML Development", href: "/services/ai-ml", description: "Custom AI and ML solutions" },
    { name: "Web Development", href: "/services/web-development", description: "Modern web applications" },
    { name: "Mobile Development", href: "/services/mobile-development", description: "iOS and Android apps" },
    { name: "Cloud Services", href: "/services/cloud-services", description: "Scalable cloud infrastructure" },
  ]

  const technologyItems = [
    { name: "Core Technologies", href: "/technologies/core", description: "Our technology stack" },
    { name: "Success Stories", href: "/technologies/success-stories", description: "Case studies and achievements" },
    { name: "Innovation Lab", href: "/technologies/innovation", description: "Research and development" },
  ]

  const aboutItems = [
    { name: "Our Story", href: "/about/story", description: "Company history and mission" },
    { name: "Team", href: "/about/team", description: "Meet our experts" },
    { name: "Careers", href: "/about/careers", description: "Join our team" },
  ]

  // Toggle expand/collapse for mobile dropdown menus
  function toggleMenu(menuKey: string) {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }))
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={Logo.src} alt="JetHat Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-foreground">JetHat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {serviceItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                      {technologyItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* Theme toggle button */}
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="ml-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground">Talk To Us</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              
              
              
              <div className="flex flex-col space-y-4 mt-8 ">

                {/* Logo */}
          <Link href="/" className="  flex items-center justify-center space-x-2">
            <img src={Logo.src} alt="JetHat Logo" className="h-32 w-auto" />
            {/* <span className="text-xl font-bold text-foreground">JetHat</span> */}
          </Link>
                
                {/* <div className="space-y-4"> */}
<Link
                  href="/"
                  className="ml-8 mt-16 text-foreground hover:text-primary transition-colors duration-200 font-medium "
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                {/* </div> */}
                

                {/* About with toggle */}
                <div className="space-y-2 ">
                  <div className=" no-underline hover:underline ml-8 mr-6 flex items-center justify-between text-foreground font-medium py-2 cursor-pointer select-none" onClick={() => toggleMenu("about")}>
                    <span>About</span>
                    {expandedMenus["about"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      "pl-4 overflow-hidden transition-all duration-300 ease-in-out",
                      expandedMenus["about"] ? "max-h-96" : "max-h-0"
                    )}
                  >
                    {aboutItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 py-1 block ml-10 no-underline hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Products with toggle */}
                <div className="space-y-2">
                  <div className="ml-8 mr-6 flex items-center justify-between text-foreground font-medium py-2 cursor-pointer select-none" onClick={() => toggleMenu("products")}>
                    <span>Products</span>
                    {expandedMenus["products"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      "pl-4 overflow-hidden transition-all duration-300 ease-in-out",
                      expandedMenus["products"] ? "max-h-96" : "max-h-0"
                    )}
                  >
                    {productItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 py-1 block ml-10 no-underline hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Services with toggle */}
                <div className="space-y-2">
                  <div className="ml-8 mr-6 flex items-center justify-between text-foreground font-medium py-2 cursor-pointer select-none" onClick={() => toggleMenu("services")}>
                    <span>Services</span>
                    {expandedMenus["services"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      "pl-4 overflow-hidden transition-all duration-300 ease-in-out",
                      expandedMenus["services"] ? "max-h-96" : "max-h-0"
                    )}
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 py-1 block ml-10 no-underline hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Technologies with toggle */}
                <div className="space-y-2 ">
                  <div className="ml-8 mr-6 flex items-center justify-between text-foreground font-medium py-2 cursor-pointer select-none" onClick={() => toggleMenu("technologies")}>
                    <span>Technologies</span>
                    {expandedMenus["technologies"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      "pl-4 overflow-hidden transition-all duration-300 ease-in-out  ... ",
                      expandedMenus["technologies"] ? "max-h-96" : "max-h-0"
                    )}
                  >
                    {technologyItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 py-1 block ml-10 no-underline hover:underline"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="ml-8 mr-6text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Button className=" ml-8 mr-6 bg-primary hover:bg-secondary text-primary-foreground mt-2  item-center justify-center">Talk To Us</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

const ListItem = ({
  className,
  title,
  children,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
