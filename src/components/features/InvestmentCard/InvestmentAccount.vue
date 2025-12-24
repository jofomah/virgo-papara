<script setup>
import InvestmentCTA from './InvestmentCta.vue';
import InvestmentMarkets from './InvestmentMarkets.vue'
import { InvestmentImages } from '@images/investments';

defineProps({
    markets: Array,
    title: String,
    subtitle: String,
    ctaTo: String
})
</script>

<template>
    <div class="h-full w-full
      rounded-2xl bg-card-surface text-white shadow-sm
    
      /* padding scales */
      px-5 py-4
      sm:px-6 sm:py-5
      md:px-7 md:py-6

      /* center on large screens */
      lg:mx-auto">
        <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
                <div class="mb-3 flex items-center gap-3">
                    <!-- Investment Trend Icon -->
                    <div class="flex h-16 w-16 items-center justify-center rounded-full">
                        <img :src="InvestmentImages.chart.src" alt="Investment" />
                    </div>

                    <!-- Market Logos -->
                    <div class="flex items-center gap-2 text-xs text-white/70">
                        <InvestmentMarkets :markets="markets" />
                    </div>
                </div>

                <div class="gap-3 pl-2">
                    <!-- Title -->
                    <h2 class="mb-1 text-2xl font-semibold leading-tight">
                        {{ title }}
                    </h2>

                    <!-- Subtitle -->
                    <p class="text-sm text-white/60">
                        {{ subtitle }}
                    </p>
                </div>
            </div>

            <div class="shrink-0">
                <img :src="InvestmentImages.investment_illustration.src" alt="Investment illustration"
                    class="h-20 w-20" />
            </div>
        </div>

        <InvestmentCTA class="mt-5" />
    </div>
</template>
