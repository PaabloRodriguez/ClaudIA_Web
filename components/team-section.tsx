import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Award, BookOpen } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. José Manuel Jerez Aragonés",
      role: "Fundador & Director Científico",
      title: "Catedrático de Ciencias de la Computación e IA",
      institution: "Universidad de Málaga",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JoseJerez.jpg-Vbv9nvEFzYII9vOHpkweS2XmrwSbs3.jpeg",
      expertise: ["Machine Learning", "Biomedical AI", "Clinical NLP", "Healthcare Analytics"],
      achievements: [
        "Catedrático en Universidad de Málaga",
        "Especialista en IA aplicada a biomedicina",
        "Investigador en procesamiento de lenguaje natural médico",
        "Director de proyectos de investigación en salud digital",
      ],
      education: [
        "Catedrático - Universidad de Málaga",
        "Especialización en Inteligencia Artificial",
        "Investigación en IA Biomédica",
      ],
      contact: {
        email: "contacto@claudia-ai.com",
        linkedin: "jose-manuel-jerez",
      },
    },
  ]

  const collaborations = [
    {
      name: "Universidad de Málaga",
      role: "Institución Principal",
      specialty: "Departamento de Ciencias de la Computación",
      expertise: "Investigación en IA y Machine Learning",
    },
    {
      name: "Sector Sanitario",
      role: "Colaboraciones Potenciales",
      specialty: "Hospitales y Centros de Investigación",
      expertise: "Aplicación de IA en entornos clínicos",
    },
    {
      name: "Investigación Académica",
      role: "Proyectos de I+D",
      specialty: "Desarrollo de Tecnologías Sanitarias",
      expertise: "Innovación en IA Médica",
    },
  ]

  return (
    <section id="equipo" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Liderazgo Científico
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Equipo Fundador
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ClaudIA está liderada por expertos en inteligencia artificial aplicada a biomedicina, con amplia experiencia
            en investigación y desarrollo tecnológico.
          </p>
        </div>

        {teamMembers.map((member, index) => (
          <Card key={index} className="mb-12 md:mb-16 overflow-hidden border-0 shadow-2xl bg-white">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 lg:p-12 text-white">
                  <div className="text-center mb-6 md:mb-8">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 md:mb-6 border-4 border-white/20 object-cover"
                    />
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-emerald-400 font-medium mb-2 text-sm md:text-base">{member.role}</p>
                    <p className="text-slate-300 text-sm">{member.title}</p>
                    <p className="text-slate-400 text-sm">{member.institution}</p>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2 text-sm md:text-base">
                        <Award className="w-4 h-4" />
                        Perfil Profesional
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-4 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contacto
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs md:text-sm"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-6 md:p-8 lg:p-12">
                  <div className="grid grid-cols-1 gap-6 md:gap-8 h-full">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-base md:text-lg">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        Áreas de Especialización
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                        {member.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs md:text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <h4 className="font-bold text-slate-900 mb-4 text-base md:text-lg">Formación y Experiencia</h4>
                      <div className="space-y-3">
                        {member.education.map((edu, idx) => (
                          <div
                            key={idx}
                            className="text-sm md:text-base text-slate-600 pl-4 border-l-2 border-slate-200"
                          >
                            {edu}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-slate-900">
            Colaboraciones y Desarrollo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {collaborations.map((collab, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center text-white font-bold text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
                    {collab.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base md:text-lg">{collab.name}</h4>
                  <p className="text-emerald-600 font-medium text-sm mb-2">{collab.role}</p>
                  <p className="text-slate-600 text-sm mb-3">{collab.specialty}</p>
                  <Badge variant="outline" className="text-xs bg-slate-50">
                    {collab.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
