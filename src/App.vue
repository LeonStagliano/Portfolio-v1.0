<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import LoadingScreen from '@/components/ui/LoadingScreen.vue'

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
    <RouterView v-if="'isReady'"/>
  </div>
</template>


<style scoped>
</style>
