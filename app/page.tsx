import Navbar       from '@/components/sections/Navbar'
import Hero         from '@/components/sections/Hero'
import Marquee      from '@/components/sections/Marquee'
import Bento        from '@/components/sections/Bento'
import Projects     from '@/components/sections/Projects'
import About        from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import CTA          from '@/components/sections/CTA'
import Contact      from '@/components/sections/Contact'
import Footer       from '@/components/sections/Footer'
import RevealWrapper from '@/components/RevealWrapper'

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <Hero />
      <Marquee />

      <RevealWrapper>
        <Bento />
      </RevealWrapper>

      <RevealWrapper>
        <Projects />
      </RevealWrapper>

      <RevealWrapper>
        <About />
      </RevealWrapper>

      <RevealWrapper>
        <CTA />
      </RevealWrapper>

      <RevealWrapper>
        <Contact />
      </RevealWrapper>

      <RevealWrapper>
        <Footer />
      </RevealWrapper>
    </div>
  )
}
