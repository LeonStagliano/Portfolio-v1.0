import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable para animación de escritura mecanográfica.
 * @param {string} text - Texto a escribir
 * @param {number} speed - Velocidad en ms por carácter
 * @returns {{ displayedText: Ref<string>, isTyping: Ref<boolean>, reset: () => void }}
 */
export function useTypingAnimation(text, speed = 100) {
  const displayedText = ref('')
  const isTyping = ref(false)
  let timeoutId = null

  const type = (index) => {
    if (index <= text.length) {
      displayedText.value = text.slice(0, index)
      isTyping.value = true
      timeoutId = setTimeout(() => type(index + 1), speed)
    } else {
      isTyping.value = false
    }
  }

  const reset = () => {
    if (timeoutId) clearTimeout(timeoutId)
    displayedText.value = ''
    isTyping.value = false
  }

  const start = () => {
    reset()
    type(0)
  }

  onMounted(() => {
    start()
  })

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  return { displayedText, isTyping, reset, start }
}
