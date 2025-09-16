"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Database, Stethoscope, Cpu, Network, Zap } from "lucide-react"

export function HeroSection() {
  const handleExploreClick = () => {
    document.getElementById("tecnologia")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactClick = () => {
    window.location.href =
      "mailto:jerezaragones@icloud.com?subject=Consulta sobre ClaudIA Insights&body=Hola, me gustaría obtener más información sobre ClaudIA Insights."
  }

  return (
    <section
      id="inicio"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto text-center w-full">
          <div className="mb-6 sm:mb-8 md:mb-12 hidden sm:flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-8 flex-wrap gap-2 sm:gap-3 md:gap-4">
            <div className="tech-float rounded-xl sm:rounded-2xl bg-primary/10 p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-primary/20 tech-glow">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-primary" />
            </div>
            <div
              className="tech-float rounded-xl sm:rounded-2xl bg-accent/10 p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-accent/20"
              style={{ animationDelay: "1s" }}
            >
              <Cpu className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-accent" />
            </div>
            <div
              className="tech-float rounded-xl sm:rounded-2xl bg-secondary/10 p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-secondary/20"
              style={{ animationDelay: "2s" }}
            >
              <Network className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-secondary" />
            </div>
            <div
              className="tech-float rounded-xl sm:rounded-2xl bg-primary/10 p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-primary/20"
              style={{ animationDelay: "0.5s" }}
            >
              <Database className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-primary" />
            </div>
            <div
              className="tech-float rounded-xl sm:rounded-2xl bg-accent/10 p-2 sm:p-3 md:p-4 backdrop-blur-sm border border-accent/20"
              style={{ animationDelay: "1.5s" }}
            >
              <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-accent" />
            </div>
          </div>

          <h1 className="mb-4 sm:mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold tracking-tight text-balance px-2 sm:px-0">
            <span className="gradient-text block mb-1 sm:mb-2 md:mb-4">ClaudIA</span>
            <span className="text-foreground/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-medium">
              Inteligencia Artificial Médica Avanzada
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-pretty mx-auto leading-relaxed px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
            Plataforma de IA de próxima generación que combina{" "}
            <span className="text-primary font-semibold">procesamiento de lenguaje natural</span>,
            <span className="text-accent font-semibold"> machine learning</span> y{" "}
            <span className="text-secondary font-semibold">LLMs especializados</span> para transformar automáticamente
            datos clínicos no estructurados en insights médicos accionables.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4 sm:px-6 md:px-0 max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold border-0 w-full sm:w-auto min-h-[44px]"
              onClick={handleExploreClick}
            >
              <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Explorar Tecnología
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:shadow-lg transition-all duration-500 bg-background/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-foreground hover:text-primary w-full sm:w-auto min-h-[44px]"
              onClick={handleContactClick}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[1000px] w-[1000px] rounded-full bg-gradient-to-r from-primary/10 via-accent/8 to-secondary/10 blur-3xl animate-pulse" />
        </div>
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-accent/8 to-primary/8 blur-2xl tech-float" />
        </div>
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2">
          <div
            className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-secondary/6 to-accent/6 blur-2xl tech-float"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </div>
    </section>
  )
}
