---
prev:
  text: "ECheckbox"
  link: "/guide/components/echeckbox.md"
next:
  text: "ERadio"
  link: "/guide/components/eradio.md"
---

<script setup lang="ts">
import { EText } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const text = ref();
</script>

# EText

The `EText` component replaces the standard html button and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { ECheckbox } from "easy-kit-component";

const check = ref();
</script>

<template>
  <EText v-model="text"/>
</template>
```

<ExampleLayout>
  <EText id="text" v-model="text"/>
  <br/>
  <h6 style="padding-left:1rem">{{ text }}</h6>
</ExampleLayout>


## API Reference

- **Props**

```ts
interface Checkbox {
  disabled?: boolean;
}
```
