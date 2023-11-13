import freeIcon from 'assets/img/icons/free.svg';
import proIcon from 'assets/img/icons/pro.svg';

import mada from 'assets/img/seapay/payment/mada-removebg.png'
import visa from 'assets/img/seapay/payment/visa-new-logo-removebg.png'
import masterCard from 'assets/img/seapay/payment/mastercard-new-logo1-removebg.png'
import applePay from 'assets/img/seapay/payment/apple-pay-removebg.png'
import stcPay from 'assets/img/seapay/payment/visa-new-logo-removebg.png'

export const pricingData = [
  {
    id: 0,
    title: 'Free',
    // subTitle: 'For teams that need to create project plans with confidence.',
    price: 0,
    url: '/e-commerce/billing',
    buttonText: 'Start free trial',
    bgColor: '#f5f5f5',
    featureTitle: 'Track team projects with free:',
    features: [
      { id: 1, title: 'Mada', icon: mada, },
      { id: 2, title: 'Visa', icon: visa, },
      { id: 3, title: 'MasterCard', icon: masterCard, tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Apple Pay', icon: applePay, },
      { id: 5, title: 'STC Pay', icon: stcPay, }
    ]
  },
  {
    id: 1,
    title: 'Silver',
    subTitle:
      'For teams and companies that need to manage work across initiatives.',
    price: 99,
    url: '/e-commerce/billing',
    buttonText: 'Get Business',
    bgColor: '#dcdcdc',
    featureTitle: 'Everything in Premium, plus:',
    features: [
      { id: 1, title: 'Mada', icon: mada, },
      { id: 2, title: 'Visa', icon: visa, },
      { id: 3, title: 'MasterCard', icon: masterCard, tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Apple Pay', icon: applePay, },
      { id: 5, title: 'STC Pay', icon: stcPay, }
    ]
  },
  {
    id: 2,
    title: 'Gold',
    subTitle: 'For organizations that need additional security and support.',
    price: 199,
    url: '/e-commerce/billing',
    buttonText: 'Purchase',
    bgColor: '#CFB53B',
    featureTitle: 'Everything in Business, plus:',
    features: [
      { id: 1, title: 'Mada', icon: mada, },
      { id: 2, title: 'Visa', icon: visa, },
      { id: 3, title: 'MasterCard', icon: masterCard, tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Apple Pay', icon: applePay, },
      { id: 5, title: 'STC Pay', icon: stcPay, }
    ]
  }
];

export const pricingAltData = [
  {
    id: 0,
    title: 'Free',
    price: 0,
    period: 'm',
    icon: freeIcon,
    url: '#!',
    buttonText: 'Start free trial',
    isFeatured: false,
    bgColor: '#f5f5f5',
    features: [
      { id: 1, title: 'Mada', icon: mada, },
      { id: 2, title: 'Visa', icon: visa, },
      { id: 3, title: 'MasterCard', icon: masterCard, tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Apple Pay', icon: applePay, },
      { id: 5, title: 'STC Pay', icon: stcPay, }
    ]
  },
  {
    id: 1,
    title: 'Silver',
    price: 99,
    period: 'm',
    icon: proIcon,
    url: '#!',
    buttonText: 'Purchase Now',
    isFeatured: false,
    bgColor: '#dcdcdc',
    features: [
      { id: 1, title: 'Mada', icon: mada, },
      { id: 2, title: 'Visa', icon: visa, },
      { id: 3, title: 'MasterCard', icon: masterCard, tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Apple Pay', icon: applePay, },
      { id: 5, title: 'STC Pay', icon: stcPay, }
    ]
  },
  {
    id: 2,
    title: 'Gold',
    price: 199,
    period: 'm',
    icon: proIcon,
    url: '#!',
    buttonText: 'Everything in Silver, plus',
    isFeatured: false,
    bgColor: '#CFB53B',
    features: [
      { id: 1, title: 'Mada', icon: mada, },
      { id: 2, title: 'Visa', icon: visa, },
      { id: 3, title: 'MasterCard', icon: masterCard, tag: { label: 'New', type: 'success' } },
      { id: 4, title: 'Apple Pay', icon: applePay, },
      { id: 5, title: 'STC Pay', icon: stcPay, }
    ]
  }
];
