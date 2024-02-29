<template>
  <header class="menu">
    <div class="menu-item basic">
      <span class="icon"><SuitcaseLine /></span>
      Вакансии
    </div>
    <div class="menu-item basic last-basic">
      <span class="icon"><OfficeBuilding /></span>
      Объекты
    </div>
    <div class="menu-item additional">
      <span class="icon"><Star /></span>
      Избранное
    </div>
    <div class="menu-item additional">
      <span class="icon"><Bell /></span>
      Уведомления
    </div>
    <div class="menu-item additional">
      <span class="icon"><BasePhotoMimic :size="'sm'" /></span>
      Профиль
    </div>
  </header>
</template>

<script lang="ts" setup>
import BasePhotoMimic from '@/components/Base/BasePhotoMimic.vue'
</script>

<style scoped>
.menu {
  align-items: center;
  background-color: var(--color-white-dark);
  border-bottom: 1px solid var(--color-gray-light);
  display: flex;
  height: var(--menu-height);
  justify-content: space-between;
  width: calc(100vw - var(--sidebar-width));

  .menu-item {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    line-height: inherit;
    margin: 0;
    padding: 0 20px;
    vertical-align: middle;

    &.basic {
      font-size: 18px;
      font-weight: var(--font-weight-bold);
    }

    &.last-basic {
      flex-grow: 1;
    }
  }

  @media screen and (max-width: 400px) {
    .header {
      height: 20px;
    }
  }
}

.icon {
  display: inline-flex;
  padding: 5px;

  svg {
    height: 1em;
    width: 1em;
  }
}
</style>
