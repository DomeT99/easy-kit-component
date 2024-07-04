<script setup lang="ts">
import { useUpdateModelText } from "../../../composables/useUpdateModelValue";

type LengthType = number | null;

interface TextArea {
  placeHolder?: string;
  maxLength?: LengthType;
  minLenght?: LengthType;
  readOnly?: boolean;
  disabled?: boolean;
  cols?: number;
  rows?: number;
}

const props = defineProps<TextArea>();
const emit = defineEmits();
</script>

<template>
  <textarea
    @input="useUpdateModelText($event, emit)"
    :minlength="props.minLenght!"
    :maxlength="props.maxLength!"
    :readonly="props.readOnly"
    :placeholder="props.placeHolder"
    :disabled="props.disabled"
    :cols="props.cols"
    :rows="props.rows"
  />
</template>

<script lang="ts">
export default {
  name: "ETextArea",
};
</script>
