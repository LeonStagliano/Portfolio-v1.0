<template>
    <div class="banner" @wheel.prevent="onWheel" 
    @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="slider" ref="sliderEl" :style="{ '--quantity': steps.length, '--angle': angle + 'deg' }">
                <div v-for="(step, index) in steps" :key="index" class="item methodology__step" 
                :style="{'--position': index + 1, '--depth': depthFor(index)}">
                    <div class="methodology__step-marker">
                        <span class="methodology__step-number">{{ String(index + 1).padStart(2, '0') }}</span>
                    </div>
                    <div v-if="index < steps.length" class="methodology__step-connector"></div>
                    <div class="methodology__step-content">
                        <h3 class="methodology__step-title">{{ step.title }}</h3>
                        <p class="methodology__step-desc">{{ step.description }}</p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const steps = [
    {
        title: 'Discovery',
        description: 'Investigación y análisis de requisitos para entender las necesidades del proyecto.'
    },
    {
        title: 'Diseño',
        description: 'Creación de wireframes, prototipos y definición del sistema de diseño.'
    },
    {
        title: 'Desarrollo',
        description: 'Implementación con tecnologías modernas y buenas prácticas de código.'
    },
    {
        title: 'Testing',
        description: 'Pruebas de funcionalidad, accesibilidad y rendimiento.'
    },
    {
        title: 'Deploy',
        description: 'Publicación y monitoreo del proyecto en producción.'
    }
]

const angle = ref(0)
const sliderEl = ref(null)
const stepAngle = 360 / steps.length
const SENSITIVITY = 0.3
const FLING_THRESHOLD = 0.05
const FLING_STOP = 0.01
const FRICTION = 0.97

let touchLastX = 0
let touchLastTime = 0
let velocity = 0
let rafId = null
let isFlinging = false

const onWheel = (e) => {
    const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX
    const step = 10
    angle.value += delta > 0 ? -step : step
    // angle.value = ((angle.value % 360) + 360) % 360
}

const depthFor = (index) => {
    const offset = angle.value + index * stepAngle
    const normalized = ((offset % 360) + 360) % 360
    const distance = Math.min(normalized, 360 - normalized)
    return Math.round(distance / 180)
}

const onTouchStart = (e) => {
    stopFling()
    touchLastX = e.touches[0].clientX
    touchLastTime = performance.now()
    velocity = 0
}

const onTouchMove = (e) => {
    const NOW = performance.now()
    const X = e.touches[0].clientX
    const DX = X - touchLastX
    const DT = NOW - touchLastTime
    touchLastX = X
    touchLastTime = NOW
    angle.value += DX * SENSITIVITY
    if (DT > 0) {
        const instant = (DX * SENSITIVITY) / DT
        velocity = velocity * 0.6 + instant * 0.4
    }
}

const onTouchEnd = () => {
    touchLastX = 0
    if (Math.abs(velocity) > FLING_THRESHOLD) fling()
}

const fling = () => {
    isFlinging = true
    sliderEl.value?.classList.add('no-transition')
    let last = performance.now()
    const step = (now) => {
        const DT = Math.min(now - last, 50)
        last = now
        velocity *= Math.pow(FRICTION, DT / 16.67)
        angle.value += velocity * DT
        if (Math.abs(velocity) < FLING_STOP) stopFling()
        else rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
}

const stopFling = () => {
    if (rafId) cancelAnimationFrame(rafId)
    rafId = null
    if (isFlinging) {
        sliderEl.value?.classList.remove('no-transiton')
        isFlinging = false
    }
}
</script>

<style scoped>
.banner {
    display: flex;
    justify-content: center;
    padding: var(--space-lg);
    touch-action: pan-y;


    /* width: 100%; */
    /*height: 100dvh;*/ /* 100dvh */
    /* text-align: center; */
    /* position: relative; */
    /* overflow: hidden; */
}

.banner .slider {
    /* position: absolute; */
    width: 280px;
    height: 280px;
    /* top: 10%; */
    /* left: calc(50% - 100px); */

    /* top: 50%; */
    /* left: 50%; */
    /* margin-top: -140px; */
    /* margin-left: -140px; */

    transform-style: preserve-3d;
    transform: perspective(1600px) rotateY(var(--angle, 0deg));
    transition: transform .1s ease-out;


}

.banner .slider .item {
    position: absolute;
    inset: 0 0 0 0;
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))  translateZ(clamp(150px, 22vmin, 300px));

    filter: blur(calc(var(--depth) * 6px))
        brightness(calc(1 - var(--depth) * 0.55));
    transition: filter .5s ease-out;
}

.banner .slider.no-transition {
    transition: none;
}

.methodology__step {
    display: flex;
    /* align-items: flex-start; */
    /* gap: 0; */
    /* flex-shrink: 0; */
    /* max-width: 15%; */
    /* flex: 1 1 30%; */
    /* max-width: 30%; */
    /* min-width: 0; */
    /* scroll-snap-align: start; */
    /* margin: var(--space-sm); */
}

.methodology__step-marker {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background-color: var(--cyber-panel);
    border: 1px solid var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--glow-magenta);
    transition: all var(--transition-fast);
    clip-path: var(--clip-angular);
}

.methodology__step:hover .methodology__step-marker {
    background-color: var(--main-color);
    box-shadow: 0 0 20px rgba(255, 42, 109, 0.8);
}

.methodology__step-number {
    font-family: var(--font-hud);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--neon-magenta);
    transition: color var(--transition-fast);
}

.methodology__step:hover .methodology__step-number {
    color: var(--cyber-black);
}

.methodology__step-connector {
    flex-shrink: 0;
    width: 40px;
    height: 2px;
    background: var(--neon-magenta);
    margin-top: 29px;
    box-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
    transform: skewX(-20deg);
}

.methodology__step-content {
    flex: 1;
    background-color: var(--cyber-panel);
    border: .5px solid var(--main-color);
    padding: var(--space-lg);
    transition: box-shadow var(--transition-fast);
    position: relative;
}

.methodology__step-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--neon-magenta);
}

.methodology__step:hover .methodology__step-content {
    box-shadow: var(--glow-magenta);
}

.methodology__step-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--neon-magenta);
    margin-bottom: var(--space-sm);
    text-transform: uppercase;
}

.methodology__step-desc {
    font-family: var(--font-hud);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.4;
}
</style>