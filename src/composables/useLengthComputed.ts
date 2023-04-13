import { computed } from "vue";

export default function useLengthComputed(minLength?: number, maxLength?: number) {
  const minLengthComputed = computed(() => {
    return minLength ?? undefined;
  });

  const maxLengthComputed = computed(() => {
    return maxLength ?? undefined;
  });

  return { minLengthComputed, maxLengthComputed };
}
