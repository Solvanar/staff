<template>
  <div class="wrapper">
    <label :for="title">{{ title }}</label>
    <el-date-picker
      :format="'DD.MM.YYYY'"
      :model-value="modelValue"
      :name="title"
      :class="className"
      type="date"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <span v-if="hasError" class="error-text">{{ hasError }}</span>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, ComputedRef, computed } from 'vue'

interface Props {
  modelValue: Date | string,
  title: string,
  hasError: string,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  title: '',
  hasError: '',
});

const className: ComputedRef<string> = computed(() =>
    `${props.hasError ? 'error' : ''}`
);
</script>

<style scoped>
.wrapper {
  display: block;
}

:deep(.el-date-editor) {
  display: block;
  height: 40px;
  width: 100%;
}

:deep(.el-input__wrapper) {
  border: 1px solid var(--color-gray-light);
  box-shadow: none;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
}

:deep(.error .el-input__wrapper) {
  border: 1px solid var(--color-red);
}

.error-text {
  color: var(--color-red);
  font-size: 12px;
}
</style>
