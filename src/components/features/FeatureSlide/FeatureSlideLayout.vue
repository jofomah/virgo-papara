<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <div>
    <div class="flex items-start justify-between gap-4">

      <!-- Left -->
      <div class="flex-1">

        <!-- Context / Icon / Markets -->
        <div v-if="$slots.context" class="mb-3 flex items-center gap-3">
          <slot name="context" />
        </div>

        <!-- Title -->
        <h2 class="mb-1 text-xl font-semibold leading-tight">
          {{ title }}
        </h2>

        <!-- Subtitle -->
        <p v-if="subtitle" class="text-sm text-white/60">
          {{ subtitle }}
        </p>

        <!-- Optional extra -->
        <slot />
      </div>

      <!-- Right Illustration -->
      <div v-if="$slots.illustration" class="shrink-0">
        <slot name="illustration" />
      </div>
    </div>

    <!-- CTA link -->
    <div v-if="$slots.cta">
      <slot name="cta" />
    </div>
  </div>
</template>
