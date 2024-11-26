<script lang="ts">
	import { onMount } from 'svelte';
	import type { IExperiment } from '../../types/experiments';
	import dayjs from 'dayjs';
	import Metadata from './Metadata.svelte';
	import Link from './Link.svelte';

	let experiments: IExperiment[] = [];

    onMount(() => {
		loadExperiments();
    });

	const loadExperiments = async () => {
		try {
			const response: Response = await fetch('/api/experiments');

			if (response.ok) {
				const data = await response.json();
				experiments = data.experiments;
			} else {
				console.error('Failed to fetch experiments');
			}
		} catch (err) {
			console.error(err);
		}
	};
</script>

<div class="experiments">
	{#each experiments as { name, description, route, links, createdAt }}
		<article class="experiment">
			<a href={ route }>
				<Metadata>
					{ dayjs(createdAt).format('MMM D, YYYY') }
				</Metadata>
	
				<div class="name h2">
					{ name }
				</div>
	
				{#if description}
					<p class="description">
						{ description }
					</p>
				{/if}
			</a>

			{#if links?.length}
				<div class="links">
					{#each links as { text, url, icon }}
						<Link
							href={ url }
							target="_blank"
							kind="neutral"
						>
							<i class={ icon }></i>
							{ text }
						</Link>
					{/each}
				</div>
			{/if}
		</article>
	{/each}
</div>

<style>
	.experiments {
		container-name: experiments;
		container-type: inline-size;
	}

	.experiment {
		padding: 1rem;
		border: 1px solid var(--neutral-300);
		background-color: var(--neutral-150);

		&:has(> a:hover),
		&:has(> a:focus-visible) {
			border-color: var(--primary-300);
		}

		&:not(:last-child) {
			margin-bottom: 1rem;
		}

		& > a {
			display: block;
			text-decoration: none;

			&:hover,
			&:focus-visible {
				cursor: pointer;
			}
		}

		& .metadata {
			font-size: 0.875rem;
			color: var(--neutral-500);
		}

		& .name {
			margin-bottom: 0.5rem;
			text-align: left;
		}

		& .description {
			margin: 0 auto;
		}

		& .links {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			flex-wrap: wrap;
			gap: 0.5rem;
			padding-top: 1.5rem;
		}
	}
</style>
