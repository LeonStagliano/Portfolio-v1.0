<template>
  <section id="hero" class="hero">
    <div class="hero__background"></div>
    <div class="hero__scanline"></div>

    <div class="hero__container">
      <div class="hero__content">
        <p class="hero__greeting">// {{ $t('hero.greeting') }}</p>
        <h1 id="hero-fullname">
          <div class="names">
            <span>LEÓN</span>
            <span id="middlename" class="glitch-hero" data-text=ARDO>ARDO</span>
          </div>
          <span>STAG<span style="margin-right: 3px;">L</span>IANO</span>
        </h1>
        <p class="hero__role">
          <span class="hero__typed">{{ displayedText }}</span>
          <span class="hero__cursor" :class="{ 'hero__cursor--blink': !isTyping }">|</span>
        </p>
      </div>
    </div>

    <div class="hero__scroll-indicator">
      <span class="indication-pulse" style="--pulse-color: #444444">{{ $t('hero.scrollDown') }}</span>
      <div class="hero__scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTypingAnimation } from '@/composables/useTypingAnimation'

const { t, locale } = useI18n()
const { displayedText, isTyping, start } = useTypingAnimation(() => t('hero.role'), 80)

watch(locale, () => {
  start()
})
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
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

#hero-fullname {
  display: flex;
  flex-direction: column;
  font-family: var(--font-title);
  font-weight: 900;
  font-size: clamp(1rem, 11vw, 10rem);
  line-height: 0.88;
  letter-spacing: -0.025em;
  margin: 0 0 .8rem;
  color: var(--text-primary);
  text-shadow: 0 0 20px rgba(255, 42, 109, 0.3);
}

#middlename {
  color: var(--main-color);
  text-shadow: 0 0 40px rgba(233, 30, 140, 0.6), 0 0 80px rgba(233, 30, 140, 0.25);
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
  color: var(--glitch-before-color);
  opacity: 1;
}

.glitch-hero::after {
  animation: glitch-after 3s steps(1) 0.08s infinite;
  color: var(--glitch-after-color);
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

.hero__container {
  z-index: 1;
  align-self: center;
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__greeting,
.hero__role {
  font-family: var(--font-hud);
  font-size: clamp(1rem, 2vw, 2rem);
  text-shadow: 0 0 10px var(--main-color);
}

.hero__greeting {
  align-self: self-start;
  letter-spacing: -1px;
  color: var(--main-color);
  margin-bottom: var(--space-sm);
}

.hero__role {
  text-align: center;
  max-width: 70vw;
}

.hero__typed {
  color: var(--main-color);
}

.hero__cursor {
  color: var(--secondary-color);
  font-weight: 300;
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
  color: var(--text-muted);
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: float 2s ease-in-out infinite;
  z-index: 1;
}

.indication-pulse{
  animation: text-pulse 2s infinite;
}

.hero__scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--main-color);
  border-bottom: 2px solid var(--main-color);
  transform: rotate(45deg);
  filter: drop-shadow(3px 3px 2px var(--main-color));
}
</style>