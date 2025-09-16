"use client"

import { Button } from "@/components/ui/button"

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/images/claudia-logo-transparent.png" alt="ClaudIA Insights Logo" className="h-12 w-auto" />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <a
            href="#inicio"
            className="transition-all duration-300 hover:text-primary hover:scale-105 relative group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="transition-all duration-300 hover:text-primary hover:scale-105 relative group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Nosotros
          </a>
          <a
            href="#casos-uso"
            className="transition-all duration-300 hover:text-primary hover:scale-105 relative group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("casos-uso")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Casos de Uso
          </a>
          <a
            href="#equipo"
            className="transition-all duration-300 hover:text-primary hover:scale-105 relative group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("equipo")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Equipo
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:jerezaragones@icloud.com">Contactar</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
