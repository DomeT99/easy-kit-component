---
prev:
  text: "EButton"
  link: "/guide/components/ebutton.md"
next:
  text: "EColorPicker"
  link: "/guide/components/ecolorpicker.md"
---

<script setup lang="ts">
import { ECheckbox } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const check = ref(false);
</script>

# ECheckbox

The `ECheckbox` component replaces the standard html input type checkbox and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { ECheckbox } from "easy-kit-component";

const check = ref();
</script>

<template>
  <ECheckbox v-model="check"/>
</template>
```

<ExampleLayout>
  <ECheckbox id="checkbox" v-model="check"/><br/>
   <h6>Check : {{ check }}</h6>
</ExampleLayout>

## API Reference

- **Props**

```ts
interface Checkbox {
  disabled?: boolean;
}
```
