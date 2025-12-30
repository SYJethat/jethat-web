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
import { Menu, Shield, Sun, Moon, Plus, Minus, X, Phone, Mail, Facebook, Instagram, Twitter, Dribbble, Network, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

import { useState, useEffect } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false)
  // const { theme, setTheme } = useTheme()
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
  { name: "AI Multilingual LMS", href: "/products/ai-lms", description: "Smart learning management with AI and language support" },
  { name: "E-Library", href: "/products/elibrary", description: "Digital library for content storage and secure access" },
  { name: "Anukaran AI", href: "/products/anukaran-ai", description: "AI model replication and training system" },
  { name: "Sambhasini AI", href: "/products/sambhasini-ai", description: "Multilingual voice and language AI system" },
  { name: "Multilingual Dictionary", href: "/products/multi-dictionary", description: "Language translation and speech assistance" },
  { name: "JetPay", href: "/products/jetpay", description: "Secure UPI, fintech and payment automation" }
];


  const serviceItems = [
    { name: "Cybersecurity", href: "/services/cybersecurity", description: "Comprehensive security solutions" },
    { name: "AI/ML Development", href: "/services/ai-ml", description: "Custom AI and ML solutions" },
    { name: "Web Development", href: "/services/web-development", description: "Modern web applications" },
    { name: "Mobile Development", href: "/services/mobile-development", description: "iOS and Android apps" },
    { name: "Cloud Services", href: "/services/cloud-services", description: "Scalable cloud infrastructure" },
  ]

  const technologyItems = [
    { name: "Core Technologies", href: "/technologies/core", description: "Our technology stack" },
    { name: "Case Study", href: "/technologies/casestudy", description: "Case Study" },

    { name: "Innovation Lab", href: "/technologies/innovation", description: "Research and development" },
  ]

  const aboutItems = [
    { name: "Our Story", href: "/about/story", description: "Company history and mission" },
    { name: "Success Stories", href: "/about/success-stories", description: "Case studies and achievements" },
    { name: "Team", href: "/about/team", description: "Meet our experts" },
    // { name: "Careers", href: "/about/careers", description: "Join our team" },
  ]

  // Toggle expand/collapse for mobile dropdown menus
  function toggleMenu(menuKey: string) {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }))
  }

  return (
    <nav className="fixed top-0 w-full h-28 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={Logo.src} alt="JetHat Logo" className="h-20 w-auto mt-10" />
            {/* <span className="text-xl font-bold text-foreground">JetHat Cyber Security</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden mt-10 text-4xl md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium  hover:text-chart-1 hover:underline transition-colors  ">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" hover:bg-transparent hover:text-chart-1 hover:underline transition-colors">About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[700px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutItems.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-transparent hover:text-chart-1 hover:underline transition-colors">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productItems.map((item) => (
                        <ListItem className="hover:text-chart-1" key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-transparent hover:text-chart-1 hover:underline transition-colors">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {serviceItems.map((item) => (
                        <ListItem className="hover:text-chart-1" key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" hover:text-chart-1 hover:underline transition-colors">Technologies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className=" grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:text-foreground">
                      {technologyItems.map((item) => (
                        <ListItem className="hover:text-chart-1" key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
 <NavigationMenuItem>
                  <Link href="/careers" legacyBehavior passHref>
                    <NavigationMenuLink className=" hover:text-chart-1 hover:underline transition-colors group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors ">
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className=" hover:text-chart-1 hover:underline transition-colors group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors  ">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

               
              </NavigationMenuList>
            </NavigationMenu>

          </div>

          {/* CTA Button and Right Panel Trigger */}
          <div className="hidden mt-12 md:flex items-center space-x-4">
           
            <Button 
              className="bg-primary hover:bg-secondary text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Talk To Us
            </Button>

             <Button 
              variant="outline" 
              onClick={() => setIsRightPanelOpen(true)}
              className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <Menu className="h-4 w-4 mr-2" />
            
            </Button>
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
                  <div className=" underline hover:underline ml-8 mr-6 flex items-center justify-between text-foreground font-medium py-2 cursor-pointer select-none" onClick={() => toggleMenu("about")}>
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
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 block ml-10 no-underline hover:underline"
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

                <Button className=" ml-8 mr-6 bg-transparent hover:bg-transparent text-foreground mt-2  item-center justify-center">Talk To Us</Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Right Slide Panel */}
          <Sheet open={isRightPanelOpen} onOpenChange={setIsRightPanelOpen}>
            <SheetContent side="right" className="w-[450px] sm:w-[500px] overflow-y-auto bg-card/95 backdrop-blur-xl border-l border-primary/20 shadow-2xl">
              <div className="flex flex-col h-full p-6 space-y-8">
                {/* Header Section */}
                <div className="text-center space-y-4">
                  <div className="relative">
                    <h1 className="text-2xl font-bold text-foreground mb-4 animate-fade-in">
                     Scalable Business for Startups
                    </h1>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-75"></div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-md animate-fade-in" style={{animationDelay: '0.2s'}}>
                   At Jethat, we turn ideas into fast, scalable execution that drives real growth.
                  </p>
                </div>

                {/* Decorative Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-card px-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground text-center flex items-center justify-center">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Follow Us
                    </span>
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="#" 
                      className="group relative p-4 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4 text-primary group-hover:text-primary transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </a>
                    <a 
                      href="#" 
                      className="group relative p-4 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4 text-primary group-hover:text-primary transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </a>
                    <a 
                      href="#" 
                      className="group relative p-4 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4 text-primary group-hover:text-primary transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </a>
                    <a 
                      href="#" 
                      className="group relative p-4 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                      aria-label="Dribbble"
                    >
                      <Dribbble className="h-4 w-4 text-primary group-hover:text-primary transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </a>
                  </div>
                </div>

                {/* Decorative Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-card px-4">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground text-center flex items-center justify-center">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Contact Info
                    </span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors duration-300">
                      <div className="p-2 rounded-full bg-primary/20">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground text-sm font-medium">+91-120-4188947
</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors duration-300">
                      <div className="p-2 rounded-full bg-primary/20">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground text-sm font-medium">info@jethat.in</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-card px-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Collaboration Message */}
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20 shadow-lg backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl"></div>
                    <p className="text-foreground font-semibold text-center text-sm relative z-10">
                      Looking for collaboration for your next creative project?
                    </p>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-60"></div>
                    <div className="absolute -top-2 -left-2 w-3 h-3 bg-secondary rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto space-y-4">
                  <Button 
                    onClick={() => setIsRightPanelOpen(false)}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold py-6"
                  >
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setIsRightPanelOpen(false)}
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    Close Panel
                  </Button>
                </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground",
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
