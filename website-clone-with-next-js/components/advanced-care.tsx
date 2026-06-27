import { Zap, ScanLine, Radio, Building2, HeartPulse, Pill } from 'lucide-react'
import { SectionHeading } from './section-heading'

const capabilities = [
  { icon: Zap, title: 'Same-Day Lab Results', description: 'In-house testing for rapid diagnosis' },
  { icon: ScanLine, title: 'Digital Radiology', description: 'High-resolution imaging on-site' },
  { icon: Radio, title: 'Ultrasound Imaging', description: 'Real-time soft tissue visualization' },
  { icon: Building2, title: 'Safe Surgical Suite', description: 'Sterile, fully monitored environment' },
  {
    icon: HeartPulse,
    title: 'ECG Monitoring',
    description: 'Continuous cardiac monitoring during procedures',
  },
  { icon: Pill, title: 'In-House Pharmacy', description: 'Prescriptions filled immediately on-site' },
]

export function AdvancedCare() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <SectionHeading
        eyebrow="Advanced Care"
        title="Complete Pet Healthcare Under One Roof"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            Why Advanced Equipment Matters
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Modern veterinary medicine moves fast, and we move with it. Our hospital is outfitted
            with cutting-edge diagnostic and treatment technology so your pet receives care
            that&apos;s accurate, efficient, and as comfortable as possible. No referrals. No delays.
            Just expert care, right here.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our surgical suite meets the highest safety standards, and our experienced doctors are
            trained in the latest techniques — from complex soft-tissue procedures to minimally
            invasive diagnostics.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-heading text-lg font-semibold text-card-foreground">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
