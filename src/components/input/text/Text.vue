<script setup lang="ts">
import useLengthComputed from "../../../composables/useLengthComputed";
import useUpdateModelValue from "../../../composables/useUpdateModelValue";
import useReadOnlyComputed from "../../../composables/useReadOnlyComputed";
import usePlaceHolderComputed from "../../../composables/usePlaceHolderComputed";
import useDisabledComputed from "../../../composables/useDisabledComputed";
import { Text } from "../../../types/components/Input";

interface TextProps extends Text {}

const props = defineProps<TextProps>();
const emit = defineEmits();

const { minLengthComputed, maxLengthComputed } = useLengthComputed(
  props.minLenght!,
  props.maxLength!
);
const { readOnlyComputed } = useReadOnlyComputed(props.readOnly);
const { placeHolderComputed } = usePlaceHolderComputed(props.placeHolder);
const { disabledComputed } = useDisabledComputed(props.disabled);
</script>

<template>
  <input
    type="text"
    class="e-input-text"
    @input="useUpdateModelValue($event, emit)"
    :minlength="minLengthComputed"
    :maxlength="maxLengthComputed"
    :readonly="readOnlyComputed"
    :placeholder="placeHolderComputed"
    :disabled="disabledComputed"
  />
</template>

<script lang="ts">
export default {
  name: "EText",
};
</script>
