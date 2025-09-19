import GalleryData from '$lib/data/gallery';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = GalleryData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
