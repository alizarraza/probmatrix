import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import AboutTeaser from '../components/AboutTeaser'
import ServicesGrid from '../components/ServicesGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import IndustriesWeServe from '../components/IndustriesWeServe'
import Statistics from '../components/Statistics'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutTeaser />
      <ServicesGrid />
      <WhyChooseUs />
      <IndustriesWeServe />
      <Statistics />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
