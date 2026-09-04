import { Code2, ExternalLink } from 'lucide-react'
import { useParams } from '@tanstack/react-router'
import { SectionHeading } from '@/components/section-heading'
import { copy, getLocale } from '@/lib/i18n'
import { projects } from '@/lib/data'

export function ProjectsPage() {
  const { locale: value } = useParams({ strict: false }) as { locale: string }
  const locale = getLocale(value)
  const text = copy[locale]

  return (
    <article className="page-enter mx-auto max-w-5xl px-6 py-12 pb-20">
      <SectionHeading
        eyebrow={text.projectsEyebrow}
        title={text.projectsTitle}
      />
      <div className="border-y border-border">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            locale={locale}
            index={index}
          />
        ))}
      </div>
    </article>
  )
}

function ProjectRow({
  project,
  locale,
  index,
}: {
  project: (typeof projects)[number]
  locale: 'pt-BR' | 'en'
  index: number
}) {
  return (
    <article className="group grid gap-4 border-b border-border px-1 py-6 transition-colors last:border-b-0 hover:bg-foreground/2 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:items-start md:gap-6 md:px-3">
      <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0">
        <h2 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-witcher">
          {project.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {project.description[locale]}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {project.stack.map((tag, tagIndex) => (
            <span key={tag}>
              {tagIndex > 0 && <span className="mr-2 text-border">·</span>}
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 gap-4 text-muted-foreground md:justify-end">
        {project.links.map((link) => (
          <a
            key={link.label}
            aria-label={`${project.title} ${link.label === 'site' ? 'Live' : link.label}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-witcher"
          >
            {link.label.toLowerCase() === 'github' ? (
              <Code2 size={17} />
            ) : (
              <ExternalLink size={17} />
            )}
            <span className="sr-only">
              {link.label === 'site' ? 'Live' : link.label}
            </span>
          </a>
        ))}
      </div>
    </article>
  )
}
