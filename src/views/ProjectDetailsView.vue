<template>
  <div class="project-detail">
    <ProjectsNavBar />

    <template v-if="project">
      <!-- Banner -->
      <header class="project-detail__banner" :style="project.cover ? { backgroundImage: `url(${project.cover})` } : {}">
        <div class="project-detail__banner-overlay"></div>
      </header>

      <!-- Contenido -->
      <main class="project-detail__content">
        <div class="container">
          <div class="project-detail__header">
            <h1 class="project-detail__title">{{ project.title }}</h1>
            <div class="project-detail__actions">
              <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-detail__button">
                <GitHubIcon :size="20" />
                <span>{{ $t('projects.viewGithub') }}</span>
              </a>

              <a :href="project.deploy" target="_blank" rel="noopener noreferrer"
                class="project-detail__button project-detail__button--primary">
                <DeployIcon :size="20" />
                <span>{{ $t('projects.viewDeploy') }}</span>
              </a>
            </div>
          </div>
          <div class="project-detail__badges">
            <span v-for="tech in project.tech" :key="tech" class="project-detail__badge">
              {{ tech }}
            </span>
          </div>

          <!-- Markdown content as Vue component -->
          <article class="project-detail__markdown">
            <component :is="project.component" />
          </article>

          <!-- Galería dinámica -->
          <section v-if="project.gallery.length > 0" class="project-detail__gallery">
            <h2>{{ $t('projects.gallery') }}</h2>
            <div class="project-detail__gallery-grid">
              <template v-for="item in project.gallery" :key="item.filename">
                <img v-if="item.type === 'image'" :src="item.src" :alt="`${project.title} - ${item.filename}`"
                  class="project-detail__gallery-item" loading="lazy" />
                <video v-else :src="item.src" class="project-detail__gallery-item" controls muted loop playsinline />
              </template>
            </div>
          </section>

          <!-- Navegación -->
          <nav class="project-detail__nav" aria-label="Navegación del proyecto">
            <router-link to="/" class="project-detail__back">
              ← {{ $t('nav.home') }}
            </router-link>
          </nav>
        </div>
      </main>
    </template>

    <!-- 404 si no existe el proyecto -->
    <div v-else class="project-detail__not-found">
      <h1>{{ $t('projects.notFound') }}</h1>
      <p>{{ $t('projects.notFoundDescription') }}</p>
      <router-link to="/">{{ $t('nav.home') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getProjectBySlug } from '@/services/contentService'
import ProjectsNavBar from '@/components/layout/ProjectsNavBar.vue'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import DeployIcon from '@/components/icons/DeployIcon.vue'

const route = useRoute()
const { locale } = useI18n()

const project = computed(() => {
  return getProjectBySlug(route.params.slug, locale.value)
})
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  background-color: var(--cyber-black);
}

.project-detail__banner {
  position: relative;
  height: 50vh;
  background: linear-gradient(135deg, var(--cyber-dark) 0%, var(--cyber-surface) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
  justify-content: start;
}

.project-detail__banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
      rgba(10, 10, 10, 1) 0%,
      rgba(10, 10, 10, 0.95) 10%,
      rgba(10, 10, 10, 0.8) 20%,
      rgba(10, 10, 10, 0.5) 30%,
      rgba(10, 10, 10, 0.1) 40%,
      transparent 90%);
  pointer-events: none;
}

.project-detail__header {
  position: relative;
  z-index: 1;
  /* text-align: center; */
  color: white;
  /* padding: var(--space-lg); */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.project-detail__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.project-detail__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  justify-content: start;
}

.project-detail__badge {
  padding: var(--space-xs) var(--space-md);
  background-color: var(--cyber-surface);
  border: 1px solid var(--cyber-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-hud);
  font-size: 0.9rem;
  text-transform: uppercase;
}

.project-detail__content {
  padding: 0 var(--space-md) 0;
}

.project-detail__actions {
  display: flex;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
  font-family: var(--font-hud);
}

.project-detail__button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  font-weight: 500;
  background-color: var(--cyber-surface);
  border: 1px solid var(--cyber-border);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.project-detail__button:hover {
  border-color: var(--neon-cyan);
  box-shadow: var(--glow-cyan);
}

.project-detail__button--primary {
  background-color: var(--neon-magenta);
  border-color: var(--neon-magenta);
  color: var(--cyber-black);
}

.project-detail__button--primary:hover {
  box-shadow: var(--glow-magenta);
}

.project-detail__markdown {
  line-height: 1.8;
  margin-bottom: var(--space-xl);
}

.project-detail__markdown :deep(h1),
.project-detail__markdown :deep(h2),
.project-detail__markdown :deep(h3) {
  font-family: var(--font-display);
  margin-top: var(--space-xl);
  margin-bottom: var(--space-md);
}

.project-detail__markdown :deep(h2) {
  color: var(--neon-cyan);
}

.project-detail__markdown :deep(ul) {
  margin-left: var(--space-lg);
  margin-bottom: var(--space-md);
}

.project-detail__markdown :deep(li) {
  margin-bottom: var(--space-sm);
}

.project-detail__markdown :deep(strong) {
  color: var(--neon-magenta);
}

.project-detail__gallery {
  margin-bottom: var(--space-xl);
}

.project-detail__gallery h2 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

.project-detail__gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-md);
}

.project-detail__gallery-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid var(--cyber-border);
  background-color: var(--cyber-panel);
}

.project-detail__nav {
  padding-top: var(--space-xl);
  border-top: 1px solid var(--cyber-border);
}

.project-detail__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--neon-cyan);
  font-weight: 500;
  transition: transform var(--transition-fast);
}

.project-detail__back:hover {
  transform: translateX(-5px);
}

.project-detail__not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-xl);
  text-align: center;
}

.project-detail__not-found h1 {
  font-size: 2rem;
  margin-bottom: var(--space-md);
}

.project-detail__not-found p {
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
}

.project-detail__not-found a {
  color: var(--neon-cyan);
  font-weight: 500;
}
</style>
