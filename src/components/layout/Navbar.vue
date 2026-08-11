<template>
    <a href="#main-content" class="skip-link">
        {{ $t('nav.skipToContent') }}
    </a>

    <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }" aria-label="Navegación principal">
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
const isDesktop = computed(() => width.value > 768 )

watch(isDesktop, (newValue) => {
    if (newValue === true) {
        isMenuOpen.value = false
    }
})

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
    padding: var(--space-sm) 0;
}

.navbar--scrolled {
    background-color: var(--bg-secondary);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--main-color);
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
    max-width: 38px;
    filter: var(--logo-filter);
    transition: filter 0.5s ease;
}

.navbar__logo:hover {
    filter: saturate(100%) brightness(0%) var(--logo-hue-rotation);
    opacity: 1;
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
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 70px;
    left: 0;
    right: 0;
    gap: var(--space-sm);
    /* padding: var(--space-lg); */
    list-style: none;
    background-color: var(--bg-secondary);
    backdrop-filter: blur(10px);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: transform var(--transition-fast), opacity var(--transition-fast);
    border-bottom: 1px solid var(--neon-magenta);
}

.navbar__menu--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    top: 0;
    z-index: -1;
    padding: 12vh 0vh 4vh;
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
    transition: color var(--transition-fast);

    background-image:
        linear-gradient(var(--main-color), var(--main-color)),
        linear-gradient(var(--text-secondary), var(--text-secondary));

    background-repeat: no-repeat;
    background-size: 0% 100%, 100% 100%;
    background-position: left;

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    transition: background-size 0.2s ease;
}

.navbar__link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--main-color);
    box-shadow: 0 0 5px var(--main-color);
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
    /* gap: var(--space-sm); */
}

@media (min-width: 769px) {
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 200;
        padding: var(--space-md) 0;
    }
    .navbar__menu {
        flex-direction: row;
        gap: var(--space-lg);
        opacity: 1;
        visibility: visible;
    }
    .navbar__toggle{
        display: none;
    }
}
</style>

<!--! REVISAR NAVBAR / NAVBAR-MENU / NAVBAR-MENU-OPEN -->