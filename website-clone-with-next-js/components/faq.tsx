'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    question: 'Do you accept walk-ins?',
    answer:
      'Yes! Walk-ins are always welcome during our hospital hours. We also offer same-day appointments for urgent and non-urgent needs — just call ahead when possible so we can prepare for your arrival.',
  },
  {
    question: 'Are emergency visits available?',
    answer:
      'We offer same-day urgent care during all open hours. If your pet is experiencing a medical emergency, call us immediately and come in — our team will be ready to assist you as quickly as possible.',
  },
  {
    question: 'What animals do you treat?',
    answer:
      'We treat dogs, cats, rabbits, birds, hamsters, guinea pigs, ferrets, and a wide variety of small mammals. Our team has experience with both common household pets and exotic companions.',
  },
  {
    question: 'Do you provide surgery?',
    answer:
      'Absolutely. We have a fully equipped, sterile surgical suite on-site. Our experienced veterinary surgeons perform a wide range of procedures, from routine spay/neuter operations to complex soft-tissue surgeries.',
  },
  {
    question: 'Can I book an appointment online?',
    answer:
      'Yes! You can book your appointment online through our website at any time, or call us directly during hospital hours. We also accept same-day appointment requests for urgent situations.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'We do. Denville Animal Hospital accepts CareCredit, offers flexible payment plans, and works with all major pet insurance providers. Our front desk team is happy to discuss options before your visit.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-24">
      <SectionHeading
        align="center"
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Have questions before your visit? We've got answers. If you don't find what you're looking for, our friendly team is always just a phone call away."
      />

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = open === index
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-heading text-lg font-semibold text-card-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
