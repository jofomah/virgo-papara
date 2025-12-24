<script setup>
import Button from '@components/ui/Button.vue';
import WalletIcon from '@components/icons/WalletIcon.vue'
import SendIcon from '@components/icons/SendIcon.vue'

const emit = defineEmits([
  'deposit-withdraw',
  'send',
])
</script>

<template>
  <div class="flex gap-3">
    <!-- Deposit / Withdraw -->
    <Button variant="secondary" class="flex-1 justify-between px-4" @click="emit('deposit-withdraw')">
      <div class="flex w-full items-center justify-between">
        <span>Yatır / Çek</span>
        <WalletIcon class="h-5 w-5" />
      </div>
    </Button>

    <!-- Send -->
    <Button variant="secondary" class="flex-1 justify-between px-4" @click="emit('send')">
      <div class="flex w-full items-center justify-between">
        <span>Gönder</span>
        <SendIcon class="h-5 w-5" />
      </div>
    </Button>
  </div>
</template>
