<script setup lang="ts">
import useLengthComputed from "../../composables/useLengthComputed";
import useUpdateModelValue from "../../composables/useUpdateModelValue";
import { Input } from "../../types/components/Input";

interface InputProps extends Input {}

const props = defineProps<InputProps>();
const emit = defineEmits();

const { minLengthComputed, maxLengthComputed } = useLengthComputed(
  props.minLenght!,
  props.maxLength!
);
</script>

<template>
  <input
    @input="useUpdateModelValue($event, emit)"
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
