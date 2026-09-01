import { useUIStore } from '../../stores/ui'

export function NewsletterSignup() {
  const addToast = useUIStore((state) => state.addToast)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addToast('Thank you for subscribing! Check your email for confirmation.', 'success')
  }

  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
      <h3 className="text-2xl font-bold mb-2">Stay in the Loop!</h3>
      <p className="text-orange-100 mb-6">Get exclusive deals, new product alerts, and fitness tips.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-orange-200 mt-3">No spam, unsubscribe anytime.</p>
    </div>
  )
}
