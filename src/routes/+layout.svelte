<script lang="ts">
    import './global.css';
</script>

<svelte:head>
    <title>Wraithcode</title>
</svelte:head>

<div class="app">
    <header>
        <a href="/" class="logo">
            <i class="fa-regular fa-ghost"></i>
        </a>
    </header>

    <main>
        <slot></slot>
    </main>
</div>

<style>
    .app {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background: linear-gradient(180deg, var(--neutral-100), var(--accent2-100));
    }

    header {
        padding: 0.75rem 1rem;
        background: var(--neutral-100);
    }

    .logo {
        display: flex;
        color: var(--primary-500);
        color: var(--neutral-900);

        & i {
            font-size: 2.25rem;
        }
    }
</style>