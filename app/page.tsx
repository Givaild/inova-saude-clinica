import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, MapPin } from "lucide-react"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-blue-600">
                Cuidando da sua saúde com excelência
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Na Inova Saúde Clínica, oferecemos tratamentos personalizados com profissionais qualificados para
                garantir seu bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Agende uma Consulta</Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Profissionais de saúde"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <PhoneCall className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Telefone</h3>
                <p className="text-blue-600">(11) 9999-9999</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-blue-600">contato@inovasaude.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Endereço</h3>
                <p className="text-blue-600">Av. Principal, 123 - Centro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Schedule Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Agende sua consulta hoje mesmo</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Estamos prontos para cuidar da sua saúde com o melhor atendimento e profissionais qualificados.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">Agendar Consulta</Button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  )
}
