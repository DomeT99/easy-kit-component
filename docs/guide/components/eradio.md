---
prev:
  text: "EText"
  link: "/guide/components/etext.md"
next:
  text: "ESelect"
  link: "/guide/components/eselect.md"
---

<script setup lang="ts">
import { ERadio } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const choice = ref();
</script>

# ERadio

The `ERadio` component replaces the standard html radio and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { ERadio } from "easy-kit-component";

const choice = ref();
</script>

<template>
  <ERadio id="radio" :value="'One'" v-model="choice" :name="'Number'">One</ERadio>
  <ERadio id="radio" :value="'Two'" v-model="choice" :name="'Number'">Two</ERadio>
</template>
```

<ExampleLayout>
   <ERadio id="radio" :value="'One'" v-model="choice" :name="'Choose Number'">One</ERadio>
   <ERadio id="radio" :value="'Two'" v-model="choice" :name="'Choose Number'">Two</ERadio><br/>
   <h6>Choice is : {{ choice }}</h6>
</ExampleLayout>

## API Reference

- **Props**

```ts
interface Radio {
  value?: any;
  name?: string;
  disabled?: boolean;
}
```
