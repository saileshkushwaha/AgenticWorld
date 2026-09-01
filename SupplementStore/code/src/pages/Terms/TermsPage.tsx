export function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: September 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using SupplementStore, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Products and Orders</h2>
            <p className="text-gray-600">
              All products are subject to availability. We reserve the right to discontinue any product at any time. 
              Prices are subject to change without notice. We reserve the right to refuse or cancel any order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Payment Terms</h2>
            <p className="text-gray-600">
              Payment is required at the time of order. We accept major credit cards, PayPal, and Apple Pay. 
              All prices are in USD unless otherwise noted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Shipping and Delivery</h2>
            <p className="text-gray-600">
              Shipping times are estimates and not guaranteed. We are not responsible for delays caused by 
              carriers or customs. Risk of loss passes to you upon delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Returns and Refunds</h2>
            <p className="text-gray-600">
              We offer a 30-day satisfaction guarantee. Items must be returned in original condition. 
              Refunds will be processed within 5-7 business days of receiving the return.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Disclaimer</h2>
            <p className="text-gray-600">
              Our supplements are not intended to diagnose, treat, cure, or prevent any disease. 
              Consult a healthcare professional before starting any supplement regimen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
            <p className="text-gray-600">
              For questions about these terms, contact us at legal@supplementstore.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
