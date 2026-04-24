import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhoFor from '@/components/WhoFor'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import WhyDifferent from '@/components/WhyDifferent'
import Close from '@/components/Close'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoFor />
        <HowItWorks />
        <SocialProof />
        <WhyDifferent />
        <Close />
      </main>
      <Footer />
      <ContactModal />
    </>
  )
}
