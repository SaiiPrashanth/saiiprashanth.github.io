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
	import { scrollState } from '$lib/utils/scroll-state.svelte';
	import { getGalleryObserver } from '$lib/utils/gallery-observer';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const { item }: { item: GalleryItem } = $props();

	const getCategoryColor = (category: string): string => {
		switch (category) {
			case '2d': return '#ef4444';
			case 'ui': return '#06b6d4';
			case '3d': return '#3b82f6';
			case 'ar': return '#a855f7';
			case 'terrain': return '#f59e0b';
			case 'game': return '#10b981';
			case 'particle': return '#f472b6';
			case 'shader': return '#8b5cf6';
			case 'tool': return '#64748b';
			case 'rig': return '#f97316';
			default: return '#6366f1';
		}
	};

	const color = getCategoryColor(item.category);
	const thumbUrl = item.image.replace(/\.(webp|png|jpg)$/i, '_thumb.webp');
	const avifUrl = item.image.replace(/\.(webp|png)$/i, '.avif');
	const observer = item.video ? getGalleryObserver() : undefined;

	// ── State ──────────────────────────────────────────────────
	let cardEl: HTMLElement | undefined = $state();
	let imgLoaded = $state(false);       // high-res still image decoded
	let videoReady = $state(false);      // video can play through
	let inViewport = $state(false);      // card is near viewport
	let videoMounted = $state(false);    // lazy mount: true once near viewport, never goes false
	let videoEl: HTMLVideoElement | undefined = $state();

	// Blur clears as soon as the still image loads (fast) for ALL items
	let mediaReady = $derived(imgLoaded);

	// Hide blur thumb from DOM entirely after fade-out to free GPU layer
	let thumbHidden = $state(false);
	$effect(() => {
		if (mediaReady) {
			const t = setTimeout(() => (thumbHidden = true), 400);
			return () => clearTimeout(t);
		}
	});

	// Preview overlay
	let showPreview = $state(false);
	let previewReady = $state(false);

	// ── Shared Intersection Observer (video items only) ──────
	$effect(() => {
		if (!cardEl || !observer) return;

		observer.observe(cardEl, {
			onEnter: () => { inViewport = true; videoMounted = true; },
			onLeave: () => { inViewport = false; }
		});

		return () => { if (cardEl) observer.unobserve(cardEl); };
	});

	// ── Video play/pause ──────────────────────────────────────
	let playTimer: ReturnType<typeof setTimeout> | undefined;

	$effect(() => {
		if (!videoEl) return;

		// videoReady is read here so the effect re-runs when canplay fires
		if (inViewport && videoReady && !scrollState.isScrolling) {
			playTimer = setTimeout(() => videoEl?.play().catch(() => {}), 150);
		} else {
			clearTimeout(playTimer);
			if (!videoEl.paused) videoEl.pause();
		}

		return () => clearTimeout(playTimer);
	});

	// ── Escape key for preview ────────────────────────────────
	$effect(() => {
		if (!showPreview) return;
		const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') showPreview = false; };
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});

	const openZoomPreview = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		showPreview = true;
		previewReady = false;
	};
</script>

