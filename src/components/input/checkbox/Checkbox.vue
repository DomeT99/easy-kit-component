<script setup lang="ts">
import { useUpdateModelCheckbox } from "../../../composables/useUpdateModelValue";

interface Checkbox{
  disabled?:boolean;
}

const props = defineProps<Checkbox>();
const emit = defineEmits();
</script>

<template>
  <input
    type="checkbox"
    @change="useUpdateModelCheckbox($event, emit)"
    :disabled="props.disabled"
  />
</template>

<script lang="ts">
export default {
  name: "ECheckbox",
};
</script>
