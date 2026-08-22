import { Link, useParams } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { copy, getLocale } from '@/lib/i18n'

export function LandingPage() {
  const { locale: value } = useParams({ from: '/$locale/' })
  const locale = getLocale(value)
  const text = copy[locale]
  const param = locale === 'en' ? 'en' : 'pt-br'
  return (
    <section className="page-enter flex min-h-0 flex-1 items-center px-6 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 text-center md:grid-cols-[1fr_280px] md:gap-14 md:text-left lg:gap-24">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground md:mb-6">
            {text.developer}
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-[clamp(3.25rem,10vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.09em] md:mx-0">
            Paulo Vitor
            <br />
            <span className="text-muted-foreground/45">Rosendo</span>
          </h1>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:mx-0 md:mt-9 md:text-lg">
            {text.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-9 md:justify-start">
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
        </div>
        <PhotoPlaceholder className="mx-auto hidden w-full max-w-[280px] rotate-2 transition-transform duration-500 hover:rotate-0 md:block" />
      </div>
    </section>
  )
}
