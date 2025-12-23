<script setup>
import AppTopBar from '@components/navigation/AppTopBar.vue';
import BottomNav from '@components/navigation/BottomNav.vue';
</script>

<template>
    <div class="min-h-screen bg-bg px-4 pt-24 pb-24">
        <AppTopBar></AppTopBar>

        <slot />

        <BottomNav></BottomNav>
    </div>
</template>