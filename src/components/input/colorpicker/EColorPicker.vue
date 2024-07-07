<script setup lang="ts">
import { useUpdateModelText } from "../../../composables/useUpdateModelValue";

interface ColorPicker {
  disabled?: boolean;
}

const props = defineProps<ColorPicker>();
const emit = defineEmits();
</script>

<template>
  <input
    type="color"
    @input="useUpdateModelText($event, emit)" 
    :disabled="props.disabled"
  />
</template>

<script lang="ts">
export default {
  name: "EColorPicker",
};
</script>
