<template>
  <section id="about" ref="elementRef" class="about section section--wide" :class="{ 'about--visible': isVisible }">
    <div class="container">
      <div class="about__layout">
        <div class="about__header">
          <p id="main-content" tabindex="-1" class="about__hud-label">// SISTEMA</p>
          <h2 class="about__title">{{ $t('about.title') }}</h2>
        </div>

        <!-- <div class="about__decoration" aria-hidden="true">
          <div class="about__deco-line"></div>
          <div class="about__deco-data">
            <span>PROFILE_ID: 0x7F2A</span>
            <span>STATUS: ACTIVE</span>
            <span>CLEARANCE: LVL 5</span>
          </div>
        </div> -->

        <div class="about__card-container">
          <div class="about__card" :style="{ transform: `rotateY(${rotationCount * -180}deg)` }">
            <div class="about__card-front">
              <div class="about__card-content">
                <!-- <div class="about__avatar">
                  <span>LS</span>
                </div> -->
                <h3 class="about__name">León Stagliano</h3>
                <p class="about__role">{{ $t('hero.role') }}</p>
                <p class="about__description">{{ $t('about.professionalDescription') }}</p>
                <div class="methodology-container">
                  <Methodology />
                </div>
              </div>
            </div>

            <div class="about__card-back">
              <div class="about__card-content">
                <h3 class="about__subtitle">{{ $t('about.personalSide') }}</h3>
                <ul class="about__personal-list">
                  <li>
                    <span class="about__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                        <path d="M2 2l7.586 7.586" />
                        <circle cx="11" cy="11" r="2" />
                      </svg>
                    </span>
                    <span>Amante del diseño y la creatividad</span>
                  </li>
                  <li>
                    <span class="about__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <line x1="6" y1="12" x2="10" y2="12" />
                        <line x1="8" y1="10" x2="12" y2="14" />
                        <line x1="12" y1="14" x2="16" y2="10" />
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                      </svg>
                    </span>
                    <span>Gamer en mi tiempo libre</span>
                  </li>
                  <li>
                    <span class="about__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </span>
                    <span>Lector ávido de tecnología</span>
                  </li>
                  <li>
                    <span class="about__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                        <line x1="6" y1="1" x2="6" y2="4" />
                        <line x1="10" y1="1" x2="10" y2="4" />
                        <line x1="14" y1="1" x2="14" y2="4" />
                      </svg>
                    </span>
                    <span>Fundido de café</span>
                  </li>
                  <li>
                    <span class="about__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </span>
                    <span>Aprendiz continuo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button class="about__flip-button"
            :aria-label="isFlipped ? $t('about.showProfessional') : $t('about.showPersonal')" :aria-expanded="isFlipped"
            @click="flipCard">
            {{ isFlipped ? $t('about.professionalSide') : $t('about.flipButton') }}
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import Methodology from '@/components/sections/Methodology.vue'

const { elementRef, isVisible } = useScrollAnimation()
const rotationCount = ref(0)
const isFlipped = computed(() => rotationCount.value % 2 !== 0)

const flipCard = () => {
  rotationCount.value++
}
</script>

<style scoped>
.about {
  /* background-color: var(--cyber-black); */
  background-image: repeating-linear-gradient(-45deg,
      transparent,
      transparent 10px,
      rgba(255, 42, 109, 0.02) 10px,
      rgba(255, 42, 109, 0.02) 11px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__layout {
  /* display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: var(--space-xl);
  align-items: start; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
}

.about__header {
  /* grid-column: 1 / -1; */

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

.about__decoration {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding-top: var(--space-lg);
}

.about__deco-line {
  width: 2px;
  height: 120px;
  background: var(--neon-magenta);
  box-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
}

.about__deco-data {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.about__card-container {
  grid-column: 2;
  grid-row: 2;
  perspective: 1000px;
  /* max-width: 70%; */
  min-width: 80vw;
}

.about__card {
  position: relative;
  width: 100%;
  min-height: 500px;
  transform-style: preserve-3d;
  transition: transform 1s ease;
}

.about__card-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about__card-front,
.about__card-back {
  position: absolute;
  width: 100%;
  min-height: 500px;
  backface-visibility: hidden;
  background-color: var(--bg-secondary);
  border: 1px solid var(--neon-magenta);
  overflow: hidden;
  transition: box-shadow var(--transition-fast);
  clip-path: var(--clip-notch-top);
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
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.about__avatar {
  width: 100px;
  height: 100px;
  background: var(--cyber-dark);
  border: 2px solid var(--neon-magenta);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  box-shadow: var(--glow-magenta);
  clip-path: var(--clip-angular);
}

.about__avatar span {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--neon-magenta);
}

.about__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: var(--space-xs);
  color: var(--text-primary);
  text-transform: uppercase;
}

.about__role {
  color: var(--neon-magenta);
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.about__description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.about__skills-preview {
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
}

.about__subtitle {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--neon-magenta);
  text-transform: uppercase;
}

.about__personal-list {
  list-style: none;
  text-align: left;
  width: 100%;
}

.about__personal-list li {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--cyber-border);
}

.about__personal-list li:last-child {
  border-bottom: none;
}

.about__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--cyber-surface);
  border: 1px solid var(--neon-magenta);
  color: var(--neon-magenta);
  flex-shrink: 0;
}

.about__flip-button {
  display: block;
  margin: var(--space-lg) auto 0;
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

@media (max-width: 768px) {
  .about__layout {
    grid-template-columns: 1fr;
  }

  .about__decoration {
    display: none;
  }

  .about__card-container {
    grid-column: 1;
    grid-row: 2;
    max-width: 100%;
  }
}
</style>
