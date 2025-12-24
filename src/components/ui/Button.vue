<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: {
    type: String,
    default: 'button' // 'button' | 'link'
  },
  to: String, // for RouterLink
  variant: {
    type: String,
    default: 'primary' // primary | secondary | outline | ghost
  }
})

const base =
  'w-full h-12 rounded-xl flex items-center justify-center gap-2 font-medium transition'

const variants = {
  primary: 'bg-white text-black',
  secondary: 'bg-surface text-white',
  outline: 'border border-white text-white',
  ghost: 'text-white'
}

const classes = computed(() => [
  base,
  variants[props.variant]
])
</script>

<template>
  <component
    :is="as === 'link' ? 'RouterLink' : 'button'"
    :to="to"
    :class="classes"
  >
    <slot />
    <slot name="icon" />
  </component>
</template>
