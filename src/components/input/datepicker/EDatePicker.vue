<script setup lang="ts">
import { useUpdateModelText } from "../../../composables/useUpdateModelValue";

interface DatePicker {
  readOnly?: boolean;
  disabled?: boolean;
}

const props = defineProps<DatePicker>();
const emit = defineEmits();
</script>

<template>
  <input
    type="date"
    @input="useUpdateModelText($event, emit)"
    :readonly="props.readOnly"
    :disabled="props.disabled"
  />
</template>

<script lang="ts">
export default {
  name: "EDatePicker",
};
</script>
