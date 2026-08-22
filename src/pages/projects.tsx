import { ExternalLink, Code2 } from 'lucide-react'
import { useParams } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { copy, getLocale } from '@/lib/i18n'
import { projects } from '@/lib/data'

export function ProjectsPage() {
  const { locale: value } = useParams({ from: '/$locale/projetos' })
  const locale = getLocale(value)
  const text = copy[locale]
  return (
    <article className="page-enter mx-auto max-w-5xl px-6 py-12 pb-20">
      <SectionHeading
        eyebrow={text.projectsEyebrow}
        title={text.projectsTitle}
      />
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            locale={locale}
            blogLabel={text.blog}
            index={index}
          />
        ))}
      </div>
    </article>
  )
}

function ProjectCard({
  project,
  locale,
  blogLabel,
  index,
}: {
  project: (typeof projects)[number]
  locale: 'pt-BR' | 'en'
  blogLabel: string
  index: number
}) {
  return (
    <article className="group">
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[12px] border border-border bg-card">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,color-mix(in_srgb,var(--witcher)_18%,transparent)_50%,transparent_51%)] opacity-60 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
          0{index + 1} / 04
        </div>
        <div className="absolute bottom-5 right-5 font-display text-4xl font-semibold tracking-[-0.1em] text-foreground/10">
          PV
        </div>
        {project.badge && (
          <Badge className="absolute right-4 top-4">{blogLabel}</Badge>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-witcher">
            {project.title}
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {project.description[locale]}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 gap-3 pt-1 text-muted-foreground">
          {project.links.map((link) => (
            <a
              key={link.label}
              aria-label={`${project.title} ${link.label}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-witcher"
            >
              {link.label.toLowerCase() === 'github' ? (
                <Code2 size={16} />
              ) : (
                <ExternalLink size={16} />
              )}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
