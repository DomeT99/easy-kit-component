<script setup lang="ts">
import { computed } from "vue";
import { Button } from "../../types/components/Button";
import useDisabledComputed from "../../composables/useDisabledComputed";

interface ButtonProps extends Button {}

const props = defineProps<ButtonProps>();

const { disabledComputed } = useDisabledComputed(props.disabled);
const typeComputed = computed(() => {
  return props.type ?? "button";
});
</script>

<template>
  <button
    class="e-button"
    :type="typeComputed"
    :disabled="disabledComputed"
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
