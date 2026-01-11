<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { Skill } from '$lib/data/types';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';

	const { skill }: { skill: Skill } = $props();
</script>

<Tooltip openDelay={100}>
	<TooltipTrigger class="group">
		<Button size="icon" variant="outline">
			<img
				class="size-[18px] grayscale-[0.75] group-hover:grayscale-0"
				src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
				alt={skill.name}
			/>
		</Button>
	</TooltipTrigger>
	<TooltipContent>{skill.name}</TooltipContent>
</Tooltip>
