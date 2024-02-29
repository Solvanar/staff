<template>
  <div>
    <label :for="title">{{ title }}</label>
    <el-input
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :rows="5"
      type="textarea"
      placeholder=""
    />
  </div>
</template>

<script setup lang="ts">
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
:deep(.el-textarea__inner) {
  box-shadow: none !important;
  border: 1px solid var(--color-gray-light);
}
</style>
