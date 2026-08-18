import { Link, useLocation, useParams } from '@tanstack/react-router'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { useTheme } from '@/hooks/use-theme'
import { copy, getLocale, type Locale } from '@/lib/i18n'

export function Header() {
  const { locale: localeParam } = useParams({ strict: false }) as {
    locale?: string
  }
  const locale = getLocale(localeParam ?? 'pt-br')
  const labels = copy[locale]
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const other: Locale = locale === 'en' ? 'pt-BR' : 'en'
  const otherPath = location.pathname.replace(
    `/${localeParam}`,
    `/${other === 'en' ? 'en' : 'pt-br'}`,
  )
  return (
    <header className="fixed inset-x-0 top-0 z-20 px-5 py-5 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/75 px-4 py-2.5 backdrop-blur-md">
        <nav
          className="flex items-center gap-5"
          aria-label="Navegação principal"
        >
          <Link
            to="/$locale"
            params={{ locale: locale === 'en' ? 'en' : 'pt-br' }}
            className="font-display text-lg font-bold tracking-[-0.08em] text-witcher"
          >
            PV
          </Link>
          <span className="h-4 w-px bg-border" />
          <Link
            to="/$locale/sobre"
            params={{ locale: locale === 'en' ? 'en' : 'pt-br' }}
            className={`text-sm transition-colors hover:text-witcher ${location.pathname.endsWith('/sobre') ? 'text-witcher' : 'text-muted-foreground'}`}
          >
            {labels.navAbout}
          </Link>
          <Link
            to="/$locale/projetos"
            params={{ locale: locale === 'en' ? 'en' : 'pt-br' }}
            className={`text-sm transition-colors hover:text-witcher ${location.pathname.endsWith('/projetos') ? 'text-witcher' : 'text-muted-foreground'}`}
          >
            {labels.navProjects}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to={otherPath}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-biolum"
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </Link>
          <AnimatedThemeToggler theme={theme} onThemeChange={setTheme} />
        </div>
      </div>
    </header>
  )
}
