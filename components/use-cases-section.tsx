import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, FileText, Activity } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: FileText,
      title: "Procesamiento de Historias Clínicas",
      subtitle: "Análisis Automatizado de Documentación Médica",
      description:
        "ClaudIA puede procesar y analizar historias clínicas de forma automatizada, extrayendo información relevante y identificando patrones clínicos importantes para apoyar la toma de decisiones médicas.",
      capabilities: [
        "Extracción de entidades médicas",
        "Identificación de patrones clínicos",
        "Análisis de terminología médica",
        "Procesamiento de lenguaje natural médico",
      ],
      technologies: ["NLP Médico", "Terminología Clínica", "Machine Learning"],
      benefits: "Automatización del análisis documental",
    },
    {
      icon: Activity,
      title: "Monitorización de Parámetros Clínicos",
      subtitle: "Seguimiento Inteligente de Datos de Salud",
      description:
        "Sistema de monitorización que puede analizar parámetros clínicos en tiempo real, detectando anomalías y patrones que requieren atención médica especializada.",
      capabilities: [
        "Análisis de parámetros vitales",
        "Detección de anomalías",
        "Alertas inteligentes",
        "Seguimiento longitudinal",
      ],
      technologies: ["ML en Tiempo Real", "Análisis Predictivo", "Sistemas de Alerta"],
      benefits: "Detección temprana de eventos clínicos",
    },
    {
      icon: Brain,
      title: "Apoyo a la Investigación Biomédica",
      subtitle: "Herramientas para Investigación Clínica",
      description:
        "ClaudIA facilita la investigación biomédica mediante el análisis automatizado de grandes volúmenes de datos clínicos, acelerando el proceso de generación de evidencia científica.",
      capabilities: [
        "Análisis de cohortes",
        "Identificación de biomarcadores",
        "Estudios epidemiológicos",
        "Análisis de supervivencia",
      ],
      technologies: ["Analytics Avanzado", "Bioestadística", "Data Mining Médico"],
      benefits: "Aceleración de la investigación traslacional",
    },
  ]

  return (
    <section id="casos-uso" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium bg-white">
            Aplicaciones Potenciales
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Casos de Uso de ClaudIA
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Aplicaciones potenciales de ClaudIA en el ámbito sanitario, diseñadas para mejorar la eficiencia y precisión
            en el análisis de datos médicos.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-6 md:p-8 lg:p-12">
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                        <useCase.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900">{useCase.title}</h3>
                          <Badge variant="secondary" className="text-xs w-fit">
                            {useCase.benefits}
                          </Badge>
                        </div>
                        <p className="text-emerald-600 font-medium mb-3 md:mb-4 text-sm md:text-base">
                          {useCase.subtitle}
                        </p>
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg">{useCase.description}</p>
                      </div>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <p className="text-sm font-medium text-slate-700 mb-3">Capacidades Principales:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {useCase.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                            {capability}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 md:mb-8">
                      <p className="text-sm font-medium text-slate-700 mb-3">Tecnologías Aplicadas:</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-slate-50 hover:bg-blue-50 transition-colors text-xs md:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-6 md:p-8 lg:p-12 text-white">
                    <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-emerald-400">Beneficios Esperados</h4>
                    <div className="space-y-6 md:space-y-8">
                      <div className="group/metric">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover/metric:text-emerald-400 transition-colors">
                          Automatización
                        </div>
                        <div className="text-slate-300 text-sm leading-relaxed">
                          Procesamiento automatizado de datos médicos
                        </div>
                      </div>
                      <div className="h-px bg-slate-700"></div>

                      <div className="group/metric">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover/metric:text-emerald-400 transition-colors">
                          Precisión
                        </div>
                        <div className="text-slate-300 text-sm leading-relaxed">
                          Análisis preciso de patrones clínicos
                        </div>
                      </div>
                      <div className="h-px bg-slate-700"></div>

                      <div className="group/metric">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover/metric:text-emerald-400 transition-colors">
                          Eficiencia
                        </div>
                        <div className="text-slate-300 text-sm leading-relaxed">Optimización de procesos clínicos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl border border-slate-100">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-slate-900">Desarrollo Académico</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Universidad</div>
                <div className="text-slate-600">de Málaga</div>
                <div className="text-sm text-slate-500 mt-1">Institución Líder</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">Investigación</div>
                <div className="text-slate-600">Activa</div>
                <div className="text-sm text-slate-500 mt-1">En Desarrollo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">IA Médica</div>
                <div className="text-slate-600">Especializada</div>
                <div className="text-sm text-slate-500 mt-1">Área de Enfoque</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
