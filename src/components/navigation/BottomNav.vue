<script setup>
import BottomNavItem from '@components/navigation/items/BottomNavItem.vue';
</script>
<template>
    <nav
        class="fixed bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-xl border-t border-border-soft px-4 pb-6 pt-3 grid grid-cols-5 z-50">

        <BottomNavItem label="Ana Sayfa" icon="home" active />
        <BottomNavItem label="QR İşlemleri" icon="qr" />
        <BottomNavItem label="Para Transferi" icon="transfer" />
        <BottomNavItem label="Ödemeler" icon="payment" />
        <BottomNavItem label="Papara Card" icon="card" />
    </nav>
</template>