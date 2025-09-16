"use client"

import { Button } from "@/components/ui/button"

export function SimpleHero() {
  return (
    <section
      id="inicio"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="gradient-text block mb-4">ClaudIA</span>
            <span className="text-foreground/90 text-3xl sm:text-4xl lg:text-5xl font-medium">
              Inteligencia Artificial Médica Avanzada
            </span>
          </h1>

          <p className="mb-10 text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
            Plataforma de IA de próxima generación que combina{" "}
            <span className="text-primary font-semibold">procesamiento de lenguaje natural</span>,
            <span className="text-accent font-semibold"> machine learning</span> y{" "}
            <span className="text-secondary font-semibold">LLMs especializados</span> para transformar automáticamente
            datos clínicos no estructurados en insights médicos accionables.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105 px-8 py-4 text-lg font-semibold border-0"
              onClick={() => {
                const element = document.getElementById("tecnologia")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Explorar Tecnología
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:shadow-lg transition-all duration-500 bg-background/80 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-foreground hover:text-primary"
              disabled
            >
              Demo (Próximamente)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
