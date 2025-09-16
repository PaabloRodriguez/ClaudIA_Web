"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactClick = () => {
    console.log("Botón contactar clickeado") // Debug
    window.location.assign("mailto:jerezaragones@icloud.com?subject=Consulta%20sobre%20ClaudIA%20Insights&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20ClaudIA%20Insights.")
  }

  const navigationItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#tecnologia", label: "Tecnología" },
    { href: "#casos-uso", label: "Casos de Uso" },
    { href: "#equipo", label: "Equipo" },
    { href: "#colaboradores", label: "Colaboradores" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-auto py-4 items-center justify-between max-w-[1200px] mx-auto w-full">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Image
            src="/images/claudia-log-recortado-removebg-preview.png"
            alt="ClaudIA Logo"
            width={160}
            height={45}
            className="h-25 w-auto"
          />
        </div>

        {/* Menú centrado */}
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-all duration-300 hover:text-primary hover:scale-105 relative group"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Botón a la derecha y menú móvil */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="mailto:jerezaragones@icloud.com?subject=Consulta sobre ClaudIA Insights&body=Hola, me gustaría obtener más información sobre ClaudIA Insights."
            className="hidden sm:flex bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-primary-foreground"
          >
            Contactar
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-lg hover:bg-muted"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:jerezaragones@icloud.com?subject=Consulta sobre ClaudIA Insights&body=Hola, me gustaría obtener más información sobre ClaudIA Insights."
                  className="mt-6 bg-primary hover:bg-primary/90 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Contactar
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}