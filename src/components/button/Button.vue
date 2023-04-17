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
const autoFocusComputed = computed(() => {
  return props.autoFocus ?? false;
});
const formIdComputed = computed(() => {
  return props.formId ?? undefined;
});
</script>

<template>
  <button
    class="e-button"
    :type="typeComputed"
    :disabled="disabledComputed"
    :autofocus="autoFocusComputed"
    :form="formIdComputed"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "EButton",
};
</script>
