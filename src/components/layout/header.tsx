import { Link, useLocation, useParams } from '@tanstack/react-router'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { useTheme } from '@/hooks/use-theme'
import { copy, getLocale, getPageKey } from '@/lib/i18n'

export function Header() {
  const { locale: localeParam } = useParams({ strict: false }) as {
    locale?: string
  }
  const locale = getLocale(localeParam ?? 'pt-br')
  const labels = copy[locale]
  const location = useLocation()
  const { theme, setTheme } = useTheme()

  // The URL param is always lowercase ('pt-br' | 'en')
  const currentLocaleParam = locale === 'en' ? 'en' : 'pt-br'

  // Slug currently in the URL (e.g. 'sobre', 'about', 'projetos', 'projects', or '' for home)
  const currentSlug = location.pathname.split('/').filter(Boolean).slice(1).join('/')

  // Canonical page key for active state and locale switcher
  const pageKey = getPageKey(currentSlug)

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
            params={{ locale: currentLocaleParam }}
            className="font-display text-lg font-bold tracking-[-0.08em] text-witcher"
          >
            PV
          </Link>
          <span className="h-4 w-px bg-border" />
          {locale === 'en' ? (
            <Link
              to="/$locale/about"
              params={{ locale: 'en' }}
              className={`text-sm transition-colors hover:text-witcher ${pageKey === 'about' ? 'text-witcher' : 'text-muted-foreground'}`}
            >
              {labels.navAbout}
            </Link>
          ) : (
            <Link
              to="/$locale/sobre"
              params={{ locale: 'pt-br' }}
              className={`text-sm transition-colors hover:text-witcher ${pageKey === 'about' ? 'text-witcher' : 'text-muted-foreground'}`}
            >
              {labels.navAbout}
            </Link>
          )}
          {locale === 'en' ? (
            <Link
              to="/$locale/projects"
              params={{ locale: 'en' }}
              className={`text-sm transition-colors hover:text-witcher ${pageKey === 'projects' ? 'text-witcher' : 'text-muted-foreground'}`}
            >
              {labels.navProjects}
            </Link>
          ) : (
            <Link
              to="/$locale/projetos"
              params={{ locale: 'pt-br' }}
              className={`text-sm transition-colors hover:text-witcher ${pageKey === 'projects' ? 'text-witcher' : 'text-muted-foreground'}`}
            >
              {labels.navProjects}
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-2">
          {/* Locale switcher — typed Links per possible combination */}
          {locale === 'en' ? (
            pageKey === 'about' ? (
              <Link to="/$locale/sobre" params={{ locale: 'pt-br' }} className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum">PT</Link>
            ) : pageKey === 'projects' ? (
              <Link to="/$locale/projetos" params={{ locale: 'pt-br' }} className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum">PT</Link>
            ) : (
              <Link to="/$locale" params={{ locale: 'pt-br' }} className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum">PT</Link>
            )
          ) : (
            pageKey === 'about' ? (
              <Link to="/$locale/about" params={{ locale: 'en' }} className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum">EN</Link>
            ) : pageKey === 'projects' ? (
              <Link to="/$locale/projects" params={{ locale: 'en' }} className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum">EN</Link>
            ) : (
              <Link to="/$locale" params={{ locale: 'en' }} className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-biolum">EN</Link>
            )
          )}
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


