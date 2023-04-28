---
prev:
  text: "Quick Start"
  link: "/guide/getting-started/quick-start.md"
next:
  text: "ECheckbox"
  link: "/guide/components/echeckbox.md"
---

<script setup lang="ts">
import { EButton } from "../../../src/index.ts";
import ExampleLayout from "../../utils/ExampleLayout.vue";

function showAlert(){
  alert("Hello, I'm a button!")
}
</script>

# EButton

The `EButton` component replaces the standard html button and encapsulates well-defined logic that can be reused throughout the app.

## Basic Usage

```vue-html
<script setup>
import { EButton } from "easy-kit-component";
</script>

<template>
  <EButton>Click Here</EButton>
</template>
```

<ExampleLayout>
  <EButton id="button">Click Here</EButton>
</ExampleLayout>

### Disabled

`disabled` prop is a boolean value that determines whether the button is rendered disabled or not.
<br/>
By default it is `false`.

```vue-html
 <EButton :disabled="true">Disabled Button</EButton>
```

<ExampleLayout>
  <EButton :disabled="true" id="button">Disabled Button</EButton>
</ExampleLayout>

### Trigger Event

To trigger an event, the classic procedure provided by Vue is used.

```vue-html
 <EButton @click="exampleFunction">Show Alert</EButton>
```

<ExampleLayout>
  <EButton @click="showAlert" id="button">Show Alert</EButton>
</ExampleLayout>

## API Reference

- **Props**

```ts
type ButtonType = "button" | "submit" | "reset";

interface Button {
  type?: ButtonType;
  disabled?: boolean;
  formId?: string;
  autoFocus?: boolean;
}
```
