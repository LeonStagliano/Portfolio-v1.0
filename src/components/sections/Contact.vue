<template>
  <section id="contact" ref="elementRef" class="contact section" :class="{ 'contact--visible': isVisible }">
    <div class="contact__layout">
      <div class="contact__header">
        <p class="contact__hud-label">// CONTACTO</p>
        <h2 class="contact__title">{{ $t('contact.title') }}</h2>
      </div>
      <form class="contact__form" @submit.prevent="handleSubmit">
        <div id="name__container" class="contact__field">
          <label class="contact__label" for="name">{{ $t('contact.name') }}</label>
          <input id="name" v-model="form.name" type="text" class="contact__input" required
            :placeholder="$t('contact.name')" />
        </div>

        <div id="email__container" class="contact__field">
          <label class="contact__label" for="email">{{ $t('contact.email') }}</label>
          <input id="email" v-model="form.email" type="email" class="contact__input" required
            :placeholder="$t('contact.email')" />
        </div>

        <div id="subject__container" class="contact__field">
          <label class="contact__label" for="subject">{{ $t('contact.subject') }}</label>
          <input id="subject" v-model="form.subject" type="text" class="contact__input"
            :placeholder="$t('contact.subject')" />
        </div>

        <div id="message__container" class="contact__field">
          <label class="contact__label" for="message">{{ $t('contact.message') }}</label>
          <div class="textarea__container">
            <textarea id="message" v-model="form.message" class="contact__input contact__textarea" rows="10" required
              :maxlength="MAX_MESSAGE_LENGTH" :placeholder="$t('contact.message')"></textarea>
            <span class="char__counter">{{ remainingChars }}</span>
          </div>
        </div>

        <button type="submit" class="contact__button" :disabled="isCooldown">
          <template v-if="isCooldown">
            {{ $t('contact.sent') }} <span class="contact__cooldown">({{ cooldownRemaining }})</span>
          </template>
          <template v-else>{{ $t('contact.send') }}</template>
        </button>

        <p v-if="sendStatus === 'success'" class="contact__status-msg contact__status-msg--success">
          {{ $t('contact.sendSuccess') }}
        </p>
        <p v-if="sendStatus === 'error'" class="contact__status-msg contact__status-msg--error">
          {{ $t('contact.sendError') }}
        </p>

        <div class="contact__info">
          <div class="contact__info-item contact__status">
            <span class="status__led"></span>
            <span class="contact__status-text">{{ $t('contact.status') }}</span>
          </div>

          <button class="contact__info-item contact__email" :class="{ 'contact__email--copied': copied }" type="button"
            @click="copyEmail">
            <div class="icon__container">
              <MailIcon />
            </div>
            <span class="contact__info-text">stagliano.leonardo@gmail.com</span>
            <span class="email__tooltip" :class="{ 'email__tooltip-visible': copied }">{{ $t('contact.copied') }}</span>
          </button>

          <button class="contact__info-item cv__viewer" type="button" @click="showCvModal = true">
            <div class="icon__container">
              <CVIcon />
            </div>
            <span class="contact__info-text">{{ $t('contact.cv') }}</span>
          </button>

          <div class="contact__social">
            <a href="https://github.com/LeonStagliano" target="_blank" rel="noopener noreferrer"
              class="contact__social-link" aria-label="GitHub">
              <GitHubIcon size="30" />
            </a>
            <a href="https://www.linkedin.com/in/leon-stagliano/" target="_blank" rel="noopener noreferrer"
              class="contact__social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
  <CVModal :is-open="showCvModal" @close="showCvModal = false" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import emailjs from '@emailjs/browser'
import GitHubIcon from '../icons/GitHubIcon.vue'
import LinkedInIcon from '../icons/LinkedInIcon.vue'
import MailIcon from '../icons/MailIcon.vue'
import CVIcon from '../icons/CVIcon.vue'
import CVModal from '../ui/CVModal.vue'

const { elementRef, isVisible } = useScrollAnimation()

const MAX_MESSAGE_LENGTH = 1000
const remainingChars = computed(() => MAX_MESSAGE_LENGTH - form.value.message.length)

const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('stagliano.leonardo@gmail.com')
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  } catch (err) {
    console.error('Error al copiar:', err)
  }
}

const showCvModal = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const STORAGE_KEY = 'contact_cooldown_end'
const COOLDOWN = 300  // Seconds
const isCooldown = ref(false)
const sendStatus = ref('')
const cooldownRemaining = ref(0)
let cooldownInterval = null

const getCooldownRemaining = () => {
  const endTime = localStorage.getItem(STORAGE_KEY)
  if (!endTime) return 0
  const remaining = Math.ceil((Number(endTime) - Date.now()) / 1000)
  return remaining > 0 ? remaining : 0
}

const setCooldownEnd = () => {
  const endTime = Date.now() + COOLDOWN * 1000
  localStorage.setItem(STORAGE_KEY, String(endTime))
}

const clearCooldownStorage = () => {
  localStorage.removeItem(STORAGE_KEY)
}

const clearCooldownInterval = () => {
  if (cooldownInterval) {
    clearInterval(cooldownInterval)
    cooldownInterval = null
  }
}

const startCooldown = (seconds) => {
  isCooldown.value = true
  cooldownRemaining.value = seconds
  cooldownInterval = setInterval(() => {
    cooldownRemaining.value--
    if(cooldownRemaining.value <= 0) {
      isCooldown.value = false
      clearCooldownInterval()
      clearCooldownStorage()
    }
  }, 1000)
}

onMounted(() => {
  const remaining = getCooldownRemaining()
  if (remaining > 0) {
    startCooldown(remaining)
  }
})

onUnmounted(() => {
  clearCooldownInterval()
})

