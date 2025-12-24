<script setup>
import AccountBalance from './AccountBalance.vue';
import AccountHeader from './AccountHeader.vue';
import Divider from '@components/ui/Divider.vue';
import ActionButtons from './ActionButtons.vue';

defineProps({
  title: String,
  countryCode: String,
  balance: String,
  iban: String
});
</script>

<template>
  <div>
    <AccountHeader
      :title="title"
      :country-code="countryCode"
    />

    <Divider />

    <AccountBalance :balance="balance" />

    <p
      class="
        mt-2 text-sm tracking-wide
        text-white/40
        md:text-base
      "
    >
      IBAN:
      <span class="px-1 font-semibold text-white/80">
        {{ iban }}
      </span>
    </p>

    <ActionButtons class="pt-5 md:pt-6" />
  </div>
</template>