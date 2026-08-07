import { ref, onMounted } from 'vue'

/**
 * Composable para gestionar el tema (claro/oscuro).
 * @returns {{ isDark: Ref<boolean>, toggleTheme: () => void }}
 */
export function useTheme() {
  const isDark = ref(false)

  const applyTheme = (dark) => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  // Initialize theme on mount
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      // Check system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  })

  return { isDark, toggleTheme }
}
