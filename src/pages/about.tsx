import { useParams } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { SectionHeading } from '@/components/section-heading'
import { copy, getLocale } from '@/lib/i18n'
import { education, experiences, profile, skills } from '@/lib/data'
import { site } from '@/lib/site'

export function AboutPage() {
  const { locale: value } = useParams({ from: '/$locale/sobre' })
  const locale = getLocale(value)
  const text = copy[locale]
  return (
    <article className="page-enter mx-auto max-w-3xl px-6 py-12 pb-20">
      <SectionHeading eyebrow={text.aboutEyebrow} title={text.navAbout} />
      <section className="grid gap-9 md:grid-cols-[180px_1fr] md:gap-12">
        <PhotoPlaceholder className="w-40" />
        <p className="max-w-xl self-center text-lg leading-relaxed text-muted-foreground">
          {profile[locale]}
        </p>
      </section>
      <TimelineSection title={text.experience}>
        {experiences.map((item) => (
          <TimelineItem
            key={item.company}
            title={item.role[locale]}
            meta={`${item.company} · ${item.period}`}
            description={item.description[locale]}
          />
        ))}
      </TimelineSection>
      <TimelineSection title={text.education}>
        {education.map((item) => (
          <TimelineItem
            key={item.company}
            title={item.role[locale]}
            meta={`${item.company} · ${item.period}`}
          />
        ))}
      </TimelineSection>
      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
          {text.skills}
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {skills.map(([category, values]) => (
            <div
              className="grid gap-2 py-4 sm:grid-cols-[130px_1fr]"
              key={category}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {category}
              </span>
              <span className="text-sm">{values}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
          {text.languages}
        </h2>
        <p className="text-sm text-muted-foreground">
          Português —{' '}
          <strong className="font-medium text-foreground">{text.native}</strong>{' '}
          <span className="mx-2 text-border">·</span> English —{' '}
          <strong className="font-medium text-foreground">
            {text.advanced}
          </strong>
        </p>
      </section>
      <a
        href={`mailto:${site.email}`}
        className="mt-16 inline-flex items-center gap-2 text-sm text-witcher transition-colors hover:text-biolum"
      >
        <Mail size={16} />
        {text.contact}
      </a>
    </article>
  )
}

function TimelineSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-16">
      <h2 className="mb-7 font-display text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="relative ml-2 border-l border-witcher/50 pl-7">
        {children}
      </div>
    </section>
  )
}
function TimelineItem({
  title,
  meta,
  description,
}: {
  title: string
  meta: string
  description?: string
}) {
  return (
    <div className="relative pb-8 last:pb-0">
      <span className="absolute -left-[calc(1.75rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-background bg-witcher" />
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {meta}
      </p>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
