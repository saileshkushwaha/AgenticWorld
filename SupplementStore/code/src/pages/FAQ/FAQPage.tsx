import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'We offer free standard shipping (2-3 business days) on all orders. Express shipping (1 business day) is available for an additional fee.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes! We ship to most countries worldwide. International shipping typically takes 5-10 business days depending on the destination.',
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in the "My Orders" section of your account.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        q: 'Are your products authentic?',
        a: 'Absolutely. All our products are sourced directly from authorized manufacturers and come with authenticity guarantees.',
      },
      {
        q: 'Are your supplements third-party tested?',
        a: 'Yes, every batch is tested by independent laboratories for purity, potency, and safety. Certificates of analysis are available upon request.',
      },
      {
        q: 'How should I store my supplements?',
        a: 'Store supplements in a cool, dry place away from direct sunlight. Keep containers tightly sealed and out of reach of children.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, return it within 30 days for a full refund.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Contact our support team or visit the "My Orders" section to initiate a return. We\'ll provide a prepaid return label.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Refunds are processed within 5-7 business days after we receive the returned item. The refund will be credited to your original payment method.',
      },
    ],
  },
  {
    category: 'Account & Payment',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click the user icon in the header and select "Sign Up". Fill in your details and you\'re ready to go!',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and Apple Pay.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, we use industry-standard SSL encryption and never store your full card details on our servers.',
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="pb-4 text-gray-600">{answer}</p>
      )}
    </div>
  )
}

export function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-12 text-center">
          Find answers to common questions about our products, orders, and services.
        </p>

        <div className="space-y-8">
          {faqs.map((category) => (
            <div key={category.category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h2>
              <div>
                {category.questions.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">Our customer support team is here to help.</p>
          <a href="mailto:support@supplementstore.com" className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors inline-block">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
