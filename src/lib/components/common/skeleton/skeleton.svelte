<script lang="ts">
	const { class: className = '', ...props }: { class?: string; [key: string]: any } = $props();
</script>

<div class="animate-pulse rounded-md bg-muted {className}" {...props}></div>

<style>
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.animate-pulse {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>
