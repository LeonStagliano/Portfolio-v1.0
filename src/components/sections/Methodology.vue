<template>
  <section id="methodology" ref="elementRef" class="methodology section section--wide"
    :class="{ 'methodology--visible': isVisible }">
    <!-- <p class="methodology__hud-label">// METODOLOGÍA</p> -->
    <h2 class="methodology__title">{{ $t('methodology.title') }}</h2>
    <div class="steps-container">
      <Carrusel3D />
    </div>
    <div class="scroll-indicator">
      <div class="scroll-arrow__left"></div>
      <span class="indication-pulse" style="--pulse-color: #444444"> Scroll </span>
      <div class="scroll-arrow__right"></div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import Carrusel3D from '@/components/ui/Carrusel3D.vue'

const { elementRef, isVisible } = useScrollAnimation()
</script>

<style scoped>
.methodology {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.steps-container {
  width: 100%;
}

.methodology__hud-label {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-xs);
  opacity: 0.8;
}

.methodology__title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  text-align: center;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
  text-transform: uppercase;
}

.methodology--visible .methodology__timeline {
  animation: fadeInUp 0.6s ease forwards;
}

.scroll-indicator {
  display: flex;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  color: var(--text-muted);
  font-family: var(--font-hud);
  font-size: clamp(0.6rem, 0.8rem, 1rem);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  z-index: 1;
  gap: 2px;
}

.indication-pulse{
  animation: text-pulse 2s infinite;
}

.scroll-arrow__left,
.scroll-arrow__right {
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--main-color);
  border-bottom: 2px solid var(--main-color);
  filter: drop-shadow(2px 2px 2px var(--main-color));
}
.scroll-arrow__left {
  transform: rotate(135deg);
  animation: swing 2s ease-in-out infinite;
}
.scroll-arrow__right {
  margin-left: 6px;
  transform: rotate(-45deg);
  animation: swing 2s ease-in-out infinite;
}
</style>
