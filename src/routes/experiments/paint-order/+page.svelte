<script>
    import ExperimentHeader from "$lib/components/ExperimentHeader.svelte";
</script>

<ExperimentHeader>
    <svelte:fragment slot="right-group">
        <a href="https://github.com/iamthe-Wraith/wraithcode/blob/transformerjs/src/routes/(the-lab)/the-lab/experiments/paint-order/%2Bpage.svelte">
            View on Github
        </a>
    </svelte:fragment>
</ExperimentHeader>

<div class="container flex-center">
    <h1>Paint Order</h1>

    <div class="explanation">
        <p>
            We can use the <span>paint-order</span> CSS property to change the order in which the browser paints text onto the page.
        </p>
        
        <p>
            By default, the browser will draw text in the following order: <em>fill</em>, <em>stroke</em>, <em>markers</em>.
        </p>
    </div>

    <div class="examples-container">
        <div class="example-container">
            <h1 class="e1">Wraithcode</h1>
    
            <code>paint-order: normal;</code>

            <p>
                Uses the default paint order: <em>fill</em>, <em>stroke</em>, <em>markers</em>.
            </p>
        </div>
    
        <div class="example-container">
            <h1 class="e2">Wraithcode</h1>
    
            <code>paint-order: stroke fill;</code>

            <p>
                Changes the paint order so the stroke is drawn first, then the fill.
            </p>
        </div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        align-items: start;
        gap: 2rem;
        padding: 4rem 2rem;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
        }
    }

    .examples-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }

    .example-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    h1 {
        font-size: 5rem;
        font-weight: 900;
        color: var(--neutral-400);
        line-height: 5rem;
    }

    .e1 {
        paint-order: normal;
        -webkit-text-stroke: 3px var(--alt2-500);
    }

    .e2 {
        paint-order: stroke fill;
        -webkit-text-stroke: 3px var(--alt2-500);
    }

    code {
        text-align: center;
    }

    .explanation {
        & p {
            margin-bottom: 1rem;
        }

        & span {
            color: var(--primary-500);
        }
    }
</style>
