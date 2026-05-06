import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { About } from '@/components/about'
import { Brands } from '@/components/brands'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Brands />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
