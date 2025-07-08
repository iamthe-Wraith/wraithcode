<script lang="ts">
    import './global.css';
</script>

<svelte:head>
    <title>Wraithcode</title>
</svelte:head>

<div class="app">
    <header>
        <div>
            <a href="/" class="logo">
                <i class="fa-regular fa-ghost"></i>
            </a>
        </div>
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
        background: var(--neutral-100);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--neutral-300);
        background: var(--neutral-150);
    }

    .logo {
        display: flex;
        color: var(--primary-500);
        color: var(--neutral-900);

        & i {
            font-size: 2.25rem;
        }
    }

    main {
        width: 100%;
    }
</style>