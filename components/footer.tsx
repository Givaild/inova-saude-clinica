import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpeg"
                alt="Inova Saúde Clínica"
                width={180}
                height={60}
                className="h-12 w-auto bg-white rounded-md p-1"
              />
            </Link>
            <p className="text-blue-100">Cuidando da sua saúde com excelência e tecnologia avançada.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-green-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-300">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-blue-100 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-blue-100 hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-blue-100 hover:text-white">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-blue-100 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-300">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/consultas" className="text-blue-100 hover:text-white">
                  Consultas Médicas
                </Link>
              </li>
              <li>
                <Link href="/servicos/exames" className="text-blue-100 hover:text-white">
                  Exames Laboratoriais
                </Link>
              </li>
              <li>
                <Link href="/servicos/cardiologia" className="text-blue-100 hover:text-white">
                  Cardiologia
                </Link>
              </li>
              <li>
                <Link href="/servicos/neurologia" className="text-blue-100 hover:text-white">
                  Neurologia
                </Link>
              </li>
              <li>
                <Link href="/servicos/fisioterapia" className="text-blue-100 hover:text-white">
                  Fisioterapia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-300">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-green-300 flex-shrink-0 mt-0.5" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-green-300 flex-shrink-0 mt-0.5" />
                <span>contato@inovasaude.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-300 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Av. Principal, 123 - Centro, São Paulo - SP, 01234-567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-12 pt-6 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Inova Saúde Clínica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
