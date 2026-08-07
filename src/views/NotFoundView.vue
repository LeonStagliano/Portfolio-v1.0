<template>
  <main>
    <h1>404</h1>
    <p>Página no encontrada</p>
    <router-link to="/">Volver al inicio</router-link>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  opacity: 0.7;
}

a {
  margin-top: 2rem;
  color: inherit;
}
</style>
