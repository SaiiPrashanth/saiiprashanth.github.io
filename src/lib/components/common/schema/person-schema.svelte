<script lang="ts">
	import BaseData from '$lib/data/base';
	
	const {
		name,
		jobTitle,
		description,
		url,
		image
	}: {
		name?: string;
		jobTitle?: string;
		description?: string;
		url?: string;
		image?: string;
	} = $props();

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: name || BaseData.fullName,
		jobTitle: jobTitle || 'Game Designer',
		description: description || 'Analytical Game Designer focused on systems design and game balance',
		url: url || 'https://saiiprashanth.github.io',
		image: image || 'https://saiiprashanth.github.io/Logo.png',
		sameAs: [
			'https://github.com/SaiiPrashanth',
			'https://www.linkedin.com/in/saiiprashanth/',
			'https://saiiprashanth.itch.io/',
			'https://www.artstation.com/saiiprashanth'
		]
	};
</script>

<svelte:head>
	<script type="application/ld+json">
		{JSON.stringify(personSchema)}
	</script>
</svelte:head>
