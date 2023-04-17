<script setup lang="ts">
import { Button } from "../../types/components/Button";

interface ButtonProps extends Button {}

const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    class="e-button"
    :type="props.type ?? 'button'"
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
