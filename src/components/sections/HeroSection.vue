<template>
  <section id="hero" class="hero">
    <div class="hero__background"></div>
    <div class="hero__scanline"></div>

    <div class="hero__container">
      <div class="hero__content">
        <p class="hero__greeting">// {{ $t('hero.greeting') }}</p>
        <h1 id="fullname">
          <div class="names">
            <span id="firstname">LEÓN</span>
            <span id="middlename" class="glitch-hero" data-text=ARDO>ARDO</span>
          </div>
          <span id="lastname">STAG<span style="margin-right: 3px;">L</span>IANO</span>
        </h1>
        <p class="hero__role">
          <span class="hero__typed">{{ displayedText }}</span>
          <span class="hero__cursor" :class="{ 'hero__cursor--blink': !isTyping }">|</span>
        </p>
      </div>
    </div>

    <div class="hero__scroll-indicator">
      <span>{{ $t('hero.scrollDown') }}</span>
      <div class="hero__scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useTypingAnimation } from '@/composables/useTypingAnimation'

const { t } = useI18n()
const { displayedText, isTyping } = useTypingAnimation(t('hero.role'), 80)
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-xl) 0;
  overflow: hidden;
  /* background: var(--cyber-black); */
  background: radial-gradient(ellipse 60% 70% at 15% 55%, rgba(233, 30, 140, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 85% 20%, rgba(0, 212, 255, 0.07) 0%, transparent 50%)
}

.hero__background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-image: url('@/assets/images/hero-image.png');
  background-size: cover;
  background-position: center;
  opacity: 0.12;
}

#fullname {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: var(--font-title);
  font-weight: 900;
  font-size: clamp(1rem, 11vw, 8.5rem);
  line-height: 0.88;
  letter-spacing: -0.025em;
  margin: 0 0 .8rem;
  color: var(--text-primary);
}

/* .names {
  display: flex;
} */

#firstname {
  /* color: #F0E8FF; */
  display: inline-block;
}

#middlename {
  color: var(--main-color);
  text-shadow: 0 0 40px rgba(233, 30, 140, 0.6), 0 0 80px rgba(233, 30, 140, 0.25);
  display: inline-block;
  cursor: default;

    /* color: transparent;
  -webkit-text-stroke: 3px var(--main-color); */
}

#lastname {
  /* color: #F0E8FF; */
  display: inline-block;
}

/* GLITCH TEXT */
.glitch-hero {
  position: relative;
  display: inline-block;
}

.glitch-hero::before,
.glitch-hero::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
}

.glitch-hero::before {
  animation: glitch-before 3s steps(1) infinite;
  color: #E91E8C;
  opacity: 1;
}

.glitch-hero::after {
  animation: glitch-after 3s steps(1) 0.08s infinite;
  color: #00D4FF;
  opacity: 1;
}

.hero__scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--main-color), transparent);
  animation: scanline 8s linear infinite;
  opacity: 0.6;
}

@keyframes scanline {
  0% {
    top: -2px;
  }

  100% {
    top: 100%;
  }
}

.hero__container {
  /* position: relative; */
  z-index: 1;
  /* display: flex; */
  /* justify-content: center; */
  /* width: 80vw; */
  max-width: fit-content;
  align-self: center;
  /* max-width: 1400px; */
  /* margin: 0 auto; */
  padding: 0 var(--space-lg);
  /* gap: var(--space-xl); */
}

.hero__content {
  /* margin-left: var(--offset-left); */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;
}

.hero__greeting {
  align-self: self-start;
  font-family: var(--font-hud);
  font-size: 1rem;
  color: var(--main-color);
  margin-bottom: var(--space-sm);
  text-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--space-md);
  color: var(--text-primary);
  text-shadow: 0 0 20px rgba(255, 42, 109, 0.3);
  position: relative;
  text-transform: uppercase;
}

.hero__role {
  font-family: var(--font-hud);
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  text-align: center;
  max-width: 70vw;
}

.hero__typed {
  color: var(--main-color);
  text-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
}

.hero__cursor {
  color: var(--secondary-color);
  font-weight: 300;
  animation: none;
}

.hero__cursor--blink {
  animation: blink 1s step-end infinite;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-lg);
  right: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  /* gap: var(--space-sm); */
  color: var(--text-muted);
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: float 2s ease-in-out infinite;
  z-index: 1;
}

.hero__scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--main-color);
  border-bottom: 2px solid var(--main-color);
  transform: rotate(45deg);
  filter: drop-shadow(3px 3px 2px var(--main-color));
}

/* @media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    margin-left: 0;
    order: 2;
  }
} */

@media (min-width: 1024px) {
  .hero__greeting,
  .hero__role {
    font-size: 1.2rem;
  }
}

@media (min-width: 1440px) {
  .hero__greeting,
  .hero__role {
    font-size: 1.6rem;
  }
}
</style>