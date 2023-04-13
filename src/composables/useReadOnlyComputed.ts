import { computed } from "vue";

export default function useReadOnlyComputed(readOnly?: boolean) {
  const readOnlyComputed = computed(() => {
    return readOnly ?? false;
  });

  return { readOnlyComputed };
}
