import { useConfigStore } from '../../stores/config'

export function PaymentSettings() {
  const { paymentMethods, updatePaymentMethod } = useConfigStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-default mb-6">Payment Methods</h1>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{method.icon}</span>
                <div><h3 className="font-semibold text-default">{method.name}</h3><p className="text-sm text-secondary">{method.description}</p></div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={method.isEnabled} onChange={(e) => updatePaymentMethod(method.id, { isEnabled: e.target.checked })} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
