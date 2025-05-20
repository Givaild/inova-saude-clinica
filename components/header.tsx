"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Inova Saúde Clínica" width={120} height={80} className="-translate-y-5" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Início
            </Link>
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Serviços <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link
                    href="#servicos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Psicoterapia individual
                  </Link>
                  <Link
                    href="#servicos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Casal e família
                  </Link>
                  <Link
                    href="#servicos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Infantil e Adolescente
                  </Link>
                  <Link
                    href="#servicos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Relacionamentos Pessoais e Profissionais
                  </Link>

                  <Link
                    href="#servicos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Fonoaudiólogia
                  </Link>
                  <Link
                    href="#servicos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Pilates
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium">
              Sobre Nós
            </Link>


          </nav>

          <div className="hidden md:flex">
            <Link href="https://wa.me/5519981985048?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" target="_blank" >
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Agendar Consulta</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Início
          </Link>
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Serviços{" "}
              <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "transform rotate-180")} />
            </button>
            <div
              className={cn(
                "pl-4 space-y-2 transition-all duration-300",
                servicesOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 overflow-hidden",
              )}
            >
              <Link
                href="#servicos"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Psicoterapia individual
              </Link>
              <Link
                href="#servicos"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Casal e família
              </Link>
              <Link
                href="#servico"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Infantil e Adolescente
              </Link>
              <Link
                href="#servicos"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Relacionamentos Pessoais e Profissionais
              </Link>
              <Link
                href="#servicos"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Psicanálise
              </Link>
              <Link
                href="#servicos"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonoaudióloga
              </Link>
              <Link
                href="#servicos"
                className="block py-2 text-gray-600 hover:text-green-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pilates
              </Link>
            </div>
          </div>
          <Link
            href="#sobre"
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre Nós
          </Link>
          <Link href="https://wa.me/5519981985048?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" target="_blank" >
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
