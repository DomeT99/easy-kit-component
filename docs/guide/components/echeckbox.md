---
prev:
  text: "EButton"
  link: "/guide/components/ebutton.md"
next:
  text: "EText"
  link: "/guide/components/etext.md"
---

<script setup lang="ts">
import { ECheckbox } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const check = ref(false);
</script>

# ECheckbox

The `ECheckbox` component replaces the standard html button and encapsulates well-defined logic that can be reused throughout the app.

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
   <p style="padding-right:1rem;">{{ check }}</p>
  <ECheckbox id="checkbox" v-model="check"/>
</ExampleLayout>

### Disabled

`disabled` prop is a boolean value that determines whether the checkbox is rendered disabled or not.
<br/>
By default it is `false`.

```vue-html
  <ECheckbox :disabled="true"/>
```

<ExampleLayout>
   <ECheckbox :disabled="true"/>
</ExampleLayout>


## API Reference

- **Props**

```ts
interface Checkbox {
  disabled?:boolean;
}
```
