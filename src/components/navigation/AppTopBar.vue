<script setup>
import MenuIcon from '@components/icons/MenuIcon.vue';
import ChatIcon from '@components/icons/ChatIcon.vue';
</script>

<template>
    <header class="flex items-center justify-between pt-6 pb-4">
        <div class="flex items-center gap-3">
            <button class="relative h-12 w-12 rounded-xl bg-icon-bg flex items-center justify-center">
                <MenuIcon class="p-3" />
                <span class="absolute -top-1 -right-1 bg-badge text-xxxs text-white rounded-full px-1.5">
                    7
                </span>
            </button>
            <button class="h-12 w-12 rounded-xl border-1 border-border-soft flex items-center justify-center">
                <ChatIcon class="p-3" />
            </button>
        </div>
        <div class="flex items-center gap-3">
            <div class="text-right">
                <p class="text-sm text-text-muted font-medium tracking-tight">
                    Papara No: <span class="font-bold">1234567890</span>
                </p>
            </div>
            <button class="h-12 w-12 rounded-xl border-1 border-border-soft flex items-center justify-center">
                👤
            </button>
        </div>
    </header>
</template>
