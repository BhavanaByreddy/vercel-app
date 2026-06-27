import { Hero } from '@/components/hero'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Services } from '@/components/services'
import { AdvancedCare } from '@/components/advanced-care'
import { HowItWorks } from '@/components/how-it-works'
import { Specialties } from '@/components/specialties'
import { EmergencyCare } from '@/components/emergency-care'
import { Financing } from '@/components/financing'
import { Testimonials } from '@/components/testimonials'
import { Facility } from '@/components/facility'
import { Faq } from '@/components/faq'
import { ContactFooter } from '@/components/contact-footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <WhyChooseUs />
      <Services />
      <AdvancedCare />
      <HowItWorks />
      <Specialties />
      <EmergencyCare />
      <Financing />
      <Testimonials />
      <Facility />
      <Faq />
      <ContactFooter />
    </main>
  )
}
