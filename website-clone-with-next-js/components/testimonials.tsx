import { Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Golden Retriever Owner',
    quote:
      'Our dog received outstanding care from the moment we walked in. The staff was warm, the facility was spotless, and the veterinarian took the time to explain everything clearly. We won\'t go anywhere else.',
  },
  {
    name: 'James T.',
    role: 'Cat Owner',
    quote:
      'The veterinarians here are genuinely caring and incredibly knowledgeable. My cat is usually anxious at the vet, but the team made her feel safe and comfortable throughout the entire visit.',
  },
  {
    name: 'Priya K.',
    role: 'Multi-Pet Family',
    quote:
      'Clean hospital, friendly staff, and excellent service every single time. We bring all three of our pets here and the quality of care has always been consistently exceptional.',
  },
  {
    name: 'Marcus R.',
    role: 'Rabbit Owner',
    quote:
      'Best veterinary hospital we\'ve ever visited. They even have experience with exotic pets like our rabbit, which is rare. We feel genuinely lucky to have found Denville Animal Hospital.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Pet Owners Are Saying"
          description="The trust of our clients and the health of their pets is what drives everything we do. Here's what families in the Denville community have to say about their experience with us."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-card-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <div className="font-heading font-semibold text-card-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
