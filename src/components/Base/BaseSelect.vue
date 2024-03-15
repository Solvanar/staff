<template>
  <div>
    <label :for="title">{{ title }}</label>
    <el-select
      :model-value="modelValue"
      :multiple="multiple"
      :class="className"
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
    <span v-if="hasError" class="error-text">{{hasError}}</span>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ComputedRef, computed } from 'vue'

interface Props {
  modelValue: string | string[] | boolean,
  title: string,
  options: Record<string, unknown>[],
  multiple?: boolean,
  hasError?: string,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  title: '',
  options: () => [],
  multiple: false,
  hasError: '',
});

const className: ComputedRef<string> = computed(() =>
    `${props.hasError ? 'error' : ''}`
);
</script>

<style scoped>
:deep(.el-select .el-select__wrapper) {
  box-shadow: none !important;
  border: 1px solid var(--color-gray-light);
}

:deep(.el-select__wrapper):focus {
  border: 1px solid var(--color-red);
}

:deep(.error .el-select__wrapper) {
  border: 1px solid var(--color-red);
}

.error-text {
  color: var(--color-red);
  font-size: 12px;
}
</style>
