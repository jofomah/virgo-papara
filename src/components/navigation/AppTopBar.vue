<script setup>
import TopNavItem from '@components/navigation/items/TopNavItem.vue';
import Badge from '@components/ui/Badge.vue';
import UserIcon from '@components/icons/UserIcon.vue';
</script>

<template>
    <header class="flex items-center justify-between pt-6 pb-4">
        <div class="flex items-center gap-3">
            <TopNavItem icon="menu" cls="relative" active>
                <template #badge>
                    <Badge value="7" class="absolute -top-1 -right-1 text-xxxs text-white px-1.5" />
                </template>
            </TopNavItem>

            <TopNavItem icon="chat"></TopNavItem>
        </div>
        <div class="flex items-center gap-3">
            <div class="text-right">
                <p class="text-sm text-text-muted font-medium tracking-tight">
                    Papara No: <span class="font-bold">1234567890</span>
                </p>
            </div>

            <TopNavItem icon="user"></TopNavItem>
        </div>
    </header>
</template>
