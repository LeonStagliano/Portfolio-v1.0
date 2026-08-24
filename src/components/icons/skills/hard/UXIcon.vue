<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
        <g fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round">
            <!-- Monitor frame -->
            <rect x="80" y="72" width="352" height="264" rx="20" ry="20" />
            <!-- Screen inner area -->
            <rect x="104" y="96" width="304" height="216" rx="8" ry="8" stroke-width="16" opacity="0.15" />
            <!-- Stand neck -->
            <rect x="220" y="336" width="72" height="48" rx="8" ry="8" fill="currentColor" stroke="none"
                opacity="0.5" />
            <!-- Stand base -->
            <rect x="176" y="384" width="160" height="24" rx="12" ry="12" fill="currentColor" stroke="none"
                opacity="0.6" />

            <!-- UI layout inside screen -->
            <!-- Header block -->
            <rect x="136" y="128" width="240" height="40" rx="8" ry="8" fill="currentColor" stroke="none"
                opacity="0.5" />
            <!-- Hero card -->
            <rect x="136" y="184" width="144" height="96" rx="12" ry="12" fill="currentColor" stroke="none"
                opacity="0.2" />
            <!-- Side content blocks -->
            <rect x="296" y="184" width="80" height="28" rx="6" ry="6" fill="currentColor" stroke="none"
                opacity="0.35" />
            <rect x="296" y="228" width="80" height="28" rx="6" ry="6" fill="currentColor" stroke="none"
                opacity="0.25" />
            <!-- Primary button -->
            <rect x="136" y="296" width="112" height="32" rx="10" ry="10" fill="currentColor" stroke="none"
                opacity="0.75" />

            <!-- Cursor / pointer touching the button -->
            <polygon points="288,280 288,392 320,360 352,408 376,396 352,348 392,336" fill="currentColor" stroke="#000000" stroke-width="8" stroke-opacity="0.5"
                opacity="1" />
        </g>
    </svg>

</template>

<script setup>
defineProps({
    size: {
        type: [Number, String],
        default: 24
    },
    isDark: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
svg {
    padding: 4px;
}
</style>