<template>
    <a href="#main-content" class="skip-link">
        {{ $t('nav.skipToContent') }}
    </a>

    <nav class="navbar" :class="{ 
        'navbar--scrolled': isScrolled,
        'navbar--menu-open': isMenuOpen && !isDesktop 
        }" aria-label="Navegación principal">
        <div class="navbar__container">
            <router-link to="/" class="navbar__logo" aria-label="León Stagliano - Inicio">
                <img class="navbar__logo" src="/src/assets/images/Logo.png">
            </router-link>

            <ul class="navbar__menu" :class="{ 'navbar__menu--open': isMenuOpen && !isDesktop }" role="menubar">
                <li v-for="item in navItems" :key="item.id" role="none">
                    <a :href="`#${item.id}`" class="navbar__link"
                        :class="{ 'navbar__link--active': activeSection === item.id }" role="menuitem"
                        @click="closeMenu">
                        {{ $t(`nav.${item.id}`) }}
                    </a>
                </li>
            </ul>

            <div class="navbar__actions">
                <ToggleThemeSwitch />
                <LanguageSwitch />
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import ToggleThemeSwitch from '@/components/ui/ToggleThemeSwitch.vue'
import LanguageSwitch from '@/components/ui/LanguageSwitch.vue'
import { useWindowSize } from '@/composables/useWindowSize.js'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('')

const { width } = useWindowSize()
const isDesktop = computed(() => width.value > 768)

watch(isDesktop, (newValue) => {
    if (newValue === true) {
        isMenuOpen.value = false
    }
})

const navItems = [
    { id: 'about' },
    { id: 'methodology' },
    { id: 'skills' },
    { id: 'projects' },
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
    color: var(--cyber-black);
    background-color: var(--neon-magenta);
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
    padding: var(--space-sm) 0;
}

.navbar--scrolled,
.navbar--menu-open {
    background-color: var(--bg-secondary);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.1px 8px var(--main-color);
}

.navbar__container {
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 1fr auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
}

.navbar__logo {
    align-self: center;
    justify-self: center;
    max-width: 38px;
    filter: var(--logo-filter);
    transition: filter 0.5s ease;
}

.navbar__logo:hover {
    filter: saturate(100%) brightness(0%) var(--logo-hue-rotation);
}

.navbar__toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: var(--space-sm);
    background: none;
    border: none;
}

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
    background-color: var(--main-color);
    transition: transform var(--transition-fast);
}

.navbar__menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-sm);
    grid-row: 2;
    grid-column: span 10;
    padding: 0;
    opacity: 0;
    max-height: 0;
    visibility: hidden;
    overflow: hidden;
    pointer-events: none;
    list-style: none;
    transform: translateY(-100%);
    transition: 
        max-height var(--transition-normal),
        transform var(--transition-normal),
        opacity var(--transition-normal),
        padding var(--transition-normal),
        visibility 0s linear 300ms;
}

.navbar__menu--open {
    display: flex;
    grid-row: 2;
    padding: var(--space-md) 0;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    max-height: 70vh;
    pointer-events: auto;
    transition:
        max-height var(--transition-normal),
        transform var(--transition-normal),
        opacity var(--transition-normal),
        padding var(--transition-normal);
}

.navbar__toggle {
    display: flex;
}

.navbar__link {
    position: relative;
    font-family: var(--font-hud);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: font-size var(--transition-normal);
}

.navbar__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--main-color);
    box-shadow: 0 0 4px var(--main-color);
    transition: width var(--transition-fast);
}

.navbar__link:hover,
.navbar__link--active {
    color: var(--main-color);
    background-size: 100% 100%, 100% 100%;
}

.navbar__link:hover::after,
.navbar__link--active::after {
    width: 100%;
}

.navbar__actions {
    display: flex;
    align-items: center;
    grid-column: 10;
}

@media (min-width: 769px) {
    .navbar {
        padding: var(--space-md) 0;
    }

    .navbar__menu {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--space-md);
        white-space: nowrap;
        opacity: 1;
        visibility: visible;
        transform: none;
        max-height: none;
        overflow: visible;
        pointer-events: auto;
        display: flex;
        grid-row: 1;
        grid-column: 2 / span 8;
    }

    .navbar__toggle {
        display: none;
    }
}

@media (min-width: 1440px) {
    .navbar__link {
        transition: font-size var(--transition-normal);
        font-size: 1rem;
    }
}
</style>