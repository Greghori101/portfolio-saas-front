// lib/i18n.config.ts

export const defaultLocale = 'en'

export const locales = ['en', 'fr'] // your supported languages

export function isValidLocale(locale: string): boolean {
  return locales.includes(locale)
}
