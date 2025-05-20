import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

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
                className="bg-white rounded-md p-1"
              />
            </Link>
            <p className="text-blue-100">Cuidando da sua saúde com excelência.</p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/inovasaudeclinica/" target="_blanck" className="text-white hover:text-green-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61558432790281&locale=pt_BR" target="_blanck" className="text-white hover:text-green-300">
                <Facebook className="h-5 w-5" />
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
                <Link href="#sobre" className="text-blue-100 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-blue-100 hover:text-white">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-300">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="text-blue-100 hover:text-white">
                  Psicoterapia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-blue-100 hover:text-white">
                  Fonoaudiólogia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-blue-100 hover:text-white">
                  Pilates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-300">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-green-300 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5519981985048?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-100 hover:text-white"
                >
                  (19) 98198-5048
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-green-300 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:clinicainovasaude@hotmail.com"
                  className="text-blue-100 hover:text-white"
                >
                  clinicainovasaude@hotmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-300 flex-shrink-0 mt-0.5" />
                <a href="https://www.google.com/maps/place/Cl%C3%ADnica+INOVA+SA%C3%9ADE/@-22.8701518,-47.2111027,21z/data=!4m14!1m5!8m4!1e2!2s104670431304285629258!3m1!1e1!3m7!1s0x94c8b9549a3d0fb3:0x89bbd13acff7dd98!8m2!3d-22.8701032!4d-47.2110073!9m1!1b1!16s%2Fg%2F11w3f98bgk?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white"
                >
                  Rua. Olegário Bueno da Silva, 130 - Lot. Remanso Campineiro, Hortolândia-SP
                </a>
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
