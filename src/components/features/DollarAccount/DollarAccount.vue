<script setup>
import FlagIcon from '@components/ui/FlagIcon.vue';
import DollarWallet from '@images/dollar-accounts/dollar_wallet.png'
import CtaLink from '@components/features/ui/CtaLink.vue';

const countryCode = 'us';

defineProps({
    title: String,
    subtitle: String,
    ctaTo: String,
    linkText: String
});
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
                <!-- Flag Row -->
                <div class="mb-3 flex items-center gap-3">
                    <!-- US Flag -->
                    <div class="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
                        <FlagIcon :country-code="countryCode" />
                    </div>
                </div>

                <h2 class="mb-1 text-xl font-semibold leading-tight w-16">
                    Dolar Hesabı
                </h2>

                <!-- Subtitle -->
                <p class="text-sm text-white/60">
                    Yatırım işlemleri için dolar al / sat.
                </p>
            </div>

            <div class="shrink-0">
                <img
                    :src="DollarWallet"
                    alt="Dollar account illustration"
                    class="h-20 w-20"
                />
            </div>
        </div>

        <CtaLink class="mt-5" :link-text="linkText" :to="ctaTo"/> 
    </div>
</template>