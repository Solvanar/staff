<template>
  <div class="wrapper">
    <label :for="title">{{ title }}</label>
    <el-date-picker
      :format="'DD.MM.YYYY'"
      :modelValue="modelValue"
      :name="title"
      type="date"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
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
.wrapper {
  display: block;
}

:deep(.el-date-editor) {
  display: block;
  width: 100%;
}

:deep(.el-input__wrapper) {
  border: 1px solid var(--color-gray-light);
  box-shadow: none;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
}
</style>
