<template>
    <ul class="about__personal-list">
        <li>
            <span class="activity__icon">
                <SailingIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.sailing') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <CampingIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.camping') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <TrekkingIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.trekking') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <DesignIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.design') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <WoodWorkIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.woodWork') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <SportsIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.sports') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <MovieIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.audiovisuals') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <PhotographyIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.photography') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <MusicIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.music') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <GamingIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.gaming') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <GameDevelopmentIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.gameDev') }}</span>
        </li>
        <li>
            <span class="activity__icon">
                <ReadingIcon />
            </span>
            <span class="activity__text">{{ $t('about.activities.reading') }}</span>
        </li>
    </ul>
</template>

<script setup>
import SailingIcon from '@/components/icons/SailingIcon.vue'
import DesignIcon from '@/components/icons/DesignIcon.vue'
import CampingIcon from '@/components/icons/CampingIcon.vue'
import TrekkingIcon from '@/components/icons/TrekkingIcon.vue'
import MovieIcon from '@/components/icons/MovieIcon.vue'
import MusicIcon from '@/components/icons/MusicIcon.vue'
import GamingIcon from '@/components/icons/GamingIcon.vue'
import SportsIcon from '@/components/icons/SportsIcon.vue'
import ReadingIcon from '@/components/icons/ReadingIcon.vue'
import PhotographyIcon from '@/components/icons/PhotographyIcon.vue'
import GameDevelopmentIcon from '@/components/icons/GameDevelopmentIcon.vue'
import WoodWorkIcon from '@/components/icons/WoodWorkIcon.vue'
</script>

<style scoped>
.about__personal-list {
    list-style: none;
    text-align: left;
    width: 100%;
    padding: 0 var(--space-lg) var(--space-lg);
    display: flex;
    flex-direction: column;
}

.about__personal-list li {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-sm);
    border-bottom: 1px solid var(--cyber-border);
}

.about__personal-list li:last-child {
    border-bottom: none;
}

.activity__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--cyber-surface);
    border: 1px solid var(--neon-magenta);
    color: var(--neon-magenta);
    flex-shrink: 0;
}

.activity__text {
    font-family: var(--font-hud);
}

@media (min-width: 768px) {
    .about__personal-list {
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    .about__personal-list li {
        border-bottom: none;
    }
}
</style>