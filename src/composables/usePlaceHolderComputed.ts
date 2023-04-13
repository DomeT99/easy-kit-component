import { computed } from "vue";

export default function usePlaceHolderComputed(placeHolder?: string) {
  const placeHolderComputed = computed(() => {
    return placeHolder ?? undefined;
  });

  return { placeHolderComputed };
}
