<script setup lang="ts">
import { watch } from "vue";

interface Select {
  placeHolder?: string;
  multiple?: boolean;
  value?: any;
}

const props = defineProps<Select>();
const emit = defineEmits(["emitValue"]);

let selected = props.value;

watch(selected, (value) => {
  selected = value;
  emit("emitValue", value);
});
</script>

<template>
  <select v-model="selected" :multiple="props.multiple">
    <option :value="null">{{ props.placeHolder ?? "" }}</option>
    <slot></slot>
  </select>
</template>

<script lang="ts">
export default {
  name: "ESelect",
};
</script>
