<template>
    <button class="lang-switch" :aria-label="$t('nav.toggleLang')" @click="toggleLang">
        <div class="language" :class="{ 'selected': currentLang === 'es' }">ES</div>
        <div class="language" :class="{ 'selected': currentLang === 'en' }">EN</div>
    </button>
</template>


<!-- <button class="navbar__lang-toggle" :aria-label="$t('nav.toggleLang')" @click="toggleLang">
    <LanguageIcon :current-lang="currentLang" />
</button> -->

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
// import LanguageIcon from '@/components/icons/LanguageIcon.vue'

const { locale } = useI18n()

const currentLang = ref(locale.value)

const toggleLang = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
    currentLang.value = locale.value
}
</script>

<style scoped>
.lang-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    background: none;
    border: none;
    border-radius: .5rem;
    cursor: pointer
}

.language {
    border: 1px solid var(--disabled-color);
    padding: 4px;
    color: var(--disabled-color);
    font-family: var(--font-hud);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: -0.01rem;
}

.selected{
    color: var(--main-color);
    border: 1px solid var(--main-color);
    font-weight: 700;
}
</style>