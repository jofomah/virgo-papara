<script setup>
defineProps({
    currentSymbol: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    accountBalance: {
        type: String,
        required: true
    }
});
</script>
<template>
    <div class="flex items-start justify-between">
        <div>
            <div class="mb-1 flex items-center gap-2 text-sm text-white/70">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                    {{ currentSymbol }}
                </span>
                <span>{{ title }}</span>
            </div>

            <h2 class="text-3xl font-semibold tracking-tight">
                {{ accountBalance }}
            </h2>
        </div>

        <!-- TODO: move to Component: CurrencyToggle -->
        <button class="flex h-8 w-14 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
            {{ currentSymbol }}
        </button>
    </div>
</template>