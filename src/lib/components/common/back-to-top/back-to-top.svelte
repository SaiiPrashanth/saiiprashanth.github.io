<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	
	let showButton = $state(false);
	
	// Only show on main pages, not detail pages
	const isMainPage = $derived(
		$page.url.pathname === `${base}/` || 
		$page.url.pathname === base || 
		$page.url.pathname === `${base}/skills` || 
		$page.url.pathname === `${base}/projects` || 
		$page.url.pathname === `${base}/experience` || 
		$page.url.pathname === `${base}/education` || 
		$page.url.pathname === `${base}/gallery` || 
		$page.url.pathname === `${base}/resume` || 
		$page.url.pathname === `${base}/search`
	);
	
	const handleScroll = () => {
		showButton = window.scrollY > 300;
	};
	
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	
	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if showButton && isMainPage}
	<button
		onclick={scrollToTop}
		class="fixed bottom-6 right-6 z-40 p-2 text-foreground/60 hover:text-foreground transition-all duration-200 hover:-translate-y-1"
		aria-label="Scroll to top"
	>
		<Icon icon="i-carbon-arrow-up" className="text-3xl" />
	</button>
{/if}

<style>
	button {
		animation: fadeIn 0.3s ease-in-out;
	}
	
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
