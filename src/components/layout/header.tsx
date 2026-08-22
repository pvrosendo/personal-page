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
  const otherPath = `/${other}/${
    location.pathname.startsWith(`/${locale}`) ? locale : 'pt-br'
  }`
  return (
    <header className="fixed inset-x-0 top-0 z-20 w-full border-b border-border/70 bg-background/80 px-5 py-4 backdrop-blur-md md:px-8">
      <div className="flex w-full items-center justify-between">
        <nav
          className="flex items-center gap-5"
          aria-label={
            locale === 'en' ? 'Main navigation' : 'Navegação principal'
          }
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
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum"
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </Link>
          <AnimatedThemeToggler
            theme={theme}
            onThemeChange={setTheme}
            variant="diamond"
            aria-label={labels.theme}
          />
        </div>
      </div>
    </header>
  )
}
