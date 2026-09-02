import { useEffect } from 'react'
import { useThemeStore } from '../stores/theme'

export function useApplyTheme() {
  const { mode, lightColors, darkColors } = useThemeStore()

  useEffect(() => {
    const colors = mode.isDark ? darkColors : lightColors
    const root = document.documentElement

    root.style.setProperty('--color-primary', colors.primary)
    root.style.setProperty('--color-secondary', colors.secondary)
    root.style.setProperty('--color-accent', colors.accent)
    root.style.setProperty('--color-background', colors.background)
    root.style.setProperty('--color-surface', colors.surface)
    root.style.setProperty('--color-text', colors.text)
    root.style.setProperty('--color-text-secondary', colors.textSecondary)
    root.style.setProperty('--color-border', colors.border)

    if (mode.isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [mode.isDark, lightColors, darkColors])
}
