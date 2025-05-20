import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clínica Inova Saúde | Especialidades em Hortolândia',
  description: 'A Clínica Inova Saúde oferece atendimento em Hortolândia. Agende sua consulta conosco!',
  generator: 'Next.js',
  keywords: ['Clínica Médica', 'Hortolândia', 'Psicologia', 'Consulta', 'Inova Saúde', 'Fonoaudiologia', 'Pilates'],
  authors: [{ name: 'Clínica Inova Saúde', url: 'https://www.seusite.com.br' }],
  applicationName: 'Clínica Inova Saúde',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  creator: 'Inova Saúde',
  publisher: 'Inova Saúde',
  openGraph: {
    title: 'Clínica Inova Saúde | Especialidades em Hortolândia',
    description: 'Conheça a Clínica Inova Saúde. Atendimento humanizado com qualidade e compromisso com sua saúde.',
    url: 'https://www.seusite.com.br',
    siteName: 'Clínica Inova Saúde',
    images: [
      {
        url: '/fachada.jpg', // imagem usada em compartilhamentos
        width: 1200,
        height: 630,
        alt: 'Clínica Inova Saúde Fachada',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
