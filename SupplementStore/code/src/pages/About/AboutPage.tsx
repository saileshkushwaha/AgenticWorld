import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About SupplementStore</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            SupplementStore is your trusted destination for premium fitness supplements. 
            We've been serving gym enthusiasts since 2020, providing authentic, lab-tested 
            products that help you achieve your fitness goals.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To provide athletes and fitness enthusiasts with the highest quality supplements, 
            backed by science and transparency. We believe everyone deserves access to safe, 
            effective products that support their health and performance goals.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-gray-600">All products sourced directly from manufacturers with full traceability.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Lab Tested</h3>
              <p className="text-gray-600">Every batch tested by independent third-party laboratories.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our team includes certified nutritionists and fitness professionals.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free 2-3 day shipping on all orders over $50.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
            <li>Transparency in ingredients and sourcing</li>
            <li>Science-backed formulations</li>
            <li>Customer health and safety first</li>
            <li>Sustainable and ethical practices</li>
            <li>Community support and education</li>
          </ul>

          <div className="bg-orange-50 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you. Visit our{' '}
              <Link to="/contact" className="text-orange-600 hover:underline">Contact Page</Link>{' '}
              or email us at support@supplementstore.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
