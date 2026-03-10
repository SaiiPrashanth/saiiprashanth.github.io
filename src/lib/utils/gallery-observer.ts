import { getContext, setContext } from 'svelte';

const GALLERY_CTX = Symbol('gallery-observer');

export interface GalleryObserverEntry {
	onEnter: () => void;
	onLeave: () => void;
}

/**
 * Single shared IntersectionObserver for all gallery cards.
 * Created once in the gallery page, used by every card via Svelte context.
 */
export function createGalleryObserver() {
	const entries = new Map<Element, GalleryObserverEntry>();

	const observer = new IntersectionObserver(
		(ioEntries) => {
			for (const entry of ioEntries) {
				const callbacks = entries.get(entry.target);
				if (!callbacks) continue;
				if (entry.isIntersecting) {
					callbacks.onEnter();
				} else {
					callbacks.onLeave();
				}
			}
		},
		{ threshold: 0.01, rootMargin: '200px 0px' }
	);

	const ctx = {
		observe(el: Element, callbacks: GalleryObserverEntry) {
			entries.set(el, callbacks);
			observer.observe(el);
		},
		unobserve(el: Element) {
			entries.delete(el);
			observer.unobserve(el);
		},
		destroy() {
			observer.disconnect();
			entries.clear();
		}
	};

	setContext(GALLERY_CTX, ctx);
	return ctx;
}

export type GalleryObserver = ReturnType<typeof createGalleryObserver>;

export function getGalleryObserver(): GalleryObserver {
	return getContext(GALLERY_CTX);
}
