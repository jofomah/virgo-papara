<script setup>
import { computed } from 'vue';
import { icons } from '@components/icons/index.js';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'w-6 h-6'
  }
});

const IconComponent = computed(() => icons[props.name])
</script>

<template>
  <component
    :is="IconComponent"
    :class="size"
    aria-hidden="true"
  />
</template>
