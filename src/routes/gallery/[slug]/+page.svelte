<script lang="ts">
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import FancyBanner from '$lib/components/common/fancy-banner/fancy-banner.svelte';
	import EmptyMarkdown from '$lib/components/common/markdown/empty-markdown.svelte';
	import Markdown from '$lib/components/common/markdown/markdown.svelte';
	import ScreenshotCard from '$lib/components/common/screenshot/screenshot-card.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import type { GalleryItem } from '$lib/data/types';

	let { data }: { data: { item?: GalleryItem } } = $props();

	let title = $derived(`${data?.item?.name ?? 'Not Found'} - Gallery`);
</script>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={data.item.image}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{data.item.name}</H1>
				<Badge variant="secondary" class="capitalize">
					{data.item.category}
				</Badge>
				<Separator />
				
				{#if data.item.links && data.item.links.length > 0}
					<div class="flex flex-row flex-wrap justify-center gap-2">
						{#each data.item.links as link (link.to)}
							<a href={link.to} target="_blank">
								<Badge variant="outline">{link.label}</Badge>
							</a>
						{/each}
					</div>
				{/if}
				
				{#if data.item.tags && data.item.tags.length > 0}
					<div class="flex flex-row flex-wrap justify-center gap-2">
						{#each data.item.tags as tag}
							<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
								<Muted>{tag}</Muted>
							</Badge>
						{/each}
					</div>
				{/if}
			</div>
		</FancyBanner>
		<Separator />
		{#if data.item.description.trim()}
			<Markdown content={data.item.description} />
		{:else}
			<EmptyMarkdown />
		{/if}
		<Separator />
		<div class="flex flex-col gap-2 px-4 pt-4">
			{#if data.item.screenshots && data.item.screenshots.length > 0}
				<Muted>Images</Muted>
				<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each data.item.screenshots as img, index (index)}
						<ScreenshotCard item={img} />
					{/each}
				</div>
			{:else}
				<div class="flex items-center justify-center py-8">
					<img 
						src={data.item.image} 
						alt={data.item.name}
						class="max-h-96 w-auto rounded-lg shadow-lg"
					/>
				</div>
			{/if}
		</div>
	{/if}
</BasePage>
