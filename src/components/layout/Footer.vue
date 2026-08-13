<template>
    <footer class="footer">
        <div class="container">
            <p class="footer__text">
                &copy; {{ new Date().getFullYear() }} León Stagliano. {{ $t('footer.rights') }}
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin: var(--space-lg) 0 0;
    padding: var(--space-lg) 0;
    background-color: var(--bg-secondary);
    text-align: center;
    box-shadow: 0 -0.1px 8px var(--main-color);
}

.footer__text {
    color: var(--text-muted);
    font-family: var(--font-hud);
    font-size: var(--text-sm);
    margin: 0;
}
</style>