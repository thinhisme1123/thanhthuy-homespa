export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M50 10 Q70 30 70 50 Q70 70 50 80 Q30 70 30 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Về Thanh Thủy HOMESPA
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Thanh Thủy HOMESPA là một không gian chuyên biệt cho chăm sóc da cao cấp, nơi công nghệ hiện đại kết hợp với chuyên môn và tâm huyết.
              </p>
              
              <p>
                Chúng tôi cam kết sử dụng các sản phẩm dược mỹ phẩm chính hãng từ các thương hiệu danh tiếng, kết hợp với các phương pháp chăm sóc da khoa học để mang lại kết quả tốt nhất.
              </p>
              
              <p>
                Với đội ngũ chuyên viên tâm huyết và giàu kinh nghiệm, chúng tôi hiểu rằng mỗi làn da đều có nhu cầu riêng. Vì vậy, mỗi khách hàng sẽ nhận được phác đồ chăm sóc được cá nhân hóa và tư vấn tỉ mỉ.
              </p>
              
              <p>
                Đến Thanh Thủy, bạn sẽ tìm thấy một môi trường thư giãn, yên tĩnh nơi làn da của bạn được yêu thương và chăm sóc một cách tận tâm nhất.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent hover:text-primary transition duration-300">
                Liên hệ ngay
              </button>
              <button className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition duration-300 rounded-full font-medium">
                Xem thêm
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-muted border border-border">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03cb5f913?w=600&h=600&fit=crop"
                alt="Không gian spa sang trọng"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
