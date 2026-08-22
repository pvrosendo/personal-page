import { Code2, BriefcaseBusiness, Mail } from 'lucide-react'
import { site } from '@/lib/site'
import { copy, getLocale } from '@/lib/i18n'
import { useParams } from '@tanstack/react-router'

export function Footer() {
  const { locale: value } = useParams({ strict: false }) as { locale?: string }
  const labels = copy[getLocale(value ?? 'pt-br')]
  return (
    <footer className="w-full border-t border-border/70 px-6 py-5 text-xs text-muted-foreground">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span>{labels.footer}</span>
        <div className="flex items-center gap-4">
          <a
            aria-label="GitHub"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-witcher"
          >
            <Code2 size={16} />
          </a>
          <a
            aria-label="LinkedIn"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-witcher"
          >
            <BriefcaseBusiness size={16} />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-witcher"
          >
            <Mail size={16} />
          </a>
          <span className="font-mono text-xs">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
