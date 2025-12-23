<script setup>
defineProps({
  active: Boolean,
  badge: Number
})

defineEmits(['click'])
</script>

<template>
  <slot
    :active="active"
    :badge="badge"
    @click="$emit('click')"
  />
</template>
