import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Thesis from '@/components/Thesis'
import WhatWeDo from '@/components/WhatWeDo'
import HowWeWork from '@/components/HowWeWork'
import Proof from '@/components/Proof'
import Team from '@/components/Team'
import Close from '@/components/Close'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <WhatWeDo />
        <HowWeWork />
        <Proof />
        <Team />
        <Close />
      </main>
      <Footer />
      <ContactModal />
    </>
  )
}
