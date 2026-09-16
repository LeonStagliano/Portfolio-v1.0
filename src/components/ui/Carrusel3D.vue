<template>
    <div class="banner" @wheel.prevent="onWheel" 
    @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="slider" ref="sliderEl" :style="{ '--quantity': steps.length, '--angle': angle + 'deg' }">
                <div v-for="(step, index) in steps" :key="index" class="item methodology__step"
                :class="{ 'is-front': index === frontIndex }"
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const steps = computed(() => Object.values(tm('methodology.steps')))

const angle = ref(0)
const sliderEl = ref(null)
const stepAngle = 360 / steps.value.length
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
}

const depthFor = (index) => {
    const offset = angle.value + index * stepAngle
    const normalized = ((offset % 360) + 360) % 360
    const distance = Math.min(normalized, 360 - normalized)
    if (distance <= stepAngle / 2) return 0
    return Math.pow(distance / 180, 1.5)
}

const frontIndex = computed(() => {
    let best = 0
    let bestDist = Infinity
    steps.value.forEach((_, index) => {
        const offset = angle.value + index * stepAngle
        const normalized = ((offset % 360) + 360) % 360
        const distance = Math.min(normalized, 360 - normalized)
        if (distance < bestDist) {
            bestDist = distance
            best = index
        }
    })
    return best
})

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
        sliderEl.value?.classList.remove('no-transition')
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
    overflow: hidden;
    container-type: inline-size;
    width: 100%;
    position: relative;
}

.banner .slider {
    position: relative;
    --cardW: clamp(150px, 42cqi, 200px);
    width: var(--cardW);
    height: clamp(240px, 67.2cqi, 280px);
    transform-style: preserve-3d;
    transform: perspective(1800px) rotateY(var(--angle, 0deg));
    transition: transform .1s ease-out;
}

.banner .slider .item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    min-height: clamp(187.5px, 52.5cqi, 250px);
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))  translateZ(clamp(160px, 44cqi, 210px));
    filter: blur(calc(var(--depth) * 6px))
        brightness(calc(1 - var(--depth) * 1));
    transition: filter .15s ease-out;
}

.banner .slider.no-transition {
    transition: none;
}

.methodology__step {
    display: flex;
}

.methodology__step-marker {
    flex-shrink: 0;
    padding: var(--space-xs);
    background-color: var(--bg-secondary);
    border: 1px solid var(--main-color);
    display: flex;
    align-items: start;
    justify-content: center;
    box-shadow: var(--glow-magenta);
    transition: all var(--transition-slow);
    clip-path: var(--clip-notch-bottom);
}

.methodology__step.is-front .methodology__step-marker {
    background-color: var(--main-color);
    box-shadow: 0 0 20px rgba(255, 42, 109, 0.8);
}

.methodology__step-number {
    font-family: var(--font-hud);
    font-size: clamp(1rem, 2vmin, 2rem);
    font-weight: 700;
    color: var(--main-color);
    transition: color var(--transition-fast);
}

.methodology__step.is-front .methodology__step-number {
    color: var(--cyber-panel);
}

.methodology__step-connector {
    flex-shrink: 0;
    width: 5px;
    height: 2px;
    background: var(--neon-magenta);
    margin-top: 29px;
    box-shadow: 0 0 10px rgba(255, 42, 109, 0.5);
    transform: skewX(-20deg);
}

.methodology__step-content {
    flex: 1;
    min-width: 0;
    background-color: var(--bg-secondary);
    border: .5px solid var(--main-color);
    padding: clamp(0.75rem, 1.5vmin, 1.5rem);
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

.methodology__step.is-front .methodology__step-content {
    box-shadow: var(--glow-magenta);
}

.methodology__step-title {
    font-family: var(--font-display);
    font-size: clamp(0.7rem, calc(var(--cardW) * 0.08), 1.3rem);

    color: var(--neon-magenta);
    margin-bottom: var(--space-xs);
    text-transform: uppercase;
}

.methodology__step-desc {
    font-family: var(--font-hud);
    font-size: clamp(0.7rem, 0.95vmin, 0.9rem);
    color: var(--text-secondary);
    line-height: 1.4;
    overflow-wrap:normal;
}
</style>