<script setup>
import { InvestmentImages } from '@images/investments';

console.log(InvestmentImages);

defineProps({
    markets: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="flex items-center">
        <div v-for="market in markets" :key="market.title"
            class="flex items-center border-r border-white/20 last:border-r-0 px-2 first:pl-0">
            <span class="h-5 w-5 bg-white/10 flex items-center justify-center rounded-sm">
                <img :src="market.img.src" alt="" class="w-full object-contain" />
            </span>
        </div>
    </div>
</template>
