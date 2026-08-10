<template>
    <a href="#main-content" class="skip-link">
        {{ $t('nav.skipToContent') }}
    </a>

    <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }" aria-label="Navegación principal">
        <div class="navbar__container">
            <router-link to="/" class="navbar__logo" aria-label="León Stagliano - Inicio">
                <span class="navbar__logo-text"><img src="/src/assets/images/Logo.png" width="48px"></span>
            </router-link>


            <ul class="navbar__menu" :class="{ 'navbar__menu--open': isMenuOpen }" role="menubar">
                <li v-for="item in navItems" :key="item.id" role="none">
                    <a :href="`#${item.id}`" class="navbar__link"
                        :class="{ 'navbar__link--active': activeSection === item.id }" role="menuitem"
                        @click="closeMenu">
                        {{ $t(`nav.${item.id}`) }}
                    </a>
                </li>
            </ul>

            <div class="navbar__actions">
                <button class="navbar__theme-toggle" :aria-label="$t('nav.toggleTheme')" @click="toggleTheme">
                    <LightModeIcon :is-dark="isDark" />
                </button>

                <button class="navbar__lang-toggle" :aria-label="$t('nav.toggleLang')" @click="toggleLang">
                    <LanguageIcon :current-lang="currentLang" />
                </button>
                <button class="navbar__toggle" :class="{ 'open': isMenuOpen }" :aria-expanded="isMenuOpen"
                    :aria-label="isMenuOpen ? $t('nav.closeMenu') : $t('nav.openMenu')" @click="toggleMenu">
                    <span class="navbar__toggle-bar" aria-hidden="true"></span>
                    <span class="navbar__toggle-bar" aria-hidden="true"></span>
                    <span class="navbar__toggle-bar" aria-hidden="true"></span>
                </button>
            </div>

        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import LightModeIcon from '@/components/icons/LightModeIcon.vue'
// import DarkModeIcon from '@/components/icons/DarkModeIcon.vue'
import LanguageIcon from '@/components/icons/LanguageIcon.vue'

const { locale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('')
const currentLang = ref(locale.value)

const navItems = [
    { id: 'about' },
    { id: 'skills' },
    { id: 'projects' },
    { id: 'methodology' },
    { id: 'experience' },
    { id: 'education' },
    { id: 'contact' }
]

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}

const toggleLang = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
    currentLang.value = locale.value
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background-color: var(--neon-magenta);
    color: var(--cyber-black);
    padding: var(--space-sm) var(--space-md);
    z-index: 1000;
    transition: top var(--transition-fast);
    font-family: var(--font-hud);
    font-weight: 600;
}

.skip-link:focus {
    top: 0;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    padding: var(--space-md) 0;
    transition: background-color transparent, backdrop-filter var(--transition-normal);
    border-bottom: 1px solid transparent;
}

.navbar--scrolled {
    background-color: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid var(--neon-magenta);
}

.navbar__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
}

.navbar__logo {
    transition: filter 0.5s ease;
}

.navbar__logo:hover {
    /* filter: drop-shadow(2px 4px 4px rgba(255, 42, 109, 0.8)); */
    filter: invert(30%) sepia(97%) saturate(6819%) hue-rotate(308deg) brightness(99%) contrast(113%);
    opacity: 1;
}

.navbar__toggle {
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    /* gap: 4px; */
    padding: var(--space-sm);

    background: none;
    border: none;
    box-shadow: 0 0 10px var(--neon-magenta);
}

/* Animación a X */
.navbar__toggle.open span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.navbar__toggle.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
}

.navbar__toggle.open span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}

.navbar__toggle-bar {
    width: 24px;
    height: 2px;
    border-radius: 1rem;
    background-color: #858585;  /* CORREGIR */
    transition: transform var(--transition-fast);
}

.navbar__menu {
    display: flex;
    gap: var(--space-lg);
    list-style: none;
}

.navbar__link {
    position: relative;
    font-family: var(--font-hud);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: color var(--transition-fast);
}

.navbar__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--neon-magenta);
    box-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
    transition: width var(--transition-fast);
}

.navbar__link:hover,
.navbar__link--active {
    color: var(--neon-magenta);
}

.navbar__link:hover::after,
.navbar__link--active::after {
    width: 100%;
}

.navbar__actions {
    display: flex;
    gap: var(--space-sm);
}

.navbar__theme-toggle,
.navbar__lang-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    color: var(--text-secondary);

    transition: background-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast);
    border: 1px solid var(--cyber-border);

    background: none;
    border: none;
    box-shadow: 0 0 10px var(--neon-magenta);
}

.navbar__theme-toggle:hover,
.navbar__lang-toggle:hover {
    background-color: var(--neon-magenta);
    color: var(--cyber-black);
    border-color: var(--neon-magenta);
    box-shadow: var(--glow-magenta);
}

@media (max-width: 768px) {
    .navbar__toggle {
        display: flex;
    }

    .navbar__menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-lg);
        background-color: rgba(10, 10, 15, 0.98);
        backdrop-filter: blur(10px);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: transform var(--transition-normal), opacity var(--transition-normal);
        border-bottom: 2px solid var(--neon-magenta);
    }

    .navbar__menu--open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        position: absolute;
        top: 0;
        z-index: -1;
        padding-top: 14vh;
    }
}
</style>