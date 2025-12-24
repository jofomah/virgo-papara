<script setup>
import Button from '@components/ui/Button.vue'

defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Button
    as="link"
    :to="to"
    variant="secondary"
    class="justify-between px-4"
  >
    <div class="flex w-full items-center justify-between">
         <span>Yatırım Hesabı Oluştur</span>
    </div>
   
    <template #icon>
      <span class="text-lg">›</span>
    </template>
  </Button>
</template>
