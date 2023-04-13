<script setup lang="ts">
import useLengthComputed from "../../composables/useLengthComputed";
import useUpdateModelValue from "../../composables/useUpdateModelValue";
import useReadOnlyComputed from "../../composables/useReadOnlyComputed";
import usePlaceHolderComputed from "../../composables/usePlaceHolderComputed";
import useTypeComputed from "../../composables/useTypeComputed";
import { Input } from "../../types/components/Input";

interface InputProps extends Input {}

const props = defineProps<InputProps>();
const emit = defineEmits();

const { minLengthComputed, maxLengthComputed } = useLengthComputed(
  props.minLenght!,
  props.maxLength!
);
const { readOnlyComputed } = useReadOnlyComputed(props.readOnly);
const { placeHolderComputed } = usePlaceHolderComputed(props.placeHolder);
const { typeComputed } = useTypeComputed(props.type);
</script>

<template>
  <input
    @input="useUpdateModelValue($event, emit)"
    :readonly="readOnlyComputed"
    :minlength="minLengthComputed"
    :maxlength="maxLengthComputed"
    :type="typeComputed"
    :class="props.customClasses ?? 'e-input'"
    :placeholder="placeHolderComputed"
  />
</template>

<script lang="ts">
export default {
  name: "EInput",
};
</script>
