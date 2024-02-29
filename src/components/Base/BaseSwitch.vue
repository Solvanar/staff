<template>
  <div>
    <el-switch
      :model-value="modelValue"
      class="ml-2"
      style="
        --el-switch-on-color: var(--color-green);
        --el-switch-off-color: var(--color-gray-light);
      "
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <label :for="title">{{ title }}</label>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface Props {
  modelValue: boolean
  title: string
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
})
</script>

<style scoped>
label {
  margin-left: 10px;
}
</style>
