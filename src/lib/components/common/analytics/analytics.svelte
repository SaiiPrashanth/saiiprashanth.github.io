<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import analytics from '$lib/data/analytics';

	// Google Analytics - Using $effect for Svelte 5
	$effect(() => {
		if (browser && analytics.provider === 'google' && analytics.googleAnalyticsId) {
			// Track page views
			if (typeof window.gtag !== 'undefined') {
				window.gtag('config', analytics.googleAnalyticsId, {
					page_path: $page.url.pathname
				});
			}
		}
	});

	// Plausible Analytics (automatically tracks page views via script)
	// No additional JavaScript needed, it's handled by the script tag
</script>

<svelte:head>
	{#if analytics.provider === 'google' && analytics.googleAnalyticsId}
		<!-- Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id={analytics.googleAnalyticsId}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '{analytics.googleAnalyticsId}', {
				page_path: window.location.pathname
			});
		</script>
	{:else if analytics.provider === 'plausible' && analytics.plausibleDomain}
		<!-- Plausible Analytics -->
		<script defer data-domain={analytics.plausibleDomain} src={analytics.plausibleSrc}></script>
	{/if}
</svelte:head>
