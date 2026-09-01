export function PrivacyPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: September 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us, including when you create an account, place an order, 
              or contact us. This includes your name, email address, shipping address, phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Provide customer support</li>
              <li>Improve our products and services</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with service providers who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information. However, no method 
              of transmission over the internet is 100% secure and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal information. You may also opt out 
              of receiving promotional communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at privacy@supplementstore.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
