import { z, type ZodTypeAny } from 'zod';
import { ref, watch, toValue, type MaybeRefOrGetter } from 'vue';

export default function <T extends ZodTypeAny>(schema: T, data: MaybeRefOrGetter<Record<string, unknown>>) {
  const isValid = ref(true);
  const errors = ref<Record<string, z.ZodIssue[]> | null>(null);
  let watcher: null | (() => void) = null;

  const clearErrors = () => {
    errors.value = null;
  }

  const validationWatch = () => {
    if (!watcher) {
      return;
    }

    watcher = watch(() => toValue(data), async () => {
      await validate()
    }, {
      deep: true,
    });
  }

  const validate = async () => {
    clearErrors();

    const result = await schema.safeParseAsync(toValue(data));

    isValid.value = result.success;

    if (!isValid.value) {
      errors.value = result.error.issues;
      console.log(errors.value)
      validationWatch();
    }

    return errors;
  };

  const getError = (error: string) => {
    return errors.value?.find(err => err.path.includes(error))?.message || null;
  }


  return { validate, validationWatch, getError }
}