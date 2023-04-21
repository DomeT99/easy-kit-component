export function useUpdateModelText(event: Event, emit: any) {
  const value = (event?.target as HTMLInputElement).value;

  emit("update:modelValue", value);
}

export function useUpdateModelCheckbox(event: Event, emit: any) {
  const value = (event?.target as HTMLInputElement).checked;

  emit("update:modelValue", value);
}

export function useUpdateModelRadiobox(value: any, emit: any) {
  emit("update:modelValue", value);
}
