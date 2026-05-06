'use client'

import { useState } from 'react'

const serviceCategories = [
  {
    id: 'basic',
    title: 'Chăm sóc cơ bản',
    services: [
      { name: 'Nặn mụn cơ bản', price: '300K' },
      { name: 'Nặn mụn cấy diệp lục', price: '550K' },
      { name: 'Nặn mụn detox Organic', price: '600K' },
      { name: 'Nặn mụn detox 4A Christina', price: '600K' },
      { name: 'Hydra Skin', price: '600K' },
      { name: 'Derma Planing', price: '700K' },
    ]
  },
  {
    id: 'advanced',
    title: 'Chăm sóc chuyên sâu',
    services: [
      { name: 'Glow Peel', price: '800K' },
      { name: 'White Skin', price: '1,200K' },
      { name: 'Enzyme Therapy', price: '1,200K' },
    ]
  },
  {
    id: 'intensive',
    title: 'Peel & tái tạo da',
    services: [
      { name: 'Bio Peel', price: '1,300K' },
      { name: 'Deep Peel', price: '2,500K' },
      { name: 'Ocean Skin Recovery', price: '2,500K' },
      { name: 'Micro Needling', price: '3,000K' },
    ]
  }
]

export function Services() {
  const [activeCategory, setActiveCategory] = useState('basic')

  const active = serviceCategories.find(cat => cat.id === activeCategory)

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M50 10 Q70 30 70 50 Q70 70 50 80 Q30 70 30 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Các dịch vụ chăm sóc da chuyên nghiệp được thiết kế riêng cho nhu cầu của bạn
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                activeCategory === category.id
                  ? 'bg-foreground text-background hover:bg-foreground/90'
                  : 'border-2 border-border text-foreground hover:border-accent'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="bg-muted rounded-3xl border border-border p-8 sm:p-12 shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-8">
            {active?.title}
          </h3>
          
          <div className="space-y-4">
            {active?.services.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between py-4 px-4 bg-background rounded-2xl hover:shadow-md transition-shadow">
                <span className="text-foreground font-medium">{service.name}</span>
                <span className="text-accent font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent hover:text-primary transition duration-300">
            Xem tất cả dịch vụ
          </button>
        </div>
      </div>
    </section>
  )
}
