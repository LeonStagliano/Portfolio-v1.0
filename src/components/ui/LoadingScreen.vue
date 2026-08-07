<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-screen__content">
      <div class="loading-screen__terminal">
        <div class="loading-screen__header">
          <span class="loading-screen__bar"></span>
          <span class="loading-screen__title">// SYSTEM BOOT</span>
        </div>
        <div class="loading-screen__body">
          <p v-for="(line, index) in visibleLines" :key="index" class="loading-screen__line">
            <span class="loading-screen__prompt">&gt;</span>
            {{ line }}
          </p>
        </div>
      </div>
      <div class="loading-screen__bar-container">
        <div class="loading-screen__progress" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="loading-screen__status">{{ statusText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['complete'])

const isLoading = ref(true)
const progress = ref(0)
const visibleLines = ref([])
const statusText = ref('Inicializando sistema...')

const terminalLines = [
  'Cargando módulos del sistema...',
  'Compilando interfaces...',
  'Inicializando componentes Vue...',
  'Configurando estilo...',
  'Optimizando rendimiento...',
  'Verificando seguridad...',
  'Cargando portfolio...',
  'Sistema listo.'
]

onMounted(() => {
  let currentLine = 0
  setInterval(() => {
    if (currentLine < terminalLines.length) {
      visibleLines.value.push(terminalLines[currentLine])
      currentLine++
      progress.value = (currentLine / terminalLines.length) * 100

      if (currentLine === terminalLines.length) {
        statusText.value = 'Acceso concedido.'
        setTimeout(() => {
          isLoading.value = false
          emit('complete')
        }, 500)
      }
    }
  }, 300)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background-color: var(--cyber-black);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-loading);
}

.loading-screen__content {
  width: 100%;
  max-width: 500px;
  padding: var(--space-lg);
}

.loading-screen__terminal {
  background: var(--cyber-dark);
  border: 1px solid var(--neon-magenta);
  overflow: hidden;
  margin-bottom: var(--space-lg);
}

.loading-screen__header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--neon-magenta);
}

.loading-screen__bar {
  display: none;
}

.loading-screen__title {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--cyber-black);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
}

.loading-screen__body {
  padding: var(--space-md);
  min-height: 200px;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.loading-screen__line {
  color: var(--neon-magenta);
  margin-bottom: var(--space-sm);
  opacity: 0;
  animation: fadeInLine 0.3s ease forwards;
}

.loading-screen__prompt {
  color: var(--neon-red);
  margin-right: var(--space-sm);
}

@keyframes fadeInLine {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.loading-screen__bar-container {
  height: 4px;
  background: var(--cyber-dark);
  overflow: hidden;
  margin-bottom: var(--space-md);
  border: 1px solid var(--neon-magenta);
}

.loading-screen__progress {
  height: 100%;
  background: var(--neon-magenta);
  transition: width 0.3s ease;
  box-shadow: 0 0 15px var(--neon-magenta);
}

.loading-screen__status {
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  color: var(--neon-magenta);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
