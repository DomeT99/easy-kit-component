---
prev:
  text: "ERadio"
  link: "/guide/components/eradio.md"
---

<script setup lang="ts">
import { ESelect } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";
import { ref } from "vue";

const selected = ref();
const multipleSelected = ref();
</script>

# ESelect

The `ESelect` component replaces the standard html select and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { ref } from "vue";
import { ESelect } from "easy-kit-component";

const selected = ref();
</script>

<template>
  <ESelect v-model="selected">
   <option value="🍎">Apple</option>
   <option value="🍑">Peach</option>
  </ESelect>
</template>
```

<ExampleLayout>
   <ESelect id="select" v-model="selected">
   <option value="🍎">Apple</option>
   <option value="🍑">Peach</option>
  </ESelect> <br/>
 <h6>Select : {{ selected }}</h6> 
</ExampleLayout>


### Multiple

```vue-html
<ESelect v-model="multipleSelected" :multiple="true">
   <option value="🍎">Apple</option>
   <option value="🍑">Peach</option>
</ESelect>
```

<ExampleLayout>
  <ESelect id="select" v-model="multipleSelected" :multiple="true">
   <option value="🍎">Apple</option>
   <option value="🍑">Peach</option>
  </ESelect> <br/>
  <h6>Select : {{ multipleSelected }}</h6> 
</ExampleLayout>

## API Reference

- **Props**

```ts
interface Select {
  placeHolder?: string;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  value?: any;
}
```
