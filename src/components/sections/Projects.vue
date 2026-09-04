<template>
  <section id="projects" ref="elementRef" class="projects section section--full"
    :class="{ 'projects--visible': isVisible }">
    <div class="projects__layout">
      <div class="projects__header">
        <div>
          <p class="projects__hud-label">// PROYECTOS</p>
          <h2 class="projects__title">{{ $t('projects.title') }}</h2>
        </div>
      </div>

      <div class="projects__grid">
          <ProjectCard v-for="(project, index) in projects" :key="project.slug" 
          :title="project.title"
          :image-src="project.cover || undefined"
          :description="project.description"
          :badges="project.tech"
          :slug="project.slug" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { getAllProjects } from '@/services/contentService'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const { elementRef, isVisible } = useScrollAnimation()
const { locale } = useI18n()

const projects = computed(() => getAllProjects(locale.value))
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: repeating-linear-gradient(-45deg,
      transparent,
      transparent 10px,
      rgba(250, 0, 175, 0.04) 10px,
      rgba(250, 0, 175, 0.04) 11px);
}

.projects__layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: var(--space-lg);
}

.projects__header {
  align-self: self-start;
  padding: var(--space-lg) 0;
}

.projects__hud-label {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-xs);
  opacity: 0.8;
}

.projects__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 0;
  color: var(--text-primary);
  text-transform: uppercase;
}

/* .projects__featured {
  margin-bottom: var(--space-xl);
} */

/* .projects__card--featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--cyber-panel);
  border: 1px solid var(--neon-magenta);
  overflow: hidden;
  transition: box-shadow var(--transition-fast);
  clip-path: var(--clip-diagonal-right);
} */

/* .projects__card--featured:hover {
  box-shadow: var(--glow-magenta);
} */

/* .projects__card-image--featured {
  height: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, var(--cyber-dark) 0%, var(--cyber-surface) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
} */

/* .projects__card-icon {
  color: var(--neon-magenta);
  opacity: 0.5;
} */

.projects__card-content {
  padding: var(--space-lg);
}

.projects__card-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
}

.projects__card-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.projects__card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.projects__tech-badge {
  padding: var(--space-2xs) var(--space-xs);
  background-color: var(--cyber-surface);
  border: 1px solid var(--neon-magenta);
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  clip-path: var(--clip-tab);
}

.projects__card-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.projects__button {
  padding: var(--space-xs) var(--space-md);
  background-color: transparent;
  border: 2px solid var(--neon-magenta);
  color: var(--neon-magenta);
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
}

.projects__button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--neon-magenta);
  transform: translateX(-101%);
  transition: transform var(--transition-fast);
  z-index: -1;
}

.projects__button:hover {
  color: var(--cyber-black);
}

.projects__button:hover::before {
  transform: translateX(0);
}

.projects__icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--neon-magenta);
  color: var(--neon-magenta);
  transition: all var(--transition-fast);
}

.projects__icon-link:hover {
  background-color: var(--neon-magenta);
  color: var(--cyber-black);
  box-shadow: var(--glow-magenta);
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-lg);
}

.projects__card {
  background-color: var(--cyber-panel);
  border: 1px solid var(--neon-magenta);
  overflow: hidden;
  transition: box-shadow var(--transition-fast);
  position: relative;
}

.projects__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--neon-magenta);
}

.projects__card:hover {
  box-shadow: var(--glow-magenta);
}

.projects__card--tall .projects__card-image {
  height: 200px;
}

.projects__card-image {
  height: 140px;
  background: linear-gradient(135deg, var(--cyber-dark) 0%, var(--cyber-surface) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--neon-magenta);
}

.projects--visible .projects__featured,
.projects--visible .projects__grid {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .projects__card--featured {
    grid-template-columns: 1fr;
    clip-path: none;
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }
}

/* @media (min-width: 768px) {
  .projects__layout {
    max-width: 1280px;
  }
} */
</style>
