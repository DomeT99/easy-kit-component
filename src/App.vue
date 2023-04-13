<script setup lang="ts">
import EInput from "./components/input/Input.vue";
import EButton from "./components/button/Button.vue";
import { ref } from "vue";

let test = ref("");
</script>
<template>
  <EInput v-model="test"/>
  <EButton>Ciao</EButton>
</template>
