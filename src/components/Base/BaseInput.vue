<template>
  <div>
    <label :for="title">{{ title }}</label>
    <el-input
        :model-value="modelValue"
        :class="className"
        @update:model-value="$emit('update:modelValue', $event)"
    />
    <span v-if="hasError" class="error-text">{{ hasError }}</span>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed, type ComputedRef } from 'vue'

interface Props {
  modelValue: string | number,
  title: string,
  hasError?: string | null,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  title: '',
  hasError: null,
});

const className: ComputedRef<string> = computed(() =>
    `${props.hasError ? 'error' : ''}`
);
</script>

<style scoped>
:deep(.el-input__wrapper) {
  border: 1px solid var(--color-gray-light);
  box-shadow: none;
  height: 40px;
}

:deep(.error .el-input__wrapper) {
  border: 1px solid var(--color-red);
}

.error-text {
  color: var(--color-red);
  font-size: 12px;
}
</style>
