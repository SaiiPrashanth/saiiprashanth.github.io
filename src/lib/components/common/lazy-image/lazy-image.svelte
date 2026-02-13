<script lang="ts">
	// Lazy load images with Intersection Observer
	import { onMount } from 'svelte';

	const {
		src,
		alt,
		class: className = '',
		...props
	}: {
		src: string;
		alt: string;
		class?: string;
		[key: string]: any;
	} = $props();

	let imgElement: HTMLImageElement;
	let loaded = $state(false);
	let error = $state(false);

	onMount(() => {
		if (!imgElement) return;

		// Check if image is already cached
		if (imgElement.complete && imgElement.naturalHeight !== 0) {
			loaded = true;
			return;
		}

		// Native lazy loading as fallback
		if ('loading' in HTMLImageElement.prototype) {
			imgElement.loading = 'lazy';
			// Set loaded immediately since browser handles it
			imgElement.onload = () => {
				loaded = true;
			};
			return;
		}

		// Intersection Observer for older browsers
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target as HTMLImageElement;
						img.src = img.dataset.src || '';
						img.onload = () => {
							loaded = true;
							observer.unobserve(img);
						};
						img.onerror = () => {
							error = true;
							observer.unobserve(img);
						};
					}
				});
			},
			{
				rootMargin: '200px' // Start loading 200px before entering viewport
			}
		);

		observer.observe(imgElement);

		return () => {
			observer.disconnect();
		};
	});
</script>

<img
	bind:this={imgElement}
	{src}
	data-src={src}
	{alt}
	class={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
	loading="lazy"
	decoding="async"
	fetchpriority="auto"
	{...props}
/>

{#if error}
	<div class="flex items-center justify-center bg-muted text-muted-foreground p-4">
		Failed to load image
	</div>
{/if}
