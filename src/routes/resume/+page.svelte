<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';
</script>

<TitledPage title={ResumeData.title}>
	<a href={ResumeData.resume} class="mx-auto">
		<Button>Download</Button>
	</a>
	<iframe 
		src={`${ResumeData.resume}#view=FitH`} 
		class="w-full flex-1 min-h-[600px]" 
		title={ResumeData.title}
	></iframe>
</TitledPage>
