<template>
    <article class="project__card">
        <div class="card-header">
            <slot name="image">
                <img :src="imageSrc" :alt="imageAlt" class="card-img" />
            </slot>
            <div class="card-title-overlay">
                <slot name="title">
                    <h3>{{ title }}</h3>
                </slot>
            </div>
        </div>

        <div class="card-body">
            <div class="card-badges">
                <slot name="badges">
                    <span v-for="tech in badges" :key="tech" class="badge" :class="tech.toLowerCase()">
                        {{ tech }}
                    </span>
                </slot>
            </div>

            <div class="card-text">
                <slot name="description">
                    <p>{{ description }}</p>
                </slot>
            </div>

            <div class="card-actions">
                <slot name="slug">
                    <router-link :to="`/proyecto/${slug}`" class="btn btn-primary">
                        {{ $t('projects.viewDetails') }}
                    </router-link>
                </slot>
                <slot name="repoUrl">
                    <a class="btn btn-icon" :href="repoUrl" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub">
                        <GitHubIcon />
                    </a>
                </slot>
                <slot name="deployUrl">
                    <a class="btn btn-icon" :href="deployUrl" target="_blank" rel="noopener noreferrer"
                        aria-label="Deploy">
                        <DeployIcon />
                    </a>
                </slot>
            </div>
        </div>
    </article>
</template>

<script setup>
import DeployIcon from '@/components/icons/DeployIcon.vue';
import GitHubIcon from '@/components/icons/GitHubIcon.vue';

// Definición de Props con valores por defecto
defineProps({
    title: {
        type: String,
        default: 'Mi Proyecto Web'
    },
    imageSrc: {
        type: String,
        default: 'https://placehold.co/400x200'
    },
    imageAlt: {
        type: String,
        default: 'Miniatura del proyecto'
    },
    description: {
        type: String,
        default: 'Esta es una breve descripción de ejemplo para la tarjeta reutilizable. Puedes sobrescribir este texto fácilmente.'
    },
    badges: {
        type: Array,
        default: () => ['HTML', 'CSS', 'JS', 'VUE']
    },
    slug: {
        type: String,
        default: '404'
    },
    repoUrl: {
        type: String,
        default: 'https://github.com/LeonStagliano'
    },
    deployUrl: {
        type: String,
        default: 'https://github.com/LeonStagliano'
    },
});

// Definición de Eventos que emite la card al pulsar los botones por defecto
defineEmits(['click-details', 'click-icon1', 'click-icon2']);
</script>

<style scoped>
/* Contenedor principal de la Card */
.project__card {
    width: 100%;
    /* max-width: 350px; */
    /* aspect-ratio: 4/5; */
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    /* border-radius: 12px; */
    overflow: hidden;
    box-shadow: 0 4px 15px var(--border);
    display: flex;
    flex-direction: column;
}

.project__card:hover{
    transition: border-color .4s ease-in-out, box-shadow .4s ease-in-out;
    border-color: var(--main-color);
    box-shadow: 0 4px 15px var(--main-color);
}

/* 1. Cabecera con imagen y título absoluto encima */
.card-header {
    position: relative;
    width: 100%;
    min-height: 250px;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Capa oscura gradual para que el título blanco siempre se lea bien */
.card-title-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 24px 16px 12px 16px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
}

.card-title-overlay h3 {
    margin: 0;
    /* color: #ffffff; */
    /* font-size: 1.25rem; */
    /* font-weight: 600; */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--text-primary);
    /* margin-bottom: var(--space-sm); */
    /* text-transform: uppercase; */
}

/* Cuerpo de la Card */
.card-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
}

/* 2. Lista horizontal de Badges */
.card-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.badge {
    padding: 4px 8px;
    border-radius: 4px;
    font-family: var(--font-hud);
    font-size: 0.75rem;
    font-weight: bold;
    color: #fff;
    background-color: #6c757d;
    /* Color gris base */
}

/* Estilos de colores opcionales por defecto para las tecnologías */
.badge.html {
    background-color: #e34c26;
}

.badge.css {
    background-color: #264de4;
}

.badge.js {
    background-color: #f7df1e;
    color: #333;
}

.badge.vue {
    background-color: #41b883;
}

/* 3. Párrafo descriptivo */
.card-text p {
    margin: var(--space-xs) 0;
    font-family: var(--font-hud);
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.4;
}

/* 4. Esquina inferior izquierda para los botones */
.card-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    margin-top: auto;
    /* Empuja los botones al fondo si la card crece */
}

/* Estilos de los Botones */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    /* border-radius: 6px; */
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
}

.btn:active {
    transform: scale(0.97);
}

.btn-primary {
    /* background-color: var(--main-color); */
    color: var(--main-color);
    padding: 8px 14px;
    font-family: var(--font-hud);
    text-transform: uppercase;
    letter-spacing: 0.01em;
    font-size: .9rem;
    font-weight: 500;
}

.btn-primary:hover {
    transition: color .5s ease-in-out, background-color .5s ease-in-out;
    color: var(--text-primary);
    background-color: var(--main-color);
}

.btn-icon {
    background-color: none;
    color: var(--text-primary);
    width: 34px;
    height: 34px;
    padding: 0;
}

.btn-icon:hover {
    /* background-color: #e5e7eb; */
    color: var(--main-color);
}
</style>
