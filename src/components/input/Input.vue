<script setup lang="ts">
import { useLengthComputed } from "./composables/useLengthComputed";
import { Input } from "../../types/components/Input";

interface InputProps extends Input {}

const props = defineProps<InputProps>();
const emit = defineEmits(["update:modelValue"]);

const { minLengthComputed, maxLengthComputed } = useLengthComputed(
  props.minLenght!,
  props.maxLength!
);

function updateModelValue(event: Event) {
  const value = (event?.target as HTMLInputElement).value;

  emit("update:modelValue", value);
}
</script>

<template>
  <input
    @input="updateModelValue($event)"
    :minlength="minLengthComputed"
    :maxlength="maxLengthComputed"
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
