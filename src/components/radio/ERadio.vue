<script setup lang="ts">
import { useUpdateModelRadiobox } from "../../composables/useUpdateModelValue";

interface Radio {
  value?: any;
  name?: string;
  disabled?: boolean;
}

const props = defineProps<Radio>();
const emit = defineEmits();
</script>

<template>
  <label :for="props.name">
    <input
      type="radio"
      @change="useUpdateModelRadiobox(props.value, emit)"
      :disabled="props.disabled"
      :name="props.name"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
export default {
  name: "ERadio",
};
</script>
