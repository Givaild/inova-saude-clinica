import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Stethoscope, Microscope, Brain, UserCheck } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-green-500" />,
      title: "Consultas Médicas",
      description: "Atendimento com especialistas em diversas áreas da medicina para diagnóstico e tratamento.",
    },
    {
      icon: <Microscope className="h-10 w-10 text-blue-500" />,
      title: "Exames Laboratoriais",
      description: "Realizamos diversos tipos de exames com resultados rápidos e precisos.",
    },
    {
      icon: <Heart className="h-10 w-10 text-green-500" />,
      title: "Cardiologia",
      description: "Avaliação, diagnóstico e tratamento de doenças relacionadas ao coração.",
    },
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: "Neurologia",
      description: "Especialistas no diagnóstico e tratamento de doenças do sistema nervoso.",
    },
    {
      icon: <Activity className="h-10 w-10 text-green-500" />,
      title: "Fisioterapia",
      description: "Reabilitação física com técnicas modernas e equipamentos de última geração.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-blue-500" />,
      title: "Check-up Completo",
      description: "Avaliação completa da sua saúde para prevenção e diagnóstico precoce.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços médicos e tratamentos para cuidar da sua saúde com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-blue-600">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
