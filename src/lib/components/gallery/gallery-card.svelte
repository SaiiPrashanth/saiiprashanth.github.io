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
	import { trackGalleryClick } from '$lib/utils/analytics';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const { item }: { item: GalleryItem } = $props();

	// Category-specific colors for hover effects
	const getCategoryColor = (category: string): string => {
		switch (category) {
			case '2d':
				return '#ef4444'; // Red
			case 'ui':
				return '#06b6d4'; // Cyan
			case '3d':
				return '#3b82f6'; // Blue
			case 'ar':
				return '#a855f7'; // Purple
			case 'terrain':
				return '#f59e0b'; // Amber
			case 'game':
				return '#10b981'; // Green
			case 'particle':
				return '#f472b6'; // Pink
			case 'shader':
				return '#8b5cf6'; // Violet
			case 'tool':
				return '#64748b'; // Slate
			case 'rig':
				return '#f97316'; // Orange
			default:
				return '#6366f1'; // Default indigo
		}
	};

	let color = getCategoryColor(item.category);

	let cardElement: HTMLElement | undefined = $state();
	let isVisible = $state(false);
	let imgLoaded = $state(false);
	let videoLoaded = $state(false);
	let previewMediaLoaded = $state(false);
	let isHovered = $state(false);
	let showPreview = $state(false);
	let hoverTimer: ReturnType<typeof setTimeout>;
	let supportsHover: boolean | undefined; // cached once per component

	// Intersection Observer to only play videos when in view
	$effect(() => {
		if (!cardElement || !item.video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				isVisible = entries[0].isIntersecting;
			},
			{ threshold: 0.1 }
		);

		observer.observe(cardElement);
		return () => observer.disconnect();
	});

	// Reset videoLoaded each time the video enters the viewport so the
	// placeholder stays visible until the new <video> element is ready.
	$effect(() => {
		if (isVisible && item.video) {
			videoLoaded = false;
		}
	});

	// Velocity tracking for "flick to close"
	let lastX = 0;
	let lastY = 0;
	let lastT = 0;

	const handleMouseEnter = (e: MouseEvent) => {
		// Only run preview logic on devices that support hover (Desktop)
		if (supportsHover === undefined) supportsHover = window.matchMedia('(hover: hover)').matches;
		if (supportsHover) {
			isHovered = true;
			lastX = e.clientX;
			lastY = e.clientY;
			lastT = Date.now();

			// Delay (600ms) to ensure user intent before popping the big window
			hoverTimer = setTimeout(() => {
				if (isHovered) {
					showPreview = true;
					previewMediaLoaded = false; // Reset for the new window
				}
			}, 600); 
		}
	};

	const handleMouseLeave = () => {
		isHovered = false;
		showPreview = false;
		clearTimeout(hoverTimer);
	};

	// Track mouse velocity to close window on fast movement
	const handleGlobalMouseMove = (e: MouseEvent) => {
		if (!showPreview) return;
		
		const now = Date.now();
		const dt = now - lastT;
		
		if (dt > 0) {
			const dx = e.clientX - lastX;
			const dy = e.clientY - lastY;
			const dist = Math.sqrt(dx * dx + dy * dy);
			const velocity = dist / dt; // pixels per millisecond
			
			// If moving faster than 1.5px/ms (a quick flick), close the preview
			if (velocity > 1.5) {
				handleMouseLeave();
			}
		}
		
		lastX = e.clientX;
		lastY = e.clientY;
		lastT = now;
	};

	// Close preview if user scrolls away
	const handleScroll = () => {
		if (showPreview) {
			handleMouseLeave();
		}
	};

	const getThumbUrl = (url: string) => {
		// Replace extension with _thumb.webp
		return url.replace(/\.(webp|png|jpg)$/i, '_thumb.webp');
	};

	const getAvifUrl = (url: string) => {
		// Replace .webp or .png extension with .avif
		return url.replace(/\.(webp|png)$/i, '.avif');
	};

	const thumbUrl = getThumbUrl(item.image);
</script>

<svelte:window onmousemove={handleGlobalMouseMove} onscroll={handleScroll} />

<div 
	bind:this={cardElement}
	role="presentation"
	class="h-full"
