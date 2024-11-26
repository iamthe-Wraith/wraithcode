<script lang="ts">
    type ButtonKind = 'primary' | 
        'primary-transparent' | 
        'alt1' | 
        'alt1-transparent' | 
        'alt2' | 
        'alt2-transparent' |
        'neutral' |
        'danger' |
        'danger-transparent' |
        'transparent';

    export let href: string;
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let kind: ButtonKind = 'primary';
    export let size: 'small' | 'medium' | 'large' = 'medium';
    export let processing: boolean = false;
    export let nowrap: boolean = false;
</script>

<a
    {...$$restProps}
    href={ href }
    {type}
    class={`${kind} ${size}`}
    class:processing={processing}
    class:nowrap={nowrap}
>
    <span>
        <slot></slot>
    </span>
</a>

<style>
    a {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 400;
        text-decoration: none;

        &.inline {
            display: inline;
        }

        &.small {
            padding: 0.15rem 0.35rem;
            font-size: 0.7rem;
        }

        &.medium {
            padding: 0.25rem 0.55rem;
            font-size: 0.875rem;
        }

        &.large {
            padding: 0.5rem 1rem;
            font-size: 1.15rem;
        }

        &.primary {
            background: linear-gradient(to left, var(--primary-100), var(--primary-100));
            border: 1px solid var(--primary-500);

            &:hover,
            &:focus-visible {
                border: 1px solid var(--primary-700);

                &:before {
                    background: linear-gradient(to left, var(--primary-300), transparent);
                    opacity: 1;
                }
            }

            & span * {
                color: var(--primary-500);
            }
        }

        &.primary-transparent {
            padding: 0.25rem 0.5rem;
            background-color: transparent;
            border: none;

            &:hover,
            &:focus-visible {
                color: var(--primary-700);
            }

            &:hover {
                text-decoration: underline;
            }

            & * {
                color: var(--primary-500);
            }
        }

        &.alt1 {
            background: linear-gradient(to left, var(--alt1-100), var(--alt1-100));
            border: 1px solid var(--alt1-500);
            color: var(--neutral-900);

            &:hover,
            &:focus-visible {
                border: 1px solid var(--alt1-700);

                &:before {
                    background: linear-gradient(to left, var(--alt1-300), transparent);
                    opacity: 1;
                }
            }

            & span * {
                color: var(--alt1-500);
            }
        }

        &.alt1-transparent {
            padding: 0.25rem 0.5rem;
            background-color: transparent;
            border: none;
            color: var(--alt1-500);

            &:hover,
            &:focus-visible {
                color: var(--alt1-700);
            }

            &:hover {
                text-decoration: underline;
            }

            & * {
                color: var(--alt1-500);
            }
        }

        &.alt2 {
            background: linear-gradient(to left, var(--alt2-100), var(--alt2-100));
            border: 1px solid var(--alt2-500);
            color: var(--neutral-900);

            &:hover,
            &:focus-visible {
                border: 1px solid var(--alt2-700);

                &:before {
                    background: linear-gradient(to left, var(--alt2-300), transparent);
                    opacity: 1;
                }
            }

            & span * {
                color: var(--alt2-500);
            }
        }

        &.alt2-transparent {
            padding: 0.25rem 0.5rem;
            background-color: transparent;
            border: none;
            color: var(--alt2-500);

            &:hover,
            &:focus-visible {
                color: var(--alt2-700);
            }

            &:hover {
                text-decoration: underline;
            }

            & * {
                color: var(--alt2-500);
            }
        }

        &.neutral {
            background: linear-gradient(to left, var(--neutral-150), var(--neutral-150));
            border: 1px solid var(--neutral-300);
            color: var(--neutral-900);

            &:hover,
            &:focus-visible {
                border: 1px solid var(--neutral-350);

                &:before {
                    background: linear-gradient(to left, var(--neutral-300), transparent);
                    opacity: 1;
                }
            }

            & span * {
                color: var(--neutral-500);
            }
        }

        &.danger {
            background: linear-gradient(to left, var(--danger-100), var(--danger-100));
            border: 1px solid var(--danger-500);
            color: var(--neutral-900);

            &:hover,
            &:focus-visible {
                border: 1px solid var(--danger-700);

                &:before {
                    background: linear-gradient(to left, var(--danger-300), transparent);
                    opacity: 1;
                }
            }

            & span * {
                color: var(--danger-500);
            }
        }

        &.danger-transparent {
            padding: 0.25rem 0.5rem;
            background-color: transparent;
            border: none;
            color: var(--danger-500);

            &:hover,
            &:focus-visible {
                color: var(--danger-700);
                text-decoration: underline;
            }

            &:hover {
                text-decoration: underline;
            }

            & * {
                color: var(--danger-500);
            }
        }

        &.transparent {
            padding: 0.25rem 0.5rem;
            background-color: transparent;
            border: none;

            &:hover {
                text-decoration: underline;
            }
        }

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to left, transparent, transparent);
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            z-index: 0;
        }

        & span {
            color: var(--neutral-900);
            z-index: 1;
        }
    }
</style>