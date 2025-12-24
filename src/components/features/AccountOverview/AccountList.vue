<script setup>
import AccountItem from './AccountItem.vue';

defineProps({
    accounts: {
        type: Array, // TODO: validate props [ {balance, symbol, title, icon} ]
        required: true
    }
});
</script>

<template>
    <div class="mt-6 space-y-3">
        <AccountItem v-for="account in accounts" :account="account" />
    </div>
</template>