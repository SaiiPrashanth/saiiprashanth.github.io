<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { Link } from '$lib/data/types';

	const { link }: { link: Link } = $props();

	// Function to get the appropriate icon based on the link label
	function getLinkIcon(label: string): string {
		const lowerLabel = label.toLowerCase();
		if (lowerLabel.includes('github')) {
			return 'i-carbon-logo-github';
		} else if (lowerLabel.includes('itch')) {
			return 'i-simple-icons-itchdotio';
		} else if (lowerLabel.includes('artstation')) {
			return 'i-simple-icons-artstation';
		}
		return 'i-carbon-link';
	}

	const icon = $derived(getLinkIcon(link.label));
</script>

<a href={link.to} target={link.newTab ? '_blank' : undefined}>
	<Tooltip openDelay={300}>
		<TooltipTrigger>
			<Button size="icon" variant="outline">
				<Icon {icon} />
			</Button>
		</TooltipTrigger>
		<TooltipContent>
			{link.label}
		</TooltipContent>
	</Tooltip>
</a>
