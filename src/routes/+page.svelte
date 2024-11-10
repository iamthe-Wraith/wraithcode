<script>
	import Experiments from "$lib/components/Experiments.svelte";
</script>

<section class="intro">
	<h1>Welcome to Wraithcode</h1>
	<p class="sub-header">My code laboratory where things are learned, tech is tinkered with, and projects come to life!</p>
</section>

<section>
	<header>
		<h2>Experiments</h2>
		<p class="sub-header">A collection of small experiments built to learn new things or test out new ideas.</p>
	</header>

	<Experiments />
</section>

<style>
	section {
		width: 100%;
		max-width: 75rem;
		margin: 0 auto;
		padding: 3rem 1rem;

		& > header {
			margin-bottom: 2rem;
		}
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: unset;
		padding: 6rem 2rem;
		border-bottom: 1px solid var(--primary-100);
		background: linear-gradient(0deg, var(--neutral-150), var(--neutral-100));
	}
</style>
