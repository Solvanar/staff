<template>
  <div>
    <label :for="title">{{ title }}</label>
    <el-input :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

interface Props {
  modelValue: string
  title: string
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  title: '',
})
</script>

<style scoped>
:deep(.el-input__wrapper) {
  border: 1px solid var(--color-gray-light);
  box-shadow: none;
  height: 40px;
}
</style>
