import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable para animaciones de entrada al hacer scroll.
 * @param {Object} options - Opciones de IntersectionObserver
 * @returns {{ elementRef: Ref<null>, isVisible: Ref<boolean> }}
 */
export function useScrollAnimation(options = {}) {
  const elementRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    }, defaultOptions)

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { elementRef, isVisible }
}
