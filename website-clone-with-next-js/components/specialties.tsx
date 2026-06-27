import { Dog, Cat, Bird, Rabbit, Rat, PawPrint } from 'lucide-react'
import { SectionHeading } from './section-heading'

const specialties = [
  {
    icon: Dog,
    title: 'Dogs',
    description: 'From routine wellness to complex surgery, we provide full-spectrum canine care.',
  },
  {
    icon: Cat,
    title: 'Cats',
    description: 'Feline-friendly exams in a calm, low-stress environment tailored for cats.',
  },
  {
    icon: Bird,
    title: 'Birds',
    description: 'Avian wellness, nutrition, and illness care from bird-experienced veterinarians.',
  },
  {
    icon: Rabbit,
    title: 'Rabbits',
    description:
      'Specialized exotic care including dental health, spay/neuter, and wellness exams.',
  },
  {
    icon: Rat,
    title: 'Hamsters',
    description: "Small animal expertise for your tiny companions' unique health needs.",
  },
  {
    icon: PawPrint,
    title: 'Small Mammals',
    description:
      'Guinea pigs, ferrets, and other small mammals treated with the same expert care.',
  },
]

export function Specialties() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <SectionHeading
        eyebrow="Pet Care Specialties"
        title="We Care for All Your Beloved Companions"
        description="Denville Animal Hospital welcomes pets of all shapes, sizes, and species. Our experienced veterinary team is trained to provide specialized care for a wide variety of animals — because every creature deserves expert, compassionate treatment."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item) => (
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
    </section>
  )
}
