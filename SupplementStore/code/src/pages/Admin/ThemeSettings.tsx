import { useState } from 'react'
import { useThemeStore } from '../../stores/theme'
import { useUIStore } from '../../stores/ui'

export function ThemeSettings() {
  const {
    mode,
    toggleMode,
    lightColors,
    darkColors,
    presets,
    setColors,
    applyPreset,
    resetToDefaults,
  } = useThemeStore()
  const { addToast } = useUIStore()
  const [activeTab, setActiveTab] = useState<'light' | 'dark'>('light')

  const colorLabels: Record<string, string> = {
    primary: 'Primary',
    secondary: 'Secondary',
    accent: 'Accent',
    background: 'Background',
    surface: 'Surface',
    text: 'Text',
    textSecondary: 'Text Secondary',
    border: 'Border',
  }

  const handleSave = () => {
    addToast('Theme saved successfully!', 'success')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-default">Theme Settings</h1>
          <p className="text-secondary mt-1">Customize the look and feel of your store</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { resetToDefaults(); addToast('Theme reset to defaults', 'info') }} className="px-4 py-2 btn-secondary">
            Reset
          </button>
          <button onClick={handleSave} className="px-4 py-2 btn-primary">
            Save Theme
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Mode Toggle */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Mode</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => mode.isDark && toggleMode()}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${!mode.isDark ? 'btn-primary-solid border-transparent' : 'border-default text-default'}`}
            >
              Light Mode
            </button>
            <button
              onClick={() => !mode.isDark && toggleMode()}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${mode.isDark ? 'btn-primary-solid border-transparent' : 'border-default text-default'}`}
            >
              Dark Mode
            </button>
          </div>
        </div>

        {/* Color Presets */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Color Presets</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(presets).map(([name, preset]) => (
              <button
                key={name}
                onClick={() => { applyPreset(name); addToast(`Applied ${name} theme`, 'success') }}
                className={`p-4 rounded-xl border-2 transition-all capitalize ${
                  lightColors.primary === preset.light.primary && darkColors.primary === preset.dark.primary
                    ? 'border-primary'
                    : 'border-default hover:border-primary'
                }`}
              >
                <div className="flex gap-1 mb-2">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: preset.light.primary }}></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: preset.light.secondary }}></div>
                </div>
                <span className="text-sm text-default">{name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Tabs */}
        <div className="card p-6">
          <div className="flex gap-4 mb-6 border-b border-default">
            <button
              onClick={() => setActiveTab('light')}
              className={`pb-3 px-4 font-medium transition-all border-b-2 ${activeTab === 'light' ? 'border-primary text-primary' : 'border-transparent text-secondary'}`}
            >
              Light Mode Colors
            </button>
            <button
              onClick={() => setActiveTab('dark')}
              className={`pb-3 px-4 font-medium transition-all border-b-2 ${activeTab === 'dark' ? 'border-primary text-primary' : 'border-transparent text-secondary'}`}
            >
              Dark Mode Colors
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(activeTab === 'light' ? lightColors : darkColors).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-secondary mb-1">{colorLabels[key]}</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) => setColors({ [key]: e.target.value }, activeTab)}
                    className="w-10 h-10 rounded cursor-pointer border border-default"
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setColors({ [key]: e.target.value }, activeTab)}
                    className="flex-1 px-3 py-2 border border-default rounded-lg text-sm bg-surface text-default"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Live Preview</h2>
          <div className="p-6 rounded-lg border border-default surface">
            <div className="flex flex-wrap gap-3 mb-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-primary-solid">Solid Primary</button>
              <button className="btn-outline-primary">Outline</button>
            </div>
            <p className="text-default mb-2">This is how your text will look with the current theme</p>
            <p className="text-secondary mb-4">This is secondary text color</p>
            <div className="flex gap-4">
              <span className="text-primary">Primary Link</span>
              <span className="text-accent">Accent Text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
