<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';
	import { trackCardClick, trackProjectLink } from '$lib/utils/analytics';

	const { project }: { project: Project } = $props();

	let from = $derived(getMonthAndYear(project.period.from));
	let to = $derived(getMonthAndYear(project.period.to));
	let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
	let imgLoaded = $state(false);
</script>

<FancyCard
	color={project.color}
	class="flex h-full flex-col"
	href={href(`/projects/${project.slug}`)}
	onclick={() => trackCardClick('Project', project.name, `/projects/${project.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar class="h-14 w-14 flex items-center justify-center">
			<AvatarFallback class="bg-transparent" />
			<AvatarImage 
				src={$mode === 'dark' ? project.logo.dark : project.logo.light} 
				class="object-contain p-2 transition-opacity duration-300 {imgLoaded ? 'opacity-100' : 'opacity-0'}" 
				onload={() => (imgLoaded = true)}
			/>
		</Avatar>
		<div class="flex w-full flex-row items-center gap-1 min-h-[40px]">
			<CardTitle class="h-auto min-w-0 flex-1 leading-normal py-1">
				<Tooltip>
					<TooltipTrigger
						class="w-full truncate text-ellipsis text-nowrap text-left"
					>
						{project.name}
					</TooltipTrigger>
					<TooltipContent>{project.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
			{#if project.links.length > 2}
				<ButtonLink link={project.links[0]} projectName={project.name} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each project.links.slice(1) as link (link.to)}
							<a 
								href={link.to} 
								target={'_blank'} 
								onclick={() => {
									const linkType = link.to.includes('github.com') ? 'GitHub' : 
									                 link.to.includes('itch.io') ? 'Itch.io' : 'Other';
									trackProjectLink(project.name, linkType, link.to);
								}}
							>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else if project.links.length > 0}
				{#each project.links as link (link.to)}
					<ButtonLink {link} projectName={project.name} />
				{/each}
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(project.shortDescription, 100)}</Muted
		>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
