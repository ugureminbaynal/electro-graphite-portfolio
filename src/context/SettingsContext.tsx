import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'
export type Lang = 'en' | 'tr'

interface Settings {
  theme: Theme
  lang: Lang
  toggleTheme: () => void
  toggleLang: () => void
}

const SettingsContext = createContext<Settings>({
  theme: 'dark',
  lang: 'en',
  toggleTheme: () => {},
  toggleLang: () => {},
})

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  )
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('lang') as Lang) || 'en'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const toggleLang = () => setLang((l) => (l === 'en' ? 'tr' : 'en'))

  return (
    <SettingsContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
