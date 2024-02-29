<template>
  <el-upload
    action="http://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    class="upload-photo"
    drag
  >
    <div class="upload-text">
      Перетащите или выберите файл на компьютере
      <p>
        <span class="icon"><Upload /></span>
        <span>Выбрать файл</span>
      </p>
    </div>
  </el-upload>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

interface Props {
  modelValue: string
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
})
</script>

<style scoped>
.upload-photo {
  padding: var(--indent);
  text-align: center;
  width: fit-content;

  .icon {
    background-color: var(--color-white-dark);
    border: 1px solid var(--color-gray-light);
    border-radius: var(--border-radius-sm);
    display: inline-flex;
    margin-right: 10px;
    padding: 5px;

    svg {
      height: 1em;
      width: 1em;
    }
  }
}

.upload-text {
  span {
    color: var(--color-red);
  }
}

:deep(.el-upload__input),
:deep(.el-upload-list) {
  display: none;
}

:deep(.el-upload) {
  display: block;
}

:deep(.el-upload-dragger) {
  border: 2px dashed var(--color-gray-light);
  margin: auto;
  padding: var(--indent);
  width: fit-content;
}
</style>
