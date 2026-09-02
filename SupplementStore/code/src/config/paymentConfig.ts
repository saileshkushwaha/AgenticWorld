export type PaymentMethodType = 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod' | 'emi' | 'bnpl'

export interface PaymentMethod {
  id: string
  type: PaymentMethodType
  name: string
  icon: string
  description: string
  isEnabled: boolean
  config: Record<string, any>
}

export interface CurrencyConfig {
  code: string
  symbol: string
  name: string
  exchangeRate: number
  position: 'before' | 'after'
  decimalPlaces: number
}

export interface TaxConfig {
  enabled: boolean
  rate: number
  name: string
}

export const defaultPaymentMethods: PaymentMethod[] = [
  { id: 'card', type: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'Pay with Visa, Mastercard, Amex', isEnabled: true, config: {} },
  { id: 'upi', type: 'upi', name: 'UPI', icon: '📱', description: 'Pay using UPI apps', isEnabled: true, config: {} },
  { id: 'netbanking', type: 'netbanking', name: 'Net Banking', icon: '🏦', description: 'Pay from your bank account', isEnabled: true, config: {} },
  { id: 'wallet', type: 'wallet', name: 'Wallets', icon: '👛', description: 'Pay using digital wallets', isEnabled: true, config: {} },
  { id: 'cod', type: 'cod', name: 'Cash on Delivery', icon: '💵', description: 'Pay when delivered', isEnabled: true, config: {} },
  { id: 'emi', type: 'emi', name: 'EMI', icon: '📅', description: 'Pay in installments', isEnabled: false, config: {} },
  { id: 'bnpl', type: 'bnpl', name: 'Buy Now Pay Later', icon: '🛒', description: 'Pay later', isEnabled: false, config: {} },
]

export const defaultCurrencyConfig: CurrencyConfig = {
  code: 'USD',
  symbol: '$',
  name: 'US Dollar',
  exchangeRate: 1,
  position: 'before',
  decimalPlaces: 2,
}

export const defaultTaxConfig: TaxConfig = {
  enabled: true,
  rate: 8,
  name: 'Sales Tax',
}

export const supportedCurrencies: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', exchangeRate: 1, position: 'before', decimalPlaces: 2 },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', exchangeRate: 83.12, position: 'before', decimalPlaces: 2 },
  { code: 'EUR', symbol: '€', name: 'Euro', exchangeRate: 0.92, position: 'before', decimalPlaces: 2 },
  { code: 'GBP', symbol: '£', name: 'British Pound', exchangeRate: 0.79, position: 'before', decimalPlaces: 2 },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', exchangeRate: 149.50, position: 'before', decimalPlaces: 0 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', exchangeRate: 1.53, position: 'before', decimalPlaces: 2 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', exchangeRate: 1.36, position: 'before', decimalPlaces: 2 },
]
