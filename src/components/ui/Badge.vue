<script setup>
defineProps({
    /**
     * Background color utility class
     * e.g. bg-badge, bg-danger, bg-success
     */
    bg: {
        type: String,
        default: 'bg-badge'
    },

    /**
     * Optional text value (number or string)
     */
    value: {
        type: [String, Number],
        default: null
    }
});
</script>

<template>
    <span class="inline-flex items-center justify-center rounded-full"
        :class="bg">
        <!-- text badge -->
        <slot v-if="!value" />

        <!-- value badge -->
        <span v-else>
            {{ value }}
        </span>
    </span>
</template>
