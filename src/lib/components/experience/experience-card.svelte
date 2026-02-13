<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import { Badge } from '../ui/badge';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';
	import { trackCardClick } from '$lib/utils/analytics';

	const { it }: { it: Experience } = $props();

	const exactDuration = computeExactDuration(it.period.from, it.period.to);

	let imgLoaded = $state(false);

	let from = $derived(getMonthAndYear(it.period.from));
	let to = $derived(getMonthAndYear(it.period.to));

	let period = $derived(`${from} - ${to}`);

	let badges = $derived([
		{ label: it.company, icon: 'i-carbon-building', tooltip: 'Company' },
		{ label: it.location, icon: 'i-carbon-location', tooltip: 'Location' },
		{ label: it.contract, icon: 'i-carbon-hourglass', tooltip: 'Contract Type' }
	] as const);
</script>

<FancyCard 
	color={it.color}
	onclick={() => trackCardClick('Experience', it.name, `/experience/${it.slug}`)}
>
	<CardContent class="flex flex-col gap-8 sm:flex-row">
		<Avatar class="h-16 w-16 rounded-full flex items-center justify-center">
			<AvatarFallback class="bg-background" />
			<AvatarImage 
				src={$mode === 'dark' ? it.logo.dark : it.logo.light} 
				class="object-contain p-2 transition-opacity duration-300 {imgLoaded ? 'opacity-100' : 'opacity-0'}" 
				onload={() => (imgLoaded = true)}
			/>
		</Avatar>
		<div class="flex flex-col gap-4">
			<CardTitle class="leading-normal py-1">{it.name}</CardTitle>
			<div class="flex flex-row flex-wrap gap-1">
				{#each badges as badge (badge.icon)}
					<Tooltip openDelay={300}>
						<TooltipTrigger>
							<Badge variant="secondary" class="flex flex-row items-center gap-1">
								<Icon icon={badge.icon} />
								{badge.label}
							</Badge>
							<TooltipContent>{badge.tooltip}</TooltipContent>
						</TooltipTrigger>
					</Tooltip>
				{/each}
			</div>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-calendar" />
						<div>{period}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Date range</TooltipContent>
			</Tooltip>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-time" />
						<div>{exactDuration}</div>
					</Muted>
					<TooltipContent side="bottom">Exact duration</TooltipContent>
				</TooltipTrigger>
			</Tooltip>
			<div class="py-2 text-sm text-muted-foreground">{ellipsify(it.shortDescription, 150)}</div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each it.skills as skill (skill.slug)}
					<SkillBadge {skill} />
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
