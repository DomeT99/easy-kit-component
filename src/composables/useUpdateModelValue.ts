export default function useUpdateModelValue(event: Event, emit: any) {
  const value = (event?.target as HTMLInputElement).value;

  emit("update:modelValue", value);
}
