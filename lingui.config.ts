import type { LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  locales: ['pt-BR', 'en'],
  sourceLocale: 'pt-BR',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['<rootDir>/src'],
    },
  ],
}

export default config
