<script lang="ts">
    import './global.css';
</script>

<svelte:head>
    <title>Wraithcode</title>
</svelte:head>

<main class="app">
    <slot></slot>
</main>

<style>
    .app {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background: var(--neutral-100);
    }
</style>