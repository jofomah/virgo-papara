<script setup>
import BaseNavItem from '@components/navigation/items/BaseItem.vue';
import Icon from '@/components/ui/Icon.vue';

defineProps({
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    badge: {
        type: Number,
        default: null,
    },
});
</script>

<template>
    <BaseNavItem :active="active" :badge="badge">
        <div class="flex flex-col items-center gap-1" :class="active ? 'text-text-primary' : 'text-text-muted'">
            <Icon :name="icon" />
            <span class="text-[9px] font-bold">
                {{ label }}
            </span>
        </div>

    </BaseNavItem>
</template>
