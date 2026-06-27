import { Heart, Building2, Activity, Pill, Stethoscope, PawPrint } from 'lucide-react'
import { SectionHeading } from './section-heading'

const features = [
  {
    icon: Heart,
    title: 'Compassionate Veterinary Team',
    description:
      'Our doctors and staff genuinely love animals. Every interaction is handled with kindness, patience, and professional expertise.',
  },
  {
    icon: Building2,
    title: 'Modern Veterinary Hospital',
    description:
      'Our facility is equipped with the latest diagnostic and treatment technology, ensuring the highest standard of care.',
  },
  {
    icon: Activity,
    title: 'Advanced Diagnostics',
    description:
      'From digital X-rays to in-house laboratory testing, we deliver fast, accurate results so treatment can begin without delay.',
  },
  {
    icon: Pill,
    title: 'In-House Pharmacy',
    description:
      'Convenient access to prescription medications and specialty diets — all available right here, so you never have to make an extra stop.',
  },
  {
    icon: Stethoscope,
    title: 'Dental Specialists',
    description:
      "Oral health is vital to your pet's overall wellbeing. Our dental team provides professional cleanings, extractions, and preventive care.",
  },
  {
    icon: PawPrint,
    title: 'Personalized Pet Care',
    description:
      "No two pets are alike. We create individualized care plans tailored to your pet's unique health needs, lifestyle, and life stage.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Pet Owners Trust Denville Animal Hospital"
        description="We've built our reputation on one simple promise: treating every pet as if they were our own. From routine wellness exams to advanced surgical care, our team brings expertise, compassion, and state-of-the-art technology together under one roof."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
              {feature.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
