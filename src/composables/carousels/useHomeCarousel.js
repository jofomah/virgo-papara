import Account from '@components/features/AccountCard/Account.vue'
import InvestmentAccount from '@components/features/InvestmentCard/InvestmentAccount.vue'
import DollarAccount from '@components/features/DollarAccount/DollarAccount.vue'
import PreciousMetalAccount from '@components/features/PreciousMetalAccount/PreciousMetalAccount.vue'
import SavingsAccount from '@components/features/SavingsAccount/SavingsAccount.vue'
import AccountOverview from '@components/features/AccountOverview.vue'

import { flagImages } from '@/assets/images/flags'
import goldBars from '@images/precious-metals/gold-bars.png'
import { InvestmentImages } from '@images/investments'
import savingsLogo from '@images/savings/savings-logo.png'

export function useHomeCarousel() {
  const localCurrencySymbol = '₺'
  const localAccountBalance = '0,00'

  const slides = [
    {
      id: 'local-account',
      component: Account,
      props: {
        title: 'Türk Lirası Hesabı',
        balance: `${localCurrencySymbol}${localAccountBalance}`,
        countryCode: 'tr',
        iban: 'TR05 ****',
      },
    },
    {
      id: 'investment',
      component: InvestmentAccount,
      props: {
        title: 'Yatırım Hesabı',
        subtitle: 'Hisse senedi al / sat',
        markets: [
          { title: 'Nasdaq', img: InvestmentImages.nasdaq },
          { title: 'NYSE', img: InvestmentImages.nyse },
          { title: 'Borsa İstanbul', img: InvestmentImages.borsa },
        ],
        linkText: 'Yatırım Hesabı Oluştur',
        ctaTo: ''
      },
    },
    {
      id: 'usd',
      component: DollarAccount,
      props: {
        title: 'Dolar Hesabı',
        subtitle: 'Yatırım işlemleri için dolar al / sat.',
        linkText: 'Yatırım Hesabı Oluştur',
        ctaTo: ''
      },
    },
    {
      id: 'precious-metals',
      component: PreciousMetalAccount,
      props: {
        title: 'Kıymetli Madenler',
        subtitle: '(Altın, Gümüş, Platin)',
        linkText: 'Kıymetli Madenler Hesabı Aç',
        ctaTo: ''
      },
    },

    {
      id: 'savings',
      component: SavingsAccount,
      props: {
        title: 'Birikim Hesabı',
        subtitle: 'Hedef belirle, birikim yap.',
        linkText: 'Birikim Hesabı Aç',
        ctaTo: ''
      },
    },

    {
      id: 'overview',
      component: AccountOverview,
      props: {
        title: 'Tüm Varlıklarım',
        accountBalances: [
            { currencySymbol: '₺', balance: localAccountBalance },
            { currencySymbol: '$', balance: null } 
        ],
        accounts: [
          {
            id: 1,
            title: 'Türk Lirası Hesabı',
            balance: localAccountBalance,
            symbol: localCurrencySymbol,
            icon: flagImages.tr,
          },
          {
            id: 2,
            title: 'Kıymetli Madenler',
            balance: null,
            icon: { src: goldBars },
          },
          {
            id: 3,
            title: 'Yatırım Hesabı',
            balance: null,
            icon: InvestmentImages.chart,
          },
          {
            id: 4,
            title: 'Birikim Hesabı',
            balance: null,
            icon: { src: savingsLogo },
          },
        ],
      },
    },
  ]

  return { slides }
}
