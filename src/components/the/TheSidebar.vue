<template>
  <aside class="sidebar">
    <div class="logo">КАДРЫ</div>
    <div v-for="category in routes" :key="category.id" class="categories">
      <div class="category-name">{{ category.id === 'profile' ? 'Профиль' : 'Моя работа' }}</div>
      <div
        v-for="route in category.data"
        :key="route.name"
        :class="['route-name', { selected: route.path === currentRoute.path }]"
      >
        <router-link :to="route.path">
          {{ route.meta.title }}
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const currentRoute = useRoute()

const routes = router.options.routes.reduce((accumulator, currentValue) => {
  if (!currentValue.meta || !currentValue.meta.type) {
    return accumulator
  }

  const type = currentValue.meta?.type.toString();

  if (!accumulator[type]) {
    accumulator[type] = {
      id: type,
      data: [],
    }
  }

  accumulator[type].data.push(currentValue)
  return accumulator
}, {})
</script>

<style scoped>
.sidebar {
  background-color: var(--color-black);
  color: var(--color-white-dark);
  height: 100vh;
  padding: calc(var(--indent) / 2);
  width: var(--sidebar-width);

  .logo {
    font-size: 30px;
    margin-bottom: 10px;
    padding: 30px;
  }

  .categories {
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--indent);

    .category-name {
      color: var(--color-gray-dark);
      font-size: 12px;
      padding: 5px 10px;
    }

    .route-name {
      border-radius: var(--border-radius-sm);
      padding: 10px;

      &:hover,
      &.selected {
        background-color: var(--color-gray);
        color: var(--color-white);
      }

      a {
        color: var(--color-gray-light);
        text-decoration: none;
      }
    }
  }
}
</style>
