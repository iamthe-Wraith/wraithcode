<script lang="ts">
	import { onMount } from "svelte";

    export let id: string;
    export let name: string;
    export let value = '';
    export let label = '';
    export let text = '';
    export let error = '';
    export let type: HTMLInputElement['type'] = 'text';
    export let required = false;
    export let theme: 'neutral' | 'light' = 'neutral';

    let ref: HTMLInputElement;

	function typeAction(node: HTMLInputElement) {
		node.type = type || 'text';
	}
</script>

<div class="input-container">
    {#if label}
        <label for={id}>
            {label}
            {#if !required}
                <span>- Optional</span>
            {/if}
        </label>
    {/if}

    <input
        {id}
        {required}
        {name}
        class="{theme} {error ? 'error' : ''}"
        bind:this={ref}
        bind:value
        use:typeAction
        {...$$restProps}
        on:change
        on:click
        on:focus
        on:blur
        on:keydown
        on:keypress
        on:keyup
    />
    
    {#if text && !error}
        <p class="input-text" data-testid={`${id}-text`}>{text}</p>
    {/if}

    {#if error}
        <p class="error" data-testid={`${id}-error`}>{error}</p>
    {/if}
</div>

<style>
    .input-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        padding: var(--outline-offset);
    }

    label {
        font-weight: 500;

        & span {
            color: var(--neutral-900);
        }
    }

    p {
        margin: 0;

        &.input-text {
            color: var(--neutral-900);
            font-size: 0.8rem;
            line-height: 1rem;
            text-align: left;
        }
    }

    input {
        width: 100%;
        padding: 0.3rem;
        border-radius: 0.25rem;
        color: var(--neutral-900);
        background-color: var(--neutral-100);

        &::placeholder {
            color: var(--neutral-400) !important;
        }
        
        &.neutral {
            border: 1px solid var(--neutral-300);
        }

        &.light {
            border: 1px solid var(--neutral-800);
        }

        &:disabled {
            border: 1px solid var(--neutral-200);
            color: var(--neutral-450);
        }

        &.error {
            border-color: var(--danger-500);
        }
    }
</style>