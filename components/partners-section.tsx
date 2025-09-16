import { Card, CardContent } from "@/components/ui/card"
import { Building2, Heart, Users2, Briefcase } from "lucide-react"

const partners = [
  {
    category: "Hospitales SNS",
    icon: Building2,
    items: [
      "Hospital Clínico Universitario Virgen de la Victoria (Málaga)",
      "Hospitales en Andalucía, Galicia, Castilla y León",
      "Hospitales en Madrid y Comunidad Valenciana",
      "Sistema Galén v4.0 desplegado en UGC Oncología",
    ],
  },
  {
    category: "Sociedades Médicas",
    icon: Heart,
    items: [
      "Sociedad Española de Oncología Médica (SEOM)",
      "Grupo Español de Investigación en Cáncer de Mama (GEICAM)",
      "Compromiso de financiación SEOM post-constitución",
    ],
  },
  {
    category: "Servicios de Salud",
    icon: Users2,
    items: ["Servicio Gallego de Salud (SERGAS)", "Pilotos validados en entornos reales", "Red REVO (socio fundador)"],
  },
  {
    category: "Sector Privado",
    icon: Briefcase,
    items: [
      "Pfizer - Contratos de transferencia",
      "FIMABIS - Colaboración tecnológica",
      "Contratos valorados en +800.000€",
    ],
  },
]

export function PartnersSection() {
  return (
    <section id="colaboradores" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto text-center mb-8 sm:mb-12 md:mb-16 w-full">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance px-2 sm:px-0">
            Colaboraciones Estratégicas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed px-2 sm:px-8 md:px-16 lg:px-32">
            Red consolidada de alianzas con instituciones académicas, clínicas y del sector privado que garantizan la
            viabilidad, aplicabilidad y escalabilidad de nuestras soluciones.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4 rounded-full bg-secondary/10 p-2.5 sm:p-3 w-fit">
                  <partner.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">{partner.category}</h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {partner.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
