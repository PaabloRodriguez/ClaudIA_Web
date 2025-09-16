import { Card, CardContent } from "@/components/ui/card"
import { University, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto text-center mb-8 sm:mb-12 md:mb-16 w-full">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance px-2 sm:px-0">
            Sobre ClaudIA
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed px-2 sm:px-8 md:px-16 lg:px-32">
            Empresa de base tecnológica liderada por el Dr. José Manuel Jerez Aragonés, Catedrático de la Universidad de
            Málaga con más de 15 años especializándose en IA aplicada a biomedicina y análisis de datos clínicos no
            estructurados.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 rounded-full bg-primary/10 p-2.5 sm:p-3 w-fit">
                <University className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold">Respaldo Académico</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Más de 50 publicaciones indexadas en JCR, índice H de 20, y 6 tesis doctorales dirigidas. Tecnología
                validada en el sistema Galén v4.0 desplegado en hospitales reales.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 rounded-full bg-secondary/10 p-2.5 sm:p-3 w-fit">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold">Misión</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Generar evidencia de vida real (RWE) automáticamente desde historias clínicas electrónicas, facilitando
                la medicina basada en evidencia y la toma de decisiones clínicas informadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm md:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 rounded-full bg-primary/10 p-2.5 sm:p-3 w-fit">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold">Impacto Real</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Desplegado en hospitales del SNS, con colaboraciones activas con SEOM, GEICAM, Pfizer y FIMABIS.
                Contratos de transferencia valorados en más de 800.000€.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
