import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
  border: string
}

export interface ThemeMode {
  isDark: boolean
  name: string
}

export interface SiteSettings {
  siteName: string
  currency: string
  language: string
  taxRate: number
}

interface ThemeState {
  mode: ThemeMode
  lightColors: ThemeColors
  darkColors: ThemeColors
  site: SiteSettings
  presets: Record<string, { light: ThemeColors; dark: ThemeColors }>
  setMode: (mode: Partial<ThemeMode>) => void
  toggleMode: () => void
  setColors: (colors: Partial<ThemeColors>, mode: 'light' | 'dark') => void
  applyPreset: (presetName: string) => void
  updateSite: (settings: Partial<SiteSettings>) => void
  resetToDefaults: () => void
  saveTheme: () => void
}

const defaultLightColors: ThemeColors = {
  primary: '#ea580c',
  secondary: '#dc2626',
  accent: '#f97316',
  background: '#f9fafb',
  surface: '#ffffff',
  text: '#111827',
  textSecondary: '#6b7280',
  border: '#e5e7eb',
}

const defaultDarkColors: ThemeColors = {
  primary: '#fb923c',
  secondary: '#f87171',
  accent: '#fbbf24',
  background: '#111827',
  surface: '#1f2937',
  text: '#f3f4f6',
  textSecondary: '#9ca3af',
  border: '#374151',
}

const presets: Record<string, { light: ThemeColors; dark: ThemeColors }> = {
  orange: {
    light: { ...defaultLightColors },
    dark: { ...defaultDarkColors },
  },
  blue: {
    light: { ...defaultLightColors, primary: '#2563eb', secondary: '#1d4ed8', accent: '#3b82f6' },
    dark: { ...defaultDarkColors, primary: '#60a5fa', secondary: '#3b82f6', accent: '#93c5fd' },
  },
  green: {
    light: { ...defaultLightColors, primary: '#16a34a', secondary: '#15803d', accent: '#22c55e' },
    dark: { ...defaultDarkColors, primary: '#4ade80', secondary: '#22c55e', accent: '#86efac' },
  },
  purple: {
    light: { ...defaultLightColors, primary: '#9333ea', secondary: '#7e22ce', accent: '#a855f7' },
    dark: { ...defaultDarkColors, primary: '#c084fc', secondary: '#a855f7', accent: '#d8b4fe' },
  },
  pink: {
    light: { ...defaultLightColors, primary: '#db2777', secondary: '#be185d', accent: '#ec4899' },
    dark: { ...defaultDarkColors, primary: '#f472b6', secondary: '#ec4899', accent: '#f9a8d4' },
  },
  teal: {
    light: { ...defaultLightColors, primary: '#0d9488', secondary: '#0f766e', accent: '#14b8a6' },
    dark: { ...defaultDarkColors, primary: '#2dd4bf', secondary: '#14b8a6', accent: '#5eead4' },
  },
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: { isDark: false, name: 'light' },
      lightColors: { ...defaultLightColors },
      darkColors: { ...defaultDarkColors },
      site: {
        siteName: 'SupplementStore',
        currency: 'USD',
        language: 'en',
        taxRate: 8,
      },
      presets,
      setMode: (mode) => set((state) => ({ mode: { ...state.mode, ...mode } })),
      toggleMode: () =>
        set((state) => ({
          mode: { isDark: !state.mode.isDark, name: state.mode.isDark ? 'light' : 'dark' },
        })),
      setColors: (colors, mode) =>
        set((state) => ({
          [mode === 'light' ? 'lightColors' : 'darkColors']: {
            ...state[mode === 'light' ? 'lightColors' : 'darkColors'],
            ...colors,
          },
        })),
      applyPreset: (presetName) => {
        const preset = presets[presetName]
        if (preset) {
          set({ lightColors: { ...preset.light }, darkColors: { ...preset.dark } })
        }
      },
      updateSite: (settings) => set((state) => ({ site: { ...state.site, ...settings } })),
      resetToDefaults: () =>
        set({
          mode: { isDark: false, name: 'light' },
          lightColors: { ...defaultLightColors },
          darkColors: { ...defaultDarkColors },
          site: { siteName: 'SupplementStore', currency: 'USD', language: 'en', taxRate: 8 },
        }),
      saveTheme: () => {
        const state = get()
        localStorage.setItem('supplement-store-theme-saved', JSON.stringify({
          mode: state.mode,
          lightColors: state.lightColors,
          darkColors: state.darkColors,
          site: state.site,
        }))
      },
    }),
    {
      name: 'supplement-store-theme',
    }
  )
)
