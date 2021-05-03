import React, { useContext, useState, useEffect } from 'react'

const ThemeContext = React.createContext<any | undefined>(null)

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

type Theme = 'dark' | 'light'

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [currentTheme, setTheme] = useState<Theme>('dark')
  const [loading, setLoading] = useState(false)

  const toggleTheme = () => {
    setTheme((prev) => {
      const changedTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', changedTheme)

      return changedTheme
    })
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
  }, [])

  const value = { currentTheme, toggleTheme }

  return <ThemeContext.Provider value={value}>{!loading && children}</ThemeContext.Provider>
}
