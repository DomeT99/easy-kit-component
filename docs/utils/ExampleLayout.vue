<script setup lang="ts"></script>
<template>
  <pre class="demo">
    <slot />
  </pre>
</template>

<style scoped>
.dark .demo {
  background-color: #161618;
}

.demo {
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column-reverse;
}
</style>
