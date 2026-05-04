<script setup lang="ts">
import { ref, watch } from "vue";

interface Select {
  placeHolder?: string;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  value?: any;
}

const props = defineProps<Select>();
const emit = defineEmits();

const selectedValue = ref(props.value ?? null);

watch(selectedValue, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(() => props.value, (newValue) => {
  selectedValue.value = newValue ?? null;
});
</script>

<template>
  <select
    v-model="selectedValue"
    :multiple="props.multiple"
    :required="props.required"
    :disabled="props.disabled"
  >
    <option disabled :value="null">
      {{ props.placeHolder ?? "" }}
    </option>
    <slot></slot>
  </select>
</template>

<script lang="ts">
export default {
  name: "ESelect",
};
</script>
