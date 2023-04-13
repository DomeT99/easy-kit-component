<script setup lang="ts">
import { Input } from "../../types/components/Input";

interface InputProps extends Input {}

const props = defineProps<InputProps>();
const emit = defineEmits(["update:modelValue"]);

function updateModelValue(event: Event) {
  const value = (event?.target as HTMLInputElement).value;

  emit("update:modelValue", value);
}
</script>

<template>
  <input
    @input="updateModelValue($event)"
    :type="props.type ?? 'text'"
    :class="props.customClasses ?? 'e-input'"
    :placeholder="props.placeHolder ?? ''"
  />
</template>

<script lang="ts">
export default {
  name: "EInput",
};
</script>
