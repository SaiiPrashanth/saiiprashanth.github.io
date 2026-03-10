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
	let isVisible = $state(false);    // controls whether video element is in DOM
	let inViewport = $state(false);   // controls play/pause
	let imgLoaded = $state(false);
	let videoLoaded = $state(false);
	let previewMediaLoaded = $state(false);
	let showPreview = $state(false);
	let videoEl: HTMLVideoElement | undefined = $state();

	// Intersection Observer: wider rootMargin pre-mounts video before it enters view.
	// Once a video has loaded, it stays in DOM permanently (never unmounts) so
	// scroll-back never triggers a reload. Only unloaded cards get unmounted.
	let hideTimer: ReturnType<typeof setTimeout> | undefined;
	$effect(() => {
		if (!cardElement || !item.video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries[0].isIntersecting;
				inViewport = visible;
				if (visible) {
					clearTimeout(hideTimer);
					isVisible = true;
				} else if (!videoLoaded) {
					// Not loaded yet — may unmount, but re-check at fire time
					hideTimer = setTimeout(() => {
						if (!videoLoaded) isVisible = false; // only unmount if still not loaded
					}, 2000);
				}
				// If videoLoaded=true, keep isVisible=true so element stays in DOM
			},
			{ threshold: 0.1, rootMargin: '300px 0px' }
		);

		observer.observe(cardElement);
		return () => { observer.disconnect(); clearTimeout(hideTimer); };
	});

	// Play only when visible AND not scrolling.
	// Play only when in viewport AND not rapid-scrolling.
	let playTimer: ReturnType<typeof setTimeout> | undefined;
	$effect(() => {
		if (!videoEl || !item.video) return;
		if (inViewport && !scrollState.isScrolling) {
			playTimer = setTimeout(() => {
				videoEl?.play().catch(() => {});
			}, 250);
		} else {
			clearTimeout(playTimer);
			videoEl.pause();
		}
		return () => clearTimeout(playTimer);
	});

	// Only attach global keydown when preview is actually open
	$effect(() => {
		if (!showPreview) return;
		const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closePreview(); };
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});

	const openZoomPreview = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		showPreview = true;
		previewMediaLoaded = false;
	};

	const closePreview = (e?: MouseEvent) => {
		e?.stopPropagation();
		showPreview = false;
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

<div 
	bind:this={cardElement}
	role="presentation"
	class="h-full"
	style="content-visibility: auto; contain-intrinsic-size: auto 420px;"
>
	<FancyCard
		{color}
		class="flex h-full flex-col"
		href={item.links && item.links.length > 0 ? item.links[0].to : href(`/gallery/${item.slug}`)}
		newTab={item.links && item.links.length > 0 ? item.links[0].newTab : false}
		onclick={() => trackGalleryClick(item.name, item.category, `/gallery/${item.slug}`)}
	>
		<CardHeader class="flex w-full flex-col gap-4">
			<div 
				role="presentation"
				class="group relative aspect-video w-full overflow-hidden rounded-lg"
				style="contain: layout paint style;"
			>
				<!-- Blurred Placeholder: only in DOM while image/video hasn't loaded -->
				{#if (item.video && inViewport) ? !videoLoaded : !imgLoaded}
				<img
					src={thumbUrl}
					alt=""
					class="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
					aria-hidden="true"
				/>
				{/if}
				
				<!-- High-Res Static Image (always in DOM, hidden when video is active) -->
				<picture class="{item.video && inViewport ? 'opacity-0' : ''}">
					<source srcset={getAvifUrl(item.image)} type="image/avif" />
					<source srcset={item.image} type="image/webp" />
					<img
						src={item.image}
						alt={item.name}
						class="relative h-full w-full object-cover transition-opacity duration-700 {imgLoaded ? 'opacity-100' : 'opacity-0'}"
						onload={() => (imgLoaded = true)}
						onerror={() => (imgLoaded = true)}
					/>
				</picture>

				<!-- Looped Video Preview: only mounted when card is visible -->
				{#if item.video && isVisible}
					<video
						bind:this={videoEl}
						src={item.video}
						poster={item.image}
						class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 {inViewport && videoLoaded && !scrollState.isScrolling ? 'opacity-100' : 'opacity-0'}"
						loop
						muted
						playsinline
						preload="none"
						oncanplay={() => (videoLoaded = true)}
					>
						<track kind="captions" />
					</video>
				{/if}

				<div
					class="absolute inset-0 transition-opacity duration-300 opacity-0 sm:group-hover:opacity-20 z-10"
					style="background-color: {color};"
				></div>

				<!-- Zoom button (top-right of image) -->
				<button
					type="button"
					onclick={openZoomPreview}
					class="absolute top-2 right-2 z-20 hidden sm:flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 text-foreground border border-border transition-all duration-150 hover:bg-background hover:scale-110"
					aria-label="Zoom preview"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
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

<!-- Mac OS Quick Look Style Preview Overlay -->
{#if showPreview}
	<div class="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 lg:p-24">
		<!-- Backdrop -->
		<div 
			role="button"
			tabindex="0"
			class="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
			onclick={closePreview}
			onkeydown={(e) => { if (e.key === 'Enter') closePreview(); }}
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
			
			<!-- Close button -->
			<button
				type="button"
				onclick={closePreview}
				class="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/70 text-foreground border border-border hover:bg-background hover:scale-110 transition-all duration-150 backdrop-blur-sm"
				aria-label="Close preview"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
					<line x1="18" y1="6" x2="6" y2="18"/>
					<line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			</button>

			<!-- Floating Label -->
			<div 
				class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-6 py-2 backdrop-blur-md border border-border shadow-lg"
			>
				<p class="text-lg font-medium text-foreground tracking-tight">{item.name}</p>
			</div>
		</div>
	</div>
{/if}
