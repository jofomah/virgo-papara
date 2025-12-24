<script setup>
import StoryItem from '@components/stories/StoryItem.vue';
import { storyImages } from '@images/app-stories/StoryImages'

defineProps({
  stories: {
    type: Array,
    required: true,
    validator: (items) => {
      return Array.isArray(items) && items.every(item =>
        typeof item.id === 'number' &&
        typeof item.label === 'string' &&
        typeof item.pinned === 'boolean'
      )
    }
  }
});
</script>
<template>
  <section class="flex justify-start overflow-x-auto gap-3 px-4 py-4 no-scrollbar scroll-smooth">
        <StoryItem
            v-for="story in stories"
            :key="story.id" 
            :label="story.label"
            :is-pinned="story.pinned"
            :image="storyImages[story.image]"
        />
    </section>
</template>