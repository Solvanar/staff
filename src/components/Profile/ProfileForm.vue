<template>
  <div class="form">
    <BasePhotoMimic :size="'lg'" />
    <div>
      <BasePhotoUpload v-model="form.photo" />
    </div>
    <div class="form-row">
      <BaseInput v-model="form.secondName" :title="'Фамилия'" :has-error="getError('secondName')" />
      <BaseInput v-model="form.firstName" :title="'Имя'" :has-error="getError('firstName')" />
    </div>
    <div class="form-row">
      <BaseSelect
          v-model="form.isMarried"
          :options="profileOptions.isMarried"
          :title="'Статус'"
          :has-error="getError('isMarried')"
      />
    </div>
    <div class="form-row">
      <BaseDatePicker
          v-model="form.birthday"
          :title="'День рождения'"
          :has-error="getError('birthday')"
      />
    </div>
    <div class="form-row">
      <BaseSelect
          v-model="form.citizenship"
          :options="profileOptions.citizenship"
          :title="'Гражданство'"
          :has-error="getError('citizenship')"
      />
    </div>
    <div class="form-row">
      <BaseSelect
        v-model="form.readyToGo"
        :options="profileOptions.readyToGo"
        :title="'Готовность приехать'"
        :has-error="getError('readyToGo')"
      />
    </div>
    <div class="form-row">
      <BaseSelect
        v-model="form.speciality"
        :multiple="true"
        :options="profileOptions.speciality"
        :title="'Основная специальность'"
        :has-error="getError('speciality')"
      />
    </div>
    <div class="form-row">
      <BaseSwitch v-model="form.isSlinger" :title="'Стропальщик'" />
    </div>
    <div class="form-row">
      <BaseInput
          v-model="form.wishedSalary"
          :title="'Желаемая заработная плата'"
          :has-error="getError('wishedSalary')"
      />
      <BaseInput
          v-model="form.wishedHourlyRate"
          :title="'Желаемая часовая ставка'"
          :has-error="getError('wishedHourlyRate')"
      />
    </div>
    <div class="form-row">
      <BaseSelect
          v-model="form.schedule"
          :options="profileOptions.schedule"
          :title="'График работы'"
          :has-error="getError('schedule')"
      />
      <BaseInput
          v-model="form.wishedHourlyProduction"
          :title="'Желаемая выработка часов'"
          :has-error="getError('wishedHourlyProduction')"
      />
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
import { ref } from 'vue'
import { z } from 'zod';
import { VALIDATION_ERRORS } from '@/constants/errors';
import { profileOptions } from '@/constants/dictionary';

import useValidation from '@/composables/useValidation';

const specialitySchema = z
    .string()
    .array()
    .nonempty({ message: VALIDATION_ERRORS.required });

const validationSchema = z.object({
  firstName: z.string().min(1, VALIDATION_ERRORS.required),
  secondName: z.string().min(1, VALIDATION_ERRORS.required),
  isMarried: z.boolean({ required_error: VALIDATION_ERRORS.required }),
  birthday: z.coerce.date({
    errorMap: () => ({
      message: VALIDATION_ERRORS.invalidDate
    }),
  }),
  citizenship: z.string().min(1, VALIDATION_ERRORS.required),
  readyToGo: z.boolean({ required_error: VALIDATION_ERRORS.required }),
  speciality: specialitySchema,
  isSlinger: z.boolean({ required_error: VALIDATION_ERRORS.required }),
  wishedSalary: z.coerce.number().gt(0, VALIDATION_ERRORS.required),
  wishedHourlyRate: z.coerce.number().gt(0, VALIDATION_ERRORS.required),
  schedule: z.string().min(1, VALIDATION_ERRORS.required),
  wishedHourlyProduction: z.coerce.number().gt(0, VALIDATION_ERRORS.required),
  about: z.string(),
});

const form = ref({
  photo: '',
  firstName: '',
  secondName: '',
  isMarried: false,
  birthday: '',
  citizenship: '',
  readyToGo: false,
  speciality: [],
  isSlinger: false,
  wishedSalary: '',
  wishedHourlyRate: '',
  schedule: '',
  wishedHourlyProduction: '',
  about: '',
})

const { validate, getError } = useValidation(validationSchema, form);

const submit = async () => {
  await validate();
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
    position: sticky;
    bottom: 0;
    background-color: var(--color-white);
    padding: 15px;
    gap: var(--indent);
    justify-content: right;
    width: 100%;
  }
}
</style>
