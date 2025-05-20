import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Bruna Evangelista Oliveira",
      role: "Paciente",
      content:
        "Clinica aconchegante, com profissionais maravilhosas carinhosas e acolhedoras, todos muito preparados para receber os pacientes e seus familiares, sempre com empatia e dedicação, é lindo de ver!",
      rating: 5,
    },
    {
      name: "Camila Sávio",
      role: "Paciente",
      content:
        "Ambiente acolhedor, terapia ocupacional e psicológica de primera classe! Espaço para a discussão multidisciplinar, projeto terapêutico singular padrão ouro... recomendo!",
      rating: 5,
    },
    {
      name: "Rosangela Castilho",
      role: "Paciente",
      content:
        "A clínica têm excelentes profissionais, inclusive a Psicóloga Nágila desempenha um excelente trabalho com os seus pacientes.",
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
