<script setup lang="ts">
import { useUpdateModelText } from "../../../composables/useUpdateModelValue";

interface TextArea {
  placeHolder?: string;
  maxLength?: number | null;
  minLength?: number | null;
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
    :minlength="props.minLength!"
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
