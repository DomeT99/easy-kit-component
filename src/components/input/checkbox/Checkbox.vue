<script setup lang="ts">
import useDisabledComputed from "../../../composables/useDisabledComputed";
import { useUpdateModelCheckbox } from "../../../composables/useUpdateModelValue";
import { Checkbox } from "../../../types/components/Input";

interface CheckboxProps extends Checkbox {}

const props = defineProps<CheckboxProps>();
const emit = defineEmits();

const { disabledComputed } = useDisabledComputed(props.disabled);
</script>

<template>
  <input
    @change="useUpdateModelCheckbox($event, emit)"
    :disabled="disabledComputed"
    type="checkbox"
  />
</template>

<script lang="ts">
export default {
  name: "ECheckbox",
};
</script>
