<script setup lang="ts">
interface Button {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  formId?: string;
  autoFocus?: boolean;
}

const props = defineProps<Button>();
</script>

<template>
  <button
    :type="props.type ?? 'button'"
    :disabled="props.disabled"
    :autofocus="props.autoFocus"
    :form="props.formId"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "EButton",
};
</script>
