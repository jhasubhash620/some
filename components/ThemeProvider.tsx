"use client"

import { useState, createContext, useContext, ReactNode, useEffect, Dispatch, SetStateAction } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  // stub — cast to match Dispatch type
  setTheme: (() => {}) as Dispatch<SetStateAction<Theme>>,
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    // Load saved theme from localStorage if available, otherwise detect user preference
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
        return
      }
    } catch (e) {
      // ignore localStorage access errors
    }

    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(dark ? 'dark' : 'light')
  }, [])
  // Persist theme to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore localStorage write errors
    }
  }, [theme])
  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeToggle />
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      aria-label="Toggle dark mode"
      aria-pressed={theme === 'dark'}
      className="fixed top-6 right-6 z-50 p-2 rounded-full shadow-lg bg-white/80 dark:bg-gray-900/80 hover:bg-pink-200 hover:dark:bg-rose-400 transition-colors"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      type="button"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
