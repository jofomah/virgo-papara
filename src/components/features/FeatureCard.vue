<script setup>
import Carousel from '@components/carousel/Carousel.vue'
import CarouselItem from '@components/carousel/CarouselItem.vue';

import Account from '@components/features/AccountCard/Account.vue';
import InvestmentAccount from '@components/features/InvestmentCard/InvestmentAccount.vue';
import DollarAccount from '@components/features/DollarAccount/DollarAccount.vue';
import PreciousMetalAccount from '@components/features/PreciousMetalAccount/PreciousMetalAccount.vue';
import SavingsAccount from '@components/features/SavingsAccount/SavingsAccount.vue';
import AccountOverview from '@/components/features/AccountOverview.vue';

// TODO: move to store
const localAccountTitle = 'Türk Lirası Hesabı';
const localAccountBalance = '0,00';
const localCurrencySymbol = '₺';

const preciousMetalTitle = 'Kıymetli Madenler';
const investmentAccountTitle = 'Yatırım Hesabı';
const savingsAccountTitle = 'Birikim Hesabı';

// account assets
import { flagImages } from '@/assets/images/flags';
import goldBars from '@images/precious-metals/gold-bars.png';
import { InvestmentImages } from '@images/investments';
import savingsLogo from '@images/savings/savings-logo.png';

const carouselItems = [
    {
        id: 1,
        type: 'account',
        data: {
            title: localAccountTitle,
            balance: `${localCurrencySymbol}${localAccountBalance}`,
            countryCode: 'tr',
            iban: 'TR05 ****'
        }
    },
    {
        id: 2,
        type: 'investment',
        data: {
            title: investmentAccountTitle,
            subtitle: "Hisse senedi al / sat",
            markets: [
                { title: 'Nasdaq', img: InvestmentImages.nasdaq },
                { title: 'NYSE', img: InvestmentImages.nyse },
                { title: 'Borsa İstanbul', img: InvestmentImages.borsa }
            ],
            ctaTo: "",
            linkText: 'Yatırım Hesabı Oluştur'
        }
    },
    {
        id: 3,
        type: 'dollar_account',
        data: {
            title: "Dollar Hesabı",
            subtitle: "Yatırım işlemleri için dolar al / sat.",
            ctaTo: "",
            linkText: 'Yatırım Hesabı Oluştur'
        }
    },
    {
        id: 4,
        type: 'precious_metal',
        data: {
            title: preciousMetalTitle,
            subtitle: '(Altın, Gümüş, Platin)',
            ctaTo: '',
            linkText: 'Kıymetli Madenler Hesabı Aç'
        }
    },
    {
        id: 5,
        type: 'savings',
        data: {
            title: savingsAccountTitle,
            subtitle: 'Hedef belirle, birikim yap.',
            ctaTo: '',
            linkText: 'Birikim Hesabı Aç'
        }
    },
    {
        id: 6,
        type: 'account_overview',
        data: {
            title: 'Tüm Varlıklarım',
            accountBalances: [
                { currencySymbol: '₺', balance: localAccountBalance },
                { currencySymbol: '$', balance: null }
            ],
            accounts: [
                {
                    id: 1,
                    title: localAccountTitle,
                    balance: localAccountBalance,
                    symbol: localCurrencySymbol,
                    icon: flagImages.tr
                },
                {
                    id: 2,
                    title: preciousMetalTitle,
                    balance: null,
                    symbol: null,
                    icon: {
                        src: goldBars
                    }
                },
                {
                    id: 3,
                    title: investmentAccountTitle,
                    balance: null,
                    symbol: null,
                    icon: InvestmentImages.chart
                },
                {
                    id: 4,
                    title: savingsAccountTitle,
                    balance: null,
                    symbol: null,
                    icon: {
                        src: savingsLogo
                    }
                }
            ]
        }
    }
];

const componentMap = {
    account: Account,
    investment: InvestmentAccount,
    dollar_account: DollarAccount,
    precious_metal: PreciousMetalAccount,
    savings: SavingsAccount,
    account_overview: AccountOverview
};

import { useHomeCarousel } from '@composables/carousels/useHomeCarousel';
const { slides } = useHomeCarousel();

</script>

<template>
    <section class="w-full px-4 mb-6">
        <Carousel :items="slides" :peek="true">
            <CarouselItem v-for="slide in slides" :key="slide.id">
                <component :is="slide.component" v-bind="slide.props" />
            </CarouselItem>
        </Carousel>
    </section>
</template>