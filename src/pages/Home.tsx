import { Helmet } from 'react-helmet-async'

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
import Contact from './Contact'
import ContactComponent from '../components/ContactComponent'


export default function Home() {
  return (
    <>
     <Helmet>
        <title>Best Risk Management Company & Consulting Firm | ProbMatrix</title>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href="https://probmatrix.io" />
        <meta
          name="description"
          content="ProbMatrix is a global risk management company offering risk modeling, automation, IFRS 9 advisory, model validation, stress testing and financial risk solutions."
        />
      </Helmet>
      <Hero />
      <TrustedBy />
      <AboutTeaser />
      <ServicesGrid />
      <WhyChooseUs />
      <IndustriesWeServe />
      <Statistics />
      <Testimonials />
      <FAQ />
      <ContactComponent />
      <FinalCTA />
    </>
  )
}
