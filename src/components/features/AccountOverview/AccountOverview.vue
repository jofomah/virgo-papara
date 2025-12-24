<script setup>
import { ref, computed, reactive } from 'vue';
import OverviewHeader from './OverviewHeader.vue';
import AccountList from './AccountList.vue';

const props = defineProps({
    title: String,
    accountBalances: {
        type: Array, // TODO: validate props [ {currencySymbol, balance}]
        required: true
    },
    accounts: {
        type: Array, // TODO: validate props [ {balance, symbol, title, icon} ]
        required: true
    }
});

const currentSymbol = ref('₺'); // simulate Turkisy Currency as default
const currentAccount = reactive(props.accountBalances[0]);

const accountBalance = computed(() => `${currentAccount.currencySymbol}${currentAccount.balance}`);
</script>

<template>
    <div class="flex h-full w-full flex-col justify-between text-white">
        <OverviewHeader :current-symbol="currentSymbol" :title="title" :account-balance="accountBalance" />

        <AccountList :accounts="accounts" />
    </div>
</template>