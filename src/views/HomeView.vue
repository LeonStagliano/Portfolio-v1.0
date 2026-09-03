<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutMe from '@/components/sections/AboutMe.vue'
import Skills from '@/components/sections/Skills.vue'
import Projects from '@/components/sections/Projects.vue'
// import Methodology from '@/components/sections/Methodology.vue'
// import Experience from '@/components/sections/Experience.vue'
// import Education from '@/components/sections/Education.vue'
import Contact from '@/components/sections/Contact.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <!-- <div id="home"> -->
  <main class="home__content">
    <Navbar />
    <HeroSection />
    <AboutMe />
    <Skills />
    <Projects />
    <!-- <Methodology /> -->
    <!-- <Experience /> -->
    <!-- <Education /> -->
    <Contact />
    <Footer />
  </main>
  <!-- </div> -->
</template>

<style scoped>
.home_content {
  width: 100%;
  min-height: 100vh;
  background: var(--bg-primary);
}
</style>