<template>
    <Teleport to="body">
        <Transition name="cv-modal">
            <div v-if="isOpen" class="cv-modal" @click.self="$emit('close')">
                <div class="cv-modal__paper">
                    <header class="cv-modal__header">
                        <h3 class="cv-modal__title">{{ $t('contact.cvTitle') }}</h3>
                        <div class="cv-modal__actions">
                            <a href="/CV_Leonardo-Stagliano.pdf" download class="cv-modal__download">
                                {{ $t('contact.cvDownload') }}
                            </a>
                            <button class="cv-modal__close" @click="$emit('close')">✕</button>
                        </div>
                    </header>
                    <iframe src="/CV_Leonardo-Stagliano.pdf" class="cv-modal__iframe" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close'])

const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        emit('close')
    }
}

watch(() => props.isOpen, (open) => {
    if (open) {
        document.addEventListener('keydown', handleKeydown)
        document.body.style.overflow = 'hidden'
    } else {
        document.removeEventListener('keydown', handleKeydown)
        document.body.style.overflow = ''
    }
})
</script>

<style scoped>
.cv-modal {
    position: fixed;
    inset: 0;
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
}

.cv-modal__paper {
    display: flex;
    flex-direction: column;
    width: min(90vw, 900px);
    height: 85vh;
    background: var(--cyber-panel);
    border: 1px solid var(--neon-magenta);
    box-shadow: var(--glow-magenta);
}

.cv-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-sm) var(--space-md);
    border-bottom: 1px solid var(--cyber-border);
}

.cv-modal__title {
    font-family: var(--font-hud);
    font-size: var(--text-md);
    color: var(--neon-magenta);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.cv-modal__actions {
    display: flex;
    align-items: center;
    gap: var(--space-md);
}

.cv-modal__download {
    font-family: var(--font-hud);
    font-size: var(--text-sm);
    color: var(--neon-magenta);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--transition-fast);
}

.cv-modal__download:hover {
    color: var(--text-primary);
}

.cv-modal__close {
    background: none;
    border: 1px solid var(--cyber-border);
    color: var(--text-primary);
    font-size: var(--text-md);
    padding: var(--space-2xs) var(--space-xs);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.cv-modal__close:hover {
    border-color: var(--neon-magenta);
    color: var(--neon-magenta);
    box-shadow: var(--glow-magenta);
}

.cv-modal__iframe {
    flex: 1;
    width: 100%;
    border: none;
}

/* --- Transiciones --- */
.cv-modal-enter-from,
.cv-modal-leave-to {
    opacity: 0;
}

.cv-modal-enter-from .cv-modal__paper,
.cv-modal-leave-to .cv-modal__paper {
    transform: scale(0.95);
}

.cv-modal-enter-active,
.cv-modal-leave-active {
    transition: opacity 0.3s ease;
}

.cv-modal-enter-active .cv-modal__paper,
.cv-modal-leave-active .cv-modal__paper {
    transition: transform 0.3s ease;
}
</style>