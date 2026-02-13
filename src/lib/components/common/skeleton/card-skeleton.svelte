<script lang="ts">
	import Skeleton from '../skeleton/skeleton.svelte';
	import { Card, CardContent, CardHeader } from '../../ui/card';
</script>

<Card>
	<CardHeader class="flex w-full flex-col gap-4">
		<!-- Avatar skeleton -->
		<Skeleton class="h-14 w-14 rounded-full" />
		<!-- Title skeleton -->
		<div class="flex w-full flex-row items-center gap-1 min-h-[40px]">
			<Skeleton class="h-6 flex-1" />
		</div>
		<Skeleton class="h-[1px] w-full" />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<!-- Type skeleton -->
		<Skeleton class="h-4 w-32" />
		<!-- Duration skeleton -->
		<Skeleton class="h-4 w-24" />
		<!-- Description skeleton -->
		<Skeleton class="h-20 w-full" />
		<!-- Date badge skeleton -->
		<Skeleton class="h-6 w-20" />
	</CardContent>
</Card>
