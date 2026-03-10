import { ref } from 'vue'

const showBottomNav = ref(true)

export function useLayout() {
  return { showBottomNav }
}