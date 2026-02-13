<script lang="ts">
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<div class="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent overflow-hidden">
		<div class="h-full animate-loading bg-foreground/60"></div>
	</div>
{/if}

<style>
	@keyframes loading {
		0% {
			width: 0%;
			margin-left: 0%;
		}
		50% {
			width: 40%;
			margin-left: 30%;
		}
		100% {
			width: 100%;
			margin-left: 0%;
		}
	}

	.animate-loading {
		animation: loading 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
</style>
