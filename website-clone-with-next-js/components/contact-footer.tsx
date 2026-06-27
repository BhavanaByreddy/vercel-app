import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Denville Animal Hospital, Denville, NJ',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(973) 000-0000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@denvilleanimalhospital.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Open 7 Days a Week — Mon–Fri: 8am–7pm, Sat–Sun: 9am–5pm',
  },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary px-6 py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-balance font-heading text-3xl font-bold md:text-4xl">
          Your Pet Deserves the Best Care
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
          At Denville Animal Hospital, we&apos;re more than a veterinary clinic — we&apos;re your
          partner in your pet&apos;s lifelong health and happiness. Book an appointment today and
          experience the compassionate, expert veterinary care that hundreds of families in Denville
          trust.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Book Appointment
          </a>
          <a
            href="tel:+19730000000"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-4 w-4" />
            Call the Hospital
          </a>
        </div>

        <div className="mt-14 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-primary-foreground">
                <item.icon className="h-5 w-5" />
                <span className="font-heading font-semibold">{item.label}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Denville Animal Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
