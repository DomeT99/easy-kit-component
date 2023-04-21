<script setup lang="ts">
import { useUpdateModelRadiobox } from "../../composables/useUpdateModelValue";

interface Radio {
  id?: string;
  value: any;
  name: string;
  disabled?: boolean;
}

const props = defineProps<Radio>();
const emit = defineEmits();

let selectedValue = props.value;
</script>

<template>
  <label :for="props.name">
    <input
      @change="useUpdateModelRadiobox(selectedValue, emit)"
      :disabled="props.disabled"
      :name="props.name"
      type="radio"
      :id="props.id"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
export default {
  name: "ERadio",
};
</script>
