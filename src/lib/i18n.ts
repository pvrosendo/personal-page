import { i18n } from '@lingui/core'

export { i18n }

export const locales = ['pt-BR', 'en'] as const
export type Locale = (typeof locales)[number]

export const copy = {
  'pt-BR': {
    slugAbout: 'sobre',
    slugProjects: 'projetos',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    engineer: 'Software Engineer',
    tagline:
      'Desenvolvedor de software movido pela curiosidade em entender como as coisas funcionam.',
    viewProjects: 'Projetos',
    readAbout: 'Sobre',
    aboutEyebrow: '// SOBRE',
    projectsEyebrow: '// PROJETOS',
    projectsTitle: 'Projetos',
    experience: 'Experiência',
    education: 'Educação',
    skills: 'Competências / Stack',
    languages: 'Idiomas',
    portuguese: 'Português',
    english: 'Inglês',
    native: 'Nativo',
    advanced: 'Intermediário',
    blog: 'Blog',
    visitBlog: 'Leia meu blog',
    footer: 'Por Paulo Vitor Rosendo.',
    theme: 'Alternar tema',
  },
  en: {
    slugAbout: 'about',
    slugProjects: 'projects',
    navAbout: 'About',
    navProjects: 'Projects',
    engineer: 'Software Engineer',
    tagline: 'Software engineer driven by curiosity on understanding how things work.',
    viewProjects: 'Projects',
    readAbout: 'About',
    aboutEyebrow: '// ABOUT',
    projectsEyebrow: '// PROJECTS',
    projectsTitle: 'Projects',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills / Stack',
    languages: 'Languages',
    portuguese: 'Portuguese',
    english: 'English',
    native: 'Native',
    advanced: 'Intermediate',
    blog: 'Blog',
    visitBlog: 'Read my blog',
    footer: 'By Paulo Vitor Rosendo.',
    theme: 'Toggle theme',
  },
} as const

/** Canonical page key → localized slug per locale */
export const localizedPaths = {
  about: { 'pt-BR': 'sobre', en: 'about' },
  projects: { 'pt-BR': 'projetos', en: 'projects' },
} as const

export type PageKey = keyof typeof localizedPaths

/** Given any slug (any locale), returns its canonical page key, or null (home). */
export function getPageKey(slug: string): PageKey | null {
  for (const [key, paths] of Object.entries(localizedPaths)) {
    if ((Object.values(paths) as string[]).includes(slug)) return key as PageKey
  }
  return null
}

/** Detects the user's preferred browser locale and returns the URL param format. */
export function getBrowserLocaleParam(): 'en' | 'pt-br' {
  const lang =
    typeof navigator !== 'undefined'
      ? (navigator.language || navigator.languages?.[0] || '')
      : ''
  return lang.toLowerCase().startsWith('en') ? 'en' : 'pt-br'
}

export function activateLocale(locale: Locale) {
  i18n.load(locale, copy[locale])
  i18n.activate(locale)
  document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en'
}

export function getLocale(value: string): Locale {
  return value.toLowerCase() === 'en' ? 'en' : 'pt-BR'
}

activateLocale('pt-BR')

