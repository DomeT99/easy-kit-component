<script setup lang="ts">
import { useUpdateModelText } from "../../../composables/useUpdateModelValue";

type LengthType = number | null;

interface Text {
  placeHolder?: string;
  maxLength?: LengthType;
  minLenght?: LengthType;
  readOnly?: boolean;
  disabled?: boolean;
}

const props = defineProps<Text>();
const emit = defineEmits();
</script>

<template>
  <input
    type="text"
    @input="useUpdateModelText($event, emit)"
    :minlength="props.minLenght!"
    :maxlength="props.maxLength!"
    :readonly="props.readOnly"
    :placeholder="props.placeHolder"
    :disabled="props.disabled"
  />
</template>

<script lang="ts">
export default {
  name: "EText",
};
</script>
