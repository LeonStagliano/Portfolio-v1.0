<template>
  <section id="methodology" ref="elementRef" class="methodology section section--wide"
    :class="{ 'methodology--visible': isVisible }">
    <!-- <div class="container"> -->
    <p class="methodology__hud-label">// METODOLOGÍA</p>
    <h2 class="methodology__title">{{ $t('methodology.title') }}</h2>

    <!-- <div class="methodology__timeline">
      <div v-for="(step, index) in steps" :key="index" class="methodology__step">
        <div class="methodology__step-marker">
          <span class="methodology__step-number">{{ String(index + 1).padStart(2, '0') }}</span>
        </div>
        <div v-if="index < steps.length" class="methodology__step-connector"></div>
        <div class="methodology__step-content">
          <h3 class="methodology__step-title">{{ step.title }}</h3>
          <p class="methodology__step-desc">{{ step.description }}</p>
        </div>
      </div>
    </div> -->
    <Carrusel3D />
    <!-- </div> -->
  </section>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import Carrusel3D from '@/components/layout/Carrusel3D.vue'

const { elementRef, isVisible } = useScrollAnimation()

const steps = [
  {
    title: 'Discovery',
    description: 'Investigación y análisis de requisitos para entender las necesidades del proyecto.'
  },
  {
    title: 'Diseño',
    description: 'Creación de wireframes, prototipos y definición del sistema de diseño.'
  },
  {
    title: 'Desarrollo',
    description: 'Implementación con tecnologías modernas y buenas prácticas de código.'
  },
  {
    title: 'Testing',
    description: 'Pruebas de funcionalidad, accesibilidad y rendimiento.'
  },
  {
    title: 'Deploy',
    description: 'Publicación y monitoreo del proyecto en producción.'
  }
]
</script>

<style scoped>
.methodology {
  /* background-color: var(--cyber-black); */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.methodology__hud-label {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-sm);
  opacity: 0.8;
}

.methodology__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  text-align: left;
  /* margin-bottom: var(--space-xl); */
  color: var(--text-primary);
  text-transform: uppercase;
}

.methodology__timeline {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  width: 100%;
  gap: 0;
  overflow-x: auto;
  padding: var(--space-md);
  scroll-snap-type: x mandatory;
}

.methodology__step {
  display: flex;
  /* align-items: flex-start; */
  gap: 0;
  flex-shrink: 0;
  /* max-width: 15%; */
  flex: 1 1 30%;
  max-width: 30%;
  min-width: 0;
  scroll-snap-align: start;
  margin: var(--space-sm);
}

.methodology__step-marker {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background-color: var(--cyber-panel);
  border: 1px solid var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--glow-magenta);
  transition: all var(--transition-fast);
  clip-path: var(--clip-angular);
}

.methodology__step:hover .methodology__step-marker {
  background-color: var(--main-color);
  box-shadow: 0 0 20px rgba(255, 42, 109, 0.8);
}

.methodology__step-number {
  font-family: var(--font-hud);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--neon-magenta);
  transition: color var(--transition-fast);
}

.methodology__step:hover .methodology__step-number {
  color: var(--cyber-black);
}

.methodology__step-connector {
  flex-shrink: 0;
  width: 40px;
  height: 2px;
  background: var(--neon-magenta);
  margin-top: 29px;
  box-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
  transform: skewX(-20deg);
}

.methodology__step-content {
  flex: 1;
  background-color: var(--cyber-panel);
  border: .5px solid var(--main-color);
  padding: var(--space-lg);
  transition: box-shadow var(--transition-fast);
  position: relative;

  min-width: 0;
}

.methodology__step-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--neon-magenta);
}

.methodology__step:hover .methodology__step-content {
  box-shadow: var(--glow-magenta);
}

.methodology__step-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--neon-magenta);
  margin-bottom: var(--space-sm);
  text-transform: uppercase;
}

.methodology__step-desc {
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.4;

  overflow-wrap: break-word;
}

@media (max-width: 768px) {
  .methodology__timeline {
    flex-direction: column;
    overflow-x: visible;
  }

  .methodology__step {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .methodology__step-connector {
    width: 2px;
    height: 30px;
    margin-top: 0;
    transform: skewY(-20deg);
  }

  .methodology__step-marker {
    width: 50px;
    height: 50px;
  }

  .methodology__step-number {
    font-size: 1.25rem;
  }
}

.methodology--visible .methodology__timeline {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
