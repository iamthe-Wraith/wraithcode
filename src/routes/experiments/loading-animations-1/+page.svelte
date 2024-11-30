<script lang="ts">
    import ExperimentHeader from "$lib/components/ExperimentHeader.svelte";
	import LoaderBar1 from "$lib/components/loaders/LoaderBar1.svelte";
	import TextInput from "$lib/components/Input.svelte";
	import Select from "$lib/components/Select.svelte";
	import type { Theme } from "../../../types/props";

    let size: string = "medium";
    let speed: number = 300;
    let theme: Theme = "alt2";
    let pattern: 'sequential' | 'random' = 'sequential';

    const handlePatternChange = (event: Event) => {
        pattern = (event.target as HTMLSelectElement).value as 'sequential' | 'random';
    }

    const handleSizeChange = (event: Event) => {
        size = (event.target as HTMLSelectElement).value;
    }

    const handleSpeedChange = (event: Event) => {
        speed = parseInt((event.target as HTMLInputElement).value);

        if (isNaN(speed)) {
            speed = 300;
        }
    }

    const handleThemeChange = (event: Event) => {
        theme = (event.target as HTMLSelectElement).value as Theme;
    }
</script>

<ExperimentHeader>
    <svelte:fragment slot="right-group">
        <a href="https://github.com/iamthe-Wraith/wraithcode/blob/transformerjs/src/routes/(the-lab)/the-lab/experiments/loading-animations-1/%2Bpage.svelte">
            View on Github
        </a>
    </svelte:fragment>
</ExperimentHeader>

<h1>Loading Animation</h1>

<div class="container">
    <div class="loaders">
        <div class="loader-group">
            <LoaderBar1
                id="loader-1"
                {size}
                {theme}
                {speed}
                {pattern}
            />
        </div>
    </div>

    <div class="controls">
        <Select
            id="size"
            name="size"
            label="Size"
            value={size}
            options={[
                { value: "small", label: "Small" },
                { value: "medium", label: "Medium" },
                { value: "large", label: "Large" },
            ]}
            on:change={handleSizeChange}
        />

        <Select
            id="theme"
            name="theme"
            label="Theme"
            value={theme}
            options={[
                { value: "primary", label: "Primary" },
                { value: "alt1", label: "Alt 1" },
                { value: "alt2", label: "Alt 2" },
                { value: "neutral", label: "Neutral" },
                { value: "success", label: "Success" },
                { value: "danger", label: "Danger" },
            ]}
            on:change={handleThemeChange}
        />

        <Select
            id="pattern"
            name="pattern"
            label="Pattern"
            value={pattern}
            options={[
                { value: "sequential", label: "Sequential" },
                { value: "random", label: "Random" },
            ]}
            on:change={handlePatternChange}
        />

        <TextInput
            id="speed"
            name="speed"
            value={speed}
            label="Speed"
            text="Enter the speed of the loader animation in milliseconds."
            type="number"
            on:change={handleSpeedChange}
        />
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        height: 100%;
        margin: 0 auto;
        padding: 0.5rem;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 2fr;
        }
    }

    .controls {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        max-width: 30rem;
        margin: 0 auto;
    }

    .loaders {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        height: 100%;
        padding: 2rem 0;

        @media (min-width: 768px) {
            padding: 0;
        }
    }

    .loader-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 30rem;
        height: 100%;
        margin: 0 auto;
    }
</style>