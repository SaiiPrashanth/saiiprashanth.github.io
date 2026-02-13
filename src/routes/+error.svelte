<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';

	const statusCodes: Record<number, { title: string; description: string }> = {
		404: {
			title: 'Page Not Found',
			description: "The page you're looking for doesn't exist or has been moved."
		},
		500: {
			title: 'Internal Server Error',
			description: 'Something went wrong on our end. Please try again later.'
		},
		403: {
			title: 'Forbidden',
			description: "You don't have permission to access this page."
		}
	};

	$: status = $page.status;
	$: errorInfo = statusCodes[status] || {
		title: 'An Error Occurred',
		description: 'Something unexpected happened. Please try again.'
	};
</script>

<ResponsiveContainer className="flex flex-col justify-center items-center flex-1 gap-8 py-20 px-4">
	<div class="flex flex-col items-center gap-4 text-center">
		<Icon className="text-6xl opacity-50" icon="i-carbon-warning-alt" />
		<H1>{status}</H1>
		<Large>{errorInfo.title}</Large>
		<Muted className="max-w-md">{errorInfo.description}</Muted>
	</div>
	
	<div class="flex flex-row gap-4">
		<a href="/">
			<Button variant="default">
				<Icon icon="i-carbon-home" className="mr-2" />
				Back to Home
			</Button>
		</a>
		<Button variant="outline" onclick={() => window.history.back()}>
			<Icon icon="i-carbon-arrow-left" className="mr-2" />
			Go Back
		</Button>
	</div>
	
	{#if $page.error?.message}
		<details class="mt-8 max-w-md">
			<summary class="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
				Technical Details
			</summary>
			<pre class="mt-2 rounded-md bg-muted p-4 text-xs overflow-auto">
				{$page.error.message}
			</pre>
		</details>
	{/if}
</ResponsiveContainer>
