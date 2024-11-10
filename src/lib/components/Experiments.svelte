<script lang="ts">
	import { onMount } from 'svelte';
	import type { IExperiment } from '../../types/experiments';
	import dayjs from 'dayjs';
	import Metadata from './Metadata.svelte';

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
						<a href={ url } target="_blank">
							<i class={ icon }></i>
							{ text }
						</a>
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

		&:has(a:hover),
		&:has(a:focus-visible) {
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

			& a {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 0.5rem;
				border: 1px solid var(--accent1-500);
				background-color: var(--accent1-100);
				padding: 0.25rem 0.5rem;
				color: var(--neutral-900);
				text-transform: capitalize;
				text-decoration: none;
				white-space: nowrap;

				&:hover,
				&:focus-visible {
					border: 1px solid var(--accent2-600);
					background-color: var(--accent2-200);
				}
			}
		}
	}
</style>
