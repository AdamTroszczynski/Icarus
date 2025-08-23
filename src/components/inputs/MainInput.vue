<template>
  <div class="flex flex-col gap-1">
    <label :for="id" class="text-primary-grey"><slot /></label>
    <input
      v-model="value"
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      class="bg-secondary-darkBlue placeholder:text-shadow-secondary-grey text-primary-grey w-full rounded-lg p-2"
    />
    <span class="text-sm text-red-400">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    defaullt: undefined,
  },
});

const { value, errorMessage } = useField(props.name);
</script>
