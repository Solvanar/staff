<template>
  <div class="form">
    <BasePhotoMimic :size="'lg'" />
    <div>
      <BasePhotoUpload v-model="form.photo" />
    </div>
    <div class="form-row">
      <BaseInput v-model="form.secondName" :title="'Фамилия'" />
      <BaseInput v-model="form.firstName" :title="'Имя'" />
    </div>
    <div class="form-row">
      <BaseSelect v-model="form.status" :options="statusOptions" :title="'Статус'" />
    </div>
    <div class="form-row">
      <BaseDatePicker v-model="form.birthday" :title="'День рождения'" />
    </div>
    <div class="form-row">
      <BaseSelect v-model="form.citizenship" :options="citizenshipOptions" :title="'Гражданство'" />
    </div>
    <div class="form-row">
      <BaseSelect
        v-model="form.readyToGo"
        :options="readyToGoOptions"
        :title="'Готовность приехать'"
      />
    </div>
    <div class="form-row">
      <BaseSelect
        v-model="form.speciality"
        :multiple="true"
        :options="specialityOptions"
        :title="'Основная специальность'"
      />
    </div>
    <div class="form-row">
      <BaseSwitch v-model="form.isSlinger" :title="'Стропальщик'" />
    </div>
    <div class="form-row">
      <BaseInput v-model="form.wishedSalary" :title="'Желаемая заработная плата'" />
      <BaseInput v-model="form.wishedHourlyRate" :title="'Желаемая часовая ставка'" />
    </div>
    <div class="form-row">
      <BaseSelect v-model="form.schedule" :options="scheduleOptions" :title="'График работы'" />
      <BaseInput v-model="form.wishedHourlyProduction" :title="'Желаемая выработка часов'" />
    </div>
    <div class="form-row">
      <BaseTextarea v-model="form.about" :title="'О себе'" />
    </div>
    <div class="form-buttons">
      <BaseButton>Отмена</BaseButton>
      <BaseButton :style="'danger'" @click="submit">Сохранить</BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import BaseSwitch from '@/components/Base/BaseSwitch.vue'
import BaseDatePicker from '@/components/Base/BaseDatePicker.vue'
import BaseTextarea from '@/components/Base/BaseTextarea.vue'
import BasePhotoMimic from '@/components/Base/BasePhotoMimic.vue'
import BasePhotoUpload from '@/components/Base/BasePhotoUpload.vue'

import { reactive } from 'vue'

const statusOptions = [
  {
    value: 'married',
    title: 'Женат',
  },
  {
    value: 'single',
    title: 'Не женат',
  },
];

const readyToGoOptions = [
  {
    value: 'yes',
    title: 'Да',
  },
  {
    value: 'no',
    title: 'Нет',
  },
];

const citizenshipOptions = [
  {
    value: 'russia',
    title: 'РФ',
  },
  {
    value: 'cis',
    title: 'СНГ',
  },
];

const specialityOptions = [
  {
    value: 'concrete_worker',
    title: 'Бетонщик',
  },
  {
    value: 'painter',
    title: 'Маляр',
  },
];

const scheduleOptions = [
  {
    value: '2/2',
    title: '2/2',
  },
  {
    value: '4/2',
    title: '4/2',
  },
]

const form = reactive({
  photo: '',
  firstName: '',
  secondName: '',
  status: '',
  birthday: '',
  citizenship: '',
  readyToGo: '',
  speciality: [],
  isSlinger: false,
  wishedSalary: '',
  wishedHourlyRate: '',
  schedule: '',
  wishedHourlyProduction: '',
  about: '',
})

const submit = () => {
  console.log(form)
}
</script>

<style scoped>
.form {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: calc(var(--indent) / 2);
  justify-content: center;
  padding: var(--indent);
  width: 100%;

  .form-row {
    display: flex;
    gap: var(--indent);
    width: 100%;

    div {
      flex-basis: 100%;
    }
  }

  .form-buttons {
    display: flex;
    gap: var(--indent);
    justify-content: right;
    width: 100%;
  }
}
</style>
