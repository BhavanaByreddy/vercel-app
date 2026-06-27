import { CalendarCheck, UserCheck, ClipboardList, HeartHandshake } from 'lucide-react'
import { SectionHeading } from './section-heading'

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Appointment',
    description: 'Online or phone, same-day available',
  },
  {
    icon: UserCheck,
    title: 'Meet Veterinarian',
    description: 'Thorough, compassionate exam',
  },
  {
    icon: ClipboardList,
    title: 'Diagnosis & Treatment',
    description: 'Advanced testing and care plan',
  },
  {
    icon: HeartHandshake,
    title: 'Healthy Happy Pet',
    description: 'Follow-up care and wellness guidance',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/40 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Pet's Care Journey — Simple & Stress-Free"
          description="Getting your pet the care they need has never been easier. From your first call to a happy, healthy walk out the door, we've designed every step of the experience to be smooth, transparent, and comforting for both you and your pet."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-7 text-center shadow-sm"
            >
              <span className="absolute right-5 top-5 font-heading text-3xl font-bold text-secondary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Our team is with you at every step — answering questions, explaining diagnoses in plain
          language, and ensuring your pet feels safe and comfortable throughout their visit.
        </p>
      </div>
    </section>
  )
}
