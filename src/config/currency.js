// Supported currencies for Paystack
export const SUPPORTED_CURRENCIES = ['NGN', 'GHS', 'USD', 'ZAR', 'KES'];

// App currency - defaults to ZAR if not specified
export const APP_CURRENCY = process.env.REACT_APP_CURRENCY || 'ZAR';

// Currency configurations
export const CURRENCY_CONFIG = {
  NGN: { symbol: '₦', name: 'Naira' },
  GHS: { symbol: 'GH₵', name: 'Ghana Cedi' },
  USD: { symbol: '$', name: 'US Dollar' },
  ZAR: { symbol: 'R', name: 'South African Rand' },
  KES: { symbol: 'KSh', name: 'Kenyan Shilling' }
};

export const formatCurrency = (amount) => {
  const locale = CURRENCY_LOCALE[APP_CURRENCY] || 'en-ZA';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: APP_CURRENCY,
      currencyDisplay: 'symbol',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (_e) {
    // Fallback if Intl doesn't support currency
    return `${APP_CURRENCY} ${amount.toFixed(2)}`;
  }
};

