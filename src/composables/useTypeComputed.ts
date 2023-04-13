import { computed } from "vue";
import { InputType } from "../types/components/Input";

export default function useTypeComputed(type?: InputType) {
  const typeComputed = computed(() => {
    return type ?? "text";
  });

  return { typeComputed };
}
