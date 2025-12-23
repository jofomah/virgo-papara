<script setup>
import Icon from '@components/ui/Icon.vue';

defineProps({
    label: {
        type: String,
        required: true
    },
    isPinned: {
        type: Boolean,
        default: false
    },
    image: {
        type: Object,
        required: true,
        validator: (obj) => {
            return obj && obj.src;
        }
    }
});
</script>
<template>
    <div class="flex flex-col items-center gap-2 shrink-0 w-[66px]">
        <div class="relative h-14 w-14 rounded-full flex items-center justify-center">
            <div class="inset-0 rounded-full border-2 border-white/90 overflow-hidden">
                <div class="h-14 w-14">
                   <img :src="image.src" class="h-full w-full object-cover " :alt="label" />
                </div>
                <span v-if="isPinned"
                    class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white flex items-center justify-center">
                    <Icon name="pin" />
                </span>
            </div>
        </div>
        <span class="text-xxxs text-center font-semibold">{{ label }}</span>
    </div>
</template>
