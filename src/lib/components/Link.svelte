<script lang="ts">
    export let href: string;
    export let type: 'primary' | 'accent1' | 'accent2' | 'neutral' | 'light' | 'danger' = 'primary';
    export let inline: boolean = false;
</script>

<a {href} {...$$restProps} class={`${$$restProps.class ?? ''} ${type} ${inline ? 'inline' : ''}`}>
    <slot></slot>
</a>

<style>
    a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 400;
        border-radius: 0.25rem;
        text-decoration: none;

        &.inline {
            display: inline;
        }

        &.primary,
        &.primary * {
            color: var(--primary-500);

            &:hover {
                color: var(--primary-700);
            }
        }

        &.accent1,
        &.accent1 * {
            color: var(--flower1-500);

            &:hover {
                color: var(--flower1-700);
            }
        }

        &.accent2,
        &.accent2 * {
            color: var(--flower2-500);

            &:hover {
                color: var(--flower2-700);
            }
        }

        &.neutral,
        &.neutral * {
            color: var(--neutral-500);

            &:hover {
                color: var(--neutral-700);
            }
        }

        &.light,
        &.light * {
            color: var(--neutral-900);

            &:hover {
                color: var(--neutral-550);
            }
        }

        &.danger,
        &.danger * {
            color: var(--danger-500);

            &:hover {
                color: var(--danger-700);
            }
        }

        &:hover {
            text-decoration: underline;
        }
    }
</style>