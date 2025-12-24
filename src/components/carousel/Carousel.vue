<script setup>
import { ref, computed, watch } from 'vue'
import CarouselSelector from './CarouselSelector.vue'

const props = defineProps({
  items: { type: Array, required: true },
  /** turn peek on/off per breakpoint */
  peek: {
    type: Boolean,
    default: true, // mobile peek ON by default
  },
})

const current = ref(0)

watch(
  () => props.items.length,
  (len) => {
    if (current.value > len - 1) current.value = len - 1
  }
)

const goTo = (i) => (current.value = i)

/**
 * Responsive + directional peek
 * - sm: peek
 * - md: subtle peek
 * - lg+: no peek (recommended)
 */
const viewportPadding = computed(() => {
  if (!props.peek) return 'px-0'

  const first = current.value === 0
  const last = current.value === props.items.length - 1

  if (first) {
    return 'pr-4 md:pr-6 lg:px-0'
  }
  if (last) {
    return 'pl-4 md:pl-6 lg:px-0'
  }
  return 'px-4 md:px-6 lg:px-0'
})
</script>

<template>
  <!-- VIEWPORT -->
  <div
    class="relative w-full overflow-hidden transition-[padding] duration-300"
    :class="viewportPadding"
  >
    <!-- TRACK -->
    <div
      class="flex transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
      <slot />
    </div>

    <!-- DOTS -->
    <CarouselSelector
      class="mt-4"
      :total="items.length"
      :current="current"
      @update:current="goTo"
    />
  </div>
</template>
