import { Link, useParams } from '@tanstack/react-router'
import { Code2, BriefcaseBusiness, Mail, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { copy, getLocale } from '@/lib/i18n'
import { site } from '@/lib/site'

export function LandingPage() {
  const { locale: value } = useParams({ from: '/$locale/' })
  const locale = getLocale(value)
  const text = copy[locale]
  const param = locale === 'en' ? 'en' : 'pt-br'
  return (
    <section className="page-enter mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-6xl items-center px-6 py-12">
      <div className="grid w-full items-center gap-14 md:grid-cols-[1fr_280px] lg:gap-24">
        <div>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            {text.developer}
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(3.8rem,10vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
            Paulo Vitor
            <br />
            <span className="text-muted-foreground/45">Rosendo</span>
          </h1>
          <p className="mt-9 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {text.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/$locale/projetos" params={{ locale: param }}>
                {text.viewProjects}
                <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/$locale/sobre" params={{ locale: param }}>
                {text.readAbout}
              </Link>
            </Button>
          </div>
          <div className="mt-14 flex items-center gap-5 text-muted-foreground">
            <a
              aria-label="GitHub"
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-witcher"
            >
              <Code2 size={17} />
            </a>
            <a
              aria-label="LinkedIn"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-witcher"
            >
              <BriefcaseBusiness size={17} />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-witcher"
            >
              <Mail size={17} />
            </a>
            <span className="h-px w-10 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              {locale === 'en' ? 'Based in Brazil' : 'Baseado no Brasil'}
            </span>
          </div>
        </div>
        <PhotoPlaceholder className="mx-auto w-full max-w-[280px] rotate-2 transition-transform duration-500 hover:rotate-0" />
      </div>
    </section>
  )
}
