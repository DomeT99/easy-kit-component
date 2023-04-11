<script setup lang="ts">
import Button from "./components/button/Button.vue";
</script>
<template>
  <Button>Ciao</Button>
  <Button :custom-classes="['button', 'is-secondary']">Ciao</Button>
  <Button :custom-classes="['button', 'is-tertiary']">Ciao</Button>
</template>
