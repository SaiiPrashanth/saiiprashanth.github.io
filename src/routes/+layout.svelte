<script lang="ts">
	import NavBar from '$lib/components/common/nav-bar/nav-bar.svelte';
	import LoadingBar from '$lib/components/common/loading-bar/loading-bar.svelte';
	import Analytics from '$lib/components/common/analytics/analytics.svelte';
	import PersonSchema from '$lib/components/common/schema/person-schema.svelte';
	import BackToTop from '$lib/components/common/back-to-top/back-to-top.svelte';
	import 'virtual:uno.css';
	import '../app.css';
	import '../markdown.css';
	import { ModeWatcher } from 'mode-watcher';
	import { page, navigating } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import BaseData from '$lib/data/base';

	let { children } = $props();

	const defaultDescription = 'Detail oriented Game Programmer focused on mechanics implementation and game feel. Portfolio showcasing C++, C#, Unity, and Unreal Engine projects with technical implementations and gameplay systems.';
	const siteUrl = 'https://saiiprashanth.github.io'; // Update with your actual domain

	// Page transition state
	let isTransitioning = $state(false);

	// Handle page transitions (fade effect only)
	$effect(() => {
		if ($navigating) {
			// Only transition if navigating to a different path
			if ($navigating.to?.url.pathname !== $page.url.pathname) {
				isTransitioning = true;
			}
		} else {
			// Reset transition state immediately
			isTransitioning = false;
		}
	});

	// Scroll to top only on forward navigation (not back/forward browser buttons)
	afterNavigate(({ from, to, type }) => {
		// Only scroll to top if it's a goto navigation (link click) and going to a different page
		if (type === 'goto' && from?.route?.id !== to?.route?.id) {
			window.scrollTo({ top: 0, behavior: 'instant' });
		}
		// For 'popstate' (back/forward), browser handles scroll restoration automatically
	});
</script>

<svelte:head>
	<title>{$page.data.title || `${BaseData.fullName} - Game Producer Portfolio`}</title>
	<meta name="description" content={$page.data.description || defaultDescription} />
	<meta name="author" content={BaseData.fullName} />
	<meta name="keywords" content="Game Producer, Project Manager, Game Production, Game Development, Product Management, Agile, Scrum, Team Leadership, Pipeline Management, Game Design, Cross-functional Teams, Jira, Risk Management, Milestone Planning, Portfolio" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${siteUrl}${$page.url.pathname}`} />
	<meta property="og:title" content={$page.data.title || `${BaseData.fullName} - Game Producer Portfolio`} />
	<meta property="og:description" content={$page.data.description || defaultDescription} />
	<meta property="og:image" content={`${siteUrl}/Logo.png`} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={`${siteUrl}${$page.url.pathname}`} />
	<meta name="twitter:title" content={$page.data.title || `${BaseData.fullName} - Game Producer Portfolio`} />
	<meta name="twitter:description" content={$page.data.description || defaultDescription} />
	<meta name="twitter:image" content={`${siteUrl}/Logo.png`} />
</svelte:head>

<ModeWatcher />
<Analytics />
<PersonSchema />
<LoadingBar />
<BackToTop />
<a 
	href="#main-content" 
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
>
	Skip to main content
</a>
<div class="flex min-h-screen w-full flex-col">
	<NavBar />
	<div 
		id="main-content" 
		class="mt-[56px] sm:mt-[50px] flex flex-1 flex-col page-transition"
		class:fade-out={isTransitioning}
	>
		{@render children()}
	</div>
</div>

<style>
	.page-transition {
		animation: fadeIn 150ms ease-in;
	}

	.fade-out {
		opacity: 0.95;
		transition: opacity 100ms ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
