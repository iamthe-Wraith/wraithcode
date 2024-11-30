<script lang="ts">
	import { onMount } from "svelte";
	import type { Size, Theme } from "../../../types/props";
	import { browser } from "$app/environment";

    type LoaderSize = Omit<Size, 'x-small' | 'x-large'>;
    type BlockType = 'empty' | 'filled' | 'filled-half' | 'empty-half';

    interface IBlock {
        type: BlockType;
        threshold: number;
    }
    
    export let id: string;
    export let size: LoaderSize = 'medium';
    export let speed: number = 300;
    export let theme: Theme = 'primary';
    export let pattern: 'sequential' | 'random' = 'sequential';

    const sizes: { name: LoaderSize; value: string }[] = [
        { name: 'small', value: '8px' },
        { name: 'medium', value: '16px' },
        { name: 'large', value: '24px' }
    ];

    const blockTypes: IBlock[] = [
        {
            type: 'empty',
            threshold: 0.4,
        },
        {
            type: 'filled',
            threshold: 0.7,
        },
        {
            type: 'filled-half',
            threshold: 0.85,
        },
        {
            type: 'empty-half',
            threshold: 0.92,
        }
    ]

    let timer: number;
    let numBlocks: number;
    let blocks: BlockType[] = [];
    let activeBlock: number = 0;
    let blockSize: string;

    $: if (size || speed || theme || pattern) {
        init();
        animate();
    }

    $: if (numBlocks) {
        blocks = [];
        while (blocks.length < numBlocks) {
            const rand = Math.random();
            const blockType = blockTypes.find(block => block.threshold > rand)?.type;
            
            if (blockType) {
                blocks.push(blockType);
            }
        }
    }

    onMount(() => {
        init();
        animate();
    })

    const animate = () => {
        if (!browser) return;

        clearInterval(timer);

        timer = window.setInterval(() => {
            if (pattern === 'sequential') {
                activeBlock += 1;

                if (activeBlock >= numBlocks) {
                    activeBlock = 0;
                }
            }

            if (pattern === 'random') {
                activeBlock = Math.floor(Math.random() * numBlocks);
            }
        }, speed);
    }

    const init = () => {
        if (!browser) return;

        blockSize = sizes.find(s => s.name === size)?.value ?? sizes.find(s => s.name === 'medium')!.value;

        const loader = document.getElementById(id);

        if (loader && size) {
            const rect = loader.getBoundingClientRect();
            numBlocks = Math.floor(rect.width / (parseInt(blockSize) + 2));
        }
    }
</script>

<div
    {id}
    class="loader"
    style="--loader-size: {blockSize}">
    {#each blocks as block, i}
        <div
            class="loader-block {block} {theme}"
            class:active={i === activeBlock}
        >
            <!-- left empty on purpose -->
        </div>
    {/each}
</div>

<style>
    .loader {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        gap: 2px;
        width: 100%;
    }

    .loader-block {
        --loader-color: var(--primary-500);

        position: relative;
        flex-grow: 0;
        flex-shrink: 0;
        width: var(--loader-size);
        height: var(--loader-size);
        border: 1px solid var(--loader-color);

        &.primary {
            --loader-color: var(--primary-500);
        }

        &.alt1 {
            --loader-color: var(--alt1-500);
        }

        &.alt2 {
            --loader-color: var(--alt2-500);
        }

        &.neutral {
            --loader-color: var(--neutral-400);
        }

        &.danger {
            --loader-color: var(--danger-500);
        }

        &.success {
            --loader-color: var(--success-500);
        }

        &.active {
            border-color: var(--neutral-900);

            &.filled {
                background-color: var(--neutral-900);
            }

            &.filled-half {
                &::after {
                    background-color: var(--neutral-900);
                }
            }

            &.empty-half {
                &::after {
                    border-color: var(--neutral-900);
                }
            }
        }

        &.empty {
            background-color: transparent;
        }

        &.filled {
            background-color: var(--loader-color);
        } 

        &.filled-half {
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 50%;
                height: 50%;
                background-color: var(--loader-color);
                transform: translate(-50%, -50%);
            }
        }

        &.empty-half {
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 50%;
                height: 50%;
                border: 1px solid var(--loader-color);
                transform: translate(-50%, -50%);
            }
        }
    }
</style>