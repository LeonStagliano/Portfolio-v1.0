<template>
  <section id="hero" class="hero">
    <div class="hero__background">
      <div class="hero__grid"></div>
    </div>
    <div class="hero__scanline"></div>

    <div class="hero__container">
      <div class="hero__content">
        <p class="hero__greeting">// {{ $t('hero.greeting') }}</p>
        <h1 id="fullname">
          <div class="names">
            <span id="firstname">LEÓN</span>
            <span id="middlename" class="glitch-hero" data-text=ARDO>ARDO</span>
          </div>
          <span id="lastname">STAGLIANO</span>
        </h1>
        <p class="hero__role">
          <span class="hero__typed">{{ displayedText }}</span>
          <span class="hero__cursor" :class="{ 'hero__cursor--blink': !isTyping }">_</span>
        </p>
      </div>
      <!-- <div class="hero__image"> -->
      <!-- <div class="hero__avatar"> -->
      <!-- <img src="/src/assets/images/FotoCV.jpg"></img> -->
      <!-- <span class="hero__avatar-text">LS</span> -->
      <!-- </div> -->
      <!-- </div> -->
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

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
  background-image: url(https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmE3MzA5OGFjMGNjODE5MTgwMjAzZmEyMjRlM2ZkYTc6ZmlsZV8wMDAwMDAwMDVlZDA4MWY0YjlhZWQ0MDFkZTkzZDA5NSIsImdpem1vX2lkIjpudWxsLCJ3aWQiOm51bGwsIm9pZCI6bnVsbCwic2lkIjpudWxsLCJjcyI6bnVsbCwiZm4iOm51bGwsImNkIjpudWxsLCJ0cyI6IjIwNjcwIiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiI5NDgxMGU0MDNkYzc0NTcwNzRkZTA4MmQ5NzAzMzI4YzY5MzNlYzQ1M2IyNGQ2MzUzMDJiYTJjYTZjOTExZWM4IiwidiI6IjAiLCJjZG4iOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=);
  background-size: cover;
  background-position: center;
  opacity: 0.12;
}

.hero__grid {
  background-image:
    linear-gradient(rgba(233, 30, 140, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(233, 30, 140, 0.035) 1px, transparent 1px);
  background-size: 44px 44px;
}

#fullname {
  font-family: var(--title-font);
  font-weight: 900;
  font-size: clamp(3.2rem, 11vw, 8.5rem);
  line-height: 0.88;
  letter-spacing: -0.025em;
  margin: 0 0 1.5rem;
  color: #F0E8FF;
}

.names {
  display: flex;
}

#fisrtname {
  color: #F0E8FF;
  display: inline-block
}

#middlename {
  /* color: #E91E8C; */
  color: var(--neon-magenta);
  text-shadow: 0 0 40px rgba(233, 30, 140, 0.6), 0 0 80px rgba(233, 30, 140, 0.25);
  display: inline-block;
  cursor: default
}

#lastname {
  color: #F0E8FF;
  display: inline-block
}

/* ANIMATIONS */
@keyframes glitch-before {

  /* --- 0% al 20%: EL GLITCH OCURRE (1 segundo) --- */
  0% {
    clip-path: inset(0 0 95% 0);
    transform: translate(-5px, 0);
    opacity: 1;
  }

  2% {
    clip-path: inset(25% 0 55% 0);
    transform: translate(5px, 0);
  }

  4% {
    clip-path: inset(55% 0 25% 0);
    transform: translate(-5px, 0);
  }

  6% {
    clip-path: inset(75% 0 8% 0);
    transform: translate(5px, 0);
  }

  8% {
    clip-path: inset(8% 0 80% 0);
    transform: translate(-5px, 0);
  }

  10% {
    clip-path: inset(40% 0 40% 0);
    transform: translate(5px, 0);
    opacity: 1;
  }

  /* --- 20% al 100%: TIEMPO DE PAUSA (4 segundos) --- */
  12.001%,
  100% {
    clip-path: inset(0 0 100% 0);
    opacity: 0;
  }
}

