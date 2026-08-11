<template>
    <button :aria-label="$t('nav.toggleTheme')" @click="toggleTheme" class="switch" :class="{ 'is-dark': isDark }"
        aria-label="THEME_TOGGLE">
        <LightModeIcon class="icon sun-icon" />
        <DarkModeIcon class="icon moon-icon" />
    </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import LightModeIcon from '../icons/LightModeIcon.vue';
import DarkModeIcon from '../icons/DarkModeIcon.vue';

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.switch {
    display: flex;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: none;
    background: none;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
}

.icon {
    position: absolute;
    height: 20px;
    width: 20px;
    transition: transform 0.2s ease, opacity 0.15s;
}

.sun-icon {
    opacity: 1;
    transform: scale(1);
}

.switch.is-dark .sun-icon {
    opacity: 0;
    transform: scale(0.5) cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.moon-icon {
    opacity: 0;
    transform: scale(0.5);
}

.switch.is-dark .moon-icon {
    opacity: 1;
    transform: scale(1);
}
</style>
