<script setup>
import FeatureSlideLayout from '@components/features/FeatureSlide/FeatureSlideLayout.vue';
import FeatureSlideCTA from '@components/features/FeatureSlide/FeatureSlideCTA.vue';

import InvestmentMarkets from './InvestmentMarkets.vue'
import { InvestmentImages } from '@images/investments';

defineProps({
    markets: Array,
    title: String,
    subtitle: String,
    ctaTo: String,
    linkText: String
});
</script>

<template>
    <FeatureSlideLayout :title="title" :subtitle="subtitle">
        <template #context>
            <img :src="InvestmentImages.chart.src" class="h-7 w-7" />
            <InvestmentMarkets :markets="markets" />
        </template>

        <template #illustration>
            <img :src="InvestmentImages.investment_illustration.src" class="h-20 w-20" />
        </template>

        <template #cta>
            <FeatureSlideCTA :to="ctaTo" :text="linkText" />
        </template>
    </FeatureSlideLayout>
</template>
