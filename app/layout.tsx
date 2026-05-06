import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const _greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: 'Thanh Thủy HOMESPA - Chăm sóc da khoa học',
  description: 'Nơi làn da được yêu thương. Dịch vụ chăm sóc da cao cấp với dược mỹ phẩm chính hãng và phác đồ cá nhân hóa.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${_playfair.variable} ${_greatVibes.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
