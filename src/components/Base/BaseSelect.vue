<template>
  <div>
    <label :for="title">{{ title }}</label>
    <el-select
      :model-value="modelValue"
      :multiple="multiple"
      class="m-2"
      placeholder=""
      size="large"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.title"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface Props {
  modelValue: string | string[]
  title: string
  options: Record<string, string>[]
  multiple?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  title: '',
  options: () => [],
  multiple: false,
})
</script>

<style scoped>
:deep(.el-select .el-select__wrapper) {
  box-shadow: none !important;
  border: 1px solid var(--color-gray-light);
}

:deep(.el-select__wrapper):focus {
  border: 1px solid var(--color-red);
}
</style>
