import {
  Stethoscope,
  ClipboardCheck,
  Syringe,
  Scissors,
  Smile,
  ScanLine,
  Radio,
  Pill,
  FlaskConical,
  Cpu,
  Dog,
  Siren,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  { icon: Stethoscope, label: 'General Veterinary Care' },
  { icon: ClipboardCheck, label: 'Pet Wellness Exams' },
  { icon: Syringe, label: 'Pet Vaccinations' },
  { icon: Scissors, label: 'Pet Surgery' },
  { icon: Smile, label: 'Dental Care' },
  { icon: ScanLine, label: 'Digital X-Ray' },
  { icon: Radio, label: 'Ultrasound' },
  { icon: Pill, label: 'Pet Pharmacy' },
  { icon: FlaskConical, label: 'Laboratory Testing' },
  { icon: Cpu, label: 'Microchipping' },
  { icon: Dog, label: 'Senior Pet Care' },
  { icon: Siren, label: 'Emergency & Urgent Care' },
]

export function Services() {
  return (
    <section id="services" className="bg-primary px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-background p-8 shadow-lg md:p-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Veterinary Services All in One Place"
          description="From routine check-ups to complex surgeries, Denville Animal Hospital offers a full spectrum of veterinary services to keep your pet healthy at every stage of life."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-accent"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <service.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-card-foreground">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
