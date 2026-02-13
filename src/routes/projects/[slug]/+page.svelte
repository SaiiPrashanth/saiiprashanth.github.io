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
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import { trackProjectLink, trackSkillClick } from '$lib/utils/analytics';

	let { data }: { data: { item?: Project } } = $props();

	let title = $derived(`${data?.item?.name ?? 'Not Found'} - Projects`);
	let banner = $derived(
		($mode == 'dark' ? data?.item?.logo.dark : data.item?.logo.light) ?? Assets.Unknown.light
	);

	let duration = $derived(
		`${getMonthAndYear(data.item?.period.from)} - ${getMonthAndYear(data.item?.period.to)} · ${computeExactDuration(
			data.item?.period.from ?? new Date(),
			data.item?.period.to
		)}`
	);
</script>

<BasePage {title}>
	{#if !data.item}
		<EmptyResult />
	{:else}
		<FancyBanner img={banner}>
			<div class="flex w-full flex-col items-center justify-center gap-4">
				<H1>{data.item.name}</H1>
				<Muted>{data.item.type}</Muted>
				<Muted>{duration}</Muted>
				<Separator />
				<div class="flex flex-row flex-wrap justify-center gap-3 pb-2">
					{#each data.item.skills as skill (skill.slug)}
						<a href={href(`/skills/${skill.slug}`)} onclick={() => trackSkillClick(skill.name, `Project: ${data.item?.name}`)}>
							<Badge variant="outline" class="flex flex-row items-center justify-center gap-2">
								<img
									class="h-[20px] w-[20px]"
									src={$mode === 'dark' ? skill.logo.dark : skill.logo.light}
									alt={skill.name}
								/>
								<Muted>{skill.name}</Muted>
							</Badge>
						</a>
					{/each}
				</div>
				<div class="flex flex-row flex-wrap justify-center items-center gap-3 pb-2">
					{#each data.item.links as link (link.to)}
						<a 
							href={link.to} 
							target="_blank"
							onclick={() => {
								const linkType = link.to.includes('github.com') ? 'GitHub' : 
								                 link.to.includes('itch.io') ? 'Itch.io' : 'Other';
								trackProjectLink(data.item?.name ?? '', linkType, link.to);
							}}
						>
							<Button variant="default" size="lg" class="gap-2 font-semibold shadow-lg hover:scale-105 transition-transform">
								{#if link.to.includes('github.com')}
									<Icon icon="i-carbon-logo-github" className="text-xl" />
								{:else if link.to.includes('itch.io')}
									<Icon icon="i-simple-icons-itchdotio" className="text-xl" />
								{:else}
									<Icon icon="i-carbon-link" className="text-xl" />
								{/if}
								{link.label}
							</Button>
						</a>
					{/each}
				</div>
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
				<Muted>Screenshots</Muted>
				<div class="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each data.item.screenshots as img, index (index)}
						<ScreenshotCard item={img} />
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</BasePage>
