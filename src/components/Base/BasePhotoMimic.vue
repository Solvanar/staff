<template>
  <div :class="['photo-icon', size]">АР</div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'

interface Props {
  size?: string
  text?: string
}

withDefaults(defineProps<Props>(), {
  size: 'small',
  text: 'АН',
})
</script>

<style scoped>
.photo-icon {
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  color: var(--color-gray-light);
  font-weight: var(--font-weight-bold);
  text-align: center;
  width: 150px;
}

.sm {
  border-radius: 50px;
  font-size: 24px;
  height: 50px;
  line-height: 50px;
  width: 50px;
}

.lg {
  border-radius: 150px;
  font-size: 72px;
  height: 150px;
  line-height: 150px;
  width: 150px;
}
</style>
