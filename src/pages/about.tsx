import { useParams } from '@tanstack/react-router'
import { PortraitPhoto } from '@/components/portrait-photo'
import { SectionHeading } from '@/components/section-heading'
import { copy, getLocale } from '@/lib/i18n'
import { education, experiences, profile, skills } from '@/lib/data'
import photo2 from '@/assets/photo2.jpg'

export function AboutPage() {
  const { locale: value } = useParams({ from: '/$locale/sobre' })
  const locale = getLocale(value)
  const text = copy[locale]
  return (
    <article className="page-enter mx-auto max-w-3xl px-6 py-12 pb-20">
      <SectionHeading eyebrow={text.aboutEyebrow} title={text.navAbout} />
      <section className="grid gap-9 md:grid-cols-[180px_1fr] md:gap-12">
        <PortraitPhoto
          src={photo2}
          alt="Paulo Vitor Rosendo"
          className="w-40"
        />
        <p className="max-w-xl self-center text-lg leading-relaxed text-muted-foreground">
          {profile[locale]}
        </p>
      </section>
      <TimelineSection title={text.experience}>
        {experienceGroups.map((group) => (
          <ExperienceGroup
            key={group.company}
            company={group.company}
            items={group.items}
            locale={locale}
          />
        ))}
      </TimelineSection>
      <TimelineSection title={text.education}>
        {education.map((item) => (
          <TimelineItem
            key={item.company}
            company={item.company}
            title={item.role[locale]}
            meta={item.period[locale]}
            status={item.status?.[locale]}
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
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {category}
              </span>
              <span className="text-base">{values}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight">
          {text.languages}
        </h2>
        <p className="text-base text-muted-foreground">
          Português —{' '}
          <strong className="font-medium text-foreground">{text.native}</strong>{' '}
          <span className="mx-2 text-border">·</span> English —{' '}
          <strong className="font-medium text-foreground">
            {text.advanced}
          </strong>
        </p>
      </section>
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

const experienceGroups = experiences.reduce<
  Array<{ company: string; items: Array<(typeof experiences)[number]> }>
>((groups, item) => {
  const group = groups.find((entry) => entry.company === item.company)
  if (group) {
    group.items.push(item)
  } else {
    groups.push({ company: item.company, items: [item] })
  }
  return groups
}, [])

function ExperienceGroup({
  company,
  items,
  locale,
}: {
  company: string
  items: Array<(typeof experiences)[number]>
  locale: keyof (typeof experiences)[number]['description']
}) {
  return (
    <div className="relative pb-8 last:pb-0">
      <span className="absolute -left-[calc(1.75rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-background bg-witcher" />
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {company}
      </h3>
      <div className="mt-3 divide-y divide-border border-t border-border">
        {items.map((item) => (
          <div className="py-4 first:pt-3" key={item.period}>
            {item.role && <h4 className="font-medium">{item.role[locale]}</h4>}
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {item.period}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {item.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TimelineItem({
  company,
  title,
  meta,
  status,
  description,
}: {
  company: string
  title?: string
  meta: string
  status?: string
  description?: string
}) {
  return (
    <div className="relative pb-8 last:pb-0">
      <span className="absolute -left-[calc(1.75rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-background bg-witcher" />
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {company}
      </h3>
      {title && <p className="mt-1 font-medium">{title}</p>}
      {meta && (
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {meta}
        </p>
      )}
      {status && <p className="mt-1 text-sm text-muted-foreground">{status}</p>}
      {description && (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
