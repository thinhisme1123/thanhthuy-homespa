'use client'

export function Brands() {
  const brands = [
    { name: 'Fusion Meso', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc_35Il4A4al43JVvCnl_vlUO1Cm5tiqLeQ&s' },
    { name: 'Presensa', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGm1UHhV0sjEbc0FTgS6hnXwK5kKTxJdd2FQ&s' },
    { name: 'FetoScell', logo: 'https://lona.vn/wp-content/uploads/2024/04/fetoscell.jpg' },
    { name: 'Infini', logo: 'https://edbeauty.vn/wp-content/uploads/2025/09/INFINI-logo-png-01.png' },
    { name: 'Dr.Different', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Hda92nXauB3SiPvPhtRAyN_ZFQszc-AJvQ&s' },
    { name: 'Obagi Medical', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwYfsfMDOl1I9Na06sRoxKqLskUs--gJ7vQ&s' },
    { name: 'Sesderma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4cA2QxGuFS7CjAiT_rvey4hklKmiNbyvWA&s' },
    { name: 'Ivatherm', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0aOTfpSiys9HJPhS10ufpvwHUdgNZbxevQ&s' },
    { name: 'Bioderma', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQ1ZAGglGFVI06yymO_aBNS3W_q9ysCnTBw&s' },
    { name: 'Christina', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOOGD2BafTQE9SsYiM_W1nziZPFsADQWdrg&s' },
    { name: 'Usolab', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKcsplD7kVtQ1uTq6Zd21rQ14-nxU8mIB4w&s' },
  ];

  return (
    <section id="brands" className="w-full py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M50 10 Q70 30 70 50 Q70 70 50 80 Q30 70 30 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Thương hiệu chính hãng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi sử dụng các sản phẩm từ những thương hiệu da liễu uy tín nhất trên thế giới
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              // Added 'group' and a minimum height (min-h-[180px] md:min-h-[220px]) to make the cards larger
              className="bg-background rounded-2xl border border-border p-8 shadow-md hover:shadow-lg hover:border-accent transition-all duration-300 flex flex-col items-center justify-center gap-6 group min-h-[180px] md:min-h-[220px]"
            >
              <img
                src={brand.logo}
                alt={`Logo của ${brand.name}`}
                // Increased height from h-12 to h-20
                className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
              {/* Increased text size to text-lg */}
              <p className="text-foreground text-lg font-medium text-center">{brand.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-2xl p-8 border border-border text-center">
          <p className="text-lg text-foreground mb-4">
            <span className="font-bold">100% Chính hãng</span> - Tất cả sản phẩm được nhập khẩu chính thức và lưu trữ trong điều kiện tối ưu
          </p>
          <p className="text-base text-muted-foreground">
            Chúng tôi cam kết sử dụng những sản phẩm tốt nhất cho làn da của bạn
          </p>
        </div>
      </div>
    </section>
  )
}
