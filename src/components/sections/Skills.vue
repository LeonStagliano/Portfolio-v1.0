<template>
  <section id="skills" ref="elementRef" class="skills section section--wide" :class="{ 'skills--visible': isVisible }">
    <div class="skills__layout">
      <div class="skills__header">
        <p class="skills__hud-label">// HABILIDADES</p>
        <h2 class="skills__title">{{ $t('skills.title') }}</h2>
      </div>

      <!-- <div class="skills__container"> -->
      <!-- <div class="skills__column skills__column--tech">
          <h3 class="skills__subtitle">{{ $t('skills.techStack') }}</h3>
          <div class="skills__tech-list">
            
          </div>
        </div>
  
        <div class="skills__column skills__column--soft">
          <h3 class="skills__subtitle">{{ $t('skills.softSkills') }}</h3>
          <div class="skills__soft-list">
  
          </div>
        </div> -->
      <ul class="chain">
        <li class="chain-item">
          <span class="diamond">
            <HMTLIcon />
          </span>
          <span class="label">HTML5</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <TeamworkIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.teamwork') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <CSSIcon />
          </span>
          <span class="label">CSS3</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <LeadershipIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.leadership') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <JSIcon />
          </span>
          <span class="label">JAVASCRIPT</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <CommunicationIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.communication') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <VUEIcon />
          </span>
          <span class="label">VUE</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <ProblemSolvingIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.problemSolving') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <BootstrapIcon />
          </span>
          <span class="label">BOOTSTRAP</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <CreativityIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.creativity') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <FigmaIcon />
          </span>
          <span class="label">FIGMA</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <UnderPressureIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.underPressureWork') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <PythonIcon />
          </span>
          <span class="label">PYTHON</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <AnalyticalThinkingIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.analyticalThinking') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <APIIcon />
          </span>
          <span class="label">APIs REST</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <LearningIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.continuousLearning') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <MySQLIcon />
          </span>
          <span class="label">MySQL</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <UserOrientedIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.userOriented') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <GitIcon />
          </span>
          <span class="label">GIT</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <ReadingIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.detailOriented') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <GitHubIcon />
          </span>
          <span class="label">GITHUB</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <AdaptabilityIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.adaptability') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <AIIcon />
          </span>
          <span class="label">{{ $t('skills.hardSkills.aiDEV') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <AgileScrumIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.scrum') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <ResponsiveIcon />
          </span>
          <span class="label">{{ $t('skills.hardSkills.responsive') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <EmpathyIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.empathy') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <UXIcon />
          </span>
          <span class="label">UX/UI</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <ReadingIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.mentoring') }}</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <CleanCodeIcon />
          </span>
          <span class="label">CLEAN CODE</span>
        </li>
        <li class="chain-item">
          <span class="diamond">
            <EfficiencyIcon />
          </span>
          <span class="label">{{ $t('skills.softSkills.efficiency') }}</span>
        </li>
      </ul>
      <!-- </div> -->
      <!-- <PuzzleCards /> -->
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import ReadingIcon from '@/components/icons/interests/ReadingIcon.vue';
import HMTLIcon from '@/components/icons/skills/hard/HMTLIcon.vue';
import CSSIcon from '@/components/icons/skills/hard/CSSIcon.vue';
import JSIcon from '@/components/icons/skills/hard/JSIcon.vue';
import VUEIcon from '@/components/icons/skills/hard/VUEIcon.vue';
import BootstrapIcon from '@/components/icons/skills/hard/BootstrapIcon.vue';
import FigmaIcon from '@/components/icons/skills/hard/FigmaIcon.vue';
import PythonIcon from '@/components/icons/skills/hard/PythonIcon.vue';
import APIIcon from '@/components/icons/skills/hard/APIIcon.vue';
import MySQLIcon from '@/components/icons/skills/hard/MySQLIcon.vue';
import GitIcon from '@/components/icons/skills/hard/GitIcon.vue';
import GitHubIcon from '@/components/icons/skills/hard/GitHubIcon.vue';
import AIIcon from '@/components/icons/skills/hard/AIIcon.vue';
import ResponsiveIcon from '@/components/icons/skills/hard/ResponsiveIcon.vue';
import UXIcon from '@/components/icons/skills/hard/UXIcon.vue';
import CleanCodeIcon from '@/components/icons/skills/hard/CleanCodeIcon.vue';
import TeamworkIcon from '../icons/skills/soft/TeamworkIcon.vue';
import LeadershipIcon from '../icons/skills/soft/LeadershipIcon.vue';
import CommunicationIcon from '../icons/skills/soft/CommunicationIcon.vue';
import ProblemSolvingIcon from '../icons/skills/soft/ProblemSolvingIcon.vue';
import CreativityIcon from '../icons/skills/soft/CreativityIcon.vue';
import UnderPressureIcon from '../icons/skills/soft/UnderPressureIcon.vue';
import AnalyticalThinkingIcon from '../icons/skills/soft/AnalyticalThinkingIcon.vue';
import LearningIcon from '../icons/skills/soft/LearningIcon.vue';
import UserOrientedIcon from '../icons/skills/soft/UserOrientedIcon.vue';
import AdaptabilityIcon from '../icons/skills/soft/AdaptabilityIcon.vue';
import AgileScrumIcon from '../icons/skills/soft/AgileScrumIcon.vue';
import EmpathyIcon from '../icons/skills/soft/EmpathyIcon.vue';
import EfficiencyIcon from '../icons/skills/soft/EfficiencyIcon.vue';

const { elementRef, isVisible } = useScrollAnimation()
</script>

<style scoped>
.chain {
  --diamond-size: clamp(40px, 6vw, 68px);
  --zigzag: 1.5;
  --chain-overlap: calc(var(--diamond-size) * -0.3);
}

.chain-item+.chain-item {
  margin-top: var(--chain-overlap);
}

.chain-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.chain-item:nth-child(even) .diamond {
  border-color: var(--secondary-border);
  color: var(--secondary-color)
}

.chain-item:nth-child(even) .diamond:hover {
  border-color: var(--secondary-color);
  box-shadow: 0 0 10px var(--secondary-color);
}

.chain-item:nth-child(odd) .diamond:hover {
  border-color: var(--main-color);
  box-shadow: 0 0 10px var(--main-color);
}

/* Todos los diamonds en columna central */
.chain-item .diamond,
.chain-item .label {
  grid-row: 1;
}

.chain-item .diamond {
  grid-column: 2;
  background-color: var(--bg-secondary) ;
}

/* Zigzag: desplazar ±la mitad del offset desde el centro */
.chain-item:nth-child(odd) .diamond {
  transform: translateX(calc(50% * var(--zigzag) / -2)) rotate(45deg);
}

.chain-item:nth-child(even) .diamond {
  transform: translateX(calc(50% * var(--zigzag) / 2)) rotate(45deg);
}

.chain-item .diamond :deep(svg) {
  transform: rotate(-45deg);
}

/* Labels en columnas exteriores */
.chain-item:nth-child(odd) .label {
  grid-column: 1;
  justify-self: end;
  text-align: end;
  padding-right: var(--diamond-size);
}

.chain-item:nth-child(even) .label {
  grid-column: 3;
  justify-self: start;
  text-align: start;
  padding-left: var(--diamond-size);
}

.chain-item .label {
  font-family: var(--font-hud);
  font-size: clamp(0.9rem, 3vw, 1.6rem);
  hyphens: auto;
  hyphenate-limit-chars: 6 3 3;
}


.hard__skills,
.soft__skills {
  list-style: none;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.hard__skills {
  margin-top: -28px;
  margin-right: -13px;
}

.soft__skills {
  margin-left: -16px;
  margin-bottom: -18px;
}

.hard__skills li,
.soft__skills li {
  display: flex;
  align-items: center;
  padding: var(--space-xs);
}

.diamond {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--diamond-size);
  height: var(--diamond-size);
  background-color: var(--cyber-surface);
  border: 1px solid var(--border);
  color: var(--neon-magenta);
  flex-shrink: 0;
  transform: rotate(45deg);
  overflow: hidden;
}

.soft__skills .activity__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--cyber-surface);
  border: 1px solid var(--secondary-color);
  color: var(--neon-magenta);
  flex-shrink: 0;
  transform: rotate(45deg);
}

.activity__icon :deep(svg) {
  transform: rotate(-45deg);
}

.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: clip; 
  background-image: repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      rgba(250, 0, 175, 0.04) 10px,
      rgba(250, 0, 175, 0.04) 11px);
}

