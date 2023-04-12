<script setup lang="ts">
import { ref } from "vue";
import Input from "./components/input/Input.vue";

let text = ref("");

</script>
<template>
  <Input v-model="text" />
</template>
