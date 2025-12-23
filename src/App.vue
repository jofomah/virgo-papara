<script setup>
import AppTopBar from '@components/navigation/AppTopBar.vue';
import BottomNav from '@components/navigation/BottomNav.vue';


</script>

<template>
  <div class="min-h-screen bg-bg px-4 pb-24">
    <AppTopBar></AppTopBar>
    <!-- ================= TOP BAR =================
    <header class="flex items-center justify-between pt-6 pb-4">
      <div class="flex items-center gap-3">
        <button class="relative h-12 w-12 rounded-full bg-surface flex items-center justify-center">
          ☰
          <span class="absolute -top-1 -right-1 bg-badge text-xs text-white rounded-full px-1.5">
            7
          </span>
        </button>
        <button class="h-12 w-12 rounded-full bg-surface flex items-center justify-center">
          💬
        </button>
      </div>
      <button class="h-12 w-12 rounded-full bg-surface flex items-center justify-center">
        👤
      </button>
    </header>

     -->

    <!-- ================= QUICK ACTIONS ================= -->
    <section class="flex gap-4 overflow-x-auto pb-6">
      <div class="flex flex-col items-center gap-2 shrink-0">
        <div class="h-16 w-16 rounded-full bg-surface flex items-center justify-center border border-border-soft">
          🪙
        </div>
        <span class="text-xs text-center">Papara Sticker</span>
      </div>

      <div class="flex flex-col items-center gap-2 shrink-0">
        <div class="h-16 w-16 rounded-full bg-surface flex items-center justify-center border border-border-soft">
          🦸
        </div>
        <span class="text-xs text-center">Superman Card</span>
      </div>
    </section>

    <!-- ================= FEATURE CARD ================= -->
    <section class="rounded-[var(--radius-card)] bg-surface p-5 mb-6">
      <p class="text-sm text-text-secondary mb-1">
        Kıymetli Madenler
      </p>

      <h3 class="text-lg font-semibold mb-3">
        Altın, Gümüş, Platin
      </h3>

      <button
        class="w-full flex items-center justify-between bg-bg border border-border-soft rounded-xl px-4 py-3 text-sm">
        Kıymetli Madenler Hesabı Aç
        →
      </button>
    </section>

    <!-- ================= NOTIFICATION CARD ================= -->
    <section class="relative rounded-[var(--radius-card)] bg-surface p-5 mb-6">
      <span class="absolute top-3 right-3 bg-badge text-xs text-white rounded-full px-2">
        5
      </span>

      <p class="text-xs text-text-muted mb-1">
        Bugün 06:00
      </p>

      <p class="text-sm font-medium">
        Aylık hesap özetin oluşturuldu.
      </p>

      <p class="text-xs text-text-secondary">
        Eylül ayında neler yaptığını görmek için tıkla
      </p>
    </section>

    <!-- ================= ACTION BUTTONS ================= -->
    <section class="grid grid-cols-2 gap-4 mb-8">
      <button class="bg-surface rounded-xl py-4 flex flex-col items-center gap-2">
        ⬆️
        <span class="text-sm font-medium">Hesabına Para Yatır</span>
      </button>

      <button class="bg-surface rounded-xl py-4 flex flex-col items-center gap-2">
        💳
        <span class="text-sm font-medium">Papara Card İste</span>
      </button>
    </section>

    <!-- ================= TRANSACTIONS ================= -->
    <section>
      <p class="text-sm text-text-secondary mb-3">Hesap Hareketleri</p>

      <div class="space-y-4">
        <div class="flex items-center justify-between bg-surface rounded-xl p-4">
          <div>
            <p class="text-sm font-medium">Garanti BBVA</p>
            <p class="text-xs text-text-secondary">FAST Para Transferi</p>
          </div>
          <p class="text-success font-semibold">₺20.000,00</p>
        </div>

        <div class="flex items-center justify-between bg-surface rounded-xl p-4">
          <div>
            <p class="text-sm font-medium">Hidayet Salt</p>
            <p class="text-xs text-text-secondary">FAST Para Transferi</p>
          </div>
          <p class="text-danger font-semibold">₺20.000,00</p>
        </div>
      </div>
    </section>


 <BottomNav></BottomNav>




</div>
</template>

<style scoped>

</style>
