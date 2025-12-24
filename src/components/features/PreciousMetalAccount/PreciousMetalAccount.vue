<script setup>
import FeatureSlideLayout from '@components/features/FeatureSlide/FeatureSlideLayout.vue';
import FeatureSlideCTA from '@components/features/FeatureSlide/FeatureSlideCTA.vue';

import PreciousMetal from '@images/precious-metals/precious-metal.png';
import goldBars from '@images/precious-metals/gold-bars.png';

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
            <img :src="PreciousMetal" class="h-7 w-7" />
        </template>

        <template #illustration>
            <img :src="goldBars" class="h-20 w-20" />
        </template>

        <template #cta>
            <FeatureSlideCTA :to="ctaTo" :text="linkText" />
        </template>
    </FeatureSlideLayout>
</template>