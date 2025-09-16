import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Shield, Zap, Network, Cpu } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      icon: Brain,
      title: "LLMs Especializados",
      description:
        "Modelos de lenguaje entrenados específicamente en terminología médica y protocolos clínicos del Sistema Nacional de Salud",
      details: ["BERT-Clinical", "GPT-Med", "BioBERT", "ClinicalBERT"],
      complexity: "Avanzado",
    },
    {
      icon: Database,
      title: "Arquitectura de Datos",
      description: "Pipeline ETL optimizado para historias clínicas no estructuradas con procesamiento en tiempo real",
      details: ["Apache Kafka", "Elasticsearch", "MongoDB", "Redis Cache"],
      complexity: "Empresarial",
    },
    {
      icon: Shield,
      title: "Seguridad & Cumplimiento",
      description: "Infraestructura certificada RGPD con encriptación end-to-end y auditoría completa de accesos",
      details: ["ISO 27001", "RGPD", "ENS Alto", "HIPAA Ready"],
      complexity: "Crítico",
    },
    {
      icon: Network,
      title: "Integración Hospitalaria",
      description: "APIs RESTful y HL7 FHIR para integración seamless con sistemas HIS/RIS existentes",
      details: ["HL7 FHIR R4", "DICOM", "IHE XDS", "SNOMED CT"],
      complexity: "Interoperabilidad",
    },
    {
      icon: Zap,
      title: "Procesamiento en Tiempo Real",
      description: "Motor de inferencia con latencia <200ms para análisis instantáneo de documentos clínicos",
      details: ["Apache Spark", "TensorFlow Serving", "ONNX Runtime", "CUDA Acceleration"],
      complexity: "Alto Rendimiento",
    },
    {
      icon: Cpu,
      title: "MLOps & DevOps",
      description: "Pipeline CI/CD automatizado con monitorización continua de modelos y drift detection",
      details: ["MLflow", "Kubeflow", "Docker", "Kubernetes"],
      complexity: "Producción",
    },
  ]

  return (
    <section id="tecnologia" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Stack Tecnológico
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Arquitectura de Vanguardia
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Infraestructura enterprise-grade diseñada para el entorno sanitario más exigente, con certificaciones de
            seguridad y rendimiento validadas en producción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {tech.complexity}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">{tech.title}</h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{tech.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700 mb-3">Tecnologías Core:</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.details.map((detail, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-2xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Especificaciones Técnicas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-200">Procesamiento de Documentos</span>
                  <span className="font-bold text-emerald-300">Alto Volumen</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-200">Precisión de Extracción</span>
                  <span className="font-bold text-emerald-300">Alta Precisión</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-200">Tiempo de Respuesta</span>
                  <span className="font-bold text-emerald-300">Tiempo Real</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-200">Disponibilidad</span>
                  <span className="font-bold text-emerald-300">24/7</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h4 className="text-xl font-bold mb-4 text-emerald-300">Certificaciones & Compliance</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-white">ISO</div>
                  <div className="text-sm text-slate-200">27001</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-white">ENS</div>
                  <div className="text-sm text-slate-200">Nivel Alto</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-white">RGPD</div>
                  <div className="text-sm text-slate-200">Compliant</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                  <div className="text-2xl font-bold text-white">HIPAA</div>
                  <div className="text-sm text-slate-200">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