@keyframes glitch-after {

  /* --- 0% al 20%: EL GLITCH OCURRE (1 segundo) --- */
  0% {
    clip-path: inset(85% 0 0 0);
    transform: translate(5px, 0);
    opacity: 1;
  }

  2% {
    clip-path: inset(10% 0 65% 0);
    transform: translate(-5px, 0);
  }

  4% {
    clip-path: inset(45% 0 35% 0);
    transform: translate(5px, 0);
  }

  6% {
    clip-path: inset(65% 0 15% 0);
    transform: translate(-5px, 0);
  }

  8% {
    clip-path: inset(2% 0 88% 0);
    transform: translate(5px, 0);
  }

  10% {
    clip-path: inset(30% 0 50% 0);
    transform: translate(-5px, 0);
    opacity: 1;
  }

  /* --- 20% al 100%: TIEMPO DE PAUSA (4 segundos) --- */
  12.001%,
  100% {
    clip-path: inset(0 0 100% 0);
    opacity: 0;
  }
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

@keyframes gridScroll {
  0% {
    background-position: 0 0, 0 0, 0 0;
  }

  100% {
    background-position: 0 50px, 50px 0, 0 50px;
  }
}

.hero__scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-magenta), transparent);
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
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  gap: var(--space-xl);
}

.hero__content {
  margin-left: var(--offset-left);
}

.hero__greeting {
  font-family: var(--font-hud);
  font-size: 1rem;
  color: var(--neon-magenta);
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
}

.hero__typed {
  color: var(--neon-magenta);
  text-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
}

.hero__cursor {
  color: var(--neon-red);
  font-weight: 300;
  animation: none;
}

.hero__cursor--blink {
  animation: cursorBlink 1s step-end infinite;
}

@keyframes cursorBlink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.hero__image {
  display: flex;
  justify-content: flex-end;
}

.hero__avatar {
  width: 420px;
  height: 420px;
  background-image: url('/src/assets/images/FotoCV.jpg');
  background-size: cover;
  border: 2px solid var(--neon-magenta);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--glow-magenta);
  animation: avatarPulse 3s ease-in-out infinite;
  clip-path: var(--clip-angular-aggressive);
}

@keyframes avatarPulse {

  0%,
  100% {
    box-shadow: 0 0 10px rgba(255, 42, 109, 0.5), 0 0 30px rgba(255, 42, 109, 0.2);
  }

  50% {
    box-shadow: 0 0 20px rgba(255, 42, 109, 0.8), 0 0 60px rgba(255, 42, 109, 0.3);
  }
}

.hero__avatar-text {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--neon-magenta);
  text-shadow: 0 0 20px rgba(255, 42, 109, 0.5);
}

.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-lg);
  right: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
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
  border-right: 2px solid var(--neon-magenta);
  border-bottom: 2px solid var(--neon-magenta);
  transform: rotate(45deg);
  box-shadow: 2px 2px 5px rgba(255, 42, 109, 0.3);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

@media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    margin-left: 0;
    order: 2;
  }

  .hero__image {
    justify-content: center;
    order: 1;
  }

  .hero__avatar {
    width: 180px;
    height: 180px;
  }

  .hero__scroll-indicator {
    right: 50%;
    transform: translateX(50%);
  }
}
</style>

<style>
.glitch-hero {
  position: relative;
  display: inline-block;
}

.glitch-hero::before,
.glitch-hero::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: uppercase;
}

.glitch-hero::before {
  z-index: 2;
}

.glitch-hero::after {
  z-index: 1;
}

.hero__name:hover .glitch-hero::before {
  animation: glitch-before 0.4s steps(3) infinite;
  color: var(--neon-magenta);
  opacity: 1;
}

.hero__name:hover .glitch-hero::after {
  animation: glitch-after 0.4s steps(3) 0.05s infinite;
  color: var(--neon-cyan);
  opacity: 1;
}
</style>
