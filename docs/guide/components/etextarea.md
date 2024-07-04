---
prev:
  text: "EText"
  link: "/guide/components/etext.md"
next:
  text: "ERadio"
  link: "/guide/components/eradio.md"
---

<script setup lang="ts">
import { ETextArea } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const text = ref();
</script>

# ETextArea

The `ETextArea` component replaces the standard html textarea and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { ETextArea } from "easy-kit-component";

const text = ref();
</script>

<template>
  <ETextArea v-model="text"/>
</template>
```

<ExampleLayout>
  <ETextArea id="text" v-model="text"/>
  <br/>
  <h6>Message is : {{ text }}</h6>
</ExampleLayout>


## API Reference

- **Props**

```ts
interface TextArea {
  placeHolder?: string;
  maxLength?: LengthType;
  minLenght?: LengthType;
  readOnly?: boolean;
  disabled?: boolean;
  cols?: number;
  rows?: number;
}
```
