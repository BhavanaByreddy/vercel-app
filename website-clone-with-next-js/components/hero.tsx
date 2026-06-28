import { Phone } from 'lucide-react'

const badges = [
  'Open 7 Days',
  'Walk-ins Welcome',
  'Same-Day Urgent Care',
  'Experienced Veterinarians',
  'Affordable Care',
  'Modern Equipment',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-vet.png"
          alt="Veterinarian examining a happy golden retriever with its owner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <h1 className="max-w-3xl text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
          Exceptional Veterinary Care for Your Beloved Pets
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Providing compassionate, affordable, and advanced veterinary healthcare for dogs, cats,
          rabbits, birds, and small animals. Open 7 days a week with Walk-In &amp; Same-Day Urgent
          Care — because your pet&apos;s health can&apos;t wait.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Book Appointment
          </a>
          <a
            href="tel:+19730000000"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-card px-6 py-3 font-semibold text-primary transition-colors hover:bg-accent"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2">
          {badges.map((badge, i) => (
            <div
              key={badge}
              className="flex items-center gap-2 border-b border-border bg-secondary/60 px-5 py-4 text-foreground last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0 sm:odd:border-r"
            >
              <span className="font-semibold text-primary">✓</span>
              <span className="font-medium">{badge}</span>
            </div>
          ))}
          <div id="contact" className="mt-10 rounded-xl border p-5 bg-white/80">
  
  <h2 className="text-lg font-bold">
    Booked Appointments
  </h2>

  <p className="text-sm text-gray-600">
    Total Appointments: 5
  </p>

  <ul className="mt-3 space-y-1">
    <li>Aarav - 09:30 AM</li>
    <li>Meena - 10:15 AM</li>
    <li>Ravi - 11:00 AM</li>
    <li>Priya - 12:30 PM</li>
    <li>Kiran - 02:00 PM</li>
  </ul>

</div>
        </div>
      </div>
    </section>
  )
}
