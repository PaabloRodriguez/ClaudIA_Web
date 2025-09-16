import Image from "next/image"
import { Mail, MapPin, Phone, University } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20">
      <div className="container py-20">
        <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-2 items-start">
          {/* Logo */}
          <div className="flex justify-start lg:justify-center">
            <Image 
              src="/images/claudia-log-recortado-removebg-preview.png"
              alt="ClaudIA Logo" 
              width={140} 
              height={90} 
              className="h-32 w-auto" 
            />
          </div>
          
          {/* Texto descriptivo */}
          <div className="flex flex-col justify-start space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empresa de base tecnológica de la Universidad de Málaga especializada en soluciones de IA para el análisis
              automatizado de historias clínicas electrónicas, transformando datos médicos en insights accionables.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
              <University className="h-3.5 w-3.5" />
              <span>Spin-off Universidad de Málaga</span>
            </div>
          </div>

          {/* Enlaces de empresa */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wide uppercase text-foreground">Empresa</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#nosotros" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                  Tecnología
                </a>
              </li>
              <li>
                <a href="#casos-uso" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#colaboradores" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                  Colaboradores
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wide uppercase text-foreground">Contacto</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground/60" />
                <div className="leading-relaxed">
                  <div>Universidad de Málaga</div>
                  <div>Málaga, España</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground/60" />
                <a href="mailto:jerezaragones@icloud.com" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
                  jerezaragones@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright y enlaces legales */}
        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground/80">
          <p>&copy; 2025 ClaudIA Insights. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
