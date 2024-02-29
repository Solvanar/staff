<template>
  <div :class="['button', props.style]" @click="(event: Event) => emit('click', event)">
    <span class="content">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'
const emit = defineEmits(['click'])

interface Props {
  style?: string
}

const props = withDefaults(defineProps<Props>(), {
  style: 'default',
})
</script>

<style scoped>
.button {
  align-items: center;
  justify-content: center;
  display: inline-flex;
  box-sizing: border-box;
  text-align: center;
  width: fit-content;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  color: var(--color-gray);
  border-radius: var(--border-radius-sm);
  outline: none;
  padding: 6px 15px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;

  .content {
    vertical-align: middle;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
  }

  &.default {
    background-color: var(--color-white);
    color: var(--color-gray);
  }

  &.danger {
    background-color: var(--color-red);
    color: var(--color-white);
  }

  &.success {
    background-color: var(--color-green);
    color: var(--color-white);
  }
}
</style>
