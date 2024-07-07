---
prev:
  text: "ECheckbox"
  link: "/guide/components/echeckbox.md"
next:
  text: "EDatePicker"
  link: "/guide/components/edatepicker.md"
---

<script setup lang="ts">
import { EColorPicker } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const color = ref();
</script>

# EColorPicker

The `EColorPicker` component replaces the standard html input type color and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { EColorPicker } from "easy-kit-component";

const date = ref();
</script>

<template>
  <EColorPicker v-model="color"/>
</template>
```

<ExampleLayout>
  <EColorPicker style="width: 40px !important" id="text" v-model="color"/> 
  <br/>
  <h6>Color is : {{ color }}</h6>
</ExampleLayout>


## API Reference

- **Props**

```ts
interface ColorPicker {
  disabled?: boolean;
}
```