.skills__layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: var(--space-lg);
}

.skills__header {
  align-self: self-start;
  padding: var(--space-lg) 0;
}

.skills__hud-label {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-xs);
  opacity: 0.8;
}

.skills__title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: var(--space-xl);
  color: var(--text-primary);
  text-transform: uppercase;
}

.skills__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: var(--space-xl);
}

.skills__column {
  background-color: var(--bg-secondary);
  border: 1px solid var(--main-color);
  padding: var(--space-lg);
  transition: box-shadow var(--transition-fast);
  position: relative;
}

.skills__column::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--main-color);
}

.skills__column:hover {
  box-shadow: var(--glow-magenta);
}

.skills__column--tech {
  clip-path: var(--clip-notch-top);
}

.skills__column--soft {
  clip-path: var(--clip-notch-bottom);
}

.skills__subtitle {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--neon-magenta);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--cyber-border);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills__tech-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

.skills__tech-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  background-color: var(--cyber-surface);
  border: 1px solid var(--cyber-border);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  clip-path: var(--clip-tab);
}

.skills__tech-item:hover {
  border-color: var(--neon-magenta);
  box-shadow: var(--glow-magenta);
}

.skills__tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--neon-magenta);
}

.skills__tech-name {
  font-family: var(--font-hud);
  font-size: var(--text-sm);
  color: var(--text-primary);
}

.skills__soft-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.skills__soft-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-md);
  background-color: var(--cyber-surface);
  border: 1px solid var(--cyber-border);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.skills__soft-item:hover {
  border-color: var(--neon-magenta);
  box-shadow: var(--glow-magenta);
}

.skills__soft-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--cyber-dark);
  border: 1px solid var(--neon-magenta);
  color: var(--neon-magenta);
  flex-shrink: 0;
  clip-path: var(--clip-angular);
}

.skills__soft-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.skills__soft-name {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
}

.skills__soft-desc {
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

.skills__bar {
  border: 1px solid var(--neon-magenta);
  padding: var(--space-md);
  background-color: var(--cyber-panel);
  overflow-x: auto;
}

.skills__bar-track {
  display: flex;
  gap: var(--space-lg);
  min-width: max-content;
}

.skills__bar-item {
  padding: var(--space-xs) var(--space-md);
  background-color: var(--cyber-surface);
  border: 1px solid var(--neon-magenta);
  clip-path: var(--clip-tab);
  white-space: nowrap;
}

.skills__bar-name {
  font-family: var(--font-hud);
  font-size: var(--text-xs);
  color: var(--neon-magenta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.skills--visible .skills__grid {
  animation: fadeInUp 0.6s ease forwards;
}

/* @media (min-width: 768px) {
  .skills__layout {
    max-width: 1280px;
  }
} */
</style>
