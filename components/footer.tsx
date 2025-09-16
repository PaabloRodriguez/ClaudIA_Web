import Image from "next/image"
import { Mail, MapPin, Phone, University } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-2 flex flex-row items-start">
            {/* Logo a la izquierda */}
            <Image 
              src="/images/claudia-log-recortado-removebg-preview.png"
              alt="ClaudIA Logo" 
              width={120} 
              height={80} 
              className="h-40 w-auto mb-0 mr-6" 
            />
            {/* Texto a la derecha del logo */}
            <div className="flex flex-col">
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-6">
                Empresa de base tecnológica de la Universidad de Málaga especializada en soluciones de IA para el análisis
                automatizado de historias clínicas electrónicas, transformando datos médicos en insights accionables.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <University className="h-4 w-4" />
                <span>Spin-off Universidad de Málaga</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold">Empresa</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#nosotros" className="hover:text-foreground transition-colors hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-foreground transition-colors hover:underline">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#casos-uso" className="hover:text-foreground transition-colors hover:underline">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-foreground transition-colors hover:underline">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#colaboradores" className="hover:text-foreground transition-colors hover:underline">
                  Colaboradores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-base font-semibold">Contacto</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Universidad de Málaga</div>
                  <div>Málaga, España</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:jerezaragones@icloud.com" className="hover:text-foreground transition-colors hover:underline">
                  jerezaragones@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 ClaudIA Insights. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors hover:underline">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors hover:underline">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
