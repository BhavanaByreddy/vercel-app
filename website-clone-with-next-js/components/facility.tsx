import { SectionHeading } from './section-heading'

export function Facility() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <SectionHeading
        eyebrow="Our Facility"
        title="A Hospital Designed for Comfort, Safety & Excellence"
        description="Our state-of-the-art facility was thoughtfully designed to put both pets and their owners at ease. Every space — from our welcoming reception to our advanced surgical suite — reflects our commitment to providing the very best in veterinary medicine."
      />

      <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-sm">
        <img
          src="/facility.png"
          alt="Bright, modern veterinary hospital reception and waiting area"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
