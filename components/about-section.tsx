import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Sobre a Inova Saúde"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Sobre a Inova Saúde</h2>
            <p className="text-gray-600">
              A Inova Saúde Clínica nasceu com o propósito de oferecer serviços de saúde de alta qualidade, combinando
              tecnologia avançada com atendimento humanizado. Nossa equipe é formada por profissionais altamente
              qualificados e comprometidos com o bem-estar dos pacientes.
            </p>
            <p className="text-gray-600">
              Acreditamos que cada paciente é único e merece um tratamento personalizado. Por isso, desenvolvemos
              protocolos específicos para cada caso, garantindo os melhores resultados.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-600 text-xl mb-2">Missão</h3>
                <p className="text-gray-600">Promover saúde e bem-estar com excelência e humanização.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-600 text-xl mb-2">Visão</h3>
                <p className="text-gray-600">Ser referência em atendimento e inovação na área da saúde.</p>
              </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Conheça Nossa História</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
