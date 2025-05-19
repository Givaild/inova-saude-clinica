import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente",
      content:
        "Excelente atendimento! Os profissionais são muito atenciosos e o ambiente é acolhedor. Recomendo a todos que buscam um serviço de qualidade.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Paciente",
      content:
        "Fiz tratamento na clínica e fiquei muito satisfeito com os resultados. A equipe é muito profissional e o atendimento é personalizado.",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      role: "Paciente",
      content:
        "Atendimento humanizado e de alta qualidade. Os médicos são muito competentes e explicam tudo detalhadamente. Me senti muito bem cuidada.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">O que nossos pacientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é o nosso maior orgulho. Confira alguns depoimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t border-gray-100 pt-4">
                <div>
                  <p className="font-medium text-blue-600">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
