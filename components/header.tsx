import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h1 className="font-playfair text-2xl font-bold text-foreground tracking-tight">
            Thanh Thủy
          </h1>
          <p className="font-great-vibes text-lg text-accent">HOMESPA</p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-foreground hover:text-accent transition">
            Dịch vụ
          </Link>
          <Link href="#brands" className="text-sm font-medium text-foreground hover:text-accent transition">
            Thương hiệu
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-foreground hover:text-accent transition">
            Tại sao chúng tôi
          </Link>
          <Link href="#about" className="text-sm font-medium text-foreground hover:text-accent transition">
            Về chúng tôi
          </Link>
        </nav>

        <a
          href="#contact"
          className="inline-block px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-primary transition duration-300 shadow-md hover:shadow-lg"
        >
          Liên hệ
        </a>
      </div>
    </header>
  )
}
