// IMPORTANT: This project is intentionally frontend-only.
// Replace these demo URLs with your real Razorpay Payment Links and Google Drive links.

export const STORE = {
  name: 'VideoShopy',
  tagline: 'Scroll. Download. Post. Grow.',
  whatsapp: '919999999999',
  supportEmail: 'support@videoshopy.in',
}

export const PRODUCTS = [
{
  id: 'anime-15000',
  title: '15,000+ Viral Anime Reels Bundle',
  shortTitle: 'Anime Reels Mega Bundle',
  category: 'Anime',
  price: 1,
  oldPrice: 499,
  badge: 'BEST SELLER',
  emoji: '',
  accent: 'purple',

  description:
    'Massive ready-to-post anime reel collection for creators, editors and theme pages.',

  features: [
    '15,000+ HD Reels',
    'No Watermark',
    'Ready to Post',
    'Lifetime Access'
  ],

  paymentLink: 'https://rzp.io/rzp/B1Mo62T6',

  driveLink:
    'https://drive.google.com/drive/folders/1udN0sLdlc5mzY5_FnrlmXuiicTe6VuqQ?usp=drive_link',
},
  {
    id: 'gym-5000',
    title: '5,000+ Gym Motivation Reels Bundle',
    shortTitle: 'Gym Motivation Bundle',
    category: 'Fitness',
    price: 79,
    oldPrice: 599,
    badge: 'TRENDING',
    emoji: '💪',
    accent: 'orange',
    description: 'High-energy gym, bodybuilding and discipline content for fitness pages.',
    features: ['5,000+ HD Reels', 'Fast Visual Hooks', 'No Watermark', 'Instant Access'],
    paymentLink: 'https://rzp.io/l/REPLACE_GYM_PAYMENT_LINK',
    driveLink: 'https://drive.google.com/REPLACE_GYM_DRIVE_LINK',
  },
  {
    id: 'health-3000',
    title: '3,000+ Health Awareness Reels Bundle',
    shortTitle: 'Health Awareness Bundle',
    category: 'Health',
    price: 59,
    oldPrice: 399,
    badge: 'NEW',
    emoji: '🧠',
    accent: 'green',
    description: 'Short educational health-awareness content built for retention and shares.',
    features: ['3,000+ Reels', 'Educational Hooks', 'Mobile Ready', 'Lifetime Access'],
    paymentLink: 'https://rzp.io/l/REPLACE_HEALTH_PAYMENT_LINK',
    driveLink: 'https://drive.google.com/REPLACE_HEALTH_DRIVE_LINK',
  },
]
