"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTASection() {
  const handleContactClick = () => {
    window.location.href =
      "mailto:jerezaragones@icloud.com?subject=Consulta sobre ClaudIA Insights&body=Hola, me gustaría obtener más información sobre ClaudIA Insights."
  }

  return (
    <section className="py-20">
      <div className="container">
        <Card className="border-0 bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              ¿Listo para Transformar tus Datos Clínicos?
            </h2>
            <p className="mb-8 text-lg opacity-90 text-pretty max-w-2xl mx-auto leading-relaxed">
              Descubre cómo ClaudIA puede ayudar a tu institución a aprovechar al máximo la información contenida en las
              historias clínicas electrónicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" disabled>
                Demo (Próximamente)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={handleContactClick}
              >
                Contactar
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>jerezaragones@icloud.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+34 952 13 71 00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
