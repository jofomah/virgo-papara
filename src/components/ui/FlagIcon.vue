<script setup>
import { computed } from 'vue';
import { flagImages } from '@/assets/images/flags';

const props = defineProps({
    countryCode: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: 'sm', // xs | sm | md
    },
});

const sizeClassMap = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
};

const sizeClass = computed(() => {
    return sizeClassMap[props.size] || sizeClassMap.sm
});

const normalizedcountryCode = computed(() => {
    return props.countryCode.toLowerCase()
});

const flag = computed(() => {
    return flagImages[normalizedcountryCode.value]
});

</script>

<template>
    <img
        v-if="flag"
        :src="flag.src"
        :alt="normalizedcountryCode"
        class="rounded-full object-cover"
        :class="sizeClass"
        loading="lazy"
    />

    <!-- Optional fallback -->
    <div v-else class="rounded-full bg-white/10" :class="sizeClass" />
</template>