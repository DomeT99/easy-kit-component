import { computed } from "vue";

export default function useDisabledComputed(disabled?: boolean) {
  const disabledComputed = computed(() => {
    return disabled ?? false;
  });

  return { disabledComputed };
}
