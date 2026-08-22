import { i18n } from '@lingui/core'

export { i18n }

export const locales = ['pt-BR', 'en'] as const
export type Locale = (typeof locales)[number]

export const copy = {
  'pt-BR': {
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    developer: 'Software Developer',
    tagline:
      'Desenvolvedor apaixonado por construir soluções robustas e bem projetadas.',
    viewProjects: 'Projetos',
    readAbout: 'Sobre',
    aboutEyebrow: '// SOBRE',
    projectsEyebrow: '// PROJETOS',
    projectsTitle: 'Projetos',
    experience: 'Experiência',
    education: 'Educação',
    skills: 'Competências / Stack',
    languages: 'Idiomas',
    native: 'Nativo',
    advanced: 'Intermediário',
    blog: 'Blog',
    footer: 'Construído por Paulo Vitor Rosendo.',
    theme: 'Alternar tema',
  },
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    developer: 'Software Developer',
    tagline:
      'A developer passionate about building robust, well-designed solutions.',
    viewProjects: 'Projects',
    readAbout: 'About',
    aboutEyebrow: '// ABOUT',
    projectsEyebrow: '// PROJECTS',
    projectsTitle: 'Projects',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills / Stack',
    languages: 'Languages',
    native: 'Native',
    advanced: 'Intermediate',
    blog: 'Blog',
    footer: 'Built by Paulo Vitor Rosendo.',
    theme: 'Toggle theme',
  },
} as const

export function activateLocale(locale: Locale) {
  i18n.load(locale, copy[locale])
  i18n.activate(locale)
  document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en'
}

export function getLocale(value: string): Locale {
  return value.toLowerCase() === 'en' ? 'en' : 'pt-BR'
}

activateLocale('pt-BR')
