import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
  Outlet,
} from '@tanstack/react-router'
import { useEffect } from 'react'
import { I18nProvider } from '@lingui/react'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/hooks/use-theme'
import { activateLocale, getBrowserLocaleParam, getLocale, i18n } from '@/lib/i18n'
import { LandingPage } from '@/pages/landing'
import { AboutPage } from '@/pages/about'
import { ProjectsPage } from '@/pages/projects'

function RootLayout() {
  return (
    <ThemeProvider>
      <I18nProvider i18n={i18n}>
        <div className="flex min-h-svh flex-col">
          <Outlet />
        </div>
        <Analytics />
      </I18nProvider>
    </ThemeProvider>
  )
}

function RootRedirect() {
  const locale = getBrowserLocaleParam()
  return <Navigate to="/$locale" params={{ locale }} replace />
}

function LocaleLayout() {
  const { locale } = localeRoute.useParams()
  const active = getLocale(locale)
  useEffect(() => {
    activateLocale(active)
    document.title =
      active === 'en'
        ? 'Paulo Vitor Rosendo — Software Developer'
        : 'Paulo Vitor Rosendo — Desenvolvedor de Software'
    const description =
      active === 'en'
        ? 'Software developer building robust, well-designed solutions.'
        : 'Desenvolvedor de software construindo soluções robustas e bem projetadas.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.append(meta)
    }
    meta.setAttribute('content', description)
    for (const property of ['og:title', 'twitter:title']) {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.append(tag)
      }
      tag.setAttribute('content', document.title)
    }
  }, [active])
  return (
    <>
      <Header />
      <main className="flex min-h-0 flex-1 flex-col pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const rootRoute = createRootRoute({ component: RootLayout })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: RootRedirect,
})

const localeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$locale',
  component: LocaleLayout,
})

const landingRoute = createRoute({
  getParentRoute: () => localeRoute,
  path: '/',
  component: LandingPage,
})

// About: /sobre (PT-BR) and /about (EN)
const aboutPtRoute = createRoute({
  getParentRoute: () => localeRoute,
  path: '/sobre',
  component: AboutPage,
})
const aboutEnRoute = createRoute({
  getParentRoute: () => localeRoute,
  path: '/about',
  component: AboutPage,
})

// Projects: /projetos (PT-BR) and /projects (EN)
const projectsPtRoute = createRoute({
  getParentRoute: () => localeRoute,
  path: '/projetos',
  component: ProjectsPage,
})
const projectsEnRoute = createRoute({
  getParentRoute: () => localeRoute,
  path: '/projects',
  component: ProjectsPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  localeRoute.addChildren([
    landingRoute,
    aboutPtRoute,
    aboutEnRoute,
    projectsPtRoute,
    projectsEnRoute,
  ]),
])

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

