<script lang="ts">
	import { onMount } from "svelte";

    let details: HTMLDetailsElement;

    onMount(() => {
        details.addEventListener("toggle", () => {
            details.open ? details.setAttribute("open", "") : details.removeAttribute("open");
        });
    });
</script>

<div class="container">
    <details bind:this={details}>
        <summary>
            <span class="read-more">
                Read More
            </span>

            <span class="read-less">
                Read Less
            </span>
        </summary>
        
        Did you know that HTML includes a <code>&lt;details&gt;</code> element that can be used to create an interactive accordion menu?!
        The <code>&lt;details&gt;</code> element represents a disclosure widget from which the user can obtain additional information or
        controls. By default, the widget is closed. When the widget is open, the user can interact with the contents of the
        <code>&lt;details&gt;</code> element.
    </details>
</div>

<style>
    .container {
        width: 100%;
        max-width: 30rem;
        margin: 2rem auto 0;
        padding: 1rem;
    }

    details {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        font-weight: 400;
        cursor: pointer;

        &[open] {
            & .read-more {
                display: none;
            }

            & .read-less {
                display: inline;
            }
        }

        & .read-more {
            display: inline;
        }

        & .read-less {
            display: none;
        }
    }

    summary {
        color: var(--primary-500);

        & span {
            padding-left: 0.5rem;
            color: var(--primary-500);
        }
    }

    code {
        color: var(--primary-500);
    }
</style>