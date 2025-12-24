<script setup>
const props = defineProps({
    account: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
            <img :src="account.icon.src" alt="" class="h-5 w-5 rounded-full" />
            <span class="text-sm">{{ account.title }}</span>
        </div>
        <span v-if="account.balance" class="text-sm text-white/70">
            {{ `${account.symbol}${account.balance}` }}
        </span>
        <span v-else class="text-sm text-white/40">—</span>
    </div>
</template>
