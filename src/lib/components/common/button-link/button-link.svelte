<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { Link } from '$lib/data/types';
	import Assets from '$lib/data/assets';
	import { mode } from 'mode-watcher';

	const { link }: { link: Link } = $props();

	// Function to get the appropriate icon based on the link label
	function getLinkIcon(label: string): { type: 'asset'; asset: typeof Assets.GitHub } | { type: 'icon'; icon: `i-carbon-${string}` } {
		const lowerLabel = label.toLowerCase();
		if (lowerLabel.includes('github')) {
			return { type: 'asset', asset: Assets.GitHub };
		} else if (lowerLabel.includes('itch')) {
			return { type: 'asset', asset: Assets.Itch };
		} else if (lowerLabel.includes('artstation')) {
			return { type: 'asset', asset: Assets.Artstation };
		}
		return { type: 'icon', icon: 'i-carbon-link' as const };
	}

	const linkIcon = $derived(getLinkIcon(link.label));
</script>

<a href={link.to} target={link.newTab ? '_blank' : undefined}>
	<Tooltip openDelay={300}>
		<TooltipTrigger>
			<Button size="icon" variant="outline">
				{#if linkIcon.type === 'asset'}
					<img 
						src={$mode === 'dark' ? linkIcon.asset.dark : linkIcon.asset.light} 
						alt={link.label}
						class="h-5 w-5"
					/>
				{:else}
					<Icon icon={linkIcon.icon} />
				{/if}
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			{link.label}
		</TooltipContent>
	</Tooltip>
</a>
