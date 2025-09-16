import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, Shield, Cpu, Network, Database } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "LLMs Especializados",
    description:
      "Modelos de lenguaje de gran escala entrenados específicamente para el ámbito clínico español, adaptados al lenguaje médico local.",
    color: "primary",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Cpu,
    title: "Automatización Total",
    description:
      "Flujo completo desde documento clínico hasta resultado analítico, sin pasos intermedios ni intervención técnica.",
    color: "accent",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Shield,
    title: "Cumplimiento Normativo",
    description: "Instalación on-premise que garantiza soberanía de datos y cumplimiento con GDPR y LOPDGDD.",
    color: "primary",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Network,
    title: "Entorno Integrado",
    description:
      "Extracción, estructuración y análisis estadístico de datos clínicos en una sola plataforma unificada.",
    color: "secondary",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Database,
    title: "Minería de Textos Clínicos",
    description:
      "Procesamiento avanzado de informes médicos, evoluciones, anatomía patológica y resultados analíticos.",
    color: "primary",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    icon: Zap,
    title: "RWE en Tiempo Real",
    description:
      "Generación automática de evidencia de vida real (RWE) directamente utilizable por profesionales sanitarios.",
    color: "accent",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="caracteristicas"
      className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto text-center mb-12 md:mb-20 w-full">
          <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Tecnología</span> de Vanguardia
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed px-4 sm:px-8 md:px-16 lg:px-32">
            Plataforma modular e interoperable que combina{" "}
            <span className="text-primary font-semibold">minería de textos</span>,{" "}
            <span className="text-accent font-semibold">PLN biomédico</span> y{" "}
            <span className="text-secondary font-semibold">machine learning</span> para transformar automáticamente
            información clínica no estructurada.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background/90 backdrop-blur-sm hover:bg-background/95 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardContent className="p-6 md:p-8 relative z-10">
                <div
                  className={`mb-4 md:mb-6 rounded-2xl ${
                    feature.color === "primary"
                      ? "bg-primary/10 border border-primary/20 group-hover:bg-primary/20"
                      : feature.color === "accent"
                        ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                        : "bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20"
                  } p-3 md:p-4 w-fit transition-all duration-500 group-hover:scale-110 tech-glow`}
                >
                  <feature.icon
                    className={`h-6 w-6 md:h-8 md:w-8 ${
                      feature.color === "primary"
                        ? "text-primary"
                        : feature.color === "accent"
                          ? "text-accent"
                          : "text-secondary"
                    } transition-transform duration-500 group-hover:rotate-12`}
                  />
                </div>
                <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-balance group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </section>
  )
}
