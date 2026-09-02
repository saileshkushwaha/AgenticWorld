import { useConfigStore } from '../../stores/config'

export function ShippingSettings() {
  const { shippingMethods, updateShippingMethod } = useConfigStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-default mb-6">Shipping Methods</h1>
      <div className="space-y-4">
        {shippingMethods.map((method) => (
          <div key={method.id} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-default">{method.name}</h3>
                <p className="text-sm text-secondary">{method.description}</p>
                <p className="text-sm text-default mt-1">{method.price === 0 ? 'Free' : `$${method.price.toFixed(2)}`} • {method.estimatedDays}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={method.isEnabled} onChange={(e) => updateShippingMethod(method.id, { isEnabled: e.target.checked })} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
