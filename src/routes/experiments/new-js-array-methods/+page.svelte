<script>
	import { onMount } from "svelte";
    import ExperimentHeader from "$lib/components/ExperimentHeader.svelte";

    onMount(() => {
        findLast();
        findLastIndex();
        toSorted();
        toReversed();
        toSpliced();
        with_method();
    });

    const findLast = () => {
        const array = [1, 2, 3, 4, 5];
        const last = array.findLast((item) => item > 2 && item < 5); // 4
        console.log('------------------------------');
        console.log('findLast');
        console.log('array: ', array);
        console.log('output: ', last);
    }

    const findLastIndex = () => {
        const array = [1, 2, 3, 4, 5];
        const lastIndex = array.findLastIndex((item) => item > 2 && item < 5); // 3
        console.log('------------------------------');
        console.log('findLastIndex');
        console.log('array: ', array);
        console.log('output: ', lastIndex);
    }

    const toSorted = () => {
        const array = [2, 1, 4, 3, 5];
        const sorted = array.toSorted((a, b) => a - b); // [1, 2, 3, 4, 5]
        console.log('------------------------------');
        console.log('toSorted');
        console.log('orig array: ', array);
        console.log('output: ', sorted);
    }

    const toReversed = () => {
        const array = [1, 2, 3, 4, 5];
        const reversed = array.toReversed(); // [5, 4, 3, 2, 1]
        console.log('------------------------------');
        console.log('toReversed');
        console.log('orig array: ', array);
        console.log('output: ', reversed);
    }

    const toSpliced = () => {
        const array = [1, 2, 3, 4, 5];
        const spliced = array.toSpliced(2, 2, 6, 7); // [1, 2, 6, 7, 5]
        console.log('------------------------------');
        console.log('toSpliced');
        console.log('orig array: ', array);
        console.log('output: ', spliced);
    }

    const with_method = () => {
        const array = [1, 2, 3, 4, 5];
        const with_output = array.with(2, 99); // [1, 2, 99, 4, 5]
        console.log('------------------------------');
        console.log('with');
        console.log('orig array: ', array);
        console.log('output: ', with_output);
    }
</script>

<ExperimentHeader>
    <svelte:fragment slot="right-group">
        <a href="https://github.com/iamthe-Wraith/wraithcode/blob/transformerjs/src/routes/(the-lab)/the-lab/experiments/paint-order/%2Bpage.svelte">
            View on Github
        </a>
    </svelte:fragment>
</ExperimentHeader>

<div class="container flex-center">
    <h1>New JS Array Methods</h1>

    <p class="flex-center">
        <span>Note:</span> These methods are not yet supported in all browsers...so you may need to use a polyfill.
    </p>

    <p class="flex-center">See the console for the output.</p>

    <section>
        <h2>findLast</h2>
        <p class="sub-heading">Find the last element in an array that matches a condition.</p>

        <p>
            The key difference between <span>findLast</span> and <span>find</span> is the direction of the search. <span>findLast</span>
            searches from the end of the array to the beginning, while <span>find</span> searches from the beginning to the end.
        </p>
    </section>

    <section>
        <h2>findLastIndex</h2>
        <p class="sub-heading">Find the index of the last element in an array that matches a condition.</p>

        <p>
            The key difference between <span>findLastIndex</span> and <span>findIndex</span> is the direction of the search. <span>findLastIndex</span>
            searches from the end of the array to the beginning, while <span>findIndex</span> searches from the beginning to the end.
        </p>
    </section>

    <section>
        <h2>toSorted</h2>
        <p class="sub-heading">Sort an array in place.</p>

        <p>
            The key difference between <span>toSorted</span> and <span>sort</span> is that <span>toSorted</span> returns a new array, while <span>sort</span>
            sorts and modifies the original array.
        </p>
    </section>

    <section>
        <h2>toReversed</h2>
        <p class="sub-heading">Reverse an array without changing the original array.</p>

        <p>
            The key difference between <span>toReversed</span> and <span>reverse</span> is that <span>toReversed</span> returns a new array, while <span>reverse</span>
            modifies the original array.
        </p>
    </section>

    <section>
        <h2>toSpliced</h2>
        <p class="sub-heading">Remove elements from an array and/or add new elements to an array.</p>

        <p>
            The key difference between <span>toSpliced</span> and <span>splice</span> is that <span>toSpliced</span> returns a new array, while <span>splice</span>
            modifies the original array.
        </p>
    </section>

    <section>
        <h2>with</h2>
        <p class="sub-heading">Add elements to an array.</p>

        <p>
            The key difference between <span>with</span> and <span>push</span> is that <span>with</span> returns a new array, while <span>push</span>
            modifies the original array.
        </p>
    </section>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        align-items: start;
        gap: 2rem;
        padding: 4rem 2rem;
    }

    h1 {
        font-size: 5rem;
        font-weight: 900;
        color: var(--neutral-400);
        line-height: 5rem;
    }

    section {
        border: 1px solid var(--neutral-400);
        padding: 2rem;

        & h2 {
            font-size: 2rem;
            font-weight: 900;
            color: var(--neutral-400);
            line-height: 2rem;
        }

        & .sub-heading {
            font-size: 1.25rem;
            color: var(--neutral-400);
            line-height: 1.5rem;
            text-align: center;
        }

        & p {
            margin-bottom: 1rem;

            & span {
                color: var(--primary-500);
            }
        }
    }
</style>