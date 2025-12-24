<script setup>
import { ref, computed, reactive } from 'vue';

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
    <div class="h-full w-full
      rounded-2xl bg-card-surface text-white shadow-sm
    
      /* padding scales */
      px-5 py-4
      sm:px-6 sm:py-5
      md:px-7 md:py-6

      /* center on large screens */
      lg:mx-auto">
        <div class="flex h-full w-full flex-col justify-between text-white">
            <!-- Header component -->
            <div class="flex items-start justify-between">
                <!-- Left: Title + Total -->
                <div>
                    <!-- Title -->
                    <div class="mb-1 flex items-center gap-2 text-sm text-white/70">
                        <span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">
                            {{ currentSymbol }}
                        </span>
                        <span>{{ title }}</span>
                    </div>

                    <!-- Total Amount -->
                    <h2 class="text-3xl font-semibold tracking-tight">
                        {{ accountBalance }}
                    </h2>
                </div>

                <!-- Component: CurrencyToggle -->
                <button class="flex h-8 w-14 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
                    {{ currentSymbol }}
                </button>
            </div>

            <!-- Account list-->
            <div class="mt-6 space-y-3">
                <!-- Component: AccountListItem -->
                <div v-for="account in accounts" :key="account.symbol" class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <img :src="account.icon.src" alt="TRY" class="h-5 w-5 rounded-full" />
                        <span class="text-sm">{{ account.title }}</span>
                    </div>
                    <span v-if="account.balance" class="text-sm text-white/70">
                        {{ `${account.symbol}${account.balance}` }}
                    </span>
                    <span v-else class="text-sm text-white/40">—</span>
                </div>
            </div>
        </div>
    </div>
</template>