<!-- ─── Card ──────────────────────────────────────────────── -->
<div bind:this={cardEl} role="presentation" class="h-full">
	<FancyCard
		{color}
		tilt={0}
		class="flex h-full flex-col"
		href={item.links?.length ? item.links[0].to : href(`/gallery/${item.slug}`)}
		newTab={item.links?.length ? item.links[0].newTab : false}
		onclick={() => trackGalleryClick(item.name, item.category, `/gallery/${item.slug}`)}
	>
		<CardHeader class="flex w-full flex-col gap-4">
			<div
				role="presentation"
				class="group relative aspect-video w-full overflow-hidden rounded-lg"
				style="contain: layout style paint;"
			>
				<!-- Layer 1: Tiny blurred placeholder (removed from DOM after fade) -->
				{#if !thumbHidden}
				<img
					src={thumbUrl}
					alt=""
					aria-hidden="true"
					class="absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-300
						{mediaReady ? 'opacity-0' : 'opacity-100'}"
				/>
				{/if}

				<!-- Layer 2: High-res still image (all items — clears blur fast) -->
				<picture>
					<source srcset={avifUrl} type="image/avif" />
					<source srcset={item.image} type="image/webp" />
					<img
						src={item.image}
						alt={item.name}
						loading="lazy"
						decoding="async"
						class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500
							{imgLoaded ? 'opacity-100' : 'opacity-0'}"
						onload={() => (imgLoaded = true)}
						onerror={() => (imgLoaded = true)}
					/>
				</picture>

				<!-- Layer 3: Video overlay (lazy-mounted, plays on top of still) -->
				{#if item.video && videoMounted}
					<video
						bind:this={videoEl}
						src={item.video}
						class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300
							{videoReady ? 'opacity-100' : 'opacity-0'}"
						loop
						muted
						playsinline
						preload="metadata"
						oncanplay={() => (videoReady = true)}
					>
						<track kind="captions" />
					</video>
				{/if}

				<!-- Layer 4: Hover color overlay (desktop only) -->
				<div
					class="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 sm:group-hover:opacity-20"
					style="background-color: {color};"
				></div>

				<!-- Zoom button (desktop only) -->
				<button
					type="button"
					onclick={openZoomPreview}
					class="absolute top-2 right-2 z-20 hidden sm:flex h-8 w-8 items-center justify-center
						rounded-lg bg-background/80 text-foreground border border-border
						transition-all duration-150 hover:bg-background hover:scale-110"
					aria-label="Zoom preview"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="h-4 w-4">
						<polyline points="3 9 3 3 9 3"/>
						<polyline points="15 3 21 3 21 9"/>
						<polyline points="21 15 21 21 15 21"/>
						<polyline points="9 21 3 21 3 15"/>
						<line x1="3" y1="3" x2="9" y2="9"/>
						<line x1="15" y1="3" x2="21" y2="9"/>
						<line x1="21" y1="21" x2="15" y2="15"/>
						<line x1="3" y1="21" x2="9" y2="15"/>
					</svg>
				</button>
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

<!-- ─── Quick-Look Preview Overlay ────────────────────────── -->
{#if showPreview}
	<div class="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 lg:p-24">
		<!-- Backdrop -->
		<div
			role="button"
			tabindex="0"
			class="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
			onclick={() => (showPreview = false)}
			onkeydown={(e) => { if (e.key === 'Enter') showPreview = false; }}
		></div>

		<!-- Preview window -->
		<div
			out:scale={{ duration: 300, start: 0.95, easing: quintOut }}
			class="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20
				bg-black/80 shadow-[0_0_80px_rgba(0,0,0,0.6)]
				animate-in fade-in zoom-in-75 slide-in-from-bottom-12 duration-500
				ease-[cubic-bezier(0.34,1.56,0.64,1)]"
		>
			<!-- Blurred placeholder -->
			<img
				src={thumbUrl}
				alt=""
				aria-hidden="true"
				class="absolute inset-0 h-full w-full object-cover blur-2xl transition-opacity duration-500
					{previewReady ? 'opacity-0' : 'opacity-100'}"
			/>

			{#if item.video}
				<video
					src={item.video}
					class="relative h-full w-full object-contain transition-opacity duration-500
						{previewReady ? 'opacity-100' : 'opacity-0'}"
					autoplay loop muted playsinline
					oncanplay={() => (previewReady = true)}
				>
					<track kind="captions" />
				</video>
			{:else}
				<img
					src={item.image}
					alt={item.name}
					class="relative h-full w-full object-cover transition-opacity duration-500
						{previewReady ? 'opacity-100' : 'opacity-0'}"
					onload={() => (previewReady = true)}
				/>
			{/if}

			<!-- Close button -->
			<button
				type="button"
				onclick={(e) => { e.stopPropagation(); showPreview = false; }}
				class="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full
					bg-background/70 text-foreground border border-border
					hover:bg-background hover:scale-110 transition-all duration-150 backdrop-blur-sm"
				aria-label="Close preview"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
					class="h-4 w-4">
					<line x1="18" y1="6" x2="6" y2="18"/>
					<line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			</button>

			<!-- Floating label -->
			<div class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-6 py-2
				backdrop-blur-md border border-border shadow-lg">
				<p class="text-lg font-medium text-foreground tracking-tight">{item.name}</p>
			</div>
		</div>
	</div>
{/if}
