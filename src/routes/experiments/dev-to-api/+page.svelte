<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
    import { assets as assetsPath } from '$app/paths';
	import type { IBlogPost } from "$lib/services/blog";
	import ExperimentHeader from "$lib/components/ExperimentHeader.svelte";

    export let data: PageData;
    
    let featuredArticles: IBlogPost[] = [];

    onMount(() => {
        fetchFeaturedArticles();
    })

    /**
     * Fetches the 5 most recent featured articles from the DEV API
     * 
     * ℹ️ This is an open endpoint, meaning it does not require an API key.
     * And since dev.to only disables CORS for authenticated endpoints, we
     * are able to make this request from the browser.
     */
    const fetchFeaturedArticles = async () => {
        const res = await fetch('https://dev.to/api/articles?per_page=5');

        featuredArticles = await res.json();
    }
</script>

<ExperimentHeader>
    <svelte:fragment slot="right-group">
        <a href="https://github.com/iamthe-Wraith/wraithcode/blob/transformerjs/src/routes/(the-lab)/the-lab/experiments/dev-to-api/%2Bpage.svelte">
            View on Github
        </a>
    </svelte:fragment>
</ExperimentHeader>

<div class="experiment-container">
    <h1>Let's Play with the DEV API</h1>

    <p>This is a little snippet used in one of my blog posts to illustrate how to work with the dev.to API.</p>

    <img
        src="{assetsPath}/images/dev-to-api-serverside-code.png"
        alt="Code snippet showing how to fetch articles from the dev.to API on the server side using Node.js"
    />

    <section>
        <h2>All Featured Articles From dev.to</h2>

        {#each featuredArticles as article}
            <div>
                <a href={article.url}>{article.title}</a>
            </div>
        {/each}
    </section>

    <img
        src="{assetsPath}/images/dev-to-api-clientside-code.png"
        alt="Code snippet showing how to fetch articles from the dev.to API on the client side using SvelteKit"
    />

    <section>
        <h2>My Personal Articles on dev.to</h2>

        {#each (data.articles || []) as article}
            <div>
                <a href={article.url}>{article.title}</a>
            </div>
        {/each}
    </section>
</div>

<style>
    .experiment-container {
        width: 80%;
        max-width: 50rem;
        margin: 2rem auto;

        & img {
            width: 100%;
            border-radius: 0.5rem;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
            margin: 2rem 0;
        }
    }

    section {
        margin: 2rem 0;
    }
</style>