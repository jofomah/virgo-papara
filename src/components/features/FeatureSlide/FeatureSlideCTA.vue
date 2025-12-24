<script setup>
import CtaLink from '@components/features/ui/CtaLink.vue'

defineProps({
  to: String,
  text: String,
})
</script>

<template>
  <CtaLink :to="to" :link-text="text" class="mt-15"/>
</template>
