<script lang="ts">
	import type { GalleryItem } from '$lib/data/types';
	import { href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import Badge from '../ui/badge/badge.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { item }: { item: GalleryItem } = $props();

	// Category-specific colors for hover effects
	const getCategoryColor = (category: string): string => {
		switch (category) {
			case '2d':
				return '#ef4444'; // Red
			case '3d':
				return '#3b82f6'; // Blue
			case 'game':
				return '#10b981'; // Green
			case 'terrain':
				return '#f59e0b'; // Amber
			default:
				return '#6366f1'; // Default purple
		}
	};

	let color = getCategoryColor(item.category);
</script>

<FancyCard
	{color}
	class="flex h-full flex-col"
	href={href(`/gallery/${item.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<div class="aspect-video w-full overflow-hidden rounded-lg bg-muted relative group">
			<img 
				src={item.image} 
				alt={item.name}
				class="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
			/>
			<div 
				class="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-20"
				style="background-color: {color};"
			></div>
		</div>
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger class="w-full text-left">
						{ellipsify(item.name, 25)}
					</TooltipTrigger>
					<TooltipContent side="top" class="lg:hidden">
						{item.name}
					</TooltipContent>
				</Tooltip>
			</CardTitle>
			<Badge 
				variant="secondary" 
				class="capitalize"
				style="background-color: {color}; color: white; border-color: {color};"
			>
				{item.category}
			</Badge>
		</div>
	</CardHeader>

	<CardContent class="flex flex-1 flex-col gap-3">
		<Muted class="flex-1 text-sm">
			{ellipsify(item.shortDescription, 120)}
		</Muted>

		{#if item.tags && item.tags.length > 0}
			<div class="flex flex-wrap gap-1">
				{#each item.tags.slice(0, 4) as tag}
					<Badge variant="outline" class="text-xs">
						{tag}
					</Badge>
				{/each}
				{#if item.tags.length > 4}
					<Badge variant="outline" class="text-xs">
						+{item.tags.length - 4}
					</Badge>
				{/if}
			</div>
		{/if}
	</CardContent>
</FancyCard>
