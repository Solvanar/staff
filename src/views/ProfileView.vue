<template>
  <div class="container">
    <div class="header-section">
      <BaseButton
        ><el-icon><ArrowLeft /></el-icon> Назад</BaseButton
      >
      <div class="title">Редактировать профиль</div>
    </div>
    <div class="main-section">
      <div class="info block">
        <div class="title">Основная информация</div>
        <ProfileForm />
      </div>
      <div class="info nav">
        <ProfileNav />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '../components/Base/BaseButton.vue'
import ProfileForm from '@/components/Profile/ProfileForm.vue'
import ProfileNav from '@/components/Profile/ProfileNav.vue'
</script>

<style scoped>
.container {
  padding: var(--indent);

  .header-section {
    display: flex;
    gap: calc(var(--indent) / 2);
    margin-bottom: var(--indent);

    .title {
      font-size: 28px;
      font-weight: var(--font-weight-bold);
    }
  }

  .main-section {
    display: flex;
    gap: var(--indent);

    .info {
      background-color: var(--color-white);
      border-radius: var(--border-radius-lg);
      box-shadow: var(--box-shadow);

      &.block {
         flex: 1;

        .title {
          border-bottom: 1px solid var(--color-gray-light);
          font-weight: var(--font-weight-bold);
          padding: var(--indent);
        }
      }

      &.nav {
         height: fit-content;
         padding: var(--indent);
         width: 300px;
      }
    }
  }
}
</style>
