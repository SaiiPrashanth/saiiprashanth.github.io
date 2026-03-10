<script lang="ts">
	import { onMount } from 'svelte';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import GalleryCard from '$lib/components/gallery/gallery-card.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import GalleryData from '$lib/data/gallery';
	import { scrollState } from '$lib/utils/scroll-state.svelte';

	// Single scroll listener — updates shared state so all cards react together.
	onMount(() => {
		let timer: ReturnType<typeof setTimeout>;
		const onScroll = () => {
			scrollState.isScrolling = true;
			clearTimeout(timer);
			timer = setTimeout(() => { scrollState.isScrolling = false; }, 300);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			clearTimeout(timer);
			scrollState.isScrolling = false;
		};
	});

	interface CategoryFilter {
		slug: string;
		name: string;
		isSelected?: boolean;
	}

	let categoryFilters: Array<CategoryFilter> = $state([
		{ slug: 'game', name: 'Game' },
		{ slug: 'particle', name: 'Particle' },
		{ slug: 'shader', name: 'Shader' },
		{ slug: 'tool', name: 'Tool' },
		{ slug: 'rig', name: 'Rig' },
		{ slug: '2d', name: '2D Art' },
		{ slug: '3d', name: '3D Model' },
		{ slug: 'terrain', name: 'Terrain' },
		{ slug: 'ar', name: 'AR' },
		{ slug: 'ui', name: 'UI' }
	]);

	let search = $state('');
	let result = $derived(
		GalleryData.items
			.filter((item) => {
				const isFiltered =
					categoryFilters.every((filter) => !filter.isSelected) ||
					categoryFilters.some((filter) => filter.isSelected && filter.slug === item.category);

				const isSearched =
					search.trim().length === 0 ||
					item.name.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
					item.description.toLowerCase().includes(search.trim().toLowerCase()) ||
					item.tags.some((tag) => tag.toLowerCase().includes(search.trim().toLowerCase()));

				return isFiltered && isSearched;
			})
			.sort((a, b) => {
				const order = categoryFilters.map((f) => f.slug);
				return order.indexOf(a.category) - order.indexOf(b.category);
			})
	);

	const toggleSelected = (slug: string) => {
		categoryFilters = categoryFilters.map((it) => 
			it.slug === slug ? { ...it, isSelected: !it.isSelected } : it
		);
	};

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={GalleryData.title} {onSearch}>
	<div class="flex flex-1 flex-col gap-8">
		<div class="flex flex-row flex-wrap gap-2">
			{#each categoryFilters as category (category.slug)}
				<Toggle
					pressed={category.isSelected}
					onPressedChange={() => toggleSelected(category.slug)}
					variant="outline"
					size="sm"
					class="flex flex-row items-center gap-2 rounded-lg"
				>
					{#if category.isSelected}
						<Icon icon="i-carbon-close" />
					{/if}
					{category.name}
				</Toggle>
			{/each}
		</div>

		{#if result.length === 0}
			<EmptyResult />
		{:else}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each result as item (item.slug)}
					<GalleryCard {item} />
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>
