export function Hero() {
  return (
    <section className="pt-4 sm:pt-6 mt-[env(safe-area-inset-top)] w-full min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
      {/* Decorative leaf elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M50 10 Q70 30 70 50 Q70 70 50 80 Q30 70 30 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>

      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground leading-tight">
              Thanh Thủy
            </h1>
            <p className="text-3xl font-great-vibes text-accent">
              HOMESPA
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Chăm sóc da khoa học với phác đồ cá nhân hóa
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Nơi làn da được yêu thương. Dịch vụ chăm sóc da cao cấp với dược mỹ phẩm chính hãng và sự tận tâm của chuyên gia da liễu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent hover:text-foreground transition duration-300">
                Đặt lịch ngay
              </button>
              <button className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition duration-300 rounded-full font-medium">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-video">
              <img
                src="/images/banner.jpg"
                alt="Chuyên gia làm việc tại spa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
