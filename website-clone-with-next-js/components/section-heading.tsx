import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  inverted?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <span
        className={cn(
          'inline-block rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider',
          inverted
            ? 'bg-primary-foreground/15 text-primary-foreground'
            : 'bg-secondary text-primary',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'mt-4 text-balance font-heading text-3xl font-bold md:text-4xl',
          inverted ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-lg leading-relaxed',
            inverted ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