const handleSubmit = async () => {
  if (isCooldown.value) return

  sendStatus.value = ''

  try {
    await emailjs.send(
      'service_o22pcww',
      'template_s8cxwvk',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        time: new Date().toLocaleString('es-AR', {
          dateStyle: 'long',
          timeStyle: 'short',
          hour12: false
        }),
        subject: form.value.subject,
        message: form.value.message
      }, 'xgV4yBCOw1mMZVjap'
    )
    sendStatus.value = 'success'
    form.value = { name: '', email: '', subject: '', message: '' }

    setCooldownEnd()
    startCooldown(COOLDOWN)
  } catch (error) {
    sendStatus.value = 'error'
  }

  setTimeout(() => { sendStatus.value = '' }, 3000)
}
</script>

<style scoped>
/* =============================================
   CONTACT — Mobile-First
   ============================================= */

/* --- Section --- */
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      rgba(250, 0, 175, 0.04) 10px,
      rgba(250, 0, 175, 0.04) 11px);
}

/* --- Layout --- */
.contact__layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: var(--space-lg);
}

/* --- Header --- */
.contact__header {
  align-self: self-start;
  padding: var(--space-lg) 0;
}

.contact__hud-label {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-xs);
  opacity: 0.8;
}

.contact__title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-align: left;
  margin-bottom: var(--space-xl);
  color: var(--text-primary);
  text-transform: uppercase;
}

/* =============================================
   FORM — Mobile (flex column)
   ============================================= */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;
}

/* --- Form fields --- */
.contact__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  width: 100%;
}

.contact__label {
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.contact__input {
  background-color: var(--bg-secondary);
  border: 1px solid var(--cyber-border);
  padding: var(--space-sm);
  color: var(--text-primary);
  font-family: var(--font-hud);
  font-size: var(--text-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.contact__input:focus {
  outline: none;
  border-color: var(--neon-magenta);
  box-shadow: var(--glow-magenta);
}

.contact__textarea {
  resize: none;
  width: 100%;
}

/* --- Textarea container & counter --- */
.textarea__container {
  position: relative;
  display: flex;
  flex: 1;
}

.char__counter {
  position: absolute;
  bottom: var(--space-sm);
  right: var(--space-sm);
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--text-secondary);
  pointer-events: none;
  user-select: none;
}

/* --- Submit button --- */
.contact__button {
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  margin-top: var(--space-xs);
  background-color: transparent;
  border: 2px solid var(--border);
  color: var(--neon-magenta);
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all var(--transition-fast);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  align-self: flex-start;
}

.contact__button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--neon-magenta);
  transform: translateX(-101%);
  transition: transform var(--transition-fast);
  z-index: -1;
}

.contact__button:hover {
  color: var(--cyber-black);
}

.contact__button:hover::before {
  transform: translateX(0);
}

/* --- Submit button disabled state --- */
.contact__button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* --- Send status messages --- */
.contact__status-msg {
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  text-align: start;
  padding: var(--space-xs);
  margin-top: var(--space-xs);
}

.contact__status-msg--success {
  color: var(--secondary-color);
}

.contact__status-msg--error {
  color: var(--color-accent);
}

/* =============================================
   INFO — Mobile (flex column, stacked)
   ============================================= */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;
  margin-top: var(--space-xl);
}

.contact__info-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  box-shadow: 0 4px 15px var(--border);
}

.contact__email,
.cv__viewer {
    cursor: pointer;
}

.contact__email:hover *,
.cv__viewer:hover * {
  color: var(--main-color);
}

/* --- Info elements --- */
.icon__container {
  width: 18px;
  height: 18px;
  color: var(--text-primary)
}

.status__led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  color: var(--border);
  animation: led-pulse 2s infinite;
}

.contact__email {
  position: relative;
}

.contact__info-text,
.contact__status-text {
  font-family: var(--font-hud);
  font-size: var(--text-md);
  color: var(--text-primary);
}

/* --- Email tooltip --- */
.email__tooltip {
  position: absolute;
  bottom: calc(100% + var(--space-2xs));
  right: 0;
  padding: var(--space-2xs) var(--space-xs);
  color: var(--main-color);
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-fast);
}

.email__tooltip-visible {
  opacity: 1;
}

.contact__email--copied {
  animation: box-flash 0.6s ease;
}

/* --- Social links --- */
.contact__social {
  display: flex;
  gap: var(--space-md);
}

.contact__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xs);
  background: none;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.contact__social-link:hover {
  color: var(--main-color);
}

/* =============================================
   DESKTOP (768px+)
   ============================================= */
@media (min-width: 768px) {

  /* --- Form: 3-column grid --- */
  .contact__form {
    display: grid;
    gap: var(--space-md);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto repeat(3, 1fr) auto;
  }

  #name__container {
    grid-area: 1 / 1;
  }

  #email__container {
    grid-area: 1 / 2;
  }

  #subject__container {
    grid-area: 2 / 1 / span 1 / span 2;
  }

  #message__container {
    grid-area: 3 / 1 / span 3 / span 2;
    position: relative;
    min-height: 0;
  }

  .contact__button {
    grid-area: 6 / 1 / span 1 / span 2;
  }

  /* --- Info: subgrid in column 3 --- */
  .contact__info {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: 1 / -1;
    grid-column: 3;
    gap: var(--space-md);
    margin-top: 0;
  }

  .contact__status {
    grid-row: 1;
    align-self: end;
  }

  .contact__email {
    grid-row: 2;
    align-self: end;
  }

  .cv__viewer {
    grid-row: 3;
    align-self: end;
  }

  .contact__social {
    grid-row: 4;
    align-self: start;
  }
}

.contact--visible .contact__layout {
  animation: fadeInUp 0.6s ease forwards;
}
</style>
