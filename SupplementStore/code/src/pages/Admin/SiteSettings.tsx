import { useThemeStore } from '../../stores/theme'
import { supportedCurrencies } from '../../config/paymentConfig'

export function SiteSettings() {
  const { site, updateSite, resetToDefaults, saveTheme } = useThemeStore()

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-default">Site Settings</h1>
          <p className="text-secondary mt-1">Configure global settings for your store</p>
        </div>
        <div className="flex gap-3">
          <button onClick={resetToDefaults} className="px-4 py-2 btn-secondary">
            Reset
          </button>
          <button onClick={saveTheme} className="px-4 py-2 btn-primary">
            Save Settings
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">General</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Site Name</label>
              <input
                type="text"
                value={site.siteName}
                onChange={(e) => updateSite({ siteName: e.target.value })}
                className="w-full px-4 py-2 border border-default rounded-lg focus:ring-2 bg-surface text-default"
              />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Currency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Currency</label>
              <select
                value={site.currency}
                onChange={(e) => updateSite({ currency: e.target.value })}
                className="w-full px-4 py-2 border border-default rounded-lg focus:ring-2 bg-surface text-default"
              >
                {supportedCurrencies.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.symbol} {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-bold text-default mb-4">Tax</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Tax Rate (%)</label>
              <input
                type="number"
                value={site.taxRate}
                onChange={(e) => updateSite({ taxRate: parseFloat(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-default rounded-lg focus:ring-2 bg-surface text-default"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
