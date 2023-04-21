<script setup lang="ts">
import { watch } from "vue";

interface Select {
  placeHolder?: string;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  value?: any;
}

const props = defineProps<Select>();

let selectedValue = props.value ?? null;

watch(selectedValue, (newValue) => {
  selectedValue = newValue;
});
</script>

<template>
  <select
    :multiple="props.multiple"
    :required="props.required"
    :disabled="props.disabled"
    v-model="selectedValue"
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
