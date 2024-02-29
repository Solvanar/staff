<template>
  <div class="root">
    <the-sidebar />
    <div class="content">
      <the-header />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/the/TheSidebar.vue'
import TheHeader from '@/components/the/TheHeader.vue'
</script>

<style scoped>
.root {
  display: flex;
}

.content {
  height: calc(100vh - var(--menu-height));
  left: var(--sidebar-width);
  width: calc(100vw - var(--sidebar-width));
}

main {
  background-color: var(--color-white-dark);
  height: calc(100vh - var(--menu-height));
  overflow-y: auto;
}
</style>