>
	<FancyCard
		{color}
		class="flex h-full flex-col transition-opacity duration-300 {showPreview ? 'opacity-40' : 'opacity-100'}"
		href={item.links && item.links.length > 0 ? item.links[0].to : href(`/gallery/${item.slug}`)}
		newTab={item.links && item.links.length > 0 ? item.links[0].newTab : false}
		onclick={() => trackGalleryClick(item.name, item.category, `/gallery/${item.slug}`)}
	>
		<CardHeader class="flex w-full flex-col gap-4">
			<div 
				role="presentation"
				onmouseenter={handleMouseEnter}
				onmouseleave={handleMouseLeave}
				class="group relative aspect-video w-full overflow-hidden rounded-lg cursor-zoom-in"
			>
				<!-- Blurred Placeholder (Tile) -->
				<!-- Hide only when the *currently active* media has finished loading:
				     - no video / video off-screen → wait for static image
				     - video on-screen           → wait for video -->
				<img
					src={thumbUrl}
					alt=""
					class="absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-700 {(!item.video || !isVisible) ? (imgLoaded ? 'opacity-0' : 'opacity-100') : (videoLoaded ? 'opacity-0' : 'opacity-100')}"
					aria-hidden="true"
				/>
				
			<!-- High-Res Static Image (Loaded if no video OR video is not in view) -->
			{#if !item.video || !isVisible}
				<picture>
					<source srcset={getAvifUrl(item.image)} type="image/avif" />
					<source srcset={item.image} type="image/webp" />
					<img
						src={item.image}
						alt={item.name}
						class="relative h-full w-full object-cover transition-all duration-700 {imgLoaded ? 'opacity-100' : 'opacity-0'} {isHovered ? 'scale-110' : 'scale-100'}"
						onload={() => (imgLoaded = true)}
						onerror={() => (imgLoaded = true)}
						loading="lazy"
					/>
				</picture>
			{/if}

			<!-- Looped Video/GIF Preview -->
			{#if item.video && isVisible}
				{#if item.video.toLowerCase().endsWith('.gif')}
					<img
						src={item.video}
						alt={item.name}
						class="absolute inset-0 h-full w-full object-cover transition-all duration-700 {videoLoaded ? 'opacity-100' : 'opacity-0'} {isHovered ? 'scale-110' : 'scale-100'}"
						onload={() => (videoLoaded = true)}
						loading="lazy"
					/>
				{:else}
					<video
						src={item.video}
						poster={item.image}
						class="absolute inset-0 h-full w-full object-cover transition-all duration-700 {videoLoaded ? 'opacity-100' : 'opacity-0'} {isHovered ? 'scale-110' : 'scale-100'}"
						autoplay
						loop
						muted
						playsinline
						preload="none"
						oncanplay={() => (videoLoaded = true)}
					>
						<track kind="captions" />
					</video>
				{/if}
			{/if}

				<div
					class="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-20 z-10"
					style="background-color: {color};"
				></div>
			</div>
			<div class="flex w-full flex-row items-center gap-1 overflow-hidden">
				<CardTitle class="h-auto min-w-0 flex-1 leading-normal py-1">
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
					class={['game', 'terrain', 'particle', 'shader', 'tool', 'rig'].includes(item.category.toLowerCase()) ? 'capitalize' : 'uppercase'}
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
</div>

<!-- Mac OS Quick Look Style Preview Overlay -->
{#if showPreview}
	<div class="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 lg:p-24">
		<!-- Backdrop -->
		<div 
			class="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
		></div>
		
		<!-- Preview Window (Mac App Opening Animation) -->
		<div 
			out:scale={{ duration: 300, start: 0.95, easing: quintOut }}
			class="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-black/80 shadow-[0_0_80px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-75 slide-in-from-bottom-12 duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
		>
			<!-- Blurred Placeholder (Preview Window) -->
			<img
				src={thumbUrl}
				alt=""
				class="absolute inset-0 h-full w-full object-cover blur-2xl transition-opacity duration-500 {previewMediaLoaded ? 'opacity-0' : 'opacity-100'}"
				aria-hidden="true"
			/>

			{#if item.video}
				{#if item.video.endsWith('.gif')}
					<img
						src={item.video}
						alt={item.name}
						class="relative h-full w-full object-contain transition-opacity duration-500 {previewMediaLoaded ? 'opacity-100' : 'opacity-0'}"
						onload={() => (previewMediaLoaded = true)}
					/>
				{:else}
					<video
						src={item.video}
						class="relative h-full w-full object-contain transition-opacity duration-500 {previewMediaLoaded ? 'opacity-100' : 'opacity-0'}"
						autoplay
						loop
						muted
						playsinline
						oncanplay={() => (previewMediaLoaded = true)}
					>
						<track kind="captions" />
					</video>
				{/if}
			{:else}
				<img
					src={item.image}
					alt={item.name}
					class="relative h-full w-full object-cover transition-opacity duration-500 {previewMediaLoaded ? 'opacity-100' : 'opacity-0'}"
					onload={() => (previewMediaLoaded = true)}
				/>
			{/if}
			
			<!-- Floating Label -->
			<div 
				class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-6 py-2 backdrop-blur-md border border-border shadow-lg"
			>
				<p class="text-lg font-medium text-foreground tracking-tight">{item.name}</p>
			</div>
		</div>
	</div>
{/if}
