import { Check, Phone, Siren, Zap, Building2, PhoneCall } from 'lucide-react'
import { SectionHeading } from './section-heading'

const points = [
  'Walk-ins welcome during all hospital hours',
  'Same-day appointments always available',
  'Advanced imaging for immediate diagnosis',
  'Experienced emergency-trained veterinarians on staff',
]

const highlights = [
  { icon: Siren, title: 'Walk-In Ready', description: 'No appointment needed for urgent cases' },
  { icon: Zap, title: 'Rapid Diagnosis', description: 'Same-day lab results and imaging' },
  {
    icon: Building2,
    title: 'Surgical Capability',
    description: 'Emergency procedures performed on-site',
  },
  {
    icon: PhoneCall,
    title: 'Always Reachable',
    description: 'Call ahead so we can prepare for your arrival',
  },
]

export function EmergencyCare() {
  return (
    <section className="bg-primary px-6 py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              inverted
              eyebrow="Emergency Care"
              title="Urgent Veterinary Care Available When You Need It Most"
              description="When your pet is in distress, every minute matters. Denville Animal Hospital offers same-day urgent care and walk-in availability during hospital hours, so you never have to wait when your pet needs immediate attention."
            />
            <p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
              Our emergency-ready team and advanced on-site diagnostic equipment — including digital
              X-ray, ultrasound, and in-house lab testing — allow us to assess and treat your pet
              quickly and effectively. Whether it&apos;s a sudden illness, an injury, or a concerning
              symptom, we&apos;re here.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary-foreground" />
                  <span className="text-primary-foreground/90">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Get Immediate Help
              </a>
              <a
                href="tel:+19730000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/20 text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-heading text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
