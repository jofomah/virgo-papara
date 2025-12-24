<script setup>
import FeatureSlideLayout from '@components/features/FeatureSlide/FeatureSlideLayout.vue';
import FeatureSlideCTA from '@components/features/FeatureSlide/FeatureSlideCTA.vue';

import savingsLogo from '@images/savings/savings-logo.png';
import savings from '@images/savings/savings.png';

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
            <img :src="savingsLogo" class="h-7 w-7" />
        </template>

        <template #illustration>
            <img :src="savings" class="h-20 w-20" />
        </template>

        <template #cta>
            <FeatureSlideCTA :to="ctaTo" :text="linkText" />
        </template>
    </FeatureSlideLayout>
</template>
