import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image src="/logo-claudia.png" alt="ClaudIA Logo" width={150} height={50} className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Empresa de base tecnológica de la Universidad de Málaga especializada en soluciones de IA para el análisis
              de historias clínicas electrónicas.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#nosotros" className="hover:text-foreground transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-foreground transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#colaboradores" className="hover:text-foreground transition-colors">
                  Colaboradores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Universidad de Málaga</li>
              <li>Málaga, España</li>
              <li>contacto@claudia-insights.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ClaudIA Insights. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
