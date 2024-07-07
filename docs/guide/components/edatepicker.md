---
prev:
  text: "EColorPicker"
  link: "/guide/components/ecolorpicker.md"
next:
  text: "EText"
  link: "/guide/components/etext.md"
---

<script setup lang="ts">
import { EDatePicker } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const date = ref();
</script>

# EDatePicker

The `EDatePicker` component replaces the standard html input type date and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { EDatePicker } from "easy-kit-component";

const date = ref();
</script>

<template>
  <EDatePicker v-model="date"/>
</template>
```

<ExampleLayout>
  <EDatePicker id="text" v-model="date"/> 
  <br/>
  <h6>Date is : {{ date }}</h6>
</ExampleLayout>


## API Reference

- **Props**

```ts
interface DatePicker {
  readOnly?: boolean;
  disabled?: boolean;
}
```
