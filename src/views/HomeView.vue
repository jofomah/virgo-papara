<script setup>

import Carousel from '@components/carousel/Carousel.vue'
import CarouselItem from '@components/carousel/CarouselItem.vue';

import Account from '@components/features/AccountCard/Account.vue';
import InvestmentAccount from '@components/features/InvestmentCard/InvestmentAccount.vue';
import { InvestmentImages } from '@images/investments';

import AppStories from '@components/stories/AppStories.vue';
import { useStoriesStore } from '@/stores/stories';

const storiesStore = useStoriesStore();

// TODO: move to store
const carouselItems = [
    {
        id: 1,
        type: 'account',
        data: {
            title: 'Türk Lirası Hesabı',
            balance: '₺0,00',
            countryCode: 'tr',
            iban: 'TR05 ****'
        }
    },
    {
        id: 2,
        type: 'investment',
        data: {
            title: "Yatırım Hesabı",
            subtitle: "Hisse senedi al / sat",
            markets: [
                { title: 'Nasdaq', img: InvestmentImages.nasdaq },
                { title: 'NYSE', img: InvestmentImages.nyse },
                { title: 'Borsa İstanbul', img: InvestmentImages.borsa }
            ],
            ctaTo: "/investment/create"
        }
    },
    {
        id: 3,
        type: 'investment',
        data: {
            number: '**** 1234'
        }
    },
    { id: 4, type: 'investment', data: { number: '**** 1234' } },
    //{ id: 3, type: 'promo', data: { title: 'Cashback' } }
];

const componentMap = {
    account: Account,
    investment: InvestmentAccount,
}

</script>

<template>
    <AppStories :stories="storiesStore.orderedStories" />

    <section class="w-full px-4 mb-6">
        <Carousel :items="carouselItems" :peek="true">
            <CarouselItem v-for="item in carouselItems" :key="item.id">
                <component :is="componentMap[item.type]" v-bind="item.data" />
            </CarouselItem>
        </Carousel>
    </section>

    <!-- ================= FEATURE CARD ================= -->
    <section class="rounded-[var(--radius-card)] bg-surface p-5 mb-6">
        <p class="text-sm text-text-secondary mb-1">
            Kıymetli Madenler
        </p>

        <h3 class="text-lg font-semibold mb-3">
            Altın, Gümüş, Platin
        </h3>

        <button
            class="w-full flex items-center justify-between bg-bg border border-border-soft rounded-xl px-4 py-3 text-sm">
            Kıymetli Madenler Hesabı Aç
            →
        </button>
    </section>

    <!-- ================= NOTIFICATION CARD ================= -->
    <section class="relative rounded-[var(--radius-card)] bg-surface p-5 mb-6">
        <span class="absolute top-3 right-3 bg-badge text-xs text-white rounded-full px-2">
            5
        </span>

        <p class="text-xs text-text-muted mb-1">
            Bugün 06:00
        </p>

        <p class="text-sm font-medium">
            Aylık hesap özetin oluşturuldu.
        </p>

        <p class="text-xs text-text-secondary">
            Eylül ayında neler yaptığını görmek için tıkla
        </p>
    </section>

    <!-- ================= ACTION BUTTONS ================= -->
    <section class="grid grid-cols-2 gap-4 mb-8">
        <button class="bg-surface rounded-xl py-4 flex flex-col items-center gap-2">
            ⬆️
            <span class="text-sm font-medium">Hesabına Para Yatır</span>
        </button>

        <button class="bg-surface rounded-xl py-4 flex flex-col items-center gap-2">
            💳
            <span class="text-sm font-medium">Papara Card İste</span>
        </button>
    </section>

    <!-- ================= TRANSACTIONS ================= -->
    <section>
        <p class="text-sm text-text-secondary mb-3">Hesap Hareketleri</p>

        <div class="space-y-4">
            <div class="flex items-center justify-between bg-surface rounded-xl p-4">
                <div>
                    <p class="text-sm font-medium">Garanti BBVA</p>
                    <p class="text-xs text-text-secondary">FAST Para Transferi</p>
                </div>
                <p class="text-success font-semibold">₺20.000,00</p>
            </div>

            <div class="flex items-center justify-between bg-surface rounded-xl p-4">
                <div>
                    <p class="text-sm font-medium">Hidayet Salt</p>
                    <p class="text-xs text-text-secondary">FAST Para Transferi</p>
                </div>
                <p class="text-danger font-semibold">₺20.000,00</p>
            </div>
        </div>
    </section>
</template>