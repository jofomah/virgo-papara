<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="cls" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
</template>

<script setup>
defineProps({
  cls: {
    type: String,
    default: 'w-6 h-6'
  }
})
</script>