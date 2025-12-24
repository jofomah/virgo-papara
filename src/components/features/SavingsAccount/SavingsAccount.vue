<script setup>
import CtaLink from '@components/features/ui/CtaLink.vue';
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
    <div>
        <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
                <div class="mb-3 flex items-center gap-3">
                    <div class="flex h-7 w-7 items-center justify-center overflow-hidden">
                        <img :src="savingsLogo" alt="saving account icon" />
                    </div>
                </div>

                <h2 class="mb-1 text-xl font-semibold leading-tight w-16">
                    {{ title }}
                </h2>

                <p class="text-sm text-white/60">
                    {{ subtitle }}
                </p>
            </div>

            <div class="shrink-0">
                <img
                    :src="savings"
                    alt="Precious metal gold bars"
                    class="h-20 w-20"
                />
            </div>
        </div>

        <CtaLink class="mt-5" :link-text="linkText" :to="ctaTo"/>
    </div>
</template>