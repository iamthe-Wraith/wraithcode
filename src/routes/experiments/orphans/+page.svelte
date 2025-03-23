<script lang="ts">
	import Input from "$lib/components/Input.svelte";

    let columns = 4;
    let orphans = 2;
</script>

<div class="container">
    <div class="controls">
        <div class="control">
            <Input
                id="columns"
                name="columns"
                bind:value={columns}
                label="Columns"
            />
        </div>
    
        <div class="control">
            <Input
                id="orphans"
                name="orphans"
                bind:value={orphans}
                label="Orphans"
            />
        </div>
    </div>
    
    <div class="content" style="columns: {columns ?? 2}; orphans: {orphans ?? 2};">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
</div>

<style>
    .container {
        padding: 1rem;
    }

    .controls {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    .control {
        max-width: 10rem;
    }

    .content {
        height: 300px;
        margin-top: 2rem;
        padding: 2rem;
        border: 1px solid var(--neutral-300);
    }
</style>