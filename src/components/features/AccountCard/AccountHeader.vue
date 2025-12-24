<script setup>
import FlagIcon from '@components/ui/FlagIcon.vue';

defineProps({
    title: String,
    countryCode: String
});
</script>

<template>
    <div class="flex items-center gap-2">
        <FlagIcon :country-code="countryCode" />
        <span class="text-sm font-medium text-white/80">
            {{ title }}
        </span>
    </div>
</template>