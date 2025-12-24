<script setup>
import FeatureSlideLayout from '@components/features/FeatureSlide/FeatureSlideLayout.vue';
import FeatureSlideCTA from '@components/features/FeatureSlide/FeatureSlideCTA.vue';

import FlagIcon from '@components/ui/FlagIcon.vue';
import DollarWallet from '@images/dollar-accounts/dollar_wallet.png'

const countryCode = 'us';

defineProps({
    title: String,
    subtitle: String,
    ctaTo: String,
    linkText: String
});
</script>
<template>
    <FeatureSlideLayout :title="title" :subtitle="subtitle">
        <template #context>
            <FlagIcon :country-code="countryCode" />
        </template>

        <template #illustration>
            <img :src="DollarWallet" class="h-20 w-20" />
        </template>

        <template #cta>
            <FeatureSlideCTA :to="ctaTo" :text="linkText" />
        </template>
    </FeatureSlideLayout>
</template>