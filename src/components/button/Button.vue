<script setup lang="ts">
type ButtonType = "button" | "submit" | "reset";

interface Button {
  type?: ButtonType;
  disabled?: boolean;
  formId?: string;
  autoFocus?: boolean;
  customClasses?: string[] | object;
}
const props = defineProps<Button>();
</script>

<template>
  <button
    :type="props.type ?? 'button'"
    :class="customClasses ?? 'button is-primary'"
    :disabled="props.disabled ?? false"
    :autofocus="props.autoFocus ?? false"
    :form="props.formId ?? undefined"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "EButton",
};
</script>
