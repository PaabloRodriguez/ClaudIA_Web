"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleContactClick = () => {
    window.location.href =
      "mailto:jerezaragones@icloud.com?subject=Consulta sobre ClaudIA Insights&body=Hola, me gustaría obtener más información sobre ClaudIA Insights."
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
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/claudia-logo-transparent.png"
            alt="ClaudIA Logo"
            width={200}
            height={65}
            className="h-8 md:h-12 lg:h-60 w-auto"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
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

        <div className="flex items-center gap-2 md:gap-4">
          <Button
            className="hidden sm:flex bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={handleContactClick}
          >
            Contactar
          </Button>

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
                <Button
                  className="mt-6 bg-primary hover:bg-primary/90 w-full"
                  onClick={() => {
                    handleContactClick()
                    setIsOpen(false)
                  }}
                >
                  Contactar
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
