import { useThemeStore } from '../../stores/theme'

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
    saveTheme,
  } = useThemeStore()

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

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-default">Theme Settings</h1>
          <p className="text-secondary mt-1">Customize the look and feel of your store</p>
        </div>
        <div className="flex gap-3">
          <button onClick={resetToDefaults} className="px-4 py-2 btn-secondary">
            Reset
          </button>
          <button onClick={saveTheme} className="px-4 py-2 btn-primary">
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
              onClick={() => !mode.isDark || toggleMode()}
              className={`px-6 py-3 rounded-lg border-2 transition-colors ${!mode.isDark ? 'border-primary bg-primary text-white' : 'border-default text-default'}`}
            >
              Light Mode
            </button>
            <button
              onClick={() => mode.isDark || toggleMode()}
              className={`px-6 py-3 rounded-lg border-2 transition-colors ${mode.isDark ? 'border-primary bg-primary text-white' : 'border-default text-default'}`}
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
                onClick={() => applyPreset(name)}
                className={`p-4 rounded-xl border-2 transition-colors capitalize ${
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

        {/* Light Mode Colors */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Light Mode Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(lightColors).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-secondary mb-1">{colorLabels[key]}</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) => setColors({ [key]: e.target.value }, 'light')}
                    className="w-10 h-10 rounded cursor-pointer border border-default"
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setColors({ [key]: e.target.value }, 'light')}
                    className="flex-1 px-3 py-2 border border-default rounded-lg text-sm bg-surface text-default"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Mode Colors */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Dark Mode Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(darkColors).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-secondary mb-1">{colorLabels[key]}</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={value}
                    onChange={(e) => setColors({ [key]: e.target.value }, 'dark')}
                    className="w-10 h-10 rounded cursor-pointer border border-default"
                  />
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setColors({ [key]: e.target.value }, 'dark')}
                    className="flex-1 px-3 py-2 border border-default rounded-lg text-sm bg-surface text-default"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Preview</h2>
          <div className="p-6 rounded-lg border border-default" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="flex gap-3 mb-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
            </div>
            <p className="text-default mb-2">This is how your text will look</p>
            <p className="text-secondary">This is secondary text</p>
          </div>
        </div>
      </div>
    </div>
  )
}
