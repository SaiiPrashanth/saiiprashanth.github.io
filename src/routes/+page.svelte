<script lang="ts">
	import Title from '$lib/components/common/title/title.svelte';
	import LazyImage from '$lib/components/common/lazy-image/lazy-image.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CarouselContent from '$lib/components/ui/carousel/carousel-content.svelte';
	import CarouselItem from '$lib/components/ui/carousel/carousel-item.svelte';
	import CarouselNext from '$lib/components/ui/carousel/carousel-next.svelte';
	import CarouselPrevious from '$lib/components/ui/carousel/carousel-previous.svelte';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import ResponsiveContainer from '$lib/components/ui/responsive-container/responsive-container.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import HomeData from '$lib/data/home';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import { onMount } from 'svelte';
	import { trackSocialClick, trackSkillClick } from '$lib/utils/analytics';

	let api: CarouselAPI;

	onMount(() => {
		const interval = setInterval(() => {
			if (!api) return;

			api.scrollNext();
		}, 2000);

		// Cleanup to prevent memory leak
		return () => clearInterval(interval);
	});
</script>

<Title title={HomeData.title} />
<ResponsiveContainer className="flex flex-col justify-center flex-1">
	<div
		class="flex flex-1 flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-14 md:flex-row md:justify-between"
	>
		<div
			class="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left"
		>
			<H1>{HomeData.hero.title}</H1>
			<Muted>{HomeData.hero.description}</Muted>
			<div class="flex flex-row gap-1">
				{#each HomeData.hero.links as item}
					<a href={item.href} target="_blank" onclick={() => trackSocialClick(item.label, item.href, 'Home Hero')}>
						<Tooltip>
							<TooltipTrigger>
								<Button variant="outline" size="icon">
									{#if item.iconImage}
										<img 
											src={item.iconImage} 
											alt={item.label} 
											class="h-4 w-4 dark:invert" 
										/>
									{:else if item.icon}
										<Icon icon={item.icon} className="text-lg" />
									{/if}
								</Button>
							</TooltipTrigger>
							<TooltipContent side="bottom">{item.label}</TooltipContent>
						</Tooltip>
					</a>
				{/each}
			</div>
		</div>
		<div class="w-full sm:w-auto flex justify-center">
			<Carousel bind:api class="w-[180px] sm:w-[200px] md:ml-14" opts={{ loop: true }} aria-label="Featured skills carousel">
				<CarouselContent>
					{#each HomeData.carousel as item}
						<CarouselItem class="flex flex-col items-center justify-center gap-4">
						<LazyImage
								src={$mode === 'dark' ? item.logo.dark : item.logo.light}
							class="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]"
							alt="{item.name} skill logo"
							/>
							<a href={href(`/skills/${item.slug}`)} onclick={() => trackSkillClick(item.name, 'Home Carousel')}>
								<Button variant="ghost">
									{item.name}
								</Button>
							</a>
						</CarouselItem>
					{/each}
				</CarouselContent>
				<CarouselNext class="hidden sm:flex" />
				<CarouselPrevious class="hidden sm:flex" />
			</Carousel>
		</div>
	</div>
</ResponsiveContainer>
