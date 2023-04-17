<script setup lang="ts">
import useLengthComputed from "../../../composables/useLengthComputed";
import useUpdateModelValue from "../../../composables/useUpdateModelValue";
import useReadOnlyComputed from "../../../composables/useReadOnlyComputed";
import usePlaceHolderComputed from "../../../composables/usePlaceHolderComputed";
import { Text } from "../../../types/components/Input";

interface InputProps extends Text {}

const props = defineProps<InputProps>();
const emit = defineEmits();

const { minLengthComputed, maxLengthComputed } = useLengthComputed(
  props.minLenght!,
  props.maxLength!
);
const { readOnlyComputed } = useReadOnlyComputed(props.readOnly);
const { placeHolderComputed } = usePlaceHolderComputed(props.placeHolder);
</script>

<template>
  <input
    type="text"
    class="e-input-text"
    @input="useUpdateModelValue($event, emit)"
    :readonly="readOnlyComputed"
    :minlength="minLengthComputed"
    :maxlength="maxLengthComputed"
    :placeholder="placeHolderComputed"
  />
</template>

<script lang="ts">
export default {
  name: "EText",
};
</script>
