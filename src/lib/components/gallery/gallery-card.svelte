<script lang="ts">
	import type { GalleryItem } from '$lib/data/types';
	import { href } from '$lib/utils';
	import { ellipsify } from '$lib/utils';
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

	let imgLoaded = $state(false);

	const getThumbUrl = (url: string) => {
		const parts = url.split('/');
		const filename = parts.pop();
		if (!filename) return url;
		const name = filename.substring(0, filename.lastIndexOf('.'));
		return `${parts.join('/')}/${name}_thumb.webp`;
	};

	const thumbUrl = getThumbUrl(item.image);
</script>

<FancyCard
	{color}
	class="flex h-full flex-col"
	href={item.links?.[0]?.to}
	newTab={item.links?.[0]?.newTab}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<div class="group relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
			<img
				src={thumbUrl}
				alt=""
				class="absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-700 {imgLoaded
					? 'opacity-0'
					: 'opacity-100'}"
				aria-hidden="true"
			/>
			<img
				src={item.image}
				alt={item.name}
				class="relative h-full w-full object-cover transition-all duration-300 group-hover:scale-105 {imgLoaded
					? 'opacity-100'
					: 'opacity-0'}"
				onload={() => (imgLoaded = true)}
				loading="lazy"
			/>
			<div
				class="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-20"
				style="background-color: {color};"
			></div>
		</div>
		<div class="flex w-full flex-row items-center gap-1 overflow-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-hidden">
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
	</CardContent>
</FancyCard>
