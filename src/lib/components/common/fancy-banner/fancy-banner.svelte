<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		img,
		class: className,
		style,
		children
	}: { img: string; class?: string; style?: string; children?: Snippet } = $props();
</script>

<div
	class={`relative row gradient-cover min-h-[200px] w-full px-4 py-8 text-center sm:min-h-[250px] md:min-h-[300px] md:px-10 lg:min-h-[350px] ${className}`}
>
	<img 
		src={img} 
		alt="" 
		class="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30"
		style={style || ''}
	/>
	<div class="p-x-2 flex size-full flex-1 flex-col items-center justify-center relative z-10">
		{@render children?.()}
	</div>
</div>

<style>
	.gradient-cover {
		--card-color: hsl(var(--card) / 1);
		background: var(--card-color);
	}
</style>
