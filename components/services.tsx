import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, HandHeart, Baby, NotebookPen, Speech, Dumbbell } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <UserRound className="h-10 w-10 text-green-500" />,
      title: "Psicoterapia individual",
      description: "Atendimento personalizado e individual com o objetivo de promover autoconhecimento e fortalecimento emocional.",
    },
    {
      icon: <HandHeart className="h-10 w-10 text-blue-500" />,
      title: "Casal e família",
      description: "A terapia de casal e família busca aprimorar a comunicação e resolver conflitos, fortalecendo os vínculos entre os participantes.",
    },
    {
      icon: <Baby className="h-10 w-10 text-green-500" />,
      title: "Infantil e Adolescente",
      description: "Um espaço acolhedor e seguro para crianças a partir dos 5 anos e adolescentes, focado no desenvolvimento emocional, social e comportamental.",
    },
    {
      icon: <NotebookPen className="h-10 w-10 text-blue-500" />,
      title: "Relacionamentos Pessoais e Profissionais",
      description: "Essa especialidade explora os desafios nas relações interpessoais, ajudando a identificar padrões de comportamento que dificultam conexões saudáveis.",
    },
    {
      icon: <Speech className="h-10 w-10 text-green-500" />,
      title: "Fonoaudióloga",
      description: "Avaliação e tratamento de comunicação oral, voz, audição, motricidade orofacial e deglutição, com abordagem personalizada.",
    }, {
      icon: <Dumbbell className="h-10 w-10 text-blue-500" />,
      title: "Pilates",
      description: "Método de exercícios que melhora postura, flexibilidade, força e consciência corporal, aliando respiração e movimento para prevenção e reabilitação.",
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
