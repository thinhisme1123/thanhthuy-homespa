'use client'

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M50 10 Q70 30 70 50 Q70 70 50 80 Q30 70 30 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Liên hệ chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Đặt lịch và nhận tư vấn miễn phí từ các chuyên gia da liễu của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Zalo */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-accent transition-all text-center group">
            <div className="mb-6 flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/3840px-Icon_of_Zalo.svg.png"
                alt="Zalo Icon"
                className="h-[80px] w-[80px] group-hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Zalo</h3>
            <p className="text-muted-foreground mb-6">
              Chat nhanh chóng và đặt lịch hẹn
            </p>
            <a href="https://zalo.me/0765367291" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
              Nhắn tin Zalo
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-accent transition-all text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">Facebook</h3>
            <p className="text-muted-foreground mb-6">
              Xem hình ảnh và nhận cập nhật mới nhất
            </p>
            <a href="https://web.facebook.com/share/1DoFRK3NBc/?mibextid=wwXIfr&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="inline-block w-full px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors">
              Theo dõi Facebook
            </a>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-muted rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Điện thoại</p>
              <p className="text-xl font-bold text-foreground">+84 765 367 291</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Giờ hoạt động</p>
              <p className="text-xl font-bold text-foreground">9:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 6</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Địa chỉ</p>
              <p className="text-xl font-bold text-foreground">Bình Chánh, Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
