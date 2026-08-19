<template>
  <section id="about" ref="elementRef" class="about section section--wide" :class="{ 'about--visible': isVisible }">
    <div class="about__layout">
      <div class="about__header">
        <p id="main-content" tabindex="-1" class="about__hud-label">// SISTEMA</p>
        <h2 class="about__title">{{ $t('about.title') }}</h2>
      </div>
      <div class="about__card-container">
        <div class="about__card" :style="{ transform: `rotateY(${rotationCount * -180}deg)` }">
          <div class="about__card-front">
            <div class="about__card-content">
              <div class="professional-description__container">
                <h3 class="card__side-name">{{ $t('about.professionalSide') }}</h3>
                <p class="about__role">{{ $t('about.professionalProfile') }}</p>
                <p class="about__description">{{ $t('about.professionalDescription') }}</p>
              </div>
              <div class="methodology-container">
                <Methodology />
              </div>
            </div>
          </div>

          <div class="about__card-back">
            <div class="about__card-content">
              <div class="personal-description__container">
                <h3 class="card__side-name">{{ $t('about.personalSide') }}</h3>
                <p class="about__role">{{ $t('about.personalProfile') }}</p>
                <p v-for="(paragraph, index) in $t('about.personalDescription').split('\n\n')" :key="index" 
                class="about__description" v-show="expanded || !isMobile || index === 0">{{ paragraph }}</p>
                <button v-if="isMobile" class="about__toggle" :aria-expanded="expanded" @click="expanded = !expanded">
                  {{ expanded ? $t('about.seeLess') : $t('about.seeMore') }}
                </button>
              </div>
              <InterestsList />
            </div>
          </div>
        </div>
        <button class="about__flip-button"
          :aria-label="isFlipped ? $t('about.showProfessional') : $t('about.showPersonal')" :aria-expanded="isFlipped"
          @click="flipCard">
          {{ isFlipped ? $t('about.showProfessional') : $t('about.showPersonal') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useWindowSize } from '@/composables/useWindowSize'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

import Methodology from '@/components/sections/Methodology.vue'
import InterestsList from '../layout/InterestsList.vue'

const { width } = useWindowSize()
const { elementRef, isVisible } = useScrollAnimation()

const rotationCount = ref(0)
const isFlipped = computed(() => rotationCount.value % 2 !== 0)

const isMobile = computed(() => width.value < 768)
const expanded = ref(false)

watch(isFlipped, (flipped) => { if (!flipped) expanded.value = false })
watch(isMobile, (mobile) => { if (mobile) expanded.value = false })

const flipCard = () => {
  rotationCount.value++
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: repeating-linear-gradient(-45deg,
      transparent,
      transparent 10px,
      rgba(255, 42, 109, 0.02) 10px,
      rgba(255, 42, 109, 0.02) 11px);
}

.about__layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: var(--space-lg);
}

.about__header {
  align-self: self-start;
  padding: var(--space-lg) 0;
}

.about__hud-label {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-sm);
  opacity: 0.8;
}

.about__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 0;
  color: var(--text-primary);
  text-transform: uppercase;
}

.about__card-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-column: 2;
  grid-row: 2;
  perspective: 1000px;
  width: 100%;
}

.about__card {
  position: relative;
  width: 100%;
  min-height: 500px;
  display: grid;
  transform-style: preserve-3d;
  transition: transform 1s ease;
  box-shadow: 0 0 20px var(--main-color);
}

.about__card-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__card-front,
.about__card-back {
  grid-area: 1 / 1;
  width: 100%;
  min-height: 500px;
  backface-visibility: hidden;
  background-color: var(--bg-secondary);
  border: 1px solid var(--main-color);
  overflow: hidden;
  transition: box-shadow var(--transition-fast);
  border-top: 10px solid var(--main-color);
}

.about__card-front::before,
.about__card-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--neon-magenta);
}

.about__card-front:hover,
.about__card-back:hover {
  box-shadow: var(--glow-magenta);
}

.about__card-back {
  transform: rotateY(180deg);
}

.about__card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.card__side-name {
  font-family: var(--font-display);
  text-transform: uppercase;
  font-size: clamp(1.5rem, 2rem, 3rem);
  margin-bottom: var(--space-xs);
  color: var(--text-primary)
}

.about__role {
  color: var(--neon-magenta);
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.about__description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  font-family: var(--font-hud);
  text-align: start;
  hyphens: auto;
  hyphenate-limit-chars: 6 3 3;
}

.about__toggle {
  background: transparent;
  border: none;
  color: var(--main-color);
  font-family: var(--font-hud);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: var(--space-xs) var(--space-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

/* .about__skills-preview {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
}

.about__skill-badge {
  padding: var(--space-xs) var(--space-sm);
  background-color: var(--cyber-surface);
  border: 1px solid var(--neon-magenta);
  font-family: var(--font-hud);
  font-size: 0.85rem;
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.about__skill-badge:hover {
  background-color: var(--neon-magenta);
  color: var(--cyber-black);
} */

.about__subtitle {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--neon-magenta);
  text-transform: uppercase;
}

.about__flip-button {
  display: block;
  width: 100%;
  max-width: 1280px;
  margin: var(--space-md) 0;
  padding: var(--space-md) var(--space-lg);
  background-color: transparent;
  border: 2px solid var(--neon-magenta);
  color: var(--neon-magenta);
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
}

.about__flip-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--neon-magenta);
  transform: translateX(-101%);
  transition: transform var(--transition-fast);
  z-index: -1;
}

.about__flip-button:hover {
  color: var(--cyber-black);
}

.about__flip-button:hover::before {
  transform: translateX(0);
}

.about--visible .about__card-container {
  animation: fadeInUp 0.6s ease forwards;
}

.professional-description__container,
.personal-description__container {
  width: 100%;
  padding: var(--space-lg);
}

.methodology-container {
  width: 100%;
  padding: var(--space-md);
}

@media (min-width: 768px) {
  .about__layout {
    max-width: 1280px;
  }

  .professional-description__container .about__description {
    padding: var(--space-lg);
  }

  .methodology-container {
    padding: var(--space-lg);
  }

}

@media (min-width: 1024px) {
  .about__card-front .about__card-content {
    flex-direction: row;
  }

  .professional-description__container {
    max-width: 50%;
  }
}
</style>
