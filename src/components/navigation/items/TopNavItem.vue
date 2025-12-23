<script setup>
import BaseNavItem from '@components/navigation/items/BaseItem.vue';
import Icon from '@/components/ui/Icon.vue';

defineProps({
    icon: {
        type: String,
        required: true
    },
    active: Boolean,
    cls: {
        type: [String, Array, Object],
        default: ''
    }
})
</script>

<template>
    <BaseNavItem :active="active">
        <button class="h-12 w-12 rounded-xl flex items-center justify-center" :class="[
            active
                ? 'bg-icon-bg'
                : 'border border-border-soft',
            cls
        ]">
            <Icon :name="icon" size="w-6 h-6" />

            <!-- badge slot ONLY here -->
            <slot name="badge" />
        </button>
    </BaseNavItem>
</template>
