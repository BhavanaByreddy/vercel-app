import { CreditCard, Landmark, CalendarDays, Search, Shield } from 'lucide-react'
import { SectionHeading } from './section-heading'

const options = [
  {
    icon: CreditCard,
    title: 'Flexible Payment Plans',
    description:
      "Spread the cost of your pet's care over manageable monthly payments, so finances never stand in the way of the treatment your pet needs.",
  },
  {
    icon: Landmark,
    title: 'CareCredit Accepted',
    description:
      'We proudly accept CareCredit, a dedicated healthcare financing card that offers promotional financing options for qualifying purchases.',
  },
  {
    icon: CalendarDays,
    title: 'Monthly Installments',
    description:
      'Break larger veterinary bills into predictable monthly payments with no hidden fees or surprises — just straightforward, honest pricing.',
  },
  {
    icon: Search,
    title: 'Transparent Pricing',
    description:
      "We discuss costs upfront before beginning any procedure. You'll always know what to expect — no surprise invoices, ever.",
  },
  {
    icon: Shield,
    title: 'Pet Insurance Friendly',
    description:
      'We work with all major pet insurance providers and can help you understand your benefits and submit claims efficiently.',
  },
]

export function Financing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <SectionHeading
        eyebrow="Financing Options"
        title="Affordable Veterinary Care — No Compromises"
        description="We believe every pet deserves exceptional medical care, regardless of budget. That's why Denville Animal Hospital offers a range of flexible payment options designed to make high-quality veterinary care accessible to every family."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-muted-foreground">
        Questions about payment? Our front desk team is happy to walk you through all available
        options before your visit — just give us a call.
      </p>
    </section>
  )
}
