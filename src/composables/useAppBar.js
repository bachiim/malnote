import { ref } from "vue";

const left = ref(null)
const center = ref(null)
const right = ref(null)
const onAdd = ref(null)

export function useAppBar() {
  const setAppBar = (config) => {
    left.value = config.left ?? null
    center.value = config.center ?? null
    right.value = config.right ?? null
    onAdd.value = config.onAdd ?? null
  }

  return { left, center, right, onAdd, setAppBar }
}