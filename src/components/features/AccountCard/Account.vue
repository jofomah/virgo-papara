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
  <div
    class="
      h-full w-full
      rounded-2xl bg-card-surface text-white shadow-sm
    
      /* padding scales */
      px-5 py-4
      sm:px-6 sm:py-5
      md:px-7 md:py-6

      /* center on large screens */
      lg:mx-auto
    "
  >
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


<!-- <template>
  
  <div class="h-[190px] rounded-2xl bg-[#1e1e1e] p-5 text-white">
    <p class="text-xs text-white/60 mb-1">
      {{ data.type }}
    </p>

    <h2 class="text-2xl font-semibold mb-6">
      {{ data.balance }}
    </h2>

    <div class="flex gap-3">
      <button class="flex-1 h-11 rounded-xl bg-black/50">
        Yatır / Çek
      </button>
      <button class="flex-1 h-11 rounded-xl bg-black/50">
        Gönder
      </button>
    </div>
  </div>
</template> -->