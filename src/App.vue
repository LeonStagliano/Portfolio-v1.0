<script setup>
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LoadingScreen from '@/components/ui/LoadingScreen.vue'

const { locale } = useI18n()
const SUPPORTED_LANGS = ['es', 'en']

watch(locale, (lang) => {
  document.documentElement.lang = SUPPORTED_LANGS.includes(lang) ? lang : 'es'
}, { immediate: true })

const isLoaded = ref(false)
const isReady = ref(false)

const onLoadComplete = () => {
  isLoaded.value = true
  isReady.value = true
}
</script>

<template>
  <div id="portfolio">
    <LoadingScreen v-if="!isLoaded" @complete="onLoadComplete" />
    <RouterView v-if="isReady"/>
  </div>
</template>


<style scoped>
</style>